const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User');

const router = express.Router();

router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { pregnancyStatus, healthHistory, dietaryPreferences, existingConditions } = req.body;

    const updatedProfile = await User.findByIdAndUpdate(
      req.user,
      { profile: { pregnancyStatus, healthHistory, dietaryPreferences, existingConditions } },
      { new: true }
    );

    res.json(updatedProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
