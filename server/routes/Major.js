const router = require('express').Router();
const MajorController = require('../controllers/MajorController')

router.get('/',MajorController.Getmajor)
router.get('/:Specialid',MajorController.GetmajorOfSpeacialty)
router.post('/:Specialid',MajorController.SaveAmajorOfSpeacialty)
router.put('/:id',MajorController.UpdateAmajorOfSpeacialty) // check ?
router.delete('/:id',MajorController.DeleteAmajorOfSpeacialty)

module.exports = router