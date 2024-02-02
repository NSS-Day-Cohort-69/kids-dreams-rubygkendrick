import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrityMatch = ""

    for (const celebrity of celebrityArray) {
       let match = celebrity
        //for (const kid of kids) { 
            if (match.id === kidObject.celebrityId) // we were going to discuss this... why did I iterate? because i am tired 
                celebrityMatch = match
        //}
    }

    return celebrityMatch

}

export const Pairings = () => {
    let html = ""
    html = "<ul>"
    
    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        //const thisKid = kid <--- this also not necessary 

        html += `
        <li>
            ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
        </li>
    `

    }

    html += "</ul>"

    return html
}

