// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.


// Kata 1: Use the .filter() method
const activeUsers = users.filter(user => user.isActive)
printKata(1, activeUsers)




// Kata 2: Use the .map() method
const email = users.map(user => user.email)
printKata(2, email)


// Kata 3: Use the .some() method
const ovationCheck = users.some(user => user.ovationCheck)
printKata(3, ovationCheck)


// Kata 4: Use the .find() method
const userOver30 = users.find(user => user.age > 38)
printKata(4, userOver30)


// Kata 5: Use the .filter() and .find() methods
const activeOver30 = users
    .filter(user => user.isActive)
    .find(user => user.age > 38)
printKata(5, activeUsers)


// Kata 6: Use the .filter() and .map() methods

const zencoBalance = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance)
printKata(6, zencoBalance)


//     Show the balance of every user in the array from the "ZENCO" company.

// Kata 7: Use the .filter() method with .includes() and the .map() method
const fugiatAge = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)
printKata(7, fugiatAge)

