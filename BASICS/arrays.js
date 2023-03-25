let names = ['john', 'bobo', 'barry', 'olga', 'ben']
console.log(names.length)
console.log(names[names.length - 1])

/* concat */
const lastNames = ['pepper', 'onion','banana']
const allNames = names.concat(lastNames)
console.log(allNames)
// reverse
console.log(allNames.reverse())

// unshift
allNames.unshift('susy')
allNames.unshift('anna')
console.log(allNames)

// shift
allNames.shift('susy')
allNames.shift('anna')
console.log(allNames)

// push
allNames.push('susy')
allNames.push('anna')
console.log(allNames)

// pop
allNames.pop('susy')
allNames.pop('anna')
console.log(allNames)

// splice - mutates the original array
const specificName = allNames.splice(2,1)
console.log(specificName)
console.log(specificName.sort())
