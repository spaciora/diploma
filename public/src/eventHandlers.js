function onPointerStart(event) {

    event.preventDefault();

    raycaster.setFromCamera(mouse, otherCamera);
    var intersects = raycaster.intersectObjects(buttons);

    if (intersects.length > 0) {

        if (intersects[0].object.userData.type == "Sound") {
            console.log(soundState);
            var soundStateBuffer = intersects[0].object.material.map.image.currentSrc;
            intersects[0].object.material.map = new THREE.TextureLoader().load(soundState);
            soundState = soundStateBuffer;
            console.log(soundState);
        }
        panelClick(intersects[0].object);
    } else if (raycaster.intersectObjects(otherScene.children) == 0) {

        raycaster.setFromCamera(mouse, anotherCamera);
        intersects = raycaster.intersectObjects(mapViews);

        if (intersects.length > 0) {
            nextView = intersects[0].object.userData.name;
            console.log(nextView);

            console.log("map configuring view");
            configuringView();
            unInitMap();
        } else if (raycaster.intersectObjects(anotherScene.children) == 0) {

            raycaster.setFromCamera(mouse, camera);
            intersects = raycaster.intersectObjects(points);

            if (intersects.length > 0) {
                if (intersects[0].object.userData.type == "link") {
                    nextView = intersects[0].object.userData.URL;

                    console.log("points configuring view");
                    configuringView();
                }
                if (intersects[0].object.userData.type == "info") {

                    CONTROLS.saveState();
                    CONTROLS.reset();
                    $('#modal').iziModal('resetContent');
                    /*$('#modal').iziModal({
                        iframe: true,
                        iframeURL: intersects[0].object.userData.URL,
                        iframeHeight: 500,
                        iframeWidth: 200,
                    });*/

                    $('#modal').iziModal('setHeaderColor', "#ee5f00");
                    $('#modal').iziModal('setTitle', intersects[0].object.userData.title);
                    $('#modal').iziModal('setTransitionIn', 'fadeInRight');

                    $('#modal').iziModal('setContent',
                        '<iframe id="infoFrame" height=500rem width=100% src=""></iframe>'
                    );
                    $('#infoFrame').attr('src', intersects[0].object.userData.URL);
                    //document.getElementById("infoFrame").setAttribute('src', intersects[0].object.userData.URL);

                    $('#modal').iziModal('open');

                }
            }
        }
    }

}

function onPointerStartTouch(event) {
    event.preventDefault();

    mouse.x = (event.touches[0].pageX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.touches[0].pageY / window.innerHeight) * 2 + 1;

    onPointerStart(event);
}

function onDocumentTouchEnd(event) {
    upEventHandler(event);
}

function onPointerMove(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;


    raycaster.setFromCamera(mouse, otherCamera);
    intersects = raycaster.intersectObjects(buttons);

    if (intersects.length > 0) {
        if (otherINTERSECTED != intersects[0].object) {
            if (otherINTERSECTED) otherINTERSECTED.material.color.setHex(otherINTERSECTED.currentHex);

            otherINTERSECTED = intersects[0].object;
            otherINTERSECTED.currentHex = otherINTERSECTED.material.color.getHex();
            otherINTERSECTED.material.color.setHex(0xee5f00);
        }
    } else if (raycaster.intersectObjects(buttons) == 0) {
        if (otherINTERSECTED) otherINTERSECTED.material.color.setHex(otherINTERSECTED.currentHex);
        otherINTERSECTED = null;

        if (raycaster.intersectObjects(otherScene.children) == 0) {
            raycaster.setFromCamera(mouse, anotherCamera);
            var intersects = raycaster.intersectObjects(mapViews);

            if (intersects.length > 0) {
                if (anotherINTERSECTED != intersects[0].object) {
                    if (anotherINTERSECTED) anotherINTERSECTED.material.color.setHex(anotherINTERSECTED.currentHex);

                    anotherINTERSECTED = intersects[0].object;
                    anotherINTERSECTED.currentHex = anotherINTERSECTED.material.color.getHex();
                    anotherINTERSECTED.material.color.setHex(0xff9447);
                }
            } else if (raycaster.intersectObjects(mapViews) == 0) {

                if (anotherINTERSECTED) anotherINTERSECTED.material.color.setHex(anotherINTERSECTED.currentHex);
                anotherINTERSECTED = null;

                if (raycaster.intersectObjects(anotherScene.children) == 0) {

                    raycaster.setFromCamera(mouse, camera);
                    intersects = raycaster.intersectObjects(points);

                    if (intersects.length > 0) {
                        if (INTERSECTED != intersects[0].object) {

                            INTERSECTED = intersects[0].object;
                            INTERSECTED.geometry = new THREE.PlaneGeometry(INTERSECTED.userData.highlightSize, INTERSECTED.userData.highlightSize, 1, 1);
                        }
                    } else {
                        if (INTERSECTED) {
                            INTERSECTED.geometry = new THREE.PlaneGeometry(INTERSECTED.userData.size, INTERSECTED.userData.size, 1, 1);
                        }
                        INTERSECTED = null;
                    }
                }
            }
        }
    }
}

function onDocumentMouseWheel(event) {

    var fov = camera.fov + event.deltaY * 0.03;
    camera.fov = THREE.Math.clamp(fov, 10, 75);
    camera.updateProjectionMatrix();

}

function onWindowResize() {
    //initControlPanel();
    //preInitMap();

    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    otherCamera.aspect = window.innerWidth / window.innerHeight;
    otherCamera.updateProjectionMatrix();

    anotherCamera.aspect = window.innerWidth / window.innerHeight;
    anotherCamera.updateProjectionMatrix();
}

