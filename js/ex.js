var listElement = document.querySelector('main ul')
var inputElement = document.querySelector('input')
var buttonElement = document.querySelector('button')
var time = document.querySelector('p time')
var body = document.querySelector('body')

var secretMessage = JSON.parse(localStorage.getItem('list-secret-message')) || [
    'Aprender',
    ' não',
    ' é',
    ' sobre',
    ' o',
    ' que',
    ' você',
    ' consegue',
    ' facilmente',
    ' fazer',
    ' na',
    ' primeira',
    ' vez,' ,
    ' mas',
    ' sobre',
    ' o',
    ' que',
    ' você',
    ' pode',
    ' descobrir',
    ' 2015',
    ' Chris',
    ' Pine',
    ' recife'
]

const renderSecretMessage = () => {
    listElement.innerHTML = ``
    for(message of secretMessage) {
        let messageElement = document.createElement('li')
        let messageText = document.createTextNode(message)        

        let buttonElement = document.createElement('button')
        buttonElement.style.marginLeft = '50px'

        let linkText = document.createTextNode('Excluir')
        buttonElement.appendChild(linkText)

        let position = secretMessage.indexOf(message)
        buttonElement.setAttribute('onclick', 'deleteSecretMessage(' + position + ')')

        messageElement.appendChild(messageText)
        messageElement.appendChild(buttonElement)

        listElement.appendChild(messageElement)
    }
}
renderSecretMessage()

const addSecretMessage = () => {
    if(inputElement.value.length == 0) {
        alert('[ERRO! POR FAVOR DIGITE ALGO.]')
        console.warn('[ERRO! Input vazio.]')
    }else{
        var messageText = inputElement.value
    
        secretMessage.push(messageText)
        inputElement.value = `` 
        renderSecretMessage() 
        saveSecretMessage()
    }
}
buttonElement.onclick = addSecretMessage

const deleteSecretMessage = (pos) => {
    secretMessage.splice(pos, 1)
    renderSecretMessage()
    saveSecretMessage()
}

const saveSecretMessage = () => {
    localStorage.setItem('list-secret-message', JSON.stringify(secretMessage))
}

const setDateHour = () => {
    let days_of_the_week = new Array(
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    )
    let months_year = new Array(
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'julho',
        'Agosto',
        'Setembro',
        'Outubro', 
        'Novembro',
        'Dezembro'
    )

    let date = new Date()
    let day = date.getDay()
    let year = date.getFullYear()
    let hours = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

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

body.onload = setDateHour