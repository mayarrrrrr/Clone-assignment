
// findFavoriteFood = function( name)
// function findFavoriteFood(name){


//     if (name == "Odour") {
//         console.log("Favorite food is fish")
//     }

//     else if (name == "Mayar") {
//         console.log("Favorite food is pizza")
//     }

//     else {
//         console.log("Sorry I seem not to remember your favorite food")
//     }


// }

// findFavoriteFood("John")

// function add(a,b){
//     return a+b
// }
// result = add(2,30)
// console.log(result)

function calculator(a,b, operator){
    
    if (operator == '+'){
        return a + b}
    else if (operator == '-'){
        return a - b

    }
    else if (operator == '*'){
        return a * b
    }
    else if (operator =='/'){
        return a / b
    }
    else{
        return "Invalid operator"
    }
}

result =calculator(4,3 ,'=')
console.log(result)

