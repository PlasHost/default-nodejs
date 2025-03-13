const express = require("express");
const app = express();

const PORT = process.env.SERVER_PORT || 8001; // Use the Heroku-assigned port or fallback to 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/status", (req, res) => {
    res.send(getReply());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function getReply() {
    return `Queries: ${queries}`;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let queries = 0;

function printEnvVars() {
    console.log("Environment variables:");
    console.log(`SERVER_PORT: ${process.env.SERVER_PORT || "undefined"}`);
}

// Main function
(async () => {
    printEnvVars();
})();