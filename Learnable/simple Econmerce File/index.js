/**
psuedocode
1. create a welcome alert function with a welcome message.
2. create a prompt function that asks the user what they need and store the result  in a variable.
3. pass 2. in to another function list() thats will be created with set conditions to retun another function at 4.
4. This function should asks the user what they want to get specifically. the user should be able to input his decision while the function returns the appropriate result.
5. the checkout phase..its another function that confirms the users decision from point 4 and proceeds to payment or takes him back to 4.
*/
let welcome = alert("welcome to Response Store")
let checkOut = function(checkout) {
  checkout = prompt("Are You sure ? :")
  let confirmation = ["yes", "no"]
  if (checkout == confirmation[0]) {
    console.log("Checkout!, you can now Proceed to Payment!")
  } else if (checkout == confirmation[1]) {
    let revertBack = prompt("Do you wish to return back? :")
    if (revertBack == confirmation[0]) {
      return list(need);
    } else {
      console.log("Bye, have a lovely day ahead")
    }
  }
}
//  this is to be retuned to be returned at the list() section on ,assuming the person chose electronics.i.e itemA
let electronics = function(needItemA) {
  needItemA = prompt("what kind of electronics do you need bro ?",)
  let electronic = ["tv", "radio", "fan"]
  if (needItemA == electronic[0] || needItemA == electronic[1] || needItemA == electronic[2]) {
    return checkOut()
  } else {
    console.log("SORRY We dont have it")
  }
}
//  this is to be retuned to be returned at the list() section on ,assuming the person chose furniture.i.e itemB
let furniture = function(needItemB) {
  needItemB = prompt("what kind of furniture do you need bro ?",)
  let furniture = ["chair", "table", "foam"]
  if (needItemB == furniture[0] || needItemB == furniture[1] || needItemB == furniture[2]) {
    return checkOut()
  } else {
    console.log("SORRY, its out of stock")
  }
}
//  this is to be retuned to be returned at the list() section on ,assuming the person chose clothes.i.e itemC
let clothes = function(needItemC) {
  needItemC = prompt("what kind of Clothing do you need bro ?",)
  let clothing = ["jean", "suit", " t-shirt"]
  if (needItemC == clothing[0] || needItemC == clothing[1] || needItemC == clothing[2]) {
    return checkOut();
  } else {
    console.log("SORRY We dont have it in stock")
  }
}

let need = prompt("what do you need ? : ",)
function list(need) {
  let itemA = "electronic"
  let itemB = "furniture"
  let itemC = "clothes"
  if (need == itemA) {
    return electronics()
  } else if (need == itemB) {
    return furniture()
  } else if (need == itemC) {
    return clothes()
  } else {
    console.log("opps!, its out of stock, please call back next time")
  }
}
console.log(list(need))
module.exports = { welcome, need, list, electronics, furniture, clothes, checkOut }

