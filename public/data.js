var views = [
   { //Hall1
      name: "Hall1", //вход
      texture: "img/hall1.jpg",
      cameraTarget: { "x": 0.1, "y": 0, "z": -0.2 },
      upAngle:  0.63, //чем меньше, тем меньше угол (max)
      downAngle:  0.37, //чем больше, тем меньше угол (min)
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "HallReception",
               rotation: 0.9,
               coords: { "x": -2.8, "y": -2.7, "z": 8.5 }
            },

            {
               type: "info",
               texture: "img/icons/info.png",
               data: "info/HallReceptionInfo.txt",
               rotation: 0.9,
               coords: { "x": 1, "y": 0, "z": 7 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall2",
               rotation: 0.08,
               coords: { "x": -0.5, "y": -2.4, "z": -8.2 }
            }
         ]
   },

   { //Conf
      name: "Conf",
      texture: "img/conf.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0.1 },
      upAngle:  0.6,
      downAngle:  0.4,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall3",
               rotation: 0.6,
               coords: { "x": -8, "y": -1.5, "z": 0.9 }
            },

            {
               type: "info",
               texture: "img/icons/info.png",
               data: "info/HallReceptionInfo.txt",
               rotation: 0.9,
               coords: { "x": -0.7, "y": 0, "z": 7 }
            }
         ]
   },

   { //HallReception
      name: "HallReception",
      texture: "img/hallreception.jpg",
      cameraTarget: { "x": -0.01, "y": 0, "z": 0.01 },
      upAngle:  0.55,
      downAngle:  0.45,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall1",
               rotation: 0.9,
               coords: { "x": -3.5, "y": -2, "z": 7.5 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall4",
               rotation: -0.5,
               coords: { "x": 8.5, "y": -2.2, "z": -0.8 }
            },
         ]
   },

   { //HallIQ
      name: "Hall2", //холлIQ
      texture: "img/hall2.jpg",
      cameraTarget: { "x": -0.3, "y": 0, "z": -0.2 },
      upAngle:  0.525,
      downAngle:  0.49,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall1",
               rotation: -1.8,
               coords: { "x": -6, "y": -2.2, "z": -5.5 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall3",
               rotation: -0.28,
               coords: { "x": 6.2, "y": -2.1, "z": -4 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ1",
               rotation: 1.3,
               coords: { "x": 7.3, "y": -2.2, "z": 5 }
            },
         ]
   },

   { //HallODL
      name: "Hall3", //холлЗДЛ
      texture: "img/hall3.jpg",
      cameraTarget: { "x": -0.01, "y": 0, "z": 0.01 },
      upAngle:  0.535,
      downAngle:  0.465,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall2",
               rotation: 0.8,
               coords: { "x": -5.3, "y": -3.5, "z": 6 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL1",
               rotation: -0.4,
               coords: { "x": 7.5, "y": -2.5, "z": -3.2 }
            },
         ]
   },

   { //ODL1
      name: "ODL1", //ЗДЛ1
      texture: "img/odl1.jpg",
      cameraTarget: { "x": 0, "y": 0, "z": -0.1 },
      upAngle:  0.56,
      downAngle:  0.437,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL2",
               rotation: -0.9,
               coords: { "x": 1.5, "y": -3.5, "z": 7 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall3",
               rotation: 0,
               coords: { "x": 0, "y": -3.5, "z": -7 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL5",
               rotation: 0.8,
               coords: { "x": -5, "y": -1.5, "z": 7 }
            },
         ]
   },

   { //ODL2
      name: "ODL2", //ЗДЛ2
      texture: "img/odl2.jpg",
      cameraTarget: { "x": 0, "y": 0, "z": 0.1 },
      upAngle:  0.58,
      downAngle:  0.42,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL1",
               rotation: 0.7,
               coords: { "x": -7, "y": -5, "z": 4.5 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL3",
               rotation: 0.3,
               coords: { "x": -6, "y": -4, "z": -6 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL4",
               rotation: -0.25,
               coords: { "x": 5, "y": -4, "z": -6 }
            },
         ]
   },

   { //ODL3
      name: "ODL3", //ЗДЛ3
      texture: "img/odl3.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0 },
      upAngle:  0.575,
      downAngle:  0.425,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL2",
               rotation: 0.6,
               coords: { "x": -7, "y": -3.9, "z": 2.7 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL4",
               rotation: 0.8,
               coords: { "x": -6, "y": -2.5, "z": 7 }
            },
         ]
   },

   { //ODL4
      name: "ODL4", //ЗДЛ4
      texture: "img/odl4.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0 },
      upAngle:  0.57,
      downAngle:  0.43,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL2",
               rotation: 0.7,
               coords: { "x": -7, "y": -3.5, "z": 4 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL3",
               rotation: 0.6,
               coords: { "x": -9, "y": -2, "z": 1.5 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL5",
               rotation: -0.5,
               coords: { "x": 9, "y": -1.5, "z": 0 }
            },
         ]
   },

   { //ODL5
      name: "ODL5", //ЗДЛ5
      texture: "img/odl5.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0 },
      upAngle:  0.57,
      downAngle:  0.43,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL2",
               rotation: 0.7,
               coords: { "x": -7, "y": -3.5, "z": 4 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL3",
               rotation: 0.6,
               coords: { "x": -9, "y": -2, "z": 1.5 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL5",
               rotation: -0.5,
               coords: { "x": 9, "y": -1.5, "z": 0 }
            },
         ]
   },
 
   { //ODL6
      name: "ODL6", //ЗДЛ6
      texture: "img/odl6.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0 },
      upAngle:  0.57,
      downAngle:  0.43,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL2",
               rotation: 0.7,
               coords: { "x": -7, "y": -3.5, "z": 4 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL3",
               rotation: 0.6,
               coords: { "x": -9, "y": -2, "z": 1.5 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL5",
               rotation: -0.5,
               coords: { "x": 9, "y": -1.5, "z": 0 }
            },
         ]
   },

   { //HallOHL
      name: "Hall4", //холлЗХЛ
      texture: "img/hall4.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.53,
      downAngle:  0.465,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "HallReception",
               rotation: 0.3,
               coords: { "x": -6.8, "y": -2.5, "z": -5 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Child",
               rotation: -0.8,
               coords: { "x": 5, "y": -3.3, "z": 7 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL1",
               rotation: -0.3,
               coords: { "x": 7, "y": -3, "z": -5.5 }
            },
         ]
   },

   { //OHL1
      name: "OHL1", //ЗХЛ-1
      texture: "img/ohl1.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.56,
      downAngle:  0.445,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL2",
               rotation: -0.4,
               coords: { "x": 7, "y": -2.3, "z": -2.7 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall4",
               rotation: 0.4,
               coords: { "x": -7, "y": -3, "z": -2 }
            },
         ],
   },

   { //OHL2
      name: "OHL2", //ЗХЛ-2
      texture: "img/ohl2res.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.61,
      downAngle:  0.39,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL1",
               rotation: 0.7,
               coords: { "x": -7, "y": -3.5, "z": 5 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL3",
               rotation: 1.1,
               coords: { "x": 3, "y": -3.5, "z": 7 }
            },
         ],
   },

   { //OHL3
      name: "OHL3", //ЗХЛ-3
      texture: "img/ohl3.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.55,
      downAngle:  0.45,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL2",
               rotation: 0.6,
               coords: { "x": -7, "y": -2.5, "z": 2.5 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL4",
               rotation: -0.3,
               coords: { "x": 7, "y": -3, "z": -4 }
            },

         ],
   },

   { //OHL4
      name: "OHL4", //ЗХЛ-4
      texture: "img/ohl4.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.61,
      downAngle:  0.39,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL3",
               rotation: 0.5,
               coords: { "x": -7, "y": -3, "z": 0 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL5",
               rotation: -0.2,
               coords: { "x": 5.5, "y": -3.5, "z": -5.5 }
            },

         ],
   },

   { //OHL5
      name: "OHL5", //ЗХЛ-5
      texture: "img/ohl5.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.56,
      downAngle:  0.44,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL4",
               rotation: 0.7,
               coords: { "x": -7, "y": -2, "z": 3.5 }
            },

         ],
   },


   { //IQ1
      name: "IQ1", //IQ-1
      texture: "img/iq1.jpg",
      cameraTarget: { "x": -0.8, "y": 0, "z": -0.1 },
      upAngle:  0.59,
      downAngle:  0.41,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall2",
               rotation: 0.1,
               coords: { "x": -2, "y": -2.3, "z": -7 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ2",
               rotation: 1.1,
               coords: { "x": 3, "y": -2.2, "z": 7 }
            },

         ],
   },

   { //IQ2
      name: "IQ2", //IQ-2
      texture: "img/iq2.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": -0.6 },
      upAngle:  0.58,
      downAngle:  0.42,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ1",
               rotation: 0.1,
               coords: { "x": -2, "y": -2.3, "z": -7 }
            },

            {
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ3",
               rotation: 1.1,
               coords: { "x": 1.5, "y": -2.5, "z": 8 }
            },

         ],
   },

   { //IQ3
      name: "IQ3", //IQ-3
      texture: "img/iq3.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": -0.6 },
      upAngle:  0.58,
      downAngle:  0.42,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ2",
               rotation: 0.2,
               coords: { "x": -4, "y": -2.3, "z": -7 }
            },


         ],
   },

   { //Child
      name: "Child",
      texture: "img/child1.jpg",
      cameraTarget: { "x": 1, "y": 0, "z": 0 },
      upAngle:  0.55,
      downAngle:  0.45,
      points:
         [
            {
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall4",
               rotation: -0.7,
               coords: { "x": 6.4, "y": -2.5, "z": 4 }
            },
         ]
   }
];

var panelIcons = [
   
   {
      name: "Sound",
      texture: "img/icons/sound-on.png",
      data: "someData",
      coords: { "x": -1.8, "y": 0, "z": 0 }
   },
   
   {
      name: "Map",
      texture: "img/icons/map.png",
      data: "someData",
      coords: { "x": -1.4, "y": 0, "z": 0 }
   },

   {
      name: "Plus",
      texture: "img/icons/plus.png",
      data: "someData",
      coords: { "x": -1, "y": 0, "z": 0 }
   },

   {
      name: "Minus",
      texture: "img/icons/minus.png",
      data: "someData",
      coords: { "x": -0.6, "y": 0, "z": 0 }
   },

   {
      name: "Left",
      texture: "img/icons/left.png",
      data: "someData",
      coords: { "x": -0.2, "y": 0, "z": 0 }
   },

   {
      name: "Right",
      texture: "img/icons/right.png",
      data: "someData",
      coords: { "x": 0.2, "y": 0, "z": 0 }
   },

   {
      name: "Up",
      texture: "img/icons/up.png",
      data: "someData",
      coords: { "x": 0.6, "y": 0, "z": 0 }
   },

   {
      name: "Down",
      texture: "img/icons/down.png",
      data: "someData",
      coords: { "x": 1, "y": 0, "z": 0 }
   },

   {
      name: "Help",
      texture: "img/icons/faq.png",
      data: "someData",
      coords: { "x": 1.4, "y": 0, "z": 0 }
   },

   {
      name: "FullScreen",
      texture: "img/icons/fullscreen.png",
      data: "someData",
      coords: { "x": 1.8, "y": 0, "z": 0 }
   }
];

var mapPoints = [
   {
      name: "Hall1",
      coords: { "x": 0.11, "y": -0.41, "z": 0 }
   },

   {
      name: "HallReception",
      coords: { "x": -0.23, "y": -0.38, "z": 0 }
   },

   {
      name: "Hall2",
      coords: { "x": 0.4, "y": -0.41, "z": 0 }
   },

   {
      name: "Hall3",
      coords: { "x": 0.435, "y": -0.03, "z": 0 }
   },

   {
      name: "Hall4",
      coords: { "x": -0.42, "y": 0.1, "z": 0 }
   },

   {
      name: "ODL1",
      coords: { "x": 0.6, "y": 0.13, "z": 0 }
   },

   {
      name: "ODL2",
      coords: { "x": 0.73, "y": 0.3, "z": 0 }
   },

   {
      name: "ODL3",
      coords: { "x": 0.45, "y": 0.35, "z": 0 }
   },

   {
      name: "ODL4",
      coords: { "x": 0.88, "y": 0.42, "z": 0 }
   },

   {
      name: "ODL5",
      coords: { "x": 1.28, "y": 0.42, "z": 0 }
   },

   {
      name: "ODL6",
      coords: { "x": 1.28, "y": 0.22, "z": 0 }
   },

   {
      name: "Conf",
      coords: { "x": 1.5, "y": 0.29, "z": 0 }
   },

   {
      name: "Child",
      coords: { "x": -0.44, "y": 0.34, "z": 0 }
   },

   {
      name: "OHL1",
      coords: { "x": -0.65, "y": -0.03, "z": 0 }
   },

   {
      name: "OHL2",
      coords: { "x": -0.8, "y": -0.155, "z": 0 }
   },

   {
      name: "OHL3",
      coords: { "x": -1.05, "y": -0.155, "z": 0 }
   },

   {
      name: "OHL4",
      coords: { "x": -1.28, "y": -0.155, "z": 0 }
   },

   {
      name: "OHL5",
      coords: { "x": -1.5, "y": -0.42, "z": 0 }
   },

   {
      name: "IQ1",
      coords: { "x": 0.65, "y": -0.38, "z": 0 }
   },

   {
      name: "IQ2",
      coords: { "x": 0.95, "y": -0.38, "z": 0 }
   },

   {
      name: "IQ3",
      coords: { "x": 1.25, "y": -0.38, "z": 0 }
   },
]