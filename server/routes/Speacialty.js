const router = require('express').Router();
const SpecialtyController = require('../controllers/SpeacialtyController')


router.get('/', SpecialtyController.GetAllSpeacialty)
router.post('/',SpecialtyController.SaveOneSpeacialty)
router.put('/:id',SpecialtyController.UpdateOneSpeacialty)
router.delete('/:id',SpecialtyController.DeleteOneSpeacialty)

module.exports = router