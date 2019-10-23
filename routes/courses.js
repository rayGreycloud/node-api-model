const express = require('express');

const { getCourses } = require('../controllers/courses');

const router = express.Router();

router.route('/').get(getCourses);

// router
//   .route('/:id')
//   .get(getCourses)

module.exports = router;
