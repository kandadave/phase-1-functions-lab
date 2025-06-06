function distanceFromHqInBlocks(street) {
    const HQ_STREET = 42;
    return Math.abs(street - HQ_STREET);
}

function distanceFromHqInFeet(street) {
    const FEET_PER_BLOCK = 264;
    return distanceFromHqInBlocks(street) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(start, destination) {
    const FEET_PER_BLOCK = 264;
    return Math.abs(start - destination) * FEET_PER_BLOCK;
}

function calculatesFarePrice(start, destination) {
    const totalFeetTravelled = distanceTravelledInFeet(start, destination);

    if (totalFeetTravelled <= 400) {
        return 0; 
    }
    else if (totalFeetTravelled > 2500) {
        return 'cannot travel that far'; 
    }
    else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000) {
        const chargeableFeet = totalFeetTravelled - 400; 
        const fareInCents = chargeableFeet * 2; 
        return fareInCents / 100; 
    }
    
    else if (totalFeetTravelled > 2000) {
        return 25; 
    }
    return 'Error: Could not calculate fare.';
}


