function calculateBirthdayProbability(groupSize) {
    const daysInYear = 365;
    let probabilityNoSharedBirthday = 1;

    for (let i = 0; i < groupSize; i++) {
        probabilityNoSharedBirthday *= (daysInYear - i) / daysInYear;
    }

    return 1 - probabilityNoSharedBirthday;
}

let groupSize = 2;
let probability = calculateBirthdayProbability(groupSize);

while (probability < .50) {
    groupSize += 1;
    probability = calculateBirthdayProbability(groupSize);
}

console.log(`For a group of ${groupSize} people, the probability of at least two people sharing the same birthday is approximately ${probability.toFixed(6) * 100}%`);
