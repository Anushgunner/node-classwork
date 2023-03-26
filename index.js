const express = require("express");

const app = express();
const PORT = 4000;

//import json data
const quotesData = require("./quotes.json")


const getRandomIndex = () => {
    return Math.floor(Math.random() * (quotesData.quotes.length))
}


//Routes
app.get("/", (req, res) => {
    res.send("Quotes app")
})


app.get("/quote", (req, res) => {
    res.json(quotesData.quotes[getRandomIndex()])
})


app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})



console.log("change for the 2nd commit")
console.log("New changes to main after branching")

