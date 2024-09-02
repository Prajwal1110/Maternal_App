const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User');

const router = express.Router();

router.get('/dashboard', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json({
      name: user.name,
      pregnancyStatus: user.profile.pregnancyStatus,
      dueDate: '2024-12-25',  // Example due date
      trimester: '2nd Trimester',
      milestones: [
        'Week 12: Baby’s organs are formed.',
        'Week 20: Baby can hear sounds.',
      ]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
