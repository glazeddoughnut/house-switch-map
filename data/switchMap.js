export const switchMap = [
  {
    room: "Master Bedroom",
    note: "Main bedroom lighting and switched outlets.",
    panels: [
      {
        label: "By slider",
        toggles: [
          {
            label: "Left",
            controls: "Flood light",
            details: "Motion-detector light. Not currently working.",
            circuit: "master-bedroom-flood-light"
          },
          {
            label: "Middle",
            controls: "Overhead can lights",
            details: "Also Alexa-controllable as 'Bedroom Lights'.",
            circuit: "master-bedroom-can-lights"
          },
          {
            label: "Right",
            controls: "Switched outlet in soffet",
            details: "Outlet used for ice melt. Outlet works, but ice melt not currently working.",
            circuit: "master-bedroom-soffet-outlet"
          }
        ]
      },
      {
        label: "In closet",
        toggles: [
          {
            label: "1",
            controls: "Ceiling fan light",
            details: "Light only.",
            circuit: "master-bedroom-ceiling-fan-light"
          },
          {
            label: "2",
            controls: "Ceiling fan blades",
            details: "Blades on/off. Fan speed uses pull chain.",
            circuit: "master-bedroom-ceiling-fan-motor"
          },
          {
            label: "3",
            controls: "Switched outlet over bathroom",
            details: "Outlet used for the snail lamp.",
            circuit: "master-bedroom-bathroom-overhead-outlet"
          },
          {
            label: "4",
            controls: "Bathroom exhaust fan",
            details: "Controls the exhaust fan.",
            circuit: "master-bath-fan"
          }
        ]
      }
    ]
  },
  {
    room: "Master Bath",
    note: "Main bathroom lighting.",
    panels: [
      {
        label: "Inside bathroom, by door",
        toggles: [
          {
            label: "Left",
            controls: "Vanity light",
            details: "Controls the vanity light.",
            circuit: "master-bath-vanity-light"
          },
          {
            label: "Middle",
            controls: "Exhaust fan",
            details: "Controls the exhaust fan.",
            circuit: "master-bath-fan"
          },
          {
            label: "Right",
            controls: "Shower light",
            details: "Light inside the shower.",
            circuit: "master-bath-shower-light"
          }
        ]
      }
    ]
  },
  {
    room: "Kitchen",
    note: "Lighting in the kitchen.",
    panels: [
      {
        label: "By mud room",
        toggles: [
          {
            label: "Left",
            controls: "Mud room",
            details: "Overhead can lights.",
            circuit: "mud-room-lights"
          },
          {
            label: "Right",
            controls: "Kitchen can lights",
            details: "Overhead can lights.",
            circuit: "kitchen-can-lights"
          }
        ]
      },
      {
        label: "Island",
        toggles: [
          {
            label: "Left",
            controls: "Kitchen can lights",
            details: "Overhead can lights.",
            circuit: "kitchen-can-lights"
          },
          {
            label: "Right",
            controls: "Dining room lights",
            details: "Light over table. Also Alexa-controllable as 'Dining Room Light'.",
            circuit: "dining-room-lights"
          }
        ]
      },
      {
        label: "Left of sink",
        toggles: [
          {
            label: "Single",
            controls: "Garbage disposal",
            details: "Controls the garbage disposal.",
            circuit: "kitchen-garbage-disposal"
          }
        ]
      },
      {
        label: "Right of sink",
        toggles: [
          {
            label: "Single",
            controls: "Light over sink",
            details: "Controls the light over the sink.",
            circuit: "kitchen-sink-light"
          }
        ]
      }
    ]
  },
  {
    room: "Dining Room",
    note: "Dining area near the kitchen.",
    panels: [
      {
        label: "Between slider and porch windows",
        toggles: [
          {
            label: "Left",
            controls: "Under porch lights towards the Dell",
            details: "Main light for the dining area.",
            circuit: "dell-flood-lights"
          },
          {
            label: "Middle",
            controls: "Back flood lights",
            details: "Exterior flood lights towards the river.",
            circuit: "river-flood-lights"
          },
          {
            label: "Right",
            controls: "Porch light",
            details: "Overhead light in the screened porch.",
            circuit: "screened-porch-light"
          }
        ]
      }
    ]
  },
  {
    room: "Fireplace Room",
    note: "Fireplace room lighting.",
    panels: [
      {
        label: "By bar",
        toggles: [
          {
            label: "Single",
            controls: "Ceiling fan light",
            details: "Light and fan motor. Fan speed uses pull chain.",
            circuit: "fireplace-room-ceiling-fan-light"
          }
        ]
      }
    ]
  },
  {
    room: "Living Room",
    note: "Front living room switches.",
    panels: [
      {
        label: "Behind TV",
        toggles: [
          {
            label: "Single",
            controls: "Ceiling fan light",
            details: "Light and fan motor. Fan speed uses pull chain.",
            circuit: "living-room-ceiling-fan-light"
          }
        ]
      },
      {
        label: "By sunroom",
        toggles: [
          {
            label: "Left",
            controls: "Dead switch",
            details: "Currently not connected to anything.",
            circuit: "living-room-dead-switch-by-sunroom-left"
          },
          {
            label: "Middle",
            controls: "Switched outlet",
            details: "Computer desk is plugged into this outlet.",
            circuit: "sunroom-desk-outlet"
          },
          {
            label: "Right",
            controls: "Sunroom",
            details: "Overhead can lights in the sunroom.",
            circuit: "sunroom-can-lights"
          }
        ]
      }
    ]
  },
  {
    room: "Sunroom",
    note: "",
    panels: [
      {
        label: "By porch door",
        toggles: [
          {
            label: "Left",
            controls: "Switched outlet",
            details: "Computer desk is plugged into this outlet.",
            circuit: "sunroom-desk-outlet"
          },
          {
            label: "Right",
            controls: "Porch light",
            details: "Overhead light in the screened porch.",
            circuit: "screened-porch-light"
          }
        ]
      }
    ]
  },
  {
    room: "Screened Porch",
    note: "Fan is by pull chain only.",
    panels: []
  },
  {
    room: "Garage",
    note: "Garage.",
    panels: [
      {
        label: "By pedestrian door",
        toggles: [
          {
            label: "Left",
            controls: "??",
            details: "",
            circuit: "garage-unknown-left-by-pedestrian-door"
          },
          {
            label: "Middle",
            controls: "??",
            details: "",
            circuit: "garage-unknown-middle-by-pedestrian-door"
          },
          {
            label: "Right",
            controls: "??",
            details: "",
            circuit: "garage-unknown-right-by-pedestrian-door"
          }
        ]
      }
    ]
  },
  {
    room: "Foyer",
    note: "Entry inside front door.",
    panels: [
      {
        label: "Single by front closet",
        toggles: [
          {
            label: "Single",
            controls: "Hall closet",
            details: "Hall closet light.",
            circuit: "hall-closet-light"
          }
        ]
      },
      {
        label: "Triple by front door",
        toggles: [
          {
            label: "Left",
            controls: "Front flood lights",
            details: "Exterior flood lights on the front of the house.",
            circuit: "front-flood-lights"
          },
          {
            label: "Middle",
            controls: "Front porch",
            details: "Front porch light. Also Alexa-controllable as 'Front Porch Light'. Turns on automatically when IFTTT sees notification from Life360 that says 'arrived at Red Oaks'.",
            circuit: "front-porch-light"
          },
          {
            label: "Right",
            controls: "Foyer",
            details: "",
            circuit: "foyer-light"
          }
        ]
      },
      {
        label: "By stairs",
        toggles: [
          {
            label: "Left",
            controls: "Stairs light",
            details: "Main stairs and hall light.",
            circuit: "stairs-and-hall-light"
          },
          {
            label: "Middle",
            controls: "Dead switch",
            details: "Currently not connected to anything.",
            circuit: "foyer-dead-switch-by-stairs-middle"
          },
          {
            label: "Right",
            controls: "Foyer",
            details: "",
            circuit: "foyer-light"
          }
        ]
      }
    ]
  },
  {
    room: "Guest Bath",
    note: "Downstairs bathroom.",
    panels: [
      {
        label: "To the right over counter",
        toggles: [
          {
            label: "Left",
            controls: "Exhaust fan",
            details: "",
            circuit: "guest-bath-exhaust-fan"
          },
          {
            label: "Middle",
            controls: "Heat lamp",
            details: "",
            circuit: "guest-bath-heat-lamp"
          },
          {
            label: "Right",
            controls: "Vanity light",
            details: "",
            circuit: "guest-bath-vanity-light"
          }
        ]
      }
    ]
  },
  {
    room: "Guest Bedroom",
    note: "Downstairs bedroom.",
    panels: [
      {
        label: "By door",
        toggles: [
          {
            label: "Single",
            controls: "Ceiling light",
            details: "Main light fixture.",
            circuit: "guest-bedroom-ceiling-light"
          }
        ]
      },
      {
        label: "By closet",
        toggles: [
          {
            label: "Single",
            controls: "Closet light",
            details: "Light for the closet.",
            circuit: "guest-bedroom-closet-light"
          }
        ]
      }
    ]
  },
  {
    room: "Shelf Room",
    note: "Shelf room lighting.",
    panels: [
      {
        label: "By door",
        toggles: [
          {
            label: "Single",
            controls: "Light",
            details: "Main light for the shelf room.",
            circuit: "shelf-room-light"
          }
        ]
      }
    ]
  },
  {
    room: "Mud Room and Laundry",
    note: "Hall near laundry and garage entry.",
    panels: [
      {
        label: "By garage door",
        toggles: [
          {
            label: "Left",
            controls: "Mud room",
            details: "Overhead can lights.",
            circuit: "mud-room-lights"
          },
          {
            label: "Middle",
            controls: "Garage lights",
            details: "Garage lights.",
            circuit: "garage-lights"
          },
          {
            label: "Right",
            controls: "Garage exterior flood light",
            details: "Motion-detector flood light outside the garage.",
            circuit: "garage-exterior-flood-light"
          }
        ]
      },
      {
        label: "By laundry",
        toggles: [
          {
            label: "Left",
            controls: "Dead switch",
            details: "Currently not connected to anything.",
            circuit: "mud-room-laundry-dead-switch-left"
          },
          {
            label: "Right",
            controls: "Laundry",
            details: "Laundry lights.",
            circuit: "laundry-light"
          }
        ]
      }
    ]
  },
  {
    room: "Hall",
    note: "Interior hall near foyer and bath.",
    panels: [
      {
        label: "Near crawlspace door",
        toggles: [
          {
            label: "Single",
            controls: "Hall light",
            details: "",
            circuit: "hall-light"
          }
        ]
      },
      {
        label: "Near bathroom hall",
        toggles: [
          {
            label: "Left",
            controls: "Foyer light",
            details: "",
            circuit: "foyer-light"
          },
          {
            label: "Right",
            controls: "Hall light",
            details: "",
            circuit: "hall-light"
          }
        ]
      }
    ]
  },
  {
    room: "Bathroom Hall",
    note: "Hall between guest bedroom and bathroom.",
    panels: [
      {
        label: "On wall",
        toggles: [
          {
            label: "Left",
            controls: "Hall light",
            details: "Overhead here",
            circuit: "bathroom-hall-light"
          },
          {
            label: "Right",
            controls: "Bathroom light",
            details: "First light in the bathroom, near closet.",
            circuit: "guest-bath-bathroom-light"
          }
        ]
      }
    ]
  },
  {
    room: "Claire's Bedroom",
    note: "Upstairs bedroom.",
    panels: [
      {
        label: "By door",
        toggles: [
          {
            label: "Single",
            controls: "Ceiling light",
            details: "Main bedroom fixture.",
            circuit: "claires-bedroom-ceiling-light"
          }
        ]
      },
      {
        label: "By window",
        toggles: [
          {
            label: "Single",
            controls: "Back flood lights",
            details: "Exterior flood lights towards the river.",
            circuit: "river-flood-lights"
          }
        ]
      },
      {
        label: "By closet",
        toggles: [
          {
            label: "Single",
            controls: "Closet light",
            details: "Light for the closet.",
            circuit: "claire-closet-light"
          }
        ]
      }
    ]
  },
  {
    room: "Upstairs Hall",
    note: "Second-floor hall and stair landing.",
    panels: [
      {
        label: "Near stairs",
        toggles: [
          {
            label: "Single",
            controls: "Stairs light",
            details: "Main stairs and hall light.",
            circuit: "stairs-and-hall-light"
          }
        ]
      },
      {
        label: "Near bathroom",
        toggles: [
          {
            label: "Single",
            controls: "Stairs light",
            details: "Main stairs and hall light.",
            circuit: "stairs-and-hall-light"
          }
        ]
      }
    ]
  },
  {
    room: "Upstairs Bath",
    note: "Second-floor bathroom.",
    panels: [
      {
        label: "Near Penny's door",
        toggles: [
          {
            label: "Left",
            controls: "Vanity light",
            details: "",
            circuit: "upstairs-vanity-light"
          },
          {
            label: "Right",
            controls: "Overhead light",
            details: "",
            circuit: "upstairs-overhead-light"
          }
        ]
      },
      {
        label: "Near hall door",
        toggles: [
          {
            label: "1",
            controls: "Heat lamp",
            details: "Heat lamp.",
            circuit: "upstairs-bath-heat-lamp"
          },
          {
            label: "2",
            controls: "Dead switch",
            details: "Currently not connected to anything.",
            circuit: "upstairs-bath-dead-switch-2"
          },
          {
            label: "3",
            controls: "Vanity light",
            details: "",
            circuit: "upstairs-vanity-light"
          },
          {
            label: "4",
            controls: "Overhead light",
            details: "",
            circuit: "upstairs-overhead-light"
          }
        ]
      }
    ]
  },
  {
    room: "Penny's Bedroom",
    note: "Larger upstairs bedroom.",
    panels: [
      {
        label: "Inside first entry",
        toggles: [
          {
            label: "Left",
            controls: "Overhead here",
            details: "Overhead light in first entry by linen closet.",
            circuit: "pennys-bedroom-entry-overhead-light"
          },
          {
            label: "Right",
            controls: "Dead switch",
            details: "Currently not connected to anything.",
            circuit: "pennys-bedroom-entry-dead-switch-right"
          }
        ]
      },
      {
        label: "Inside main part of room",
        toggles: [
          {
            label: "Single",
            controls: "Ceiling fan and light",
            details: "Main bedroom fixture.",
            circuit: "pennys-bedroom-ceiling-fan-light"
          }
        ]
      },
      {
        label: "By window",
        toggles: [
          {
            label: "Single",
            controls: "Front flood lights",
            details: "Exterior flood lights on the front of the house.",
            circuit: "front-flood-lights"
          }
        ]
      },
      {
        label: "Right of bathroom door",
        toggles: [
          {
            label: "Single",
            controls: "Dead switch",
            details: "Currently not connected to anything.",
            circuit: "pennys-bedroom-bathroom-door-dead-switch"
          }
        ]
      },
      {
        label: "Right on closet wall",
        toggles: [
          {
            label: "Single",
            controls: "Closet light",
            details: "Light for right side of closet.",
            circuit: "pennys-bedroom-right-closet-light"
          }
        ]
      },
      {
        label: "Left on closet wall",
        toggles: [
          {
            label: "Single",
            controls: "Closet light",
            details: "Light for left side of closet. Currently missing a bulb.",
            circuit: "pennys-bedroom-left-closet-light"
          }
        ]
      }
    ]
  }
];