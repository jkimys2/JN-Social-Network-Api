// Import files
const router = require("express").Router();
const apiRoutes = require("./api");

// Set up router
router.use("/api", apiroutes);
router.use((req, res) => res.send("Wrong route! Try another route!"));

// Export router
module.exports = router;
