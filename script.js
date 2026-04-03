const switchMap = [
    {
        room: "Master Bedroom",
        note: "Main bedroom lighting and switched outlets.",
        switches: [
            {
                label: "Left switch by hall door",
                controls: "Bedside outlet",
                details: "Controls the switched outlet on one side of the room."
            },
            {
                label: "Right switch by hall door",
                controls: "Ceiling fan light",
                details: "Light only. Fan speed uses pull chain or remote."
            }
        ]
    },
    {
        room: "Kitchen",
        note: "Lighting and switched outlets in the kitchen.",
        switches: [
            {
                label: "Left switch by garage door",
                controls: "Sink light",
                details: "Pendant or fixture over the sink."
            },
            {
                label: "Right switch by garage door",
                controls: "Under-cabinet lights",
                details: "All under-cabinet lighting on one circuit."
            }
        ]
    },
    {
        room: "Dining Room",
        note: "Dining lighting near the kitchen.",
        switches: [
            {
                label: "Dimmer by opening",
                controls: "Dining fixture",
                details: "Main light for the dining area."
            }
        ]
    },
    {
        room: "Fireplace Room",
        note: "Family room lighting and any switched outlets.",
        switches: [
            {
                label: "Left switch by entry",
                controls: "Ceiling fan light",
                details: "Light only, not the fan motor."
            },
            {
                label: "Right switch by entry",
                controls: "Switched outlet",
                details: "Outlet used for a lamp."
            }
        ]
    },
    {
        room: "Living Room",
        note: "Front living room switches.",
        switches: [
            {
                label: "Left switch by foyer",
                controls: "Can lights",
                details: "Main recessed lighting."
            },
            {
                label: "Right switch by foyer",
                controls: "Front lamp outlet",
                details: "Switched outlet for a floor lamp."
            }
        ]
    },
    {
        room: "Sunroom",
        note: "Sunroom lighting and fan controls.",
        switches: [
            {
                label: "Switch by door",
                controls: "Sunroom light",
                details: "Main light fixture in the sunroom."
            }
        ]
    },
    {
        room: "Screened Porch",
        note: "Exterior-adjacent lights and fan controls.",
        switches: [
            {
                label: "Left switch by interior door",
                controls: "Porch light",
                details: "Main screened porch light."
            },
            {
                label: "Right switch by interior door",
                controls: "Porch fan",
                details: "Fan or fan light, depending on fixture."
            }
        ]
    },
    {
        room: "Garage",
        note: "Garage and utility-adjacent controls.",
        switches: [
            {
                label: "Switch by interior door",
                controls: "Garage ceiling lights",
                details: "Turns on both main garage fixtures."
            }
        ]
    },
    {
        room: "Foyer",
        note: "Entry and stair-adjacent lighting.",
        switches: [
            {
                label: "Left switch by front door",
                controls: "Foyer light",
                details: "Main foyer fixture."
            }
        ]
    },
    {
        room: "Guest Bedroom",
        note: "Downstairs bedroom.",
        switches: [
            {
                label: "Switch by door",
                controls: "Ceiling light",
                details: "Main light fixture."
            }
        ]
    },
    {
        room: "Laundry",
        note: "Laundry room light and utility controls.",
        switches: [
            {
                label: "Switch by door",
                controls: "Laundry light",
                details: "Ceiling fixture in the laundry room."
            }
        ]
    },
    {
        room: "Shelf Room",
        note: "Storage room lighting.",
        switches: [
            {
                label: "Switch by door",
                controls: "Storage light",
                details: "Main light for the storage room."
            }
        ]
    },
    {
        room: "Mud Room",
        note: "Hall near laundry and garage entry.",
        switches: [
            {
                label: "3-way switch",
                controls: "Hall light",
                details: "Paired with another switch in the hall."
            }
        ]
    },
    {
        room: "Hall",
        note: "Interior hall near foyer and bath.",
        switches: [
            {
                label: "3-way switch",
                controls: "Hall light",
                details: "Paired with another hall switch."
            }
        ]
    },
    {
        room: "Claire's Bedroom",
        note: "Upstairs bedroom.",
        switches: [
            {
                label: "Switch by door",
                controls: "Ceiling light",
                details: "Main bedroom fixture."
            }
        ]
    },
    {
        room: "Upstairs Hall",
        note: "Second-floor hall and stair landing.",
        switches: [
            {
                label: "Switch near stairs",
                controls: "Hall light",
                details: "Main upstairs hall light."
            }
        ]
    },
    {
        room: "Upstairs Bath",
        note: "Second-floor bathroom.",
        switches: [
            {
                label: "Switch near door",
                controls: "Bathroom light",
                details: "Main upstairs bathroom light."
            }
        ]
    },
    {
        room: "Penny's Bedroom",
        note: "Larger upstairs bedroom.",
        switches: [
            {
                label: "Switch by door",
                controls: "Ceiling light",
                details: "Main bedroom fixture."
            }
        ]
    }
];

const floorPlans = {
    downstairs: {
        image: "images/main-floorplan.webp",
        alt: "Main floor plan",
        hotspots: [
            { room: "Shelf Room", top: 23, left: 13.5, width: 16, height: 10.5 },
            { room: "Master Bedroom", top: 5.5, left: 37, width: 12, height: 27.5 },
            { room: "Laundry", top: 35, left: 40, width: 5, height: 7 },
            { room: "Mud Room", top: 35.5, left: 45, width: 4.5, height: 12.5 },
            { room: "Hall", top: 42.5, left: 50.5, width: 3.5, height: 19 },
            { room: "Garage", top: 36, left: 13.5, width: 25.5, height: 35.5 },
            { room: "Guest Bedroom", top: 62, left: 37.5, width: 12, height: 17.5 },
            { room: "Foyer", top: 62.5, left: 50, width: 9, height: 17 },

            { room: "Kitchen", top: 23.5, left: 50.5, width: 15, height: 17 },
            { room: "Dining Room", top: 23.5, left: 66, width: 9, height: 17 },
            { room: "Fireplace Room", top: 42.5, left: 60, width: 15, height: 16 },
            { room: "Living Room", top: 60.5, left: 60, width: 15, height: 21.5 },
            { room: "Sunroom", top: 61.5, left: 76.5, width: 10, height: 20 },
            { room: "Screened Porch", top: 23.5, left: 76.5, width: 10, height: 36 }
        ]
    },

    upstairs: {
        image: "images/upstairs-floorplan.webp",
        alt: "Upstairs floor plan",
        hotspots: [
            { room: "Claire's Bedroom", top: 4, left: 45, width: 20, height: 19.5 },
            { room: "Upstairs Hall", top: 23, left: 35.5, width: 15, height: 11.5 },
            { room: "Upstairs Bath", top: 25.5, left: 51.5, width: 10.5, height: 18.5 },
            { room: "Penny's Bedroom", top: 46, left: 45.5, width: 19, height: 35.5 }
        ]
    }
};

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

            const matchingSwitches = room.switches.filter((sw) => {
                return [sw.label, sw.controls, sw.details].some((field) =>
                    normalize(field).includes(searchTerm)
                );
            });

            if (roomMatches) return room;
            if (matchingSwitches.length) {
                return { ...room, switches: matchingSwitches };
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

            return `
        <button
          class="room-hotspot ${isActive ? "active" : ""} ${isVisible ? "" : "hidden-by-filter"} ${isSelected ? "selected-for-edit" : ""} ${isSmall ? "small" : ""}"
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

function renderRoomContent(room) {
    if (!room) {
        content.innerHTML = '<div class="empty-state">No matching switches found.</div>';
        summaryPill.textContent = "0 switches shown";
        return;
    }

    const cards = room.switches
        .map((sw) => {
            return `
        <article class="switch-card">
          <div class="switch-label">${sw.label}</div>
          <h3>${sw.controls}</h3>
          <p>${sw.details}</p>
        </article>
      `;
        })
        .join("");

    content.innerHTML = `
    <h2 class="room-title">${room.room}</h2>
    <p class="room-note">${room.note}</p>
    <div class="switch-grid">${cards}</div>
    <div class="meta">${room.switches.length} switch${room.switches.length === 1 ? "" : "es"} shown</div>
  `;

    summaryPill.textContent = `${room.switches.length} switch${room.switches.length === 1 ? "" : "es"} shown`;
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