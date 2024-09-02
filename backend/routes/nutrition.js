const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/nutrition', authMiddleware, (req, res) => {
  res.json({
    recommendations: [
      { meal: 'Breakfast', items: ['Oatmeal', 'Fruit smoothie'] },
      { meal: 'Lunch', items: ['Grilled chicken salad', 'Quinoa'] },
      { meal: 'Dinner', items: ['Baked salmon', 'Steamed broccoli'] },
    ],
    tips: [
      'Stay hydrated by drinking plenty of water.',
      'Include leafy greens in your diet.',
      'Avoid high-mercury fish.'
    ]
  });
});

module.exports = router;
