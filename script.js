import { switchMap } from "./data/switchMap.js";
import { floorPlans } from "./data/floorPlans.js";

const content = document.getElementById("content");
const summaryPill = document.getElementById("summaryPill");
const searchInput = document.getElementById("searchInput");
const hotspotLayer = document.getElementById("hotspotLayer");
const floorplanImage = document.getElementById("floorplanImage");
const floorDownstairsBtn = document.getElementById("floorDownstairsBtn");
const floorUpstairsBtn = document.getElementById("floorUpstairsBtn");
const debugToggleBtn = document.getElementById("debugToggleBtn");
const copyHotspotBtn = document.getElementById("copyHotspotBtn");
const debugPanel = document.getElementById("debugPanel");
const debugRoomName = document.getElementById("debugRoomName");
const debugCoords = document.getElementById("debugCoords");

let activeFloor = "downstairs";
let activeRoom = "Primary Bedroom";
let activeCircuit = null;
let searchTerm = "";
let debugMode = false;
let selectedHotspotRoom = null;

function normalize(value) {
    return String(value || "").toLowerCase().trim();
}

function getCurrentFloorPlan() {
    return floorPlans[activeFloor];
}

function getCurrentHotspots() {
    return getCurrentFloorPlan().hotspots;
}

function getRoomsForActiveFloor() {
    const floorRoomNames = new Set(getCurrentHotspots().map((item) => item.room));
    return switchMap.filter((room) => floorRoomNames.has(room.room));
}

function updateFloorToggleUI() {
    floorDownstairsBtn.classList.toggle("active", activeFloor === "downstairs");
    floorUpstairsBtn.classList.toggle("active", activeFloor === "upstairs");
}

function updateFloorImage() {
    const floorPlan = getCurrentFloorPlan();
    floorplanImage.src = floorPlan.image;
    floorplanImage.alt = floorPlan.alt;
}

function getFilteredRooms() {
    const baseRooms = getRoomsForActiveFloor();

    if (!searchTerm) return baseRooms;

    return baseRooms
        .map((room) => {
            const roomMatches =
                normalize(room.room).includes(searchTerm) ||
                normalize(room.note).includes(searchTerm);

            const matchingPanels = (room.panels || [])
                .map((panel) => {
                    const panelMatches = normalize(panel.label).includes(searchTerm);

                    const matchingToggles = panel.toggles.filter((toggle) => {
                        return [toggle.label, toggle.controls, toggle.details].some((field) =>
                            normalize(field).includes(searchTerm)
                        );
                    });

                    if (panelMatches) return panel;
                    if (matchingToggles.length) {
                        return { ...panel, toggles: matchingToggles };
                    }

                    return null;
                })
                .filter(Boolean);

            if (roomMatches) return room;
            if (matchingPanels.length) {
                return { ...room, panels: matchingPanels };
            }

            return null;
        })
        .filter(Boolean);
}

function renderHotspots(filteredRooms) {
    const visibleRooms = new Set(filteredRooms.map((room) => room.room));


    hotspotLayer.innerHTML = getCurrentHotspots()
        .map((hotspot) => {
            const isActive = hotspot.room === activeRoom;
            const isVisible = visibleRooms.has(hotspot.room);
            const isSelected = hotspot.room === selectedHotspotRoom;
            //const showLabel = hotspot.width > 10 && hotspot.height > 8; 
            const isSmall = hotspot.width < 10 || hotspot.height < 8;
            const roomHasActiveCircuit = activeCircuit && switchMap.some((room) =>
                room.room === hotspot.room &&
                (room.panels || []).some((panel) =>
                    (panel.toggles || []).some((toggle) => toggle.circuit === activeCircuit)
                )
            );
            
            return `
        <button
          class="room-hotspot ${isActive ? "active" : ""} ${isVisible ? "" : "hidden-by-filter"} ${isSelected ? "selected-for-edit" : ""} ${isSmall ? "small" : ""} ${roomHasActiveCircuit ? "active-circuit" : ""}"
          style="
            top: ${hotspot.top}%;
            left: ${hotspot.left}%;
            width: ${hotspot.width}%;
            height: ${hotspot.height}%;
          "
          data-room="${hotspot.room}"
          aria-label="${hotspot.room}"
          title="${hotspot.room}"
          ${isVisible ? "" : 'tabindex="-1"'}
        >
          <span class="room-hotspot-label">${hotspot.room}</span>
        </button>
      `;
        })
        .join("");

    hotspotLayer.querySelectorAll(".room-hotspot").forEach((button) => {
        if (button.classList.contains("hidden-by-filter")) return;

        button.addEventListener("click", () => {
            const roomName = button.dataset.room;
            selectedHotspotRoom = roomName;
            selectRoom(roomName);

            if (debugMode) {
                const hotspot = getSelectedHotspot();
                if (hotspot) {
                    console.log("Selected hotspot:", {
                        room: hotspot.room,
                        top: hotspot.top,
                        left: hotspot.left,
                        width: hotspot.width,
                        height: hotspot.height
                    });
                }
            }
        });
    });
}

function getAllToggles() {
    return switchMap.flatMap((room) =>
        (room.panels || []).flatMap((panel) =>
            (panel.toggles || []).map((toggle) => ({
                room: room.room,
                roomNote: room.note,
                panelLabel: panel.label,
                ...toggle
            }))
        )
    );
}

function getLinkedToggles(circuit, currentRoom, currentPanelLabel, currentToggleLabel) {
    if (!circuit) return [];

    return getAllToggles().filter((toggle) => {
        return (
            toggle.circuit === circuit &&
            !(
                toggle.room === currentRoom &&
                toggle.panelLabel === currentPanelLabel &&
                toggle.label === currentToggleLabel
            )
        );
    });
}

function setActiveCircuit(circuit) {
    activeCircuit = activeCircuit === circuit ? null : circuit;
    render();
}

function jumpToRoom(roomName, circuit = null) {
    const downstairsRooms = new Set(floorPlans.downstairs.hotspots.map((h) => h.room));
    const upstairsRooms = new Set(floorPlans.upstairs.hotspots.map((h) => h.room));

    if (downstairsRooms.has(roomName)) {
        activeFloor = "downstairs";
    } else if (upstairsRooms.has(roomName)) {
        activeFloor = "upstairs";
    }

    activeRoom = roomName;
    activeCircuit = circuit;
    render();
}

function renderRoomContent(room) {
    if (!room) {
        content.innerHTML = '<div class="empty-state">No matching switches found.</div>';
        summaryPill.textContent = "0 switches shown";
        return;
    }

    const panels = room.panels || [];
    const totalToggles = panels.reduce((sum, panel) => sum + panel.toggles.length, 0);

    const panelHtml = panels.map((panel) => {
        const paddles = panel.toggles.map((toggle) => {
            const isActiveCircuit = !!toggle.circuit && activeCircuit === toggle.circuit;

            return `
                <div class="paddle ${isActiveCircuit ? "active-circuit" : ""}" aria-hidden="true">
                <span class="paddle-label">${toggle.label}</span>
                </div>
            `;
        }).join("");

        const toggleDetails = panel.toggles.map((toggle) => {
            const linkedToggles = getLinkedToggles(
                toggle.circuit,
                room.room,
                panel.label,
                toggle.label
            );

            const isActiveCircuit = !!toggle.circuit && activeCircuit === toggle.circuit;

            const linkedHtml = linkedToggles.length
                ? `
          <div class="linked-toggles">
            <div class="linked-toggles-title">
              Also controlled from ${linkedToggles.length} other location${linkedToggles.length === 1 ? "" : "s"}
            </div>
            <div class="linked-toggle-list">
              ${linkedToggles.map((linked) => `
                <div class="linked-toggle-item">
                  <div class="linked-toggle-meta">
                    <strong>${linked.room}</strong> · ${linked.panelLabel} · ${linked.label}
                  </div>
                  <button
                    class="link-jump-button"
                    type="button"
                    data-jump-room="${linked.room}"
                    data-jump-circuit="${linked.circuit || ""}"
                  >
                    Jump to room
                  </button>
                </div>
              `).join("")}
            </div>
          </div>
        `
                : "";

            const circuitCount = getCircuitCount(toggle.circuit);
            const badge = circuitCount > 1
  ? `
    <button
      class="circuit-badge ${activeCircuit === toggle.circuit ? "active" : ""}"
      type="button"
      data-circuit="${toggle.circuit}"
      title="Show linked switches"
    >
      ${circuitCount === 2 ? "3-way" : "multi-way"}
    </button>
  `
  : "";

            return `
        <div class="panel-toggle-item ${isActiveCircuit ? "active-circuit" : ""}">
          <div class="toggle-header">
            <h4 class="toggle-title">
                ${toggle.label}: ${toggle.controls}
                ${badge}
            </h4>
            
          </div>
          <p>${toggle.details || ""}</p>
          ${isActiveCircuit ? linkedHtml : ""}
        </div>
      `;
        }).join("");

        return `
      <article class="switch-panel-card">
        <div class="switch-panel-header">
          <h3 class="switch-panel-title">${panel.label}</h3>
          <span class="switch-panel-count">${panel.toggles.length} switch${panel.toggles.length === 1 ? "" : "es"}</span>
        </div>

        <div class="paddle-strip">
          ${paddles}
        </div>

        <div class="panel-toggle-list">
          ${toggleDetails}
        </div>
      </article>
    `;
    }).join("");

    content.innerHTML = `
    <h2 class="room-title">${room.room}</h2>
    <p class="room-note">${room.note}</p>
    <div class="panel-grid">${panelHtml}</div>
    <div class="meta">${panels.length} panel${panels.length === 1 ? "" : "s"}, ${totalToggles} switch${totalToggles === 1 ? "" : "es"} shown</div>
  `;

    summaryPill.textContent = `${totalToggles} switch${totalToggles === 1 ? "" : "es"} shown`;

    content.querySelectorAll("[data-circuit]").forEach((button) => {
        button.addEventListener("click", () => {
            setActiveCircuit(button.dataset.circuit);
        });
    });

    content.querySelectorAll("[data-jump-room]").forEach((button) => {
        button.addEventListener("click", () => {
            jumpToRoom(button.dataset.jumpRoom, button.dataset.jumpCircuit || null);
        });
    });
}

function render() {
    const filteredRooms = getFilteredRooms();

    if (
        filteredRooms.length &&
        !filteredRooms.some((room) => room.room === activeRoom)
    ) {
        activeRoom = filteredRooms[0].room;
    }

    if (selectedHotspotRoom) {
        const stillExists = getCurrentHotspots().some((hotspot) => hotspot.room === selectedHotspotRoom);
        if (!stillExists) {
            selectedHotspotRoom = null;
        }
    }

    updateFloorToggleUI();
    updateFloorImage();
    renderHotspots(filteredRooms);
    updateDebugUI();

    const selectedRoom =
        filteredRooms.find((room) => room.room === activeRoom) ||
        filteredRooms[0] ||
        null;

    renderRoomContent(selectedRoom);
}

function selectRoom(roomName) {
    activeRoom = roomName;
    render();
}

function roundCoord(value) {
    return Math.round(value * 10) / 10;
}

function getSelectedHotspot() {
    return getCurrentHotspots().find((hotspot) => hotspot.room === selectedHotspotRoom) || null;
}

function getCircuitCount(circuit) {
    if (!circuit) return 0;

    return getAllToggles().filter(t => t.circuit === circuit).length;
}

function updateDebugUI() {
    debugToggleBtn.textContent = `Debug: ${debugMode ? "On" : "Off"}`;
    debugPanel.hidden = !debugMode;

    const selectedHotspot = getSelectedHotspot();

    copyHotspotBtn.disabled = !debugMode || !selectedHotspot;

    if (!debugMode) {
        return;
    }

    if (!selectedHotspot) {
        debugRoomName.textContent = "No hotspot selected";
        debugCoords.textContent = "Click a hotspot, then use arrow keys to move it. Hold Shift to resize.";
        return;
    }

    debugRoomName.textContent = selectedHotspot.room;
    debugCoords.textContent =
        `top: ${selectedHotspot.top}, left: ${selectedHotspot.left}, width: ${selectedHotspot.width}, height: ${selectedHotspot.height}`;
}

function copySelectedHotspotJson() {
    const hotspot = getSelectedHotspot();
    if (!hotspot) return;

    const json = `{ room: "${hotspot.room}", top: ${hotspot.top}, left: ${hotspot.left}, width: ${hotspot.width}, height: ${hotspot.height} }`;
    navigator.clipboard.writeText(json);
}

function clampHotspot(hotspot) {
    hotspot.width = Math.max(2, roundCoord(hotspot.width));
    hotspot.height = Math.max(2, roundCoord(hotspot.height));
    hotspot.top = roundCoord(Math.max(0, Math.min(100 - hotspot.height, hotspot.top)));
    hotspot.left = roundCoord(Math.max(0, Math.min(100 - hotspot.width, hotspot.left)));
}

floorDownstairsBtn.addEventListener("click", () => {
    activeFloor = "downstairs";
    render();
});

floorUpstairsBtn.addEventListener("click", () => {
    activeFloor = "upstairs";
    render();
});

searchInput.addEventListener("input", (event) => {
    searchTerm = normalize(event.target.value);
    render();
});

debugToggleBtn.addEventListener("click", () => {
    debugMode = !debugMode;

    if (!debugMode) {
        selectedHotspotRoom = null;
    }

    render();
});

copyHotspotBtn.addEventListener("click", async () => {
    copySelectedHotspotJson();
    copyHotspotBtn.textContent = "Copied!";
    setTimeout(() => {
        copyHotspotBtn.textContent = "Copy Selected JSON";
    }, 1000);
});

document.addEventListener("keydown", (event) => {
    if (!debugMode) return;

    const hotspot = getSelectedHotspot();
    if (!hotspot) return;

    const targetTag = document.activeElement?.tagName;
    if (targetTag === "INPUT" || targetTag === "TEXTAREA") return;

    const moveStep = 0.5;
    const resizeStep = 0.5;
    let handled = true;

    switch (event.key) {
        case "ArrowUp":
            if (event.shiftKey) {
                hotspot.height -= resizeStep;
            } else {
                hotspot.top -= moveStep;
            }
            break;
        case "ArrowDown":
            if (event.shiftKey) {
                hotspot.height += resizeStep;
            } else {
                hotspot.top += moveStep;
            }
            break;
        case "ArrowLeft":
            if (event.shiftKey) {
                hotspot.width -= resizeStep;
            } else {
                hotspot.left -= moveStep;
            }
            break;
        case "ArrowRight":
            if (event.shiftKey) {
                hotspot.width += resizeStep;
            } else {
                hotspot.left += moveStep;
            }
            break;
        default:
            handled = false;
    }

    if (!handled) return;

    event.preventDefault();
    clampHotspot(hotspot);
    render();
});

render();