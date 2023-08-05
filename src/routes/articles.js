const router = require('express').Router()

router.get('/articles', (req, res) => {
    res.send("I am Router");
});

router.get('/articles/:id', (req, res) => {
    res.send("I am Router");
});

router.post('/articles', (req, res) => {
    res.send("I am Router");
});

router.put('/articles', (req, res) => {
    res.send("I am Router");
});

router.delete('/articles', (req, res) => {
    res.send("I am Router");
});
module.exports = router;