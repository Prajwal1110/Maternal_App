const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/resources', authMiddleware, (req, res) => {
  res.json({
    articles: [
      { title: 'Prenatal Care 101', link: '/articles/prenatal-care-101' },
      { title: 'Signs of Labor', link: '/articles/signs-of-labor' },
    ],
    videos: [
      { title: 'Breastfeeding Basics', link: '/videos/breastfeeding-basics' },
      { title: 'Postpartum Recovery', link: '/videos/postpartum-recovery' },
    ]
  });
});

module.exports = router;
