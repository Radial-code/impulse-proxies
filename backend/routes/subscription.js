const express = require("express");
const router = express.Router();
const {
    createCheckoutSession,
    sessionStatus,
} = require("../controllers/subscription");

router.post("/createCheckoutSession", createCheckoutSession);
router.get("/sessionStatus",sessionStatus)
module.exports = router;