//api-routes.js

//import express routess
const express = require ("express");
const router = express.Router();

//set default api response
router.get('/', (req, res) => {
 res.json({  status : "API iTS Working", message :"warning"
});

})

//import contacts controller
const contactController = require("./contactController");

//contcat routes 
router.route('/contacts')
.get(contactController.index)
.post(contactController.new);

router.route("contacts/:contact_id")
.get(contactController.view)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete)


module.exports = router;