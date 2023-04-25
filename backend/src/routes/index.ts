import { Router } from 'express';
import { checkSchema } from 'express-validator';
import { imageCtrl, homeCtrl } from '../controllers/index.js';
import { schemaUploads, schemaComment } from '../validators/schemas-validators.js';

const router = Router();

router.get('/index', homeCtrl.index);

router.post('/upload', checkSchema(schemaUploads), homeCtrl.upload);

router.get('/gallery', homeCtrl.gallery);

router.get('/gallery/:imageId', imageCtrl.image);

router.post('/:imageId/comment', checkSchema(schemaComment), imageCtrl.comment);

router.delete('/:imageId', imageCtrl.deleteImage);

export default router;