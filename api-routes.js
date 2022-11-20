//
const express = require ("express");
const router = express.Router();

router.get('/', (req, res) => {
 res.json({  status : "API iTS Working", message :"warning"
});

})
router.post('/', (req, res) => {

    res.send('Request Create Masuk');
})

router.put('/', (req, res) => {

    res.send('Request Update Masuk');
})


router.delete('/', (req, res) => {

    res.send('Request Delete Masuk');
})



module.exports = router;