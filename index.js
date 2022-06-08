// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance > 42){
        return distance - 42;
    } else {
        return 42 - distance;
    }
}
function distanceFromHqInFeet(distance){
   const blocks = distanceFromHqInBlocks(distance);
   if(blocks > 42){
       return blocks * 264;
   }
   else {
       return blocks * 264;
   }
           
}
function distanceTravelledInFeet(start, destination) {
    if(start > destination){
        return (start - destination) * 264;
    }
    else{
        return (destination - start) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    const length = distanceTravelledInFeet(start, destination);
    if (length <= 400){
        return 0;
    }
    else if(length >= 401 && length <= 2000){
        return 0.02*(length-400);
    }
    else if(length > 2000 && length < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
        
}