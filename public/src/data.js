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
               dataTitle: "Буккроссинг «Найди свою книгу!»",
               data: "https://docs.google.com/document/d/1lnQXFLsdhnLeRWeQO1lJYhVOeXil5qIH/preview",
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
               data: "https://docs.google.com/document/d/18uauLZ2vBVEvpYAAbSg0B8k_nuDzG8LB/preview",
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
               data: "https://docs.google.com/document/d/1GOfb5csviSjtXAcwlW66xDVuD88Wcpz6/preview",
               rotation: 1,
               coords: { "x": -0.7, "y": -0.2, "z": 7.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Станция автоматической книговыдачи",
               data: "https://docs.google.com/document/d/1ybK2xCXw0lVD4uNNoghGFkQLkPFltjNH/preview",
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
               size: 2.7,
               highlightSize: 2.8,
               type: "info",
               texture: "img/design/shorsik.png",
               data: "https://docs.google.com/document/d/1lPjeikxMbj8yIfmK-R_rmzoz1dfOxjMe/preview",
               dataTitle: "Отдел регистрации и учета читателей",
               rotation: -0.2,
               coords: { "x":4, "y": 0, "z": -6 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Окно в мир",
               data: "https://docs.google.com/document/d/1xEL80UjDunwGgHsnA2lw4f8rfisJSZb-/preview",
               rotation: -0.1,
               coords: { "x": 1, "y": 2.7, "z": -8 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Перечень платных услуг",
               data: "https://docs.google.com/document/d/1mb_zn0bQbkeUZWl86McTg0JBy82gkE1G/preview",
               rotation: 0.1,
               coords: { "x": -1, "y": 0.3, "z": -8 }
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
               data: "https://docs.google.com/document/d/1Vbn87i36s-62wwzk3S3GLfPKfDv7M7sa/preview",
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
               data: "https://docs.google.com/document/d/1KE5bEdI6yK1qCqVSQmRN98gdF6p9ZdoS/preview",
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
               dataTitle: "Топ книг ОДЛ",
               data: "https://docs.google.com/document/d/1RQ7J1l7VF3bujxfkd-1xC1yYBiVq3e9x/preview",
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
               dataTitle: "Фонд отдела деловой литературы",
               data: "https://docs.google.com/document/d/1webmftP56uElQXy3-T72t2rZvXehz-kI/preview",
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
               data: "Conf",
               rotation: -0.2,
               coords: { "x": 4, "y": -3.5, "z": -6 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Комната для индивидуальных занятий",
               data: "https://docs.google.com/document/d/1eYiL4obNRfIOssR3hu5LKKi38ypCpEDH/preview",
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
               data: "https://docs.google.com/document/d/1PWuZM1LMTNiUpNya_ee51UNA5kgV0wkM/preview",
               rotation: -0.3,
               coords: { "x": 6, "y": 0.5, "z": -5 }
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
               data: "https://docs.google.com/document/d/1PWuZM1LMTNiUpNya_ee51UNA5kgV0wkM/preview",
               rotation: -0.6,
               coords: { "x": 6, "y": 0.5, "z": 1 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Топ книг Лингволаборатории",
               data: "https://docs.google.com/document/d/17k9-pW7ULnrxUIPpooJwnjDTFgr8F7n_/preview",
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
               data: "https://docs.google.com/document/d/1wifnfQFMMoOqhnaPUW3dEBX_FYusqlQ1/preview",
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
               data: "https://docs.google.com/document/d/13XXmOnpjPFHShhjbkOzEk0In110VvyA2/preview",
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
               data: "https://docs.google.com/document/d/1cu0xblIMxc1Hc5_iS0k1dI2mSM0pMwxI/preview",
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
               data: "https://docs.google.com/document/d/1xACOhC-gFaStpCDGX1ut6DifdQw87EJD/preview",
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
               dataTitle: "Фонд литературы для юношества",
               data: "https://docs.google.com/document/d/1j4nuGPaCRz79xnJK3QQZv8ZgXjNzJtDD/preview",
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
               data: "https://docs.google.com/document/d/1qRgHBZcruo1evxBvJo4nseCbBWwulMmc/preview",
               rotation: 0.2,
               coords: { "x": -4.5, "y": 2.3, "z": -7 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Фонд программного обеспечения",
               data: "https://docs.google.com/document/d/12t7UHqK4RrOqRkojBgTTEvkibkNkUKs9/preview",
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
               data: "https://docs.google.com/document/d/1WL70J0S_7Gcu-Tg8TtUQU32jE0NrtVun/preview",
               rotation: 1.3,
               coords: { "x": 7.3, "y": 1.2, "z": 3 }
            },
            
            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Естественные науки",
               data: "https://docs.google.com/document/d/1wCdURS5k2O36a_pv0Jc08gdVEKopYpOm/preview",
               rotation: -0.5,
               coords: { "x": 8, "y": 2.2, "z": -0.2 }
            },

            {
               size: 2.7,
               highlightSize: 2.8,
               type: "info",
               texture: "img/design/shorsik.png",
               dataTitle: "Кафедра выдачи литературы",
               data: "https://docs.google.com/document/d/19rt86N8kx8fvYdivYdGVLGewpqM4wVmK/preview",
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
               dataTitle: "Техника и технические науки в целом",
               data: "https://docs.google.com/document/d/1yVL-EXGf9qr_cSn6CPDTbSkYIHK786JX/preview",
               rotation: -0.5,
               coords: { "x": 8, "y": 2.3, "z": 0 }
            },


            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Фонд программного обеспечения",
               data: "https://docs.google.com/document/d/12t7UHqK4RrOqRkojBgTTEvkibkNkUKs9/preview",
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
               data: "https://docs.google.com/document/d/1WL70J0S_7Gcu-Tg8TtUQU32jE0NrtVun/preview",
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
               dataTitle: "Компьютер для пользователей до 14 лет",
               data: "https://docs.google.com/document/d/1jBGbJJB0FCi1NdZsVrfR8PJyePjjs-DL/preview",
               rotation: -0.4,
               coords: { "x": 7, "y": 0, "z": -2.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Прохода нет!",
               data: "https://docs.google.com/document/d/1-DxNFh4VpuEk4Z7DidCaLGPrFczvUPrE/preview",
               rotation: -0.8,
               coords: { "x": 4, "y": 0, "z": 6.5 }
            },

            {
               size: pointSize,
               highlightSize: highlightPointSize,
               type: "info",
               texture: "img/icons/info.png",
               dataTitle: "Занимательная наука",
               data: "https://docs.google.com/document/d/1gBCflfhgQhQj910ETshS_hcPv8TwdaIl/preview",
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
      texture: "img/icons/sound-off.png",
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