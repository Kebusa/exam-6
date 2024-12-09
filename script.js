const eShop = [
    {name: "Green", phoneNumber:"+7 777 777 7777", product: [
        {productName:"Нан" , category: "нан", price: 300 , stock: 250 },
        {productName:"Май" , category: "сүт", price: 520 , stock: 460 },
        {productName:"Чай" , category: "сусын", price: 250 , stock: 150 },
        {productName:"Коффе" , category: "сусын", price: 650 , stock: 450 },
        {productName:"Пицца" , category: "нан", price: 1200 , stock: 1000 }
    ] }
]


function changeShopname(){
    let shopName = eShop[0].name = prompt("Enter name shop") 

    return eShop
}

function changePhoneNumber() {
    let shopNumber = eShop[0].phoneNumber = prompt("Enter number:")
    if (shopNumber == "") {
        shopNumber = eShop[0].phoneNumber = "+7 777 777 7777"
    }

    return eShop
}




function listProductNames() {
    return eShop[0].product.flatMap(onimder => onimder.productName)
}



function addProduct() {
    let addproductName = prompt("Add product name:")
    let addproductcatefory = prompt("Add category:")
    let addproductPrice = +prompt("Add product price:")
    let addproductStock = +prompt("Add stok price:")

    eShop[0].product.push({addproductName, addproductcatefory, addproductPrice, addproductStock})

    return eShop
}



function applydiscountCategory() {
    let nameCategory = prompt("Категория аты: ")
    let discount = +prompt("Скидка пайызын жазыңыз: ")

    let filteredcat = eShop[0].product.filter(cat => cat.category == nameCategory )
    if (filteredcat.length >= 1) {
        eShop[0].product.reduce((total,sum) => total += sum.price * ((100 - discount)/ 100), 0)
    }
    
    return filteredcat
}
console.log(applydiscountCategory());


function menu() {
    let menu = +prompt(`1.Дүкеннің атын қзгерту\n2.Телефон нөмірін жаңарту\n3.Өнімдердің атауын шығару\n4.Жаңа өнңм қосу\n5.Категорияаға жеңілдік жасау\n6.Шығу   `)
    while (true) {
        if (menu === 6) {
            alert("Сау болыңыз!!")
            break;
        }
        switch (menu) {
            case 1:
                changeShopname()
            break;
            case 2:
                changePhoneNumber()
            break;
            case 3:
                listProductNames()
            break;
            case 4:
                addProduct()
            break;
            case 5:
                applydiscountCategory()
            break;
            default:
                alert("Қате таңдау. Қайталап көріңіз")
            break
          
        }
    }
    return eShop
}