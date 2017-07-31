//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
//Update the current existing inventory item quantities (in arr1).
//If an item cannot be found, add the new item and quantity into the inventory array. 
//The returned inventory array should be in alphabetical order by item.



function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var index;
    var arrCuInvName=[];
    var arrNeInvName=[];
    arr1.map(function(item1){
      return arr2.map(function(item2){
        if(item1[1] === item2[1]){
           item1[0]= item2[0]+item1[0];
           }
      });
    });
    arr2.map(function(item){
      arrNeInvName.push(item[1]);
      
    });
    arr1.map(function(item){
      arrCuInvName.push(item[1]);
    });
    arrNeInvName.map(function(item){
      if(arrCuInvName.indexOf(item)===-1){
        // element doesn't exist in array
        index=arrNeInvName.indexOf(item);
        arr1.push(arr2[index]);
      }
         
    });
    arr1.sort(function(currItem,nextItem){
      return currItem[1] > nextItem[1] ? 1 : -1;
    });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
