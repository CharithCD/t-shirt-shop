const express = require("express");
const router = express.Router();


const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const { updateStock } = require("../controllers/product");
const { getOrderById,
        createOrder,
        getAllOrders, 
        updateStatus, 
        getOrderStatus } = require("../controllers/order");

//all of params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//all of actual routes
//create route
router.post(
    "/porder/create/:userId",
    isSignedIn,
    isAuthenticated,
    pushOrderInPurchaseList,
    updateStock,
    createOrder
  );

//read
router.get("/order/all/:userId" ,isSignedIn, isAuthenticated,isAdmin, getAllOrders )

//status of orders
router.get("/order/status/:userId" ,isSignedIn, isAuthenticated,isAdmin, getOrderStatus)
router.put("/order/:orderId/status/:userId" ,isSignedIn, isAuthenticated,isAdmin, updateStatus )


module.exports = router;