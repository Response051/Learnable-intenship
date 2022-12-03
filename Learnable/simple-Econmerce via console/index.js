module.exports = {checkOut, electronics, furniture, clothes, list }
let welcome = alert("welcome to Response Store")

let checkOut = function(checkout) {
  checkout = prompt("Are You sure? :,")
  if (checkout == confirmed) {
    console.log("Thank You!")
  } else {
    return list(need)
  }
}

//  this is to be retuned to be returned at the list() section on ,assuming the person chose electronics.i.e itemA
let electronics = function(needItemA) {
  needItemA = prompt("what kind of electronics do you need bro ?",)
  let electronicProductA = "TV"
  let electronicProductB = "Radio"
  let electronicProductC = "Fan"
  if (needItemA == electronicProductA) {
    // console.log("proceed to checkout ")
    return checkOut()
  } else if (needItemA == electronicProductB) {
    console.log("proceed to checkout ")
  } else if (needItemA == electronicProductC) {
    console.log("proceed to checkout ")
  } else {
    console.log("SORRY We dont have it")
  }
}
//  this is to be retuned at the list() section on ,assuming the person chose furniture.i.e itemB
let furniture = function(needItemB) {
  needItemB = prompt("what kind of furniture do you need bro ?",)
  let furnitureProductA = "Arm-chair"
  let furnitureProductB = "Table"
  let furnitureProductC = "Foam"
  if (needItemB == furnitureProductA) {
    console.log("proceed to checkout and pay for the Arm-chair")
  } else if (needItemB == furnitureProductB) {
    console.log("proceed to checkout and pay for the Table")
  } else if (needItemB == furnitureProductC) {
    console.log("proceed to checkout and pay for the `${furnitureProductB}`")
  } else {
    console.log("SORRY, its out of stock")
  }
}
//  this is to be retuned at the list() section on ,assuming the person chose clothes.i.e itemC
let clothes = function(needItemC) {
  needItemC = prompt("what kind of Clothing do you need bro ?",)
  let clothingProductA = "Jean"
  let clothingProductB = "Suit"
  let clothingProductC = "T-Shirt"
  if (needItemC == clothingProductA) {
    console.log("proceed to checkout and pay for the JEAN")
  } else if (needItemC == clothingProductB) {
    console.log("proceed to checkout and pay for the SUITS")
  } else if (needItemC == clothingProductC) {
    console.log("proceed to checkout and pay for the T-SHIRT")
  } else {
    console.log("SORRY We dont have it in stock")
  }
}
// This will run first
// let need = prompt("whats do you need : ",)
// This function will be answered
// Depending on the user input,the appropraite function will be returned.
let list = function(need) {
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




