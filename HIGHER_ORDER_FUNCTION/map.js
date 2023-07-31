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

const ages = [16,25,33,12,20,18,16,5,54,21,44,61,13,45,25,64,32]


// Map => Map create a new arrray from a particular arr

// create array of company name
const companyNames = companies.map((company)=>{
    return `${company.name} ${company.start} ${company.end}`
})
// console.log(companyNames)

const age = ages.map(age=> Math.floor(Math.sqrt(age)))
.map(age => age * 2) //The reason why we can do this is because map alway return an array
console.log(age);