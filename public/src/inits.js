function init() {
    var container;

    container = document.getElementById("container");
    document.body.appendChild(container);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1100); //fov, aspect, near, far
    raycaster = new THREE.Raycaster();

    //scene.add(new THREE.AxesHelper(20));

    initSphere(); // Инициализация сферы и первого вида
    preInitMap(); // Инициализация сцены карты без ее показа
    //initMap();

    //pointGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
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

function initControlPanel() {
    otherScene = new THREE.Scene();
    otherCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    otherCamera.position.z = 5;
    otherCamera.position.y = 1.8;

    if (window.innerHeight > window.innerWidth) {
        otherCamera.position.z = 7.5;
        otherCamera.position.y = 2.5;
    }

    spriteGeometry = new THREE.PlaneGeometry(4, 0.43, 1, 1);
    spriteTexture = new THREE.TextureLoader().load("img/design/panelFrame.png");
    spriteMaterial = new THREE.MeshBasicMaterial({ map: spriteTexture, transparent: true });
    spriteMesh = new THREE.Mesh(spriteGeometry, spriteMaterial);
    spriteMesh.rotation = 0.1 * Math.PI;
    spriteMesh.scale.y = -1;
    //spriteMesh.scale.x = -1;
    spriteMesh.position.y = -0.05;
    otherScene.add(spriteMesh);

    panelIcons.forEach(function (item, i, panelIcon) {
        spriteTexture = new THREE.TextureLoader().load(panelIcon[i].texture);
        spriteGeometry = new THREE.PlaneGeometry(0.26, 0.26, 1, 1);
        spriteMaterial = new THREE.MeshBasicMaterial({ map: spriteTexture, transparent: true });
        spriteMesh = new THREE.Mesh(spriteGeometry, spriteMaterial);
        spriteMesh.position.x = panelIcon[i].coords.x;
        spriteMesh.userData = { type: panelIcon[i].name };
        //console.log(spriteMesh.userData);
        otherScene.add(spriteMesh);
        buttons.push(spriteMesh);
    });
}

function preInitMap() {
    
    anotherScene = new THREE.Scene();
    anotherCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    anotherCamera.position.z = 5;
    anotherCamera.position.y = 0.98;

    if (window.innerHeight > window.innerWidth) {
        anotherCamera.position.z = 7.5;
        anotherCamera.position.y = 1.68;
    }
}

function initMap() {
    mapInitialised = true;

    spriteGeometry = new THREE.PlaneGeometry(3.4, 1.5, 1, 1);
    spriteTexture = new THREE.TextureLoader().load("img/design/mapFrame.png");
    spriteMaterial = new THREE.MeshBasicMaterial({ map: spriteTexture, transparent: true, color: 0xffffff });
    spriteMesh = new THREE.Mesh(spriteGeometry, spriteMaterial);
    spriteMesh.scale.y = -1;
    spriteMesh.position.x = -0.3;
    spriteMesh.position.y = 0.095;
    anotherScene.add(spriteMesh);

    spriteGeometry = new THREE.PlaneGeometry(3.3, 1.1, 1, 1);
    spriteTexture = new THREE.TextureLoader().load("img/design/map.png");
    spriteMaterial = new THREE.MeshBasicMaterial({ map: spriteTexture, transparent: true });
    spriteMesh = new THREE.Mesh(spriteGeometry, spriteMaterial);
    spriteMesh.scale.y = -1;
    spriteMesh.position.x = -0.3;
    spriteMesh.position.y = 0.18;
    anotherScene.add(spriteMesh);

    mapPoints.forEach(function (item, i, mapPoint) {
        spriteTexture = new THREE.TextureLoader().load("img/icons/hunt.png");
        spriteGeometry = new THREE.PlaneGeometry(0.2, 0.2, 1, 1);
        spriteMaterial = new THREE.MeshBasicMaterial({ map: spriteTexture, transparent: true });
        spriteMesh = new THREE.Mesh(spriteGeometry, spriteMaterial);
        spriteMesh.position.x = mapPoint[i].coords.x - 0.3;
        spriteMesh.position.y = mapPoint[i].coords.y + 0.18;
        spriteMesh.position.z = mapPoint[i].coords.z;
        spriteMesh.scale.y = -1;
        spriteMesh.userData = { name: mapPoint[i].name };

        if (currentView.name == spriteMesh.userData.name) {
            spriteMaterial.color.setHex(0xff7614);
            spriteMaterial.map = new THREE.TextureLoader().load("img/icons/mapPlace.png");
        }

        anotherScene.add(spriteMesh);
        mapViews.push(spriteMesh);
    });
}

function unInitMap() {
    mapInitialised = false;
    mapViews.length = [];
    while (anotherScene.children.length > 0) {
        anotherScene.remove(anotherScene.children[0]);
    }
}

function initControls() {
    CONTROLS = new THREE.OrbitControls(camera, renderer.domElement);
    CONTROLS.minPolarAngle = Math.PI * currentView.downAngle;
    CONTROLS.maxPolarAngle = Math.PI * currentView.upAngle;
    CONTROLS.enableDamping = true;
    CONTROLS.rotateSpeed = 0.2;
    CONTROLS.enablePan = false;
    CONTROLS.enableZoom = false; // disable OrbitControls's zoom
}

function initSphere() {
    geometry = new THREE.SphereGeometry(10, 50, 50);

    for (var i = 0; i < views.length; i++) {
        if (views[i].name == "Hall1") {
            currentView = views[i];
            break;
        }
    }
    camera.position.set(currentView.cameraTarget.x, currentView.cameraTarget.y, currentView.cameraTarget.z);

    texture = new THREE.TextureLoader(loadManager).load(currentView.texture);
    material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.x = -1;

    scene.add(mesh);

}