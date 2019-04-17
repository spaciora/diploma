var views = [
   {
      name: "Hall1", //вход
      texture: "img/hall1.jpg",
      cameraTarget: { "x": 0.1, "y": 0, "z": -0.2 },
      upAngle: Math.PI * 0.66, //чем меньше, тем меньше угол (max)
      downAngle: Math.PI * 0.34, //чем больше, тем меньше угол (min)
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "HallReception",
               rotation: 0.9,
               coords: { "x": -0.5, "y": -0.7, "z": 2 }
            },

            {
               type: "info",
               texture: "img/icons/info.png",
               data: "info/HallReceptionInfo.txt",
               rotation: 0.6,
               coords: { "x": -2, "y": 0, "z": -1 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall2",
               rotation: 0.08,
               coords: { "x": 0, "y": -0.6, "z": -2.2 }
            }
         ]
   },

   {
      name: "Conf",
      texture: "img/conf.jpg",
      cameraTarget: { "x": 0.1, "y": 0, "z": -0.2 },
      upAngle: Math.PI * 0.66,
      downAngle: Math.PI * 0.34,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall3",
               rotation: 0.9,
               coords: { "x": -0.7, "y": -0.5, "z": 2 }
            },

            {
               type: "info",
               texture: "img/icons/info.png",
               data: "info/HallReceptionInfo.txt",
               rotation: 0.6,
               coords: { "x": -2, "y": 0, "z": -1 }
            }
         ]
   },

   {
      name: "HallReception",
      texture: "img/hallreception.jpg",
      cameraTarget: { "x": -0.01, "y": 0, "z": 0.01 },
      upAngle: Math.PI * 0.55,
      downAngle: Math.PI * 0.45,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall1",
               rotation: 0.9,
               coords: { "x": -0.9, "y": -0.5, "z": 2 }
            }
         ]
   },

   {
      name: "Hall2", //холлIQ
      texture: "img/hall2.jpg",
      cameraTarget: { "x": 0.1, "y": 0, "z": -0.2 },
      upAngle: Math.PI * 0.53,
      downAngle: Math.PI * 0.47,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall1",
               rotation: 0.3,
               coords: { "x": -1.5, "y": -0.5, "z": -1.5}
            },
         ]
   },

   { name: "Hall3", //холлЗДЛ
      texture: "img/hall3.jpg",
      cameraTarget: { "x": 0.1, "y": 0, "z": -0.2 },
      upAngle: Math.PI * 0.66,
      downAngle: Math.PI * 0.34,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall2",
               rotation: 0.9,
               coords: { "x": -0.5, "y": -0.7, "z": 2 }
            },
         ]}
];

var panelIcons = [
   {
      name: "Plus",
      texture: "img/icons/plus.png",
      data: "someData",
      coords: { "x": -0.3, "y": 0, "z": 0 }
   },

   {
      name: "Minus",
      texture: "img/icons/minus.png",
      data: "someData",
      coords: { "x": -0.2, "y": 0, "z": 0 }
   },

   {
      name: "Left",
      texture: "img/icons/left.png",
      data: "someData",
      coords: { "x": -0.1, "y": 0, "z": 0 }
   },
   
   {
      name: "Right",
      texture: "img/icons/right.png",
      data: "someData",
      coords: { "x": 0, "y": 0, "z": 0 }
   },

   {
      name: "Up",
      texture: "img/icons/up.png",
      data: "someData",
      coords: { "x": 0.1, "y": 0, "z": 0 }
   },

   {
      name: "Down",
      texture: "img/icons/down.png",
      data: "someData",
      coords: { "x": 0.2, "y": 0, "z": 0 }
   },

   {
      name: "FullScreen",
      texture: "img/icons/fullscreen.png",
      data: "someData",
      coords: { "x": 0.3, "y": 0, "z": 0 }
   },
];