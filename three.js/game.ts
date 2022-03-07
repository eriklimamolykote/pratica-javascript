import { JoystickManager } from "nipplejs";
import { MathUtils, MirroredRepeatWrapping, PlaneGeometry, PMREMGenerator, ShaderMaterial, StringKeyframeTrack, TextureLoader, Vector3, WebGLRenderer } from "three";
import { Scene } from "three";
import { PerspectiveCamera } from "three";

export const scene = new Scene()
export const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
)

// Our three renderer
let renderer: WebGLRenderer;

async function init() {
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

const waterGeometry = new PlaneGeometry(10000, 10000);

const water = new Water(
    waterGeometry,{
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new TextureLoader().load('static/normals/waternormals.jpeg', function(texture) {
            texture.wrapS = texture.wrapT = MirroredRepeatWrapping;
        }),
        sunDirection: new Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: scene.fog !== undefined
    }
);

// Water
water.rotation.x = -Math.PI / 2;
water.rotation.z = 0;
scene.add( water );

// Sky
const sky = new Sky();
sky.scale.setScalar(10000); // Specify the dimensions of the skybox
scene.add(sky); // Add the sky to our scene

// Set up variables to controle the look of the sky
const skyUniforms = sky.material.uniforms;
skyUniforms['turbidity'].value = 10;
skyUniforms['rayleight'].value = 2;
skyUniforms['mieCoefficient'].value = 0.005;
skyUniforms['mieDirectionalG'].value = 0.8;

const parameters = {
    elevation: 3,
    azimuth: 115
};

const pmremGenerator = new PMREMGenerator(renderer);

const phi = MathUtils.degToRad(90 - parameters.elevation);
const theta = MathUtils.degToRad(parameters.azimuth);

skyUniforms.setFromSphericalCoords(1, phi, theta);

sky.material.unforms['sunPosition'].value.copy(sun);
(water.material as ShaderMaterial).uniforms['sunDirection'].value.copy(sun).normalize();
scene.environment = pmremGenerator.fromScene(sky as any).texture;

(water.material as ShaderMaterial).uniforms['speed'].value = 0.0;

// Set the appropriate scale for our rocket
rocketModel.scale.set(0.3, 0.3, 0.3);
scene.add(rocketModel);
scene.add(mothershipModel);

// Set the scale and location for our mothership (above the player)
mothershipModel.position.y = 200;
mothershipModel.position.z = 100;
mothershipModel.scale.set(15,15,15);
sceneConfiguration.ready = true;

export const sceneConfiguration = {
    // Whether the scene is ready (i.e: All models have been loaded and can be used)
    ready: false,
    // Whether the camera is moving from the beginning
    cameraMovingToStartPosition: false,
    // Whether the rocket is moving forward
    rocketMoving: false,
    // backgroundMoving: false,
    // Collected game data
    data: {
        /// How many crystals the player has collected on this run
        crystalsCollected: 0,
        // How many shields the player has collected on this run
        shieldsCollected: 0,
    },
    // The length of the current level, increases as levels go up
    courseLength: 500,
    // How far the player is through the current level, initializes to zero.
    courseProgress: 0,
    // Whether the level has finished
    levelOver: false,
    // The current level, initializes to one.
    level: 1,
    // Gives the completion amount of the course thus far, from 0.0 to 1.0.
    coursePercentComplete: () => (sceneConfiguration.courseProgress / sceneConfiguration.courseLength),
    // Whether the start animation is playing (the circular camera movement while look at the ship)
    cameraStartAnimationPlaying: false,
    // How mane 'background bits' are in the scene (the cliffs)
    backgroundBitCount: 0,
    // Hom many 'challenge rows' are in the scene (the rows that have rocks, shields, or crystals in them).
    challengeRowCount: 0,
    // The current speed of the ship
    speed: 0.0
}

export const sceneSetup = (level: number) => {
    // Remove all references to old "challenge rows" and backhground bits
    sceneConfiguration.challengeRowCount = 0;
    sceneConfiguration.backgroundBitCount = 0;

    // Reset the camera position back to slightly infront of the ship for the start-up animation
    camera.position.z = 50;
    camera.position.y = 12;
    camera.position.x = 15;
    camera.rotation.y = 2.5;

    // Add the starter bay to the scene (the sany shore with the rocks around it)
    scene.add(starterBay);

    // Set the starter bay position to be close to the ship
    starterBay.position.copy(new Vector3(10, 0, 120));

    // Rotate the rocket model back to the correct orientation to play the level
    rocketModel.rotation.x = Math.PI;
    rocketModel.rotation.z = Math.PI;

    // Set the location of the rocket model to be within the starter bay
    rocketModel.position.z = 70;
    rocketModel.position.y = 10;
    rocketModel.position.x = 0;

    // Remove any existing challenge rows from the scene
    challengeRows.forEach(x => {
        scene.remove(x.rowParent);
    });

    // Remove any existing environment bits from the scene
    environmentBits.forEach(X => {
        scene.remove(x);
    })

    // Setting the length of these arrays to zero clears the array of any values
    environmentBits.length = 0;
    challengeRows.length = 0;

    // Render some challenge rows and background bits into the distance
    for (let i = 0; i < 60; i++) {
        // debugger;
        addChallengeRow(sceneConfiguration.challengeRowCount++);
        addBackgroundBit(sceneConfiguration.backgroundBitCount++);
    }
    
    // Set the variables back to their beginning state

    // Indicates that the animation where the camera flies from the current position isn't playing
    sceneConfiguration.cameraStartAnimationPlaying = false;
    // The level isn't over (we just started it)
    sceneConfiguration.levelOver = false;
    // The rocket isn't flying away back to the mothership
    rocketModel.userData.flyingAway = false;
    // Resets the current progress of the course to 0, as we haven't yet started the level we're on
    sceneConfiguration.courseProgress = 0;
    // Sets the length of the course based on our current level
    sceneConfiguration.courseLength = 1000 * level;

    // Reset how many things we've collected in this level to zero
    sceneConfiguration.data.shieldsCollected = 0;
    sceneConfiguration.data.crystalsCollected = 0;

    // Updated the UI to show how many things we've collected to zero.
    crystalUiElement.innerText = String(sceneConfiguration.data.crystalsCollected);
    shieldUiElement.innerText = String(sceneConfiguration.data.shieldsCollected);

    // Sets the current level ID in the UI
    document.getElementById('levelIndicator')!.innerText = `LEVEL ${sceneConfiguration.level}`;
    // Indicates that the scene setup has completed, and the scene is now ready
    sceneConfiguration.ready = true;
}

let leftPressed = false;
let rightPressed = false;

document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);

function onKeyDown(event: KeyboardEvent) {
    console.log('keypress');
    let keyCode = event.which;
    if (keyCode == 37) { // Left arrow key
        leftPressed = true;
    } else if (keyCode == 39) { // Right arrow key
        rightPressed = true;
    }
}

function onKeyUp(event: KeyboardEvent) {
    let keyCode = event.which;
    if (keyCode == 37) { // Left arrow key
        leftPressed = false;
    } else if (keyCode == 39) { // Right arrow key
        rightPressed = false;
    }
}

if (isTouchDevice()) {
    // Get the area within the UI to use as our joystick
    let touchZone = document.getElementById('joystick-zone');

    if (touchZone != null) {
        // Create a Joystick Manager
        joystickManager = joystick.create({zone: document.getElementById('joystick-zone')!,})
        // Register what to do when the joystick moves
        joystickManager.on("move", (event, data) => {
            positionOffset = data.vector.x;
        })
        // When the joystick isn't being interacted with anymore, stop moving the rocket
        joystickManager.on('end', (event, data) => {
            positionOffset = 0.0;
        })
    }
}

// If the left arrow is pressed, move the rocket the the left
if (leftPressed) {
    rocketModel.position.x -= 0.5;
}
// If the right arrow is pressed, move the rocket to the right
if (rightPressed) {
    rocketModel.position.x += 0.5;
}
// If the joystick is in use, update the current location of the rocket accordingly
rocketModel.position.x += positionOffset;
// Clamp the final position of the rock to an allowable region
rocketModel.position.x = clamp(rocketModel.position.x, -20, 25);
