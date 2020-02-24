
function carLoanPayment(prin, leng, inte){
  let monCarPayment = prin*(((inte/12)*(1+(inte/12))**leng))/((1+(inte/12))**leng-1)
  return monCarPayment
  }

function homeLoanPayment(prin, leng, inte){
let monHomePayment = prin*(((inte/12)*(1+(inte/12))**(leng*12)))/((1+(inte/12))**(leng*12)-1)
  return monHomePayment
}

  
  let decision='Continue'
  
while(decision == 'Continue'||'continue'){
  let which = prompt('Do you want to do a Car Loan or Home Loan? Enter Car or Home')
  if (which==='Car'){
    let carPrincipal=prompt('What is the Loan amount?')
    let carInterest=prompt('What is the annual interest?(in decimal form)')
    let carLength=prompt('What is the length in months of the loan?')
    carIntPrincipal=parseInt(carPrincipal)
    carIntInterest=parseFloat(carInterest)
    carIntLength=parseInt(carLength)
    carPayment=carLoanPayment(carIntPrincipal,carIntLength,carIntLength)
    alert(`A car loan for ${carIntPrincipal} over ${carIntLength} months at ${carIntInterest*100}% interest would have a monthly payment of $ ${carPayment}`)
    
} else if (which==='Home'){
    let homePrincipal=prompt('What is the Loan amount?')
    let homeInterest=prompt('What is the annual interest?(in decimal form)')
    let homeLength=prompt('What is the length in years of the loan? (15 or 30)')
    homeIntPrincipal=parseInt(homePrincipal)
    homeIntInterest=parseFloat(homeInterest)
    homeIntLength=parseInt(homeLength)
    homePayment=homeLoanPayment(homeIntPrincipal,homeIntLength,homeIntLength)
    alert(`A home loan for ${homeIntPrincipal} over ${homeIntLength} years at ${homeIntInterest*100}% interest would have a monthly payment of $ ${homePayment}`)

} else {alert('Error enter Car or Home or Stop if you want to kill the program (follow capitalization)')}
   let decision = prompt('Do you want to do another loan? Enter Continue or Stop')
   }
   alert('Have a good one.')

  