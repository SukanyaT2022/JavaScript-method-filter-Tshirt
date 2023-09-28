//constructor cos set up properties- object orient 
function tShirt(brand, price, size, material, color){
this.brand = brand;
this.price = price;
this.size = size;
this.material = material;
this.color = color;
}
var shirtOne = new tShirt("GAPS",3, "S","cotton", "White" )// this is only one t shirt
var shirtTwo = new tShirt("Gucci",100, "M","polyester", "Red" )
var shirtThree = new tShirt("Zara",15, "L","blend", "Pink" )
var shirtFour = new tShirt("H&M",28, "XL","tri-blend", "Black" )

var arr = [shirtOne,shirtTwo,shirtThree,shirtFour]
var fPrice = 0//person enter the price 
function filterPrice(obj){
return obj.price<fPrice
}
function data(){
    fPrice = parseInt(document.getElementById('inputBox').value)
    var newArray = arr.filter(filterPrice)
console.log(fPrice)

    for(i=0;i<newArray.length; i++){
        //dynamic HTML create tag
        //for price
        var p = document.createElement('p')
        var t1 = document.createTextNode('price' + newArray[i].price)
        p.appendChild(t1)
        document.getElementById('controlText').appendChild(p)

//brand
        var p2 = document.createElement('p')
        var t2 = document.createTextNode('brand' + newArray[i].brand)
        p2.appendChild(t2)
        document.getElementById('controlText').appendChild(p2)

        //material size
        var p3 = document.createElement('p')
        var t3 = document.createTextNode('size' + newArray[i].size)
        p3.appendChild(t3)
        document.getElementById('controlText').appendChild(p3)
//color
        var p4 = document.createElement('p')
        var t4 = document.createTextNode('color' + newArray[i].color)
        p4.appendChild(t4)
        document.getElementById('controlText').appendChild(p4)
//material
        var p6 = document.createElement('p')
        var t6 = document.createTextNode('material' + newArray[i].material)
        p4.appendChild(t4)
        document.getElementById('controlText').appendChild(p4)

        console.log(newArray[i].brand)
        console.log(newArray[i].price)
        console.log(newArray[i].material)
        console.log(newArray[i].size)
        console.log(newArray[i].color)
    }
}




//show by color
var fcolor = " "//person enter the price 
function filterColor(obj){
    return obj.color==fcolor
    }
//function by nam edata
function dataColor(){
    fcolor = (document.getElementById('filterColor4dropdown').value)
    var newArray = arr.filter(filterColor)

    for(i=0;i<newArray.length; i++){
        //dynamic HTML create tag
        //for price
        var p = document.createElement('p')
        var t1 = document.createTextNode('price' + newArray[i].price)
        p.appendChild(t1)
        document.getElementById('controlText').appendChild(p)

//brand
        var p2 = document.createElement('p')
        var t2 = document.createTextNode('brand' + newArray[i].brand)
        p2.appendChild(t2)
        document.getElementById('controlText').appendChild(p2)

        //material size
        var p3 = document.createElement('p')
        var t3 = document.createTextNode('size' + newArray[i].size)
        p3.appendChild(t3)
        document.getElementById('controlText').appendChild(p3)
//color
        var p4 = document.createElement('p')
        var t4 = document.createTextNode('color' + newArray[i].color)
        p4.appendChild(t4)
        document.getElementById('controlText').appendChild(p4)
//material
        var p6 = document.createElement('p')
        var t6 = document.createTextNode('material' + newArray[i].material)
        p4.appendChild(t4)
        document.getElementById('controlText').appendChild(p4)

        console.log(newArray[i].brand)
        console.log(newArray[i].price)
        console.log(newArray[i].material)
        console.log(newArray[i].size)
        console.log(newArray[i].color)
    }
}