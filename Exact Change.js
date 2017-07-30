//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
//payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

//cid is a 2D array listing available currency.

//Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
//Return the string "Closed" if cash-in-drawer is equal to the change due.

//Otherwise, return change in coin and bills, sorted in highest to lowest order.
function checkCashRegister(price, cash, cid) {
  //declare and initialize variables
  var change = Math.round((cash - price) * 100);
  var value = 0;
  var changeRecord = [];
  var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  //convert all floats to integers due to floating point number issue
  cid.forEach(el => el[1] = Math.round(el[1] * 100));
  //helper function to check if sufficient cash for change is in the drawer,put all the denomination < change together and sum up the total 
  function enoughFund(cid) {
    var sum = cid.filter((el, i) => change >= currency[i]);
    return sum.reduce((a, b) => {
      return a + b[1];
    }, 0);
  }

  //Actual program/control flow starts here
  if (enoughFund(cid) < change)
    return "Insufficient Funds";
  else if (enoughFund(cid) === change)
    return "Closed";
  else {
    for (var i = cid.length - 1; i > -1; i--) {
      value = 0;
      while (cid[i][1] > 0 && change >= currency[i]) {
        //update everything as long as condition is true,for example, change =300, 300>1
        change -= currency[i];// 300-1=299
        cid[i][1] -= currency[i];//101-1=100,use penny ,while penny finished,use nickel
        //value keeps track of the amount of each currency unit as change
        value += currency[i];
      }
      if (value)
        changeRecord.push([cid[i][0], value]);// denomation and total put in aaray
    }
  }
  //divide each array by 100 to display a proper money format
  changeRecord.forEach(el => el[1] = (el[1] / 100));
  return changeRecord;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
