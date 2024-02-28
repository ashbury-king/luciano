function calculatePick3Paradox(groupSize) {
    const numberOfPossiblePicks = 1000;
    let probabilityNoSharedPick = 1;

    for (let i = 0; i < groupSize; i++) {
        probabilityNoSharedPick *= (numberOfPossiblePicks - i) / numberOfPossiblePicks;
    }

    return 1 - probabilityNoSharedPick;
}

let previousPicks = 2;
let probability = calculatePick3Paradox(previousPicks);

while (probability <= .50) {
    previousPicks += 1;
    probability = calculatePick3Paradox(previousPicks);
}

console.log(`For a group of ${previousPicks} previous picks, the probability of at least two numbers repeating is approximately ${probability * 100}%`);
