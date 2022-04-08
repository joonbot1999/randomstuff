// just a way of displaying time from the server without changing the overall directory
async function checkTime() {
    let response = await fetch("/api/getTime")
    let resultText = await response.text()

    document.getElementById("results").innerHTML = resultText
}

async function pluralize() {
    let inputWord = document.getElementById("wordInput").value
    let response = await fetch("/api/pluralize?word=" + inputWord)
    let resultText = await response.text()
    document.getElementById("results2").innerHTML = resultText
}