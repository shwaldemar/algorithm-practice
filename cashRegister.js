// JavaScript Algorithms and Data Structures Projects: Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// The checkCashRegister() function should always return an object with a status key and a change key.
//
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
//
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
//
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
//
// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (DOLLAR)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

"use strict"
const DENOM = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
}

const REG_STAT = {
  open: "OPEN", closed: "CLOSED", insufficientFunds: "INSUFFICIENT_FUNDS"
}
function checkCashRegister(price,cash,cid){
  let cashRegister = {status: null, change: []};
  let changeDue = parseFloat(cash - price).toFixed(2);
  let totalCashInDrawer = getCashInDrawer(cid);
  let customerChange = getCustomerChange(changeDue, cid);
  cashRegister.change = customerChange

  if (Number(changeDue) === Number(totalCashInDrawer)){
    cashRegister.status = REG_STAT.closed
    cashRegister.change = cid
  }
  if (Number(changeDue) > Number(totalCashInDrawer)){
    cashRegister.status = REG_STAT.insufficientFunds
  }
  if (Number(changeDue)  < Number(totalCashInDrawer)){
    let availableChange = customerChange.reduce((tot,curr)=>{return tot+= curr[1]},0).toFixed(2)
    if (Number(changeDue) !== Number(availableChange)){
      cashRegister.status = REG_STAT.insufficientFunds
    }
    else {
      cashRegister.status = REG_STAT.open
    }
  }
  return cashRegister
}

function getCustomerChange(changeDue, cid){
  let change = [];
  for (let i = cid.length -1; i >= 0; i--){
    const denomName = cid[i][0];
    const denomTotal = cid[i][1];
    const denomValue = DENOM[denomName];
    let denomAmount = (denomTotal / denomValue).toFixed(2);
    let noDenomToReturn = 0;

    while (changeDue >= denomValue && denomAmount > 0){
      changeDue -= denomValue;
      changeDue = changeDue.toFixed(2);
      denomAmount -= 1;
      noDenomToReturn += 1;
    }
    if (noDenomToReturn){change.push([denomName, denomValue * noDenomToReturn]);
    }
  }

  let sumChange = change.reduce((tot,curr)=>{
    return tot += curr[1]
  },0).toFixed(2);
  if (sumChange > changeDue){return change}
  return []
}

function getCashInDrawer(cid){
  return cid.reduce((tot,curr)=>{return tot+=curr[1]},0).toFixed(2);
}

////////////////////////////TESTS BELOW//////////////////////////////////
console.log(
  checkCashRegister(19.50, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
)
//`should return {status: "OPEN", change: [["QUARTER", 0.5]]}`


console.log(
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
)
//`should return {status: "OPEN", change: [["TWENTY", 60],["TEN", 20],["FIVE", 15],["ONE", 1],["QUARTER", 0.5],["DIME", 0.2],["PENNY", 0.04]]}`


console.log(
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
)
// `should return {status: "INSUFFICIENT_FUNDS", change: []}`


console.log(
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
)
//`should return {status: "INSUFFICIENT_FUNDS", change: []}`


console.log(
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
)
//, `should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}`
