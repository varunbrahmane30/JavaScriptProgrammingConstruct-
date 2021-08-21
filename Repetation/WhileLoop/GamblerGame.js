let amount = 100;
const WIN = 1;
let betCount = 0;
while (amount < 200 && amount > 0) {
    let result = Math.floor(Math.random() * 10) % 2;
    betCount++;
    if (result == WIN)
        amount = amount + 1;
    else
        amount = amount - 1;
}
console.log("Final Amount : " + amount);
console.log("No of bets : " + betCount);