const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // TODO: set position here
 newimg.style.left = "10px";
 newimg.style.right = "10px";



  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  var canvasWidth = 1424; 
  var canvasHeight = 445; 
  var ballRadius = item.width; 
  var x = item.position.x;  
  var y = item.position.y;  

  if((x + 100) > canvasWidth) {    
    var tempt = (x + ballRadius) - canvasWidth;    
    item.position.x = canvasWidth - tempt - ballRadius;
   }  
  if((y + 100) > canvasHeight) {    
    var tempt = (y + ballRadius) - canvasHeight;    item.position.y = canvasHeight - tempt - ballRadius;
  }
}

// // To create an animation, instantiate a new Bounce object:

// var bounce = new Bounce();
// bounce
//   .translate({
//     from: { x: -300, y: 0 },
//     to: { x: 0, y: 0 },
//     duration: 600,
//     stiffness: 4
//   })
//   .scale({
//     from: { x: 1, y: 1 },
//     to: { x: 0.1, y: 2.3 },
//     easing: "sway",
//     duration: 800,
//     delay: 65,
//     stiffness: 2
//   })
//   .scale({
//     from: { x: 1, y: 1},
//     to: { x: 5, y: 1 },
//     easing: "sway",
//     duration: 300,
//     delay: 30,
//   })
//   .applyTo(document.querySelectorAll(".animation-target"));
//   // bounce.applyTo($(".animation-target")); //JQuery


function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
