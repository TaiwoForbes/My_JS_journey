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

/* for(let i = 0; i<companies.length;i++){
    console.log(companies[i]);
} */

// ForEach

/* companies.forEach((company)=>{
    console.log(company);
}) */

// map
// sort
// reduce

// Combine method
const combined = ages.map(age => age * 2)
.filter((age)=> age >= 40)
.sort((age1,age2)=> age1 - age2)
.reduce((age1,age2)=> age1 + age2,0)

console.log(combined);
