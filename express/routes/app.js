var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).json({ message: 'message' });
});

// router.get('/', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from Express.js!</h1>');
//   res.end();
// });
// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
// router.post('/', (req, res) => res.json({ postBody: req.body }));

module.exports = router;
