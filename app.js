// Rover Object Goes Here
// ======================
var rover = {
  direction:"N",
  x:0,
  y:0,
  travelLog:[],
};
// ======================
function turnLeft(rover){
  
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;

    case "E":
      rover.direction = "N";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "W":
      rover.direction = "S";
      break;
  }
 console.log("Actual direccion: " + rover.direction);
}

function turnRight(rover){
  
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
  console.log("Actual Direccion: " + rover.direction);
}


function moveForward(rover){  
  
  switch (rover.direction) {
    case "E":
      if(rover.y < 9){
      [rover.x][rover.y++];
      rover.travelLog.push([rover.x,rover.y]); 
      }else console.log("Insufficient WIFI!!");
      break;

    case "S":
      if(rover.x < 9){
      [rover.x++][rover.y];
      rover.travelLog.push([rover.x,rover.y]);
      }else console.log("Insufficient WIFI!!");
      break;

    case "W":
      if(rover.y > 0){
      [rover.x][rover.y--];
      rover.travelLog.push([rover.x,rover.y]);
      }else console.log("Insufficient WIFI!!");
      break;

    case "N":
      if(rover.x > 0){
      [rover.x--][rover.y];
      rover.travelLog.push([rover.x,rover.y]);
      }else console.log("Insufficient WIFI!!");
      break;
    
  }
  console.log("Actual Position X: " + rover.x + " Y: " + rover.y);
}

function moveBackward(rover){
  
  switch (rover.direction) {
    case "E":
      if(rover.y > 0){
      [rover.x][rover.y--];
      rover.travelLog.push([rover.x,rover.y]); 
      }else console.log("Insufficient WIFI!!");
      break;

    case "S":
      if(rover.x > 0){
      [rover.x--][rover.y];
      rover.travelLog.push([rover.x,rover.y]);
      }else console.log("Insufficient WIFI!!");
      break;

    case "W":
      if(rover.y < 9){
      [rover.x][rover.y++];
      rover.travelLog.push([rover.x,rover.y]);
      }else console.log("Insufficient WIFI!!");
      break;

    case "N":
      if(rover.x <9){
      [rover.x++][rover.y];
      rover.travelLog.push([rover.x,rover.y]);
      }else console.log("Insufficient WIFI!!");
      break;
    
  }
  console.log("Actual Position X: " + rover.x + " Y: " + rover.y);
}

function commandList(rover){
  
  var list="brffrfflfrff";

  for(i=0; i < list.length; i++){

    var letters=list[i];
    
    switch (letters) {
        case 'f':
        moveForward(rover);
        break;
  
      case 'r':
        turnRight(rover);
        break;
  
      case 'l':
        turnLeft(rover); 
        break;

      case 'b':
        moveBackward(rover); 
        break;

      default:
        console.log("It's an invalid command, please insert a valid command: 'f''r''l''d'");

    }
  
  }
    for(var j=0; j < rover.travelLog.length; j++){
      
      var row=rover.travelLog[j];
      console.log("The rover has traveled in: "+ row);
    }
    
}
