const createNumber = () => {
  for (let i = 0; i < 76; i++) {
   const tabellone = document.getElementById("tabellone")

    const numberCellDiv = document.createElement("div")
    numberCellDiv.classList.add("number")

    const numberCellText = document.createElement("span")
    numberCellText.innerText = i + 1

    numberCellDiv.appendChild(numberCellText)
    tabellone.appendChild(numberCellDiv)
  }
}

window.onload = () => {
    createNumber()
}