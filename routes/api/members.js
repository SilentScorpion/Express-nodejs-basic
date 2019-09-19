
const members = require('../../Members.js');
const express = require('express');

const router = express.Router();


router.get('/', (req,res) => {
    res.json(members);
});


//Get single member
router.get('/:id', (req,res) => {
    res.json(members.filter(members => members.id === parseInt(req.params.id)));
});


//Middleware for body Parser(0)
app.use(express.json());
router.post('/', (req,res) => {
    const member = {
        name: req.body.name,
        email : req.body.email
    }

    members.push(member);

    res.send('Added a new member' + members);
});

module.exports = router;

