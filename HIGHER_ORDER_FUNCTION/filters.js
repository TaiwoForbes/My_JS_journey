const companies = [
    {
        name:"Company One", category:"Finace", start:1981,end:2003
    },
    {
        name:"Company Two", category:"Retail", start:1992,end:2008
    },
    {
        name:"Company   Three", category:"Auto", start:1999,end:2007
    },
    {
        name:"Company Four", category:"Retail", start:1989,end:2018
    },
    {
        name:"Company Five", category:"Technology", start:2009,end:2014
    },
    {
        name:"Company Six", category:"Finace", start:1987,end:2010
    },
    {
        name:"Company Seven", category:"Auto", start:1986,end:1996
    },
    {
        name:"Company Eight", category:"Technology", start:2011,end:2016
    },
    {
        name:"Company Nine", category:"Retail", start:1981,end:1989
    },
]

const ages = [33,12,20,18,16,5,54,21,44,61,13,45,25,64,32]

// Filter => This helps us filter stuff from an array or an object

/* var drink = []
ages.forEach((age)=>{
    if(age >= 18){
        drink.push(age)
    }
})
console.log(drink) */

/* const canDrink = ages.filter((age)=>{
    if(age >= 21){
        return true
    }
}) */

const canDrink = ages.filter(age => age >= 21)

const retailComp =companies.filter(company => company.category === 'Retail')

const companiesIn80 = companies.filter(company => {
    if(company.start >= 1980 && company.start <= 1990){
        return true // This is the same as returning company
        // return company 
    }
})

console.log(companiesIn80);
const companiesThatLast10years = companies.filter(company => (company.end - company.start >=10))
 
// console.log(companiesThatLast10years);
