const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('app listening on port 3000');
})