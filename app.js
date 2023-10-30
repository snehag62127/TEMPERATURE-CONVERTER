let celciusInput = document.querySelector('#celcius > input')
let farheniteInput = document.querySelector('#farhenite > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn=document.getElementById('clear-btn')
let convertBtn=document.getElementById('convert-btn')

function roundNumber(number) {
    return Math.round(number*100)/100
}
//celcius to farhenite and kelvin
celciusInput.addEventListener('input',function(){
    let cTemp=parseFloat(celciusInput.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15

    convertBtn.addEventListener('click',()=>{
        celciusInput.value=roundNumber(cTemp)
        farheniteInput.value=roundNumber(fTemp)
        kelvinInput.value=roundNumber(kTemp)
    })
})
//farhenite to celcius and kelvin
farheniteInput.addEventListener('input',function(){
    let fTemp=parseFloat(farheniteInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let kTemp=cTemp+273.15

    convertBtn.addEventListener('click',()=>{
        celciusInput.value=roundNumber(cTemp)
        farheniteInput.value=roundNumber(fTemp)
        kelvinInput.value=roundNumber(kTemp)
    })
})
//kelvin to farhenite and celcius
kelvinInput.addEventListener('input',function(){
    let kTemp=parseFloat(kelvinInput.value)
    let cTemp=kTemp-273.15
    let fTemp=(cTemp*(9/5))+32
    
    convertBtn.addEventListener('click',()=>{
        celciusInput.value=roundNumber(cTemp)
        farheniteInput.value=roundNumber(fTemp)
        kelvinInput.value=roundNumber(kTemp)
    })
})

btn.addEventListener('click',()=>{
    celciusInput.value=""
    farheniteInput.value=""
    kelvinInput.value=""
})