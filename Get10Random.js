let straightPicks = [];
let fireballPicks = [];
let redball = "";

while (fireballPicks.length !== 40) {
    straightPicks = [];
    for (let i = 0; i < 10; i += 1) {
        const randomNumber = Math.floor(Math.random() * 1000);
        if (straightPicks.includes(randomNumber) === false) {
            straightPicks.push(String(randomNumber).padStart(3, "0"));
        }
    }
    for (let i = 0; i < 10; i += 1) {
        fireballPicks = [];
        straightPicks.forEach(element => {
            fireballPicks.push(element);
        });
        for (let j = 0; j < straightPicks.length; j += 1) {
            const f1 = String(i) + straightPicks[j][1] + straightPicks[j][2];
            const f2 = straightPicks[j][0] + String(i) + straightPicks[j][2];
            const f3 = straightPicks[j][0] + straightPicks[j][1] + String(i);

            if (fireballPicks.includes(f1) === false) {
                fireballPicks.push(f1);
            }
            if (fireballPicks.includes(f2) === false) {
                fireballPicks.push(f2);
            }
            if (fireballPicks.includes(f3) === false) {
                fireballPicks.push(f3);
            }
        }
        if (fireballPicks.length === 40) {
            redball = String(i);
            i = 10;
        }
    }
}

console.log(straightPicks.sort());
console.log("redball = " + redball)
