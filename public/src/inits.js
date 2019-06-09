function initControlPanel() {
    otherScene = new THREE.Scene();
    otherCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    otherCamera.position.z = 5;
    otherCamera.position.y = 1.8;

    if (window.innerHeight > window.innerWidth) {
        otherCamera.position.z = 7;
        otherCamera.position.y = 2.5;
    }

    spriteGeometry = new THREE.PlaneGeometry(3.5, 0.37, 1, 1);
    spriteTexture = new THREE.TextureLoader().load("img/icons/panelFrame.png");
    spriteMaterial = new THREE.MeshBasicMaterial({ map: spriteTexture, transparent: true });
    spriteMesh = new THREE.Mesh(spriteGeometry, spriteMaterial);
    spriteMesh.rotation = 0.1 * Math.PI;
    //spriteMesh.scale.y = -1;
    spriteMesh.scale.x = -1;
    otherScene.add(spriteMesh);

    panelIcons.forEach(function (item, i, panelIcon) {
        spriteTexture = new THREE.TextureLoader().load(panelIcon[i].texture);
        spriteGeometry = new THREE.PlaneGeometry(0.29, 0.29, 1, 1);
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
    //anotherCamera.position.x = 3;

    if (window.innerHeight > window.innerWidth) {
        anotherCamera.position.z = 7;
        anotherCamera.position.y = 1.68;
    }
}

function initMap() {
    mapInitialised = true;

    spriteGeometry = new THREE.PlaneGeometry(3.5, 1.3, 1, 1);
    spriteTexture = new THREE.TextureLoader().load("img/icons/mapFrame2.png");
    spriteMaterial = new THREE.MeshBasicMaterial({ map: spriteTexture, transparent: true, color: 0xffffff});
    spriteMesh = new THREE.Mesh(spriteGeometry, spriteMaterial);
    //spriteMesh.rotation = 0.1 * Math.PI;
    spriteMesh.scale.y = -1;
    spriteMesh.scale.x = -1;
    anotherScene.add(spriteMesh);

    spriteGeometry = new THREE.PlaneGeometry(3.3, 1.1, 1, 1);
    spriteTexture = new THREE.TextureLoader().load("img/map1.png");
    spriteMaterial = new THREE.MeshBasicMaterial({ map: spriteTexture, transparent: true });
    spriteMesh = new THREE.Mesh(spriteGeometry, spriteMaterial);
    //spriteMesh.rotation = 0.1 * Math.PI;
    spriteMesh.scale.y = -1;
    //spriteMesh.scale.x = -1;
    //spriteMesh.position.y = 0.1;
    anotherScene.add(spriteMesh);

    mapPoints.forEach(function (item, i, mapPoint) {
        spriteTexture = new THREE.TextureLoader().load("img/icons/link.png");
        spriteGeometry = new THREE.PlaneGeometry(0.23, 0.23, 1, 1);
        spriteMaterial = new THREE.MeshBasicMaterial({ map: spriteTexture, transparent: true });
        spriteMesh = new THREE.Mesh(spriteGeometry, spriteMaterial);
        spriteMesh.position.x = mapPoint[i].coords.x;
        spriteMesh.position.y = mapPoint[i].coords.y;
        spriteMesh.position.z = mapPoint[i].coords.z;
        spriteMesh.scale.y = -1;
        spriteMesh.userData = { name: mapPoint[i].name };
        //console.log(spriteMesh.userData);
        anotherScene.add(spriteMesh);
        mapViews.push(spriteMesh);
    });
}

function unInitMap() {
    mapInitialised = false;
    anotherScene.remove.apply(anotherScene, anotherScene.children);
    mapViews.length = 0;
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
        if (views[i].name == "OHL5") {
            currentView = views[i];
            break;
        }
    }
    camera.position.set(currentView.cameraTarget.x, currentView.cameraTarget.y, currentView.cameraTarget.z);

    texture = new THREE.TextureLoader().load(currentView.texture);
    material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.x = -1;

    scene.add(mesh);
}