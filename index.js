var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});