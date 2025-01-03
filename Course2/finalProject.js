// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;
//console.log(dishData[0].name) //Italian pasta
//console.log(dishData[0].price) //9.55
//https://www.freecodecamp.org/news/how-to-access-properties-from-an-array-of-objects-in-javascript/
// Implement getPrices()
function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
        var finalPrice;
        //dishData.forEach(dish => {
            if (taxBoolean == true) {
                finalPrice = dishData[i].price * tax;
            }
            else if (taxBoolean == false) {
                finalPrice = dishData[i].price;
            }
            else {
                console.log('You need to pass a boolean to the getPrices call!');
                return; //return (to "jump out" of the further function execution)
            }
            console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`)
            // console.log('Dish: ', dishData[i].name)
            // console.log('Price: $', finalPrice)
        }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        }
        else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    }
    else {
        console.log("The second argument must be a number between 0 and 30");
    }
}
    

// Call getDiscount()
//getDiscount(true, 2)
console.log('#################')
//getDiscount(false, 10)
console.log('#################')
getDiscount(true, 2222)
