/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/coffeShops.controller';
const router = express.Router();

router.get('/all-coffeShops', controller.getCoffeShops);
router.get('/coffeShop/:id', controller.getCoffeShopById);
// router.post('/addstore',  controller.addStore);



export default { router };