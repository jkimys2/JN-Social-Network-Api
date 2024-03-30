// Import files
const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

// Set up router
router.use("thoughts", thoughtRoutes);
router.use("users", userRoutes);

// Export router
module.exports = router;
