//constructor cos set up properties
function tShirt(brand, price, size, material, color){
this.brand = brand;
this.price = price;
this.size = size;
this.material = material;
this.color = color;
}
var shirtOne = new tShirt("GAPS",3, "S","cotton", "white" )// this is only one t shirt
var shirtTwo = new tShirt("Gucci",100, "M","polyester", "Red" )
var shirtThree = new tShirt("Zara",15, "L","blend", "pink" )
var shirtFour = new tShirt("H&M",28, "XL","tri-blend", "black" )

var arr = [shirtOne,shirtTwo,shirtThree,shirtFour]
var fPrice = 0
function filterPrice(obj){
return obj.price>fPrice
}
function data(){
    fPrice = parseInt(document.getElementById('inputBox').value)
    var newArray = arr.filter(filterPrice)
console.log(fPrice)

    for(i=0;i<newArray.length; i++){
        console.log(newArray[i].brand)
        console.log(newArray[i].price)
        console.log(newArray[i].material)
        console.log(newArray[i].size)
        console.log(newArray[i].color)
    }
}

