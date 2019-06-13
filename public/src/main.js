window.JsFile;
var scene, camera, renderer, raycaster, CONTROLS;
var otherScene, otherCamera, otherINTERSECTED;
var anotherScene, anotherCamera, anotherINTERSECTED;
var mouse = new THREE.Vector2(0, 0), INTERSECTED;
var CSSRENDERER;
var PageLoaded = false;
var mapInitialised = false
var soundState = "img/icons/sound-off.png";

var points = [], buttons = [], mapViews = [];

var currentView, nextView;

var geometry, mesh, material, texture;

var pointGeometry, pointMaterial, pointMesh;
var pointTexture;

var spriteGeometry, spriteMaterial, spriteMesh;
var spriteTexture;

var mapFrameGeometry, mapFrameMaterial, mapFrameMesh;
var mapFrameTexture;

var mapPointGeometry, mapPointMaterial, mapPointMesh;
var mapPointTexture;

const loadManager = new THREE.LoadingManager();

var audio = new Audio(); // Создаём новый элемент Audio
audio.preload = true;
audio.src = 'mus.mp3'; // Указываем путь к звуку "клика"
//audio.autoplay = true;
audio.loop = true;

if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

init();
animate();
$("#modal").iziModal();

function init() {
    var container;

    container = document.getElementById("container");
    document.body.appendChild(container);

    //map = document.getElementById("map");
    //document.body.appendChild(map);
    

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1100); //fov, aspect, near, far
    raycaster = new THREE.Raycaster();
    scene.add( new THREE.AxesHelper( 20 ) );

    initSphere(); // Инициализация сферы и первого вида
    preInitMap(); // Инициализация сцены карты без ее показа
    //initMap();

    pointGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    createPoints();

    initControlPanel(); // Инициализация панели управления
   

    ////////Блок инициализации рендереров/////////
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    container.appendChild(renderer.domElement);
    //map.appendChild(renderer.domElement);
    //////////////////////////////////////////////

    initControls(); // Инициализации контроллеров камеры

    document.addEventListener('mousedown', onPointerStart, false);
    document.addEventListener('mousemove', onPointerMove, false);
    document.addEventListener('wheel', onDocumentMouseWheel, false);
    document.addEventListener('touchstart', onPointerStartTouch, false);
    container.addEventListener('touchend', onDocumentTouchEnd, false);
    window.addEventListener('resize', onWindowResize, false);

    
}

function configuringView() {
    $('#loading').fadeToggle();
    for (var i = 0; i < views.length; i++) {
        if (views[i].name == nextView) {
            currentView = views[i];
            break;
        }
    }

    camera.position.set(currentView.cameraTarget.x, currentView.cameraTarget.y, currentView.cameraTarget.z);

    CONTROLS.minPolarAngle = Math.PI * currentView.downAngle;
    CONTROLS.maxPolarAngle = Math.PI * currentView.upAngle;

    texture = new THREE.TextureLoader(loadManager).load(currentView.texture);

    mesh.material.map = texture;

    points.forEach(function (item, i, points) {
        scene.remove(points[i]);
    });
    points.length = 0;
    
    createPoints();
}

function createPoints() {

    currentView.points.forEach(function (item, i, point) {
        pointTexture = new THREE.TextureLoader().load(point[i].texture);
        pointMaterial = new THREE.MeshBasicMaterial({ map: pointTexture, transparent: true });
        pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
        pointMesh.rotation.y = point[i].rotation * Math.PI;
        pointMesh.position.x = point[i].coords.x;
        pointMesh.position.y = point[i].coords.y;
        pointMesh.position.z = point[i].coords.z;
        pointMesh.scale.y = -1;
        pointMesh.userData = { URL: point[i].data, type: point[i].type };
        points.push(pointMesh);
    });

    points.forEach(function (item, i, points) {
        scene.add(points[i]);
    });

    pointGeometry = new THREE.PlaneGeometry(2.5, 2.5, 1, 1);
    pointTexture = new THREE.TextureLoader().load("img/shorsik.png");
    pointMaterial = new THREE.MeshBasicMaterial({ map: pointTexture, transparent: true });
    pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
    pointMesh.rotation.y = 0;
    pointMesh.position.x = 0;
    pointMesh.position.y = 0;
    pointMesh.position.z = -6;
    pointMesh.scale.y = -1;
    scene.add(pointMesh);
}

function panelClick(object) {
    switch (object.userData.type) {
        case "Plus":
            var fov = camera.fov + (-100) * 0.03;
            camera.fov = THREE.Math.clamp(fov, 10, 75);
            camera.updateProjectionMatrix();
            break;
        case "Minus":
            var fov = camera.fov + 100 * 0.03;
            camera.fov = THREE.Math.clamp(fov, 10, 75);
            camera.updateProjectionMatrix();
            break;
        case "Left":
            CONTROLS.rotateLeft(-0.05);
            break;
        case "Right":
            CONTROLS.rotateLeft(0.05);
            break;
        case "Up":
            CONTROLS.rotateUp(0.05);
            break;
        case "Down":
            CONTROLS.rotateUp(-0.05);
            break;
        case "FullScreen":
            if (THREEx.FullScreen.activated()) {
                THREEx.FullScreen.cancel();
            } else {
                THREEx.FullScreen.request();
            }
            break;
        case "Map":
            if (!mapInitialised) {
                initMap();
            } else {
                unInitMap();
            }
            break;
        case "Sound":
            if (!audio.paused) {
                audio.pause();
            } else {
                audio.play();
            }
        break;
        case "Help":
            $('#modal').iziModal('resetContent');
            $('#modal').iziModal('setHeaderColor', "#ee5f00");
            $('#modal').iziModal('setTitle', 'F.A.Q.');
             $('#modal').iziModal('setTransitionIn', 'fadeInRight');
             $('#modal').iziModal('setContent',
                '<iframe height=500rem width=100% src="https://docs.google.com/viewerng/viewer?url=https://cit.tsn.47edu.ru/doc/Programma_provedenia_regionalnykh_UTS_24_11_2018.docx&embedded=true"></iframe>');
            $('#modal').iziModal('open');
        break;
    }
}

function animate() {

    CONTROLS.update();
    requestAnimationFrame(animate);
    render();

}

function render() {

    renderer.clear();
    renderer.render(scene, camera);
    renderer.clearDepth();
    renderer.render(otherScene, otherCamera);
    if(mapInitialised) {
        renderer.clearDepth();
        renderer.render(anotherScene, anotherCamera);
    }
}



loadManager.onLoad = () => { //onload для загрузки текстур для сферы
    $('#loading').fadeToggle();
    //console.log("Текстура сферы загружена загружены");
  };