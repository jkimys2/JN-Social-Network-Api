// Import files
const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Route /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// Route /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Route /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

// Route /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionID").delete(deleteReaction);

// Export router
module.exports = router;
