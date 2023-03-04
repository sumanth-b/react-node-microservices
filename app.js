const express = require('express');
const app = express();


app.get('/posts', (req, res) => {
    res.send("working fine");
});

app.listen(4000, () => {
    console.log("app is running on 4000");
});