const previousPicks = [
    "284",
    "574",
    "483",
    "963",
    "161",
    "084",
    "343",
    "384",
    "640",
    "619",
    "759",
    "678",
    "661",
    "563",
    "198",
    "828",
    "403",
    "223",
    "594",
    "077",
    "651",
    "300",
    "559",
    "706",
    "372",
    "901",
    "086",
    "662",
    "052",
    "836",
    "799",
    "610",
    "654",
    "851",
    "759",
    "410",
    "175",
    "934",
    "107",
    "798",
];

const limiter = 37;

previousPicks.length = limiter;

const previousPicksSet = [...new Set(previousPicks)];
if (previousPicks.length == previousPicksSet.length) {
    console.log(previousPicksSet.sort());
}
else {
    console.log(`previousPicks.length || ${previousPicks.length}`);
    console.log(`previousPicksSet.length || ${previousPicksSet.length}`);
}

