var list = document.querySelector('main ol')
var btnButton = document.querySelector('button')
var txtInput = document.querySelector('input')
var body = document.querySelector('body')
var time = document.querySelector('p time')

var thingsList = JSON.parse(localStorage.getItem('saveThingsList')) || []

const renderThingsList = () => {
    list.innerHTML = ``
    for(things of thingsList) {
        let thingsElement = document.createElement('li')
        thingsElement.style.listStyle = 'upper-roman'

        let thingsText = document.createTextNode(things)

        let buttonElement = document.createElement('button')
        buttonElement.style.marginLeft = '50px'

        let position = thingsList.indexOf(things)
        buttonElement.setAttribute('onclick', `deleteList(${position})`)
        
        let buttonText = document.createTextNode('Excluir')

        buttonElement.appendChild(buttonText)

        thingsElement.appendChild(thingsText)
        thingsElement.appendChild(buttonElement)

        list.appendChild(thingsElement)

    }
}
renderThingsList()

const addThingsList = () => {
    let thingsText = txtInput.value
    if(thingsText == 0) {
        alert('Não deixe nada vazio!')
        console.warn('Input vazio.')
    }else{
        thingsList.push(thingsText)
        thingsText.value = ``
        renderThingsList()
        saveListStorage()
    }
}

btnButton.onclick = addThingsList

const deleteList = (pos) => {
    thingsList.splice(pos, 1)
    renderThingsList()
    saveListStorage()
}

const saveListStorage = () => {
    localStorage.setItem('saveThingsList', JSON.stringify(thingsList))
}

const loadingBody = () => {
    let date = new Date()
    let days_of_the_week = [
        'Domingo', 
        'Segunda-feira', 
        'Terça-feira', 
        'Quarta-feira', 
        'Quinta-feira',
        'Sexta-feira', 
        'Sábado'
    ]
    let months_year = new Array(
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    )
    
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let day = date.getDay()
    let hours = date.getHours()
    let year = date.getFullYear()
    
    
    if(hours >= 0 && hours <= 4 && min <= 59 && sec <= 59) {
        time.innerHTML = `Hoje é ${days_of_the_week[date.getDate()]}, ${day - 1} de ${months_year[date.getMonth()]} de ${year}. Boa madrugada!`
    }else if(hours > 4 && hours <= 11 && min <= 59 && sec <= 59) {
        time.innerHTML = `Hoje é ${days_of_the_week[date.getDate()]}, ${day - 1} de ${months_year[date.getMonth()]} de ${year}. Bom dia!`
    }else if(hours >= 12 && hours <= 17 && min <= 59 && sec <= 59) {
        time.innerHTML = `Hoje é ${days_of_the_week[date.getDate()]}, ${day - 1} de ${months_year[date.getMonth()]} de ${year}. Boa tarde!`
    }else{
        time.innerHTML = `Hoje é ${days_of_the_week[date.getDate()]}, ${day - 1} de ${months_year[date.getMonth()]} de ${year}. Boa noite!`
    }
}

body.onload = loadingBody