import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrityMatch = { name: "incorrect" }

    for (const celebrity of celebrities) {
       let match = celebrity
        for (const kid of kids) {
            if (match.id === kidObject.celebrityId)
                celebrityMatch = match
        }
    }

    return celebrityMatch

}

export const Pairings = () => {
    let html = ""
    html = "<ul>"
    
    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        const thisKid = kid

        html += `
        <li>
            ${thisKid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${thisKid.wish}
        </li>
    `

    }

    html += "</ul>"

    return html
}

