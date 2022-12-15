const router = require("express").Router()

const cntrl = require("../controllers/events")


router.get("/*",cntrl.getDetails)

router.patch("/*",cntrl.UpdateEvent)

router.post("/add/",cntrl.AddEvent) 

router.post("/search/",cntrl.SearchEvent)


module.exports = router 