var HEIGHT = window.innerHeight;
var WIDTH = window.innerWidth;

var BACKGROUND_COLOR = new THREE.Color(0xf0f0f0);

// PARAMETERS
var scene = new THREE.Scene();
scene.background = new THREE.Color(BACKGROUND_COLOR);

var camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 0.1, 10000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.Uncharted2ToneMapping;
renderer.toneMappingExposure = 1;
document.body.append(renderer.domElement);



var ambient_light = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient_light)


var directional_light = new THREE.DirectionalLight(0xffffff, 0.5);
directional_light.position.set(20,100,100);
scene.add(directional_light);




var sphereCamera = new THREE.CubeCamera(1,10000,500);
sphereCamera.position.set(0,0,100);
scene.add(sphereCamera);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    sphereCamera.updateCubeMap(renderer,scene);
}


var loader = new THREE.GLTFLoader();
var model;




var floor_texture = new THREE.TextureLoader().load("model/VillaTexture/innerFloor.jpg");
floor_texture.wrapS = THREE.RepeatWrapping;
floor_texture.wrapT = THREE.RepeatWrapping;
floor_texture.repeat.set(10, 10);

var floor_texture_nrm = new THREE.TextureLoader().load("model/VillaTexture/innerFloorNrm.jpg");
floor_texture_nrm.wrapS = THREE.RepeatWrapping;
floor_texture_nrm.wrapT = THREE.RepeatWrapping;
floor_texture_nrm.repeat.set(10, 10);

var material_floor = new THREE.MeshStandardMaterial(
    {
        map: floor_texture,
        // bumpMap: floor_texture_nrm,
        bumpScale: 1,
        roughness: 0.4,
        metalness: 0.3,
        envMap: sphereCamera.renderTarget,
        side: THREE.DoubleSide

    }
);


var material_window = new THREE.MeshStandardMaterial(
    {
        // color: new THREE.Color(0xffffff),
        opacity: 0.15,
        transparent: true,
        side: THREE.DoubleSide,
        envMap: sphereCamera.renderTarget
    }
)

var outdoorWalls_texture = new THREE.TextureLoader().load("model/VillaTexture/roofMain.jpg");
outdoorWalls_texture.wrapS = THREE.RepeatWrapping;
outdoorWalls_texture.wrapT = THREE.RepeatWrapping;
outdoorWalls_texture.repeat.set(10, 10);

var outdoorWalls_texture_nrm = new THREE.TextureLoader().load("model/VillaTexture/roofMainNrml.jpg");
outdoorWalls_texture_nrm.wrapS = THREE.RepeatWrapping;
outdoorWalls_texture_nrm.wrapT = THREE.RepeatWrapping;
outdoorWalls_texture_nrm.repeat.set(10, 10);


var material_outdoorWalls = new THREE.MeshStandardMaterial(
    {
        map: outdoorWalls_texture,
        NormalMap: outdoorWalls_texture_nrm,
        normalScale: 0.01,
        metalness: 0,
        roughness: 1,
        side: THREE.DoubleSide,
        envMap: sphereCamera.renderTarget
    }
)



var carpet_texture = new THREE.TextureLoader().load("model/VillaTexture/carpet.jpg");
carpet_texture.wrapS = THREE.RepeatWrapping;
carpet_texture.wrapT = THREE.RepeatWrapping;
carpet_texture.repeat.set(1, 1);


var material_carpet = new THREE.MeshStandardMaterial(
    {
        map: carpet_texture,
        metalness: 0.2,
        roughness: 0.7,
        side: THREE.DoubleSide
    }
)

var material_windowsFrame = new THREE.MeshStandardMaterial(
    {
        color: 0x090909,
        metalness: 0.5,
        roughness: 0.5,
        envMap: sphereCamera.renderTarget,
        side: THREE.DoubleSide
    }
)

var outerFloor_texture = new THREE.TextureLoader().load("model/VillaTexture/outerFloor.jpg");
outerFloor_texture.wrapS = THREE.RepeatWrapping;
outerFloor_texture.wrapT = THREE.RepeatWrapping;
outerFloor_texture.repeat.set(10, 10);

var outerFloor_texture_nrm = new THREE.TextureLoader().load("model/VillaTexture/outerFloorNrml.jpg");
outerFloor_texture_nrm.wrapS = THREE.RepeatWrapping;
outerFloor_texture_nrm.wrapT = THREE.RepeatWrapping;
outerFloor_texture_nrm.repeat.set(10, 10);


var material_outerFloor = new THREE.MeshStandardMaterial({
    map: outerFloor_texture,
    envMap: sphereCamera.renderTarget,
    NormalMap: outerFloor_texture_nrm,
    normalScale: 1,
    metalness: 0.1,
    roughness: 0.4
});

var table_texture = new THREE.TextureLoader().load("model/VillaTexture/table.jpg");
table_texture.wrapS = THREE.RepeatWrapping;
table_texture.wrapT = THREE.RepeatWrapping;
table_texture.rotation = 1.5;
table_texture.repeat.set(1, 1);

var table_texture_nrm = new THREE.TextureLoader().load("model/VillaTexture/tableNrml.jpg");
table_texture_nrm.wrapS = THREE.RepeatWrapping;
table_texture_nrm.wrapT = THREE.RepeatWrapping;
table_texture_nrm.rotation = 1.5;
table_texture_nrm.repeat.set(1, 1);


var material_table = new THREE.MeshStandardMaterial({
    map: table_texture,
    NormalMap: table_texture_nrm,
    normalScale: 1,
    envMap: sphereCamera.renderTarget,
    roughness: 0.55
});


var material_chair = new THREE.MeshStandardMaterial({
    color: 0x090909,
    metalness: 0.5,
    roughness: 0.2,
    envMap: sphereCamera.renderTarget
});

var material_chairLegs = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0,
    envMap: sphereCamera.renderTarget
});

var material_tableLeg = material_chairLegs;

var material_picture = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load("model/VillaTexture/picture.jpg"),
    metalness: 0.89,
    envMap: sphereCamera.renderTarget
});

var material_picture1 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load("model/VillaTexture/picture1.jpg"),
    metalness: 0.89,
    envMap: sphereCamera.renderTarget
});

var material_picture2 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load("model/VillaTexture/picture2.jpg"),
    metalness: 0.89,
    envMap: sphereCamera.renderTarget
});

var material_indoorWalls = new THREE.MeshStandardMaterial({
    color: 0x393542,
    metalness: 0,
    roughness: 0.99,
    envMap: sphereCamera.renderTarget
});


var material_upperRoof = new THREE.MeshStandardMaterial({
    color: 0x090909
});

loader.load("model/mansion.gltf", function (gltf) {
    model = gltf.scene;

    model.traverse((o) => {
        if (o.isMesh) {
            console.log(o.name);
            if (o.name.includes("table")) {
                o.material = material_table;
            }
            if (o.name.includes("floor")) {
                o.material = material_floor;
            }
            if (o.name == "window") {
                console.log(o.id);
                o.material = material_window;
            }
            if (o.name == "outdoorWalls") {
                console.log(o.id);
                o.material = material_outdoorWalls;
            }

            if (o.name == "carpet") {
                console.log(o.id);
                o.material = material_carpet;

            }
            if (o.name == "outdoorWalls") {
                console.log(o.name);
                o.material = material_outdoorWalls;

            }

            if (o.name == "windowsFrame") {

                o.material = material_windowsFrame;

            }

            if (o.name == "outerFloor") {

                o.material = material_outerFloor;

            }

            if (o.name == "table") {

                o.material = material_table;

            }
            if (o.name == "tableLegs") {

                o.material = material_tableLeg;

            }
            if (o.name == "chairs") {
                
                o.material = material_chair;

            }
            if (o.name == "chairsLeg") {
                
                o.material = material_chairLegs;

            }
            if(o.name == "picture2")
            {
                o.material = material_picture;
            }
            if(o.name == "picture1")
            {
                o.material = material_picture1;
            }
            if(o.name == "picture")
            {
                o.material = material_picture2;
            }
            if(o.name == "upperRoof")
            {
                o.material = material_upperRoof;
            }
            if(o.name == "indoorWalls")
            {
                o.material = material_indoorWalls;
            }
        }
    });

    scene.add(model);
});

var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableZoom = false;
camera.position.z = 10;


var cubeMap = new THREE.BoxGeometry(10000, 10000, 10000);


var urls = [
    'model/CubeMap/SanFrancisco/posx.jpg', 'model/CubeMap/SanFrancisco/negx.jpg',
    'model/CubeMap/SanFrancisco/posy.jpg', 'model/CubeMap/SanFrancisco/negy.jpg',
    'model/CubeMap/SanFrancisco/posz.jpg', 'model/CubeMap/SanFrancisco/negz.jpg'
]

var loader = new THREE.CubeTextureLoader();
scene.background = loader.load(urls);

animate();


