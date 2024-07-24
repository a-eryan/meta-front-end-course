// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (food of dairy) {
    console.log(food) //placeholder variable "food" can be anything
    }
}
logDairy();
// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (specs of Object.keys(bird)) {
        console.log(`${specs}: ${bird[specs]}`)
        //console.log(specs + "" + bird[specs])
    }      
}
console.log("#######################################")

birdCan(); 
// Task 3
function animalCan() {
    for (specs in bird) {
        //console.log(prop + ": " + bird[prop])
        console.log(`${specs}: ${bird[specs]}`)

    }
}
console.log("#######################################")

animalCan();

