import experss from 'express';
const router = experss.Router();
import fetchPromtfromUser from '../controller/controller.js';

router.post("/ask" , fetchPromtfromUser);

export default router;