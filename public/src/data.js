var pointSize = 0.8;
var highlightPointSize = 0.9;

var views = [
   { //Hall1
      name: "Hall1", //вход
      texture: "img/views/hall1.jpg",
      cameraTarget: { "x": 0.1, "y": 0, "z": -0.2 },
      upAngle:  0.63, //чем меньше, тем меньше угол (max)
      downAngle:  0.37, //чем больше, тем меньше угол (min)
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "HallReception",
               rotation: 0.9,
               coords: { "x": -2.8, "y": -2.7, "z": 8.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Окно информации",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: 1.1,
               coords: { "x": 1, "y": 0, "z": 7.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall2",
               rotation: 0.08,
               coords: { "x": -0.5, "y": -2.4, "z": -8.2 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Режим работы",
               data: "https://docs.google.com/document/d/11CM1vc1W5pAt1Kt5Lr61_b7l3ocs8TV4/preview",
               rotation: -0.5,
               coords: { "x": 7, "y": 1, "z": 1 }
            },
         ]
   },

   { //Conf
      name: "Conf",
      texture: "img/views/conf.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0.1 },
      upAngle:  0.6,
      downAngle:  0.4,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL6",
               rotation: 0.6,
               coords: { "x": -8, "y": -1.5, "z": 0.9 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               data: "info/placeholder.pdf",
               dataTitle: "Окно информации",
               rotation: 0.9,
               coords: { "x": -0.7, "y": 0, "z": 7 }
            }
         ]
   },

   { //HallReception
      name: "HallReception",
      texture: "img/views/hallreception.jpg",
      cameraTarget: { "x": -0.01, "y": 0, "z": 0.01 },
      upAngle:  0.55,
      downAngle:  0.45,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall1",
               rotation: 0.9,
               coords: { "x": -3.5, "y": -2, "z": 7.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Библиослайдер",
               data: "https://docs.google.com/document/d/1c38RxWNkxywaa0U_zcZP-teiF89TKcvH/preview",
               rotation: 1,
               coords: { "x": -0.7, "y": -0.2, "z": 7.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Станция самообслуживания",
               data: "https://docs.google.com/document/d/1r3uqSHcq2Ew0gXQpx8a6IsFilVN5ccC4/preview",
               rotation: 1,
               coords: { "x": 1.5, "y": -2, "z": 7.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall4",
               rotation: -0.5,
               coords: { "x": 8.5, "y": -2.2, "z": -0.8 }
            },

            {
               size: 3,
               highlightSize: 3.1,
               type: "info",
               texture: "img/design/shorsik.png",
               data: "https://drive.google.com/file/d/1Y4xCmaWoLwjVaSRJuySZ8jEpJ1Lxrrk0/preview",
               dataTitle: "ЧАВО",
               rotation: -0.2,
               coords: { "x": 4.3, "y": 1, "z": -6 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Окно в мир",
               data: "https://docs.google.com/document/d/1gNkSRu4mrpWBByQ0DmM3U-8KXxx4oubC/preview",
               rotation: -0.1,
               coords: { "x": 1, "y": 2.7, "z": -8 }
            },
         ]
   },

   { //HallIQ
      name: "Hall2", //холлIQ
      texture: "img/views/hall2.jpg",
      cameraTarget: { "x": -0.3, "y": 0, "z": -0.2 },
      upAngle:  0.525,
      downAngle:  0.49,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall1",
               rotation: -1.8,
               coords: { "x": -6, "y": -2.2, "z": -5.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall3",
               rotation: -0.28,
               coords: { "x": 6.2, "y": -2.1, "z": -4 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ1",
               rotation: 1.3,
               coords: { "x": 7.3, "y": -2.2, "z": 5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "IQ лаборатория",
               data: "https://docs.google.com/document/d/14oEn_cD9RFejynTIwXHfeYwc873rE9Ri/preview",
               rotation: 1.3,
               coords: { "x": 7.3, "y": -1.2, "z": 5 }
            },
         ]
   },

   { //HallODL
      name: "Hall3", //холлЗДЛ
      texture: "img/views/hall3.jpg",
      cameraTarget: { "x": -0.01, "y": 0, "z": 0.01 },
      upAngle:  0.535,
      downAngle:  0.465,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall2",
               rotation: 0.8,
               coords: { "x": -5.3, "y": -3.5, "z": 6 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL1",
               rotation: -0.4,
               coords: { "x": 7.5, "y": -2.5, "z": -3.2 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Отдел деловой литературы",
               data: "https://docs.google.com/document/d/10-n3V0NfTlzTBCm6dStaL2-1RHbVr95U/preview",
               rotation: -0.4,
               coords: { "x": 7.5, "y": -1.5, "z": -3.2 }
            },
         ]
   },

   { //ODL1
      name: "ODL1", //ЗДЛ1
      texture: "img/views/odl1.jpg",
      cameraTarget: { "x": 0, "y": 0, "z": -0.1 },
      upAngle:  0.56,
      downAngle:  0.437,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL2",
               rotation: -0.9,
               coords: { "x": 1.5, "y": -3.5, "z": 7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall3",
               rotation: 0,
               coords: { "x": 0, "y": -3.5, "z": -7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL6",
               rotation: 0.8,
               coords: { "x": -5, "y": -1.5, "z": 7 }
            },
         ]
   },

   { //ODL2
      name: "ODL2", //ЗДЛ2
      texture: "img/views/odl2.jpg",
      cameraTarget: { "x": 0, "y": 0, "z": 0.1 },
      upAngle:  0.58,
      downAngle:  0.42,
      points:
         [
            {
               size: 3,
               highlightSize: 3.1,
               type: "info",
               texture: "img/design/shorsik.png",
               dataTitle: "Окно информации",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: 0,
               coords: { "x": 0, "y": 0.3, "z": -7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL1",
               rotation: 0.7,
               coords: { "x": -7, "y": -5, "z": 4.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL3",
               rotation: 0.3,
               coords: { "x": -6, "y": -4, "z": -6 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
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
      texture: "img/views/odl3.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0 },
      upAngle:  0.575,
      downAngle:  0.425,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL2",
               rotation: 0.6,
               coords: { "x": -7, "y": -3.9, "z": 2.7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL4",
               rotation: 0.8,
               coords: { "x": -6, "y": -2.5, "z": 7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Окно информации",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: -0.7,
               coords: { "x": 6, "y": 2.3, "z": 3 }
            },
         ]
   },

   { //ODL4
      name: "ODL4", //ЗДЛ4
      texture: "img/views/odl4.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0 },
      upAngle:  0.57,
      downAngle:  0.43,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL2",
               rotation: 0.7,
               coords: { "x": -7, "y": -3.5, "z": 4 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL3",
               rotation: 0.6,
               coords: { "x": -9, "y": -2, "z": 1.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
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
      texture: "img/views/odl5.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0 },
      upAngle:  0.57,
      downAngle:  0.43,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL6",
               rotation: -0.5,
               coords: { "x": 7, "y": -3.5, "z": 1}
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL4",
               rotation: 0.9,
               coords: { "x": -2, "y": -1.3, "z": 8 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Окно информации",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: -0.7,
               coords: { "x": 4, "y": 2.3, "z": 6 }
            },
         ]
   },
 
   { //ODL6
      name: "ODL6", //ЗДЛ6
      texture: "img/views/odl6.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": 0 },
      upAngle:  0.57,
      downAngle:  0.43,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL2",
               rotation: -0.2,
               coords: { "x": 4, "y": -3.5, "z": -6 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Окно информации",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: -0.2,
               coords: { "x": 4, "y": -2.5, "z": -6 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL5",
               rotation: 0.3,
               coords: { "x": -6, "y": -3.5, "z": -3.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "ODL1",
               rotation: 0.8,
               coords: { "x": -4.4, "y": -1, "z": 7 }
            },
         ]
   },

   { //Lingua1
      name: "Lingua1",
      texture: "img/views/lingua1.jpg",
      cameraTarget: { "x": -1, "y": 0, "z": 0 },
      upAngle:  0.57,
      downAngle:  0.43,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Lingua2",
               rotation: -0.49,
               coords: { "x": 8, "y": -2.5, "z": 0 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "LinguaRec",
               rotation: 1,
               coords: { "x": 0, "y": -4.9, "z": 6.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall4",
               rotation: 0.49,
               coords: { "x": -6, "y": -4, "z": 0 }
            },
            
         ]
   },

   { //Lingua2
      name: "Lingua2",
      texture: "img/views/lingua2.jpg",
      cameraTarget: { "x": -1, "y": 0, "z": 0 },
      upAngle:  0.585,
      downAngle:  0.415,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Lingua3",
               rotation: -0.7,
               coords: { "x": 5, "y": -3.2, "z": 4.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Lingua1",
               rotation: 0.8,
               coords: { "x": -5.7, "y": -1.5, "z": 6.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Топ настольных игр",
               data: "https://docs.google.com/document/d/1u1uCtDByW9kEpR1ZNxlHvPSAYE1FvEHb/preview",
               rotation: -0.3,
               coords: { "x": 6, "y": 1.5, "z": -5 }
            },
         ]
   },

   { //Lingua3
      name: "Lingua3",
      texture: "img/views/lingua3.jpg",
      cameraTarget: { "x": -1, "y": 0, "z": 0 },
      upAngle:  0.555,
      downAngle:  0.445,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Lingua2",
               rotation: -0.1,
               coords: { "x": 2, "y": -3.3, "z": -7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "LinguaRec",
               rotation: 0.33,
               coords: { "x": -8, "y": -2, "z": -4.1 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Топ настольных игр",
               data: "https://docs.google.com/document/d/1u1uCtDByW9kEpR1ZNxlHvPSAYE1FvEHb/preview",
               rotation: -0.6,
               coords: { "x": 6, "y": 1.5, "z": 1 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Топ книг Лингволаборатории",
               data: "https://docs.google.com/document/d/1gh3KCUA7tr3dCgAyrgTpjTdGR4apdWNQ/preview",
               rotation: 0.25,
               coords: { "x": -5, "y": 2, "z": -4.1 }
            },
         ]
   },

   { //LinguaRec
      name: "LinguaRec",
      texture: "img/views/linguaRec.jpg",
      cameraTarget: { "x": -1, "y": 0, "z": 0 },
      upAngle:  0.557,
      downAngle:  0.443,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Lingua3",
               rotation: -0.3,
               coords: { "x": 6.2, "y": -0.5, "z": -5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Lingua1",
               rotation: 0.2,
               coords: { "x": -5.2, "y": -3, "z": -5.1 }
            },
         ]
   },

   { //HallOHL
      name: "Hall4", //холлЗХЛ
      texture: "img/views/hall4.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.53,
      downAngle:  0.465,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "HallReception",
               rotation: 0.3,
               coords: { "x": -6.8, "y": -2.5, "z": -5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Child",
               rotation: -0.8,
               coords: { "x": 5, "y": -3.3, "z": 7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Игровая",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: -0.8,
               coords: { "x": 5, "y": -2.3, "z": 7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL1",
               rotation: -0.3,
               coords: { "x": 7, "y": -3, "z": -5.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Отдел художественной литературы",
               data: "https://docs.google.com/document/d/124BUSHuyofufIWg88lt0D_KVwYZGkp7k/preview",
               rotation: -0.3,
               coords: { "x": 7, "y": -2, "z": -5.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Lingua1",
               rotation: -0.45,
               coords: { "x": 8, "y": -2.9, "z": -1 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Лингволаборатория",
               data: "https://docs.google.com/document/d/1Uf4gLG-SqfsDFkMuE5p7jsBGUVQj2kQY/preview",
               rotation: -0.45,
               coords: { "x": 8, "y": -1.9, "z": -1 }
            },
         ]
   },

   { //OHL1
      name: "OHL1", //ЗХЛ-1
      texture: "img/views/ohl1.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.56,
      downAngle:  0.445,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL2",
               rotation: -0.4,
               coords: { "x": 7, "y": -2.3, "z": -2.7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
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
      texture: "img/views/ohl2res.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.61,
      downAngle:  0.39,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL1",
               rotation: 0.7,
               coords: { "x": -7, "y": -3.5, "z": 5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
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
      texture: "img/views/ohl3.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.55,
      downAngle:  0.45,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL2",
               rotation: 0.6,
               coords: { "x": -7, "y": -2.5, "z": 2.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL4",
               rotation: -0.3,
               coords: { "x": 7, "y": -3, "z": -4 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Топ книг ОХЛ",
               data: "https://docs.google.com/document/d/1igVcZKs9NJSU8H6SDCglQ-rw-QqbaMZK/preview",
               rotation: 1,
               coords: { "x": 0, "y": 1.5, "z": 7 }
            },

         ],
   },

   { //OHL4
      name: "OHL4", //ЗХЛ-4
      texture: "img/views/ohl4.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.61,
      downAngle:  0.39,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL3",
               rotation: 0.5,
               coords: { "x": -7, "y": -3, "z": 0 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
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
      texture: "img/views/ohl5.jpg",
      cameraTarget: { "x": -0.7, "y": 0, "z": 0 },
      upAngle:  0.56,
      downAngle:  0.44,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "OHL4",
               rotation: 0.7,
               coords: { "x": -7, "y": -2, "z": 3.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Фонд подростковой литературы",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: -0.7,
               coords: { "x": 5, "y": 1.5, "z": 6 }
            },

         ],
   },

   { //IQ1
      name: "IQ1", //IQ-1
      texture: "img/views/iq1.jpg",
      cameraTarget: { "x": -0.8, "y": 0, "z": -0.1 },
      upAngle:  0.59,
      downAngle:  0.41,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "Hall2",
               rotation: 0.1,
               coords: { "x": -2, "y": -2.3, "z": -7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Топ книг IQ-лаборатории",
               data: "https://docs.google.com/document/d/1p_QuzJ9s7QUU1ma737X_MbWhxbl1IQup/preview",
               rotation: 0.2,
               coords: { "x": -4.5, "y": 2.3, "z": -7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Фонд программного обеспечения",
               data: "https://docs.google.com/document/d/18v0i2aAVIrCfs5e8QFbvbOFINq_yW-sb/preview",
               rotation: 0.5,
               coords: { "x": -7.5, "y": 0, "z": -2.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ2",
               rotation: 1.1,
               coords: { "x": 3, "y": -2.2, "z": 7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Фонд периодических изданий",
               data: "https://docs.google.com/document/d/1XxMwRAprgWAhlCy6wbVIyTy8X1fifyvk/preview",
               rotation: 1.3,
               coords: { "x": 7.3, "y": 1.2, "z": 3 }
            },
            
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Фонд IQ-лаборатории",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: -0.5,
               coords: { "x": 8, "y": 2.2, "z": -0.2 }
            },

            {
               size: 3,
               highlightSize: 3.1,
               type: "info",
               texture: "img/design/shorsik.png",
               dataTitle: "Окно информации",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: -0.37,
               coords: { "x": 7, "y": 0.3, "z": -3.6 }
            },

            
         ],
   },

   { //IQ2
      name: "IQ2", //IQ-2
      texture: "img/views/iq2.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": -0.6 },
      upAngle:  0.58,
      downAngle:  0.42,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ1",
               rotation: 0.1,
               coords: { "x": -2, "y": -2.3, "z": -7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Фонд IQ-лаборатории",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: -0.5,
               coords: { "x": 8, "y": 2.3, "z": 0 }
            },


            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Фонд программного обеспечения",
               data: "https://docs.google.com/document/d/18v0i2aAVIrCfs5e8QFbvbOFINq_yW-sb/preview",
               rotation: 0.7,
               coords: { "x": -7, "y": -0.3, "z": 4.3 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ3",
               rotation: 1.1,
               coords: { "x": 1.5, "y": -2.5, "z": 8 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Фонд периодических изданий",
               data: "https://docs.google.com/document/d/1XxMwRAprgWAhlCy6wbVIyTy8X1fifyvk/preview",
               rotation: -0.15,
               coords: { "x": 3, "y": 1.2, "z": -7 }
            },

         ],
   },

   { //IQ3
      name: "IQ3", //IQ-3
      texture: "img/views/iq3.jpg",
      cameraTarget: { "x": -0.1, "y": 0, "z": -0.6 },
      upAngle:  0.58,
      downAngle:  0.42,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "link",
               texture: "img/icons/link.png",
               data: "IQ2",
               rotation: 0.2,
               coords: { "x": -4, "y": -2.3, "z": -7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Окно информации",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: -0.4,
               coords: { "x": 7, "y": 0, "z": -2.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Прохода нет!",
               data: "https://docs.google.com/document/d/1pCCB1yWd2_oa3_wcl3FuQ2XN0QaI-bJQ/preview",
               rotation: -0.8,
               coords: { "x": 4, "y": 0, "z": 6.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Окно информации",
               data: "https://docs.google.com/document/d/1FFVFPXTpHskptcMf33xph5suLG-iczP30r68JSp1oNQ/preview",
               rotation: 1,
               coords: { "x": 0, "y": 1.5, "z": 7 }
            },
         ],
   },

   { //Child
      name: "Child",
      texture: "img/views/child1.jpg",
      cameraTarget: { "x": 1, "y": 0, "z": 0 },
      upAngle:  0.55,
      downAngle:  0.45,
      points:
         [
            {
               size: pointSize,
               highlightSize: highlightPointSize,
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

   {
      name: "Lingua1",
      coords: { "x": -0.67, "y": 0.19, "z": 0 }
   },

   {
      name: "Lingua2",
      coords: { "x": -1.1, "y": 0.19, "z": 0 }
   },

   {
      name: "Lingua3",
      coords: { "x": -1.1, "y": 0.41, "z": 0 }
   },

   {
      name: "LinguaRec",
      coords: { "x": -0.67, "y": 0.41, "z": 0 }
   },
]