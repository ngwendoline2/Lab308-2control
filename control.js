// Part 1: Plant Growth control System

const PI = 3.1415;
const initialRadius = 5;
const minSpacePerPlant = 0.8;
const maxPlants = Math.floor(PI * initialRadius * initialRadius / minSpacePerPlant);

function predictPlantGrowth(weeks) {
    let plantCount = 20 * Math.pow(2, weeks - 1);
    letcurrentArea = PI * initialRadius * initialRadius;

    if (plantCount > 0.8 * maxPlants) {
        console.log('After ${weeks} weeks, prune the plants to prevent overgrowth.');
    } else if (plantCount >= 0.5 * maxPlants) {  
        console.log('After ${weeks} weeks, monitor the plant growth.');
    } else {
        console.log('After ${weeks} weeks, there is room to plant more plants.');
    }
}

// Results for 1, 2, and 3 weeks of growth
predictPlantGrowth(1);
predictPlantGrowth(2);
predictPlantGrowth(3);

// Part 2: Expansion of the Garden

function calculateExpansion(initialPlants, weeksWithoutPruning) {
    let plantCount = initialPlants * Math.pow(2, weeksWithoutPruning - 1);
    let requiredSpace = plantCount * minSpacePerPlant;
    let requiredRadius = Math.sqrt(requiredSpace / PI);

    return {
        requiredSpace,
        requiredRadius
    };
}

// Calculate expansion for 100 plants without pruning for 10 weeks
const expansionResult = calculateExpansion(100, 10);

console.log(`\nIf starting with 100 plants and not pruning for 10 weeks:`);
console.log(`Additional space required: ${expansionResult.requiredSpace.toFixed(2)} square meters`);
console.log(`Required radius for expanded garden: ${expansionResult.requiredRadius.toFixed(2)} meters`);


//  Part 3 Errors in judgement
try {
    // Calculate expansion for 100 plants without pruning for 10 weeks
    const expansionResult = calculateExpansion(100, 10);

    // Check if the required space exceeds the available space
    if (expansionResult.requiredSpace > PI * initialRadius * initialRadius) {
        throw new Error("Not enough space to accommodate the specified number of plants.");
    }

    console.log(`\nIf starting with 100 plants and not pruning for 10 weeks:`);
    console.log(`Additional space required: ${expansionResult.requiredSpace.toFixed(40960.00)} square meters`);
    console.log(`Required radius for expanded garden: ${expansionResult.requiredRadius.toFixed(114.19)} meters`);
} catch (error) {
    console.error('Errow: ${errow.message}');
}