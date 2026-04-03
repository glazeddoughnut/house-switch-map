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
            details: "Motion-detector light. Not currently working."
          },
          {
            label: "Middle",
            controls: "Overhead can lights",
            details: "Also Alexa-controllable as 'Bedroom Lights'."
          },
          {
            label: "Right",
            controls: "Switched outlet in soffet",
            details: "Outlet used for ice melt. Outlet works, but ice melt not currently working."
          }
        ]
      },
      {
        label: "In closet",
        toggles: [
          {
            label: "1",
            controls: "Ceiling fan light",
            details: "Light only."
          },
          {
            label: "2",
            controls: "Ceiling fan blades",
            details: "Blades on/off. Fan speed uses pull chain."
          },
          {
            label: "3",
            controls: "Switched outlet over bathroom",
            details: "Outlet used for the snail lamp."
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
            details: "Controls the vanity light."
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
            details: "Light inside the shower."
          }
        ]
      }
    ]
  },
  {
    room: "Kitchen",
    note: "Lighting and switched outlets in the kitchen.",
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
          },
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
          },
        ]
      },
      {
        label: "Left of sink",
        toggles: [
          {
            label: "Single",
            controls: "Garbage disposal",
            details: "Controls the garbage disposal."
          }
        ]
      },
      {
        label: "Right of sink",
        toggles: [
          {
            label: "Single",
            controls: "Light over sink",
            details: "Controls the light over the sink."
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
            details: "Light and fan motor. Fan speed uses pull chain."
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
            details: "Light and fan motor. Fan speed uses pull chain."
          }
        ]
      },
      {
        label: "By sunroom",
        toggles: [
          {
            label: "Left",
            controls: "Dead switch",
            details: "Currently not connected to anything."
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
            details: "Overhead can lights in the sunroom."
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
    panels: [
      // {
      //   label: "None",
      //   toggles: [
      //     {
      //       label: "None",
      //       controls: "",
      //       details: ""
      //     }
      //   ]
      // }
    ]
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
            details: ""
          },
          {
            label: "Middle",
            controls: "??",
            details: ""
          },
          {
            label: "Right",
            controls: "??",
            details: ""
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
        label: "By front door",
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
            details: "Currently not connected to anything."
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
    room: "Guest Bedroom",
    note: "Downstairs bedroom.",
    panels: [
      {
        label: "By door",
        toggles: [
          {
            label: "Single",
            controls: "Ceiling light",
            details: "Main light fixture."
          }
        ]
      }
    ]
  },
  // {
  //   room: "Laundry",
  //   note: "Laundry room light and utility controls.",
  //   panels: [
  //     {
  //       label: "By door",
  //       toggles: [
  //         {
  //           label: "Single",
  //           controls: "Laundry light",
  //           details: "Ceiling fixture in the laundry room."
  //         }
  //       ]
  //     }
  //   ]
  // },
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
            details: "Main light for the shelf room."
          }
        ]
      }
    ]
  },
  {
    room: "Mud Room",
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
            details: "Currently not connected to anything."
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
            details: "Overhead here"
          },
          {
            label: "Right",
            controls: "Bathroom light",
            details: "Main light in the bathroom."
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
            details: "Main bedroom fixture."
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
            details: "Heat lamp."
          },
          {
            label: "2",
            controls: "Dead switch",
            details: "Currently not connected to anything."
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
        label: "Inside main part of room",
        toggles: [
          {
            label: "Single",
            controls: "Ceiling fan and light",
            details: "Main bedroom fixture."
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
      }
    ]
  }
];
