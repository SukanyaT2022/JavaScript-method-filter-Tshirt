//dynamicHTML

//constructor cos set up properties- object orient 
function tShirt(brand, price, size, material, color,image){
this.brand = brand;
this.price = price;
this.size = size;
this.material = material;
this.color = color;
this.image = image;
}
var shirtOne = new tShirt("GAPS",3, "S","cotton", "White", "https://images.unsplash.com/photo-1598554793905-075f7b355cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" )// this is only one t shirt
var shirtTwo = new tShirt("Gucci",100, "M","polyester", "Red" , "https://images.pexels.com/photos/10153595/pexels-photo-10153595.jpeg?auto=compress&cs=tinysrgb&w=800")
var shirtThree = new tShirt("Zara",15, "L","blend", "Pink", "https://images.pexels.com/photos/15549906/pexels-photo-15549906/free-photo-of-woman-in-pink-shirt-at-the-seaside.jpeg?auto=compress&cs=tinysrgb&w=800" )
var shirtFour = new tShirt("H&M",28, "XL","tri-blend", "Black","https://images.pexels.com/photos/18077752/pexels-photo-18077752/free-photo-of-young-woman-looking-over-the-shoulder.jpeg?auto=compress&cs=tinysrgb&w=800" )

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

            alert('hellooooo')
            var div = document.createElement('div')
            div.setAttribute('class','smallBox')
    
            var img = document.createElement('img')
            img.setAttribute('src', newArray[i].image)
    div.appendChild(img)
    var divOne = document.createElement('div')
    divOne.setAttribute('class','controlText')
    
    
            var p = document.createElement('p')
            var t1 = document.createTextNode('price' + newArray[i].price)
            p.appendChild(t1)
      divOne.appendChild(p)
    
    //brand
            var p2 = document.createElement('p')
            var t2 = document.createTextNode('brand' + newArray[i].brand)
            p2.appendChild(t2)
            divOne.appendChild(p2)
    
            //material size
            var p3 = document.createElement('p')
            var t3 = document.createTextNode('size' + newArray[i].size)
            p3.appendChild(t3)
            divOne.appendChild(p3)
    //color
            var p4 = document.createElement('p')
            var t4 = document.createTextNode('color' + newArray[i].color)
            p4.appendChild(t4)
            divOne.appendChild(p4)
    //material
            var p6 = document.createElement('p')
            var t6 = document.createTextNode('material' + newArray[i].material)
            p6.appendChild(t6)
            divOne.appendChild(p6)
    
    div.appendChild(divOne)
            document.body.appendChild(div)
    
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
console.log(newArray)
console.log(fcolor)
    for(i=0;i<newArray.length; i++){
        //dynamic HTML create tag
        //for price
  
        var div = document.createElement('div')
        div.setAttribute('class','smallBox')

        var img = document.createElement('img')
        img.setAttribute('src', newArray[i].image)
div.appendChild(img)
var divOne = document.createElement('div')
divOne.setAttribute('class','controlText')


        var p = document.createElement('p')
        var t1 = document.createTextNode('price' + newArray[i].price)
        p.appendChild(t1)
  divOne.appendChild(p)

//brand
        var p2 = document.createElement('p')
        var t2 = document.createTextNode('brand' + newArray[i].brand)
        p2.appendChild(t2)
        divOne.appendChild(p2)

        //material size
        var p3 = document.createElement('p')
        var t3 = document.createTextNode('size' + newArray[i].size)
        p3.appendChild(t3)
        divOne.appendChild(p3)
//color
        var p4 = document.createElement('p')
        var t4 = document.createTextNode('color' + newArray[i].color)
        p4.appendChild(t4)
        divOne.appendChild(p4)
//material
        var p6 = document.createElement('p')
        var t6 = document.createTextNode('material' + newArray[i].material)
        p6.appendChild(t6)
        divOne.appendChild(p6)

div.appendChild(divOne)
        document.body.appendChild(div)

        console.log(newArray[i].brand)
        console.log(newArray[i].price)
        console.log(newArray[i].material)
        console.log(newArray[i].size)
        console.log(newArray[i].color)
    }
}
