const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        return console.error('error', err)
    }

    console.log(`server is listening on port ${port}`)
})
