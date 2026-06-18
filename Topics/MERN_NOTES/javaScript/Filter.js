
/*chunk of array question slice it and extract in pair of size
const arr = ['Abhimanyu Singh', 'Junior Back-End developer', 'Atthah', 'Gurugram', 2026, 2024, 2023, 2020, 9998989889, 'MCA', 'BSC(CS)', 'XII-PCM']

const size = 2;

let result = []

function largeChunkArray(arr , size) {
    const string = arr.filter(item => typeof item === 'string')
    const numbers = arr.filter(item => typeof item === 'number')

    let rearranged = [...string, ...numbers]
    for (let i = 0; i < rearranged.length; i += size) {
        result.push(rearranged.slice(i , i + size))
    }
    console.log(size)
    return result
}

console.log(largeChunkArray(arr ,size))
*/

// why let const run size

/* Output
 [
  [ 'Abhimanyu Singh', 'Junior Back-End developer' ],
  [ 'Atthah', 'Gurugram' ],
  [ 'MCA', 'BSC(CS)' ],
  [ 'XII-PCM', 2026 ],
  [ 2024, 2023 ],
  [ 2020, 9998989889 ]
]
*/


/* Find the Electronics with gt> 100 and category = Assecerios , electronics

const data = [
    {productName: 'Laptop', brand: 'Acer', category: 'electronics', price: '$2300'},
    {productName: 'Laptop', brand: 'H.P', category: 'electronics', price: '$1900'},
    {productName: 'Mobile-Phones', brand: 'Apple', category: 'electronics', price: '$2200'},
    {productName: 'Charger', brand: 'Samsung', category: 'aCcessories ', price: '$2300'},
    {productName: 'Laptop', brand: 'Acer', category: 'electronics ', price: '$2300'},
    {productName: 'Chip', brand: 'Intel', category: 'Accessories ', price: '$850'},
    {productName: 'Laptop', brand: 'Apple', category: 'electronics', price: '$2890'}
]


function filtersProduct(data){

    const productFilter = data.filter(item => {const numericPrice = parseInt(item.price.replace("$",""))
        const cleanCategory = item.category.trim().toLowerCase()

        return numericPrice > 2100 && cleanCategory === 'accessories'
    })
    
    
    return productFilter
}

console.log(filtersProduct(data))
*/


/* Filter Odd Even from an array 
const arr = [1231 , 4784 , 3943 , 9493 , 2989 , 8834 ,2748 , 3939 , 2426 , 9929 , 3783 , 3672 , 2836]
let Evenresult = []
let Oddresult = []
function OddEven(arr){
    const Even = arr.filter(item => item % 2 === 0 )
    const Odd = arr.filter(item => item % 2 !== 0)
    let Evens = [...Even]
    Evenresult.push(Even)
    console.log(`Even: [${Evenresult}]`)

    let Odds = [...Odd]
    Oddresult.push(Odds)
    console.log(`ODD: [${Oddresult}]`)
};

OddEven(arr)
*/