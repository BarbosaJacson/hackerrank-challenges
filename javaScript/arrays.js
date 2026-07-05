function calcTip(bills) {
 
    let tips = [];
    let total = [];

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] >= 50 && bills[i] <= 300) {
            tips[i] = bills[i] * 0.15;
        } else {
            tips[i] = bills[i] * 0.20;
        }
        total.push(bills[i] + tips[i]);
    }
    console.log(total);
    return total;
}
calcTip([125, 555, 44]);
