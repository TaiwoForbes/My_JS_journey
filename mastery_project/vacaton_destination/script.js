let detailsFrom = document.querySelector('#destination_details_form')

detailsFrom.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
    event.preventDefault()
    let destName = event.target.elements['name'].value
    let destLocation = event.target.elements['location'].value
    let destPhoto = event.target.elements['photo'].value
    let destDesc = event.target.elements['description'].value

    for (let i = 0; i < detailsFrom.length; i++) {
        detailsFrom.elements[i].value = ""
    }

    // Add the card
    let destCard = creatDestinationCard(destName, destLocation, destPhoto, destDesc)


    let wishListContainer = document.querySelector('#destinations_container')
    if (wishListContainer.children.length === 0) {
        document.querySelector('#title').innerHTML = 'My wish list'
    }
    wishListContainer.append(destCard)

}


function creatDestinationCard(name, location, photoUrl, description) {
    let card = document.createElement('div')
    card.className = 'card'

    // For Img
    let img = document.createElement('img')
    let constantPhotoUrl = 'assets/avatar3.jpg'

    if (photoUrl.length === 0) {
        img.setAttribute('src', constantPhotoUrl)
    }
    else {
        img.setAttribute('src', photoUrl)
    }
    card.appendChild(img)

    // For the card body
    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    //Title
    let cardTitle = document.createElement('h3')
    cardTitle.innerText = name
    cardBody.appendChild(cardTitle)

    let subTitle = document.createElement('h4')
    subTitle.innerText = location
    cardBody.appendChild(subTitle)

    if (description.length !== 0) {
        let cardText = document.createElement('p')
        cardText.className = 'card-text'
        cardText.innerText = description
        cardBody.appendChild(cardText)
    }

    // Remove Button
    var cardDeleteBtn = document.createElement('button')
    cardDeleteBtn.innerText = 'Remove'


    cardDeleteBtn.addEventListener('click', removeDestination)
    cardBody.appendChild(cardDeleteBtn)
    card.appendChild(cardBody)


    return card
}

function removeDestination(event) {
    var card = event.target.parentElement.parentElement
    card.remove()
}