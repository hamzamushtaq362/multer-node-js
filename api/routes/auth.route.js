const express = require('express');
const multer  = require('multer')
const auth = require('./../controller/auth.controller');
const product = require('./../controller/product');
const authMiddleware = require('./../middlewares/auth.middleware');
const uploadMiddleware = require('./../middlewares/upload.middleware');
const router = express.Router();
router.post('/login',auth.login);
// authMiddleWare.auth,
// router.post('/user', auth.user);
router.get('/users', auth.users);
// router.post('/signup',authMiddleware.auth, auth.signup);
router.post('/signup', auth.signup);

router.post(
'/addProduct', 
product.create
);

router.get(
'/getProducts', 
product.getProducts
);

router.post(
'/searchProducts',
product.searchProducts
);

router.post(
'/searchProductByPrice',
product.searchProductByPrice
);

router.post('/stats', uploadMiddleware.single('uploaded_file'), auth.upload);
module.exports = router;