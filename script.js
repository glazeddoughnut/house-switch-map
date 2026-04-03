const switchMap = [
  {
    room: "Primary Bedroom",
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
    room: "Dining Area",
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
    room: "Family Room",
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
    room: "Bedroom 1",
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
    room: "Storage",
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
    room: "Hall 1",
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
    room: "Hall 2",
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
    room: "Bedroom 2",
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
    room: "Bedroom 3",
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
      { room: "Storage", top: 18.0, left: 2.5, width: 18.0, height: 10.5 },
      { room: "Primary Bedroom", top: 5.5, left: 29.0, width: 21.0, height: 19.5 },
      { room: "Laundry", top: 33.5, left: 40.0, width: 5.5, height: 6.5 },
      { room: "Hall 1", top: 37.5, left: 44.0, width: 8.5, height: 7.0 },
      { room: "Hall 2", top: 50.0, left: 43.0, width: 9.0, height: 6.0 },
      { room: "Garage", top: 36.0, left: 2.5, width: 28.5, height: 37.0 },
      { room: "Bedroom 1", top: 60.0, left: 28.0, width: 12.0, height: 17.0 },
      { room: "Foyer", top: 58.0, left: 51.0, width: 10.0, height: 15.0 },

      { room: "Kitchen", top: 23.5, left: 56.0, width: 12.0, height: 12.0 },
      { room: "Dining Area", top: 23.5, left: 68.0, width: 12.0, height: 12.0 },
      { room: "Family Room", top: 43.0, left: 65.0, width: 13.0, height: 14.0 },
      { room: "Living Room", top: 58.0, left: 66.0, width: 14.0, height: 16.0 },
      { room: "Sunroom", top: 60.0, left: 80.0, width: 12.5, height: 14.0 },
      { room: "Screened Porch", top: 33.0, left: 80.5, width: 12.0, height: 25.0 }
    ]
  },

  upstairs: {
    image: "images/upstairs-floorplan.webp",
    alt: "Upstairs floor plan",
    hotspots: [
      { room: "Bedroom 2", top: 4.0, left: 36.0, width: 37.0, height: 22.0 },
      { room: "Upstairs Hall", top: 31.0, left: 24.0, width: 26.0, height: 17.0 },
      { room: "Bedroom 3", top: 53.0, left: 37.0, width: 31.0, height: 34.0 }
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

let activeFloor = "downstairs";
let activeRoom = "Primary Bedroom";
let searchTerm = "";

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
      const showLabel = hotspot.width > 10 && hotspot.height > 8;

      return `
        <button
          class="room-hotspot ${isActive ? "active" : ""} ${isVisible ? "" : "hidden-by-filter"}"
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
          ${showLabel ? `<span class="room-hotspot-label">${hotspot.room}</span>` : ""}
        </button>
      `;
    })
    .join("");

  hotspotLayer.querySelectorAll(".room-hotspot").forEach((button) => {
    if (button.classList.contains("hidden-by-filter")) return;

    button.addEventListener("click", () => {
      selectRoom(button.dataset.room);
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

  updateFloorToggleUI();
  updateFloorImage();
  renderHotspots(filteredRooms);

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

render();