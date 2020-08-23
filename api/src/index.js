const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('Our api work correctly!')
});

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`);
});
