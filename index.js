//Scuba headquarters in 42nd street is hq.
//Pickup location street is blockStreet.
const hq = 42
function distanceFromHqInBlocks(blockStreet){
if (blockStreet > hq){
    return blockStreet - hq
}else {
    return hq - blockStreet
}
}

 //distanceFromHqInBlocks(43, hq);

 //distanceFromHqInBlocks(50, hq);

 //distanceFromHqInBlocks(34, hq);

 
 function distanceFromHqInFeet(blockStreet){
    return distanceFromHqInBlocks(blockStreet) * 264;
 }

function distanceTravelledInFeet(start, destination){
if (start > destination){
        return (start - destination) * 264;
    }else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination){
 if (start > destination){
            distanceTravelledInFeet = ((start - destination) * 264);
            }else {
                distanceTravelledInFeet = ((destination - start) * 264);
            }
if ( distanceTravelledInFeet <= 400){
    return 0;
} else if(distanceTravelledInFeet <= 2000) {
    return (distanceTravelledInFeet - 400) * 0.02;
} else if (distanceTravelledInFeet <= 2500){
    return 25
} else return 'cannot travel that far'
}


