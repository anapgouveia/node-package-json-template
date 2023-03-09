import { countries } from "./countries.js";

//para rodar no terminal: node index.js
// console.log(countries)
// console.table(countries)

const value = process.argv[2]
if(!value){
  console.log('Informe um país')
}else{
  const result = countries.filter((country)=>{
    return country.name.toLowerCase().includes(value.toLowerCase())
  }
  )
  console.table(result)
}


//country= cada valor ({}) no arquivo countries



// console.log(result)

