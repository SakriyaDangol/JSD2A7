const fruitsInventory = {
    apple: {
        quantity: 200,
        price: 100,
    },

    mango: {
        quantity: 300,
        price: 200
    },

    orange: {
        quantity: 555,
        price: 50
    },

    banana: {
        quantity: 645,
        price: 25
    },

    grapes: {
        quantity: 799,
        price: 100
    }
}

console.log(fruitsInventory)

const {apple} = fruitsInventory;
console.log(apple);