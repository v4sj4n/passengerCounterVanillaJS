let count = 0 
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


let increment = () => {
    count++
    countEl.textContent = count
}

let save = () => {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}