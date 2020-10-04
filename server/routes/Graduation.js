const router = require('express').Router();
const GraduationController = require('../controllers/GraduationController')

router.get('/:id',GraduationController.GetGraduationbyMajor_ID);
router.get('/',GraduationController.GetAllGraduation);
router.post('/:major',GraduationController.SaveOneGraduation);
router.put('/:id',GraduationController.UpDateOneGraduation);
router.delete('/:id',GraduationController.DeleteOneGraduation);

module.exports = router