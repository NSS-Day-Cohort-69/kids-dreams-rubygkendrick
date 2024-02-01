import { getChildren } from "./database.js"

const children = getChildren()
//need an event listener 
//when i click on a kid ((if parseInt(dataset.id) === child.id)) i need a window alert that says :
//child.name 's wish is child.wish



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let childName = { name: "incorrect" }
        let childWish = { name: "incorrect" }
        if (itemClicked.dataset.type === "child") {
            for (const child of children) {
                if (parseInt(itemClicked.dataset.id) === child.id) { // Was the specific child clicked? 
                    childName = child.name
                    childWish = child.wish
                }
                // this is currently displaying an array i want objects 
            }
            window.alert(`${childName}'s wish is to ${childWish}`)
        }
    }




)


export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

