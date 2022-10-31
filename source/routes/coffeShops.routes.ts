/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/coffeShops.controller';
const router = express.Router();

router.get('/coffeShops', controller.getCoffeShops);
router.get('/coffeShop/:id', controller.getCoffeShopById);
router.put('/coffeShop/:id', controller.updateCoffeShopId);
router.post('/add-coffeShop', controller.addCoffeShop);
router.delete('/delete-coffeShop/:id', controller.deleteCoffeShopId);


// router.post('/addstore',  controller.addStore);



export default { router };