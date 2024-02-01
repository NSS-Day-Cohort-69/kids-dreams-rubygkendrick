import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()


//add an event listener that give a window alert that says 
// celebrity.name is a celebrity.sport star
// 


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let starsName = { name: "incorrect" }
        let starsSport = { name: "incorrect" }
        if (itemClicked.dataset.type === "celebrity") { // Was a celebrity list item clicked?
            for (const celebrity of celebrities) {
                if (parseInt(itemClicked.dataset.id) === celebrity.id) { // make sure a specifc celebrity is referenced 

                    starsName = celebrity.name
                    starsSport = celebrity.sport
                }
                
            }
            window.alert(`${starsName} is a ${starsSport} star`)
        }
    }




)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
