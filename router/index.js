const router = require('express').Router();
const multer = require('multer');
const path = require('path');

// mutter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, '../client/public/images');
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post('/upload', upload.array('files', 10), (req, res) => {
  try {
    res
      .status(201)
      .send({ message: 'Survey  Added Successfully.', status: 201 });
  } catch (err) {
    console.log(err.message);
  }
});

// controller call
const userController = require('../controller/user');
const orderController = require('../controller/order');
const surveyController = require('../controller/survey');
const drawingController = require('../controller/drawing');
const glassController = require('../controller/glass');
const aluminiumController = require('../controller/aluminium');
const productController = require('../controller/product');
const paymentController = require('../controller/payment');
const productorderController = require('../controller/productorder');
const employeeController = require('../controller/employee');
const clientController = require('../controller/masters/client');
const safetyequipmentController = require('../controller/masters/safetyequipment');
const quotationController = require('../controller/masters/quotation');
const approvedrawingController = require('../controller/approvedrawing');
const hanoverController = require('../controller/handover');
const uploadimagesController = require('../controller/uploadimges');
const uploadimagesController2 = require('../controller/uploadimges2');
// *****************************stage 2 ***************************
const siteSurveyController = require('../controller/secondStage/survey');
const glassacpfikingController = require('../controller/glassacphplfixing');
const notificationController = require('../controller/notificatonc');

// ************************Route for user**************************
router.post('/user/login', userController.login);
router.post('/user/adduser',upload.single('user_pic'),userController.adduser);
router.get('/user/get_users', userController.getUsers);
router.get('/get_user_id/:id', userController.get_user_id);
router.patch('/update_user/:id', upload.single('user_pic'),userController.update_user);
router.delete('/delete_user/:id', userController.delete_user);

// ********************* Order ************************************
router.post('/add_order', orderController.add_order);
router.get('/get_order', orderController.get_order);
router.get('/get_order_by_emp_id/:id', orderController.get_order_by_emp_name);
router.get(
  '/get_order_by_order_name/:id',
  orderController.get_order_by_group_name
);
router.patch('/update_order/:id', orderController.update_order);
router.delete('/delete_order/:id', orderController.delete_order);
// ********************* Survey ************************************

// ********************* Drawing ************************************

router.post('/add_drawing', drawingController.add_drawing);
router.get('/get_drawing', drawingController.get_drawing);
router.get('/get_drawing_id/:id', drawingController.get_drawing_id);
router.get('/drawing_progress_bar_data/:id', drawingController.drawing_progress_bar_data);
router.patch('/update_drawing/:id', drawingController.update_drawing);
router.delete('/delete_drawing/:id', drawingController.delete_drawing);

router.get(
  '/get_drawing_by_emp_id/:id',
  drawingController.get_drawing_by_emp_name
);

// ********************* Approve Drawing ************************************
router.post(
  '/add_approve_drawing',
  approvedrawingController.add_approve_drawing
);
router.get(
  '/get_approve_drawing',
  approvedrawingController.get_approve_drawing
);
router.get(
  '/get_approve_drawing_id/:id',
  approvedrawingController.get_approve_drawing_id
);
router.patch(
  '/update_approve_drawing/:id',
  approvedrawingController.update_approve_drawing
);
router.delete(
  '/delete_approve_drawing/:id',
  approvedrawingController.delete_approve_drawing
);

// Product Mangament

// ******************** Product ************************
router.post( '/add_product',upload.single('product_pic'),productController.add_product);
router.get('/get_product', productController.get_product);
router.get('/get_product_id/:id', productController.get_product_id);
router.patch('/update_product/:id', productController.update_product);
router.delete('/delete_product/:id', productController.delete_product);

// ******************** Glass  ************************
router.post(
  '/add_glass',
  upload.single('glassacp_pic'),
  glassController.add_glass
);
router.get('/get_glass', glassController.get_glass);
router.get('/get_glass_id/:id', glassController.get_glass_id);
router.patch('/update_glass/:id', glassController.update_glass);
router.delete('/delete_glass/:id', glassController.delete_glass);

// ******************** Aluminium ************************
router.post(
  '/add_aluminium',
  upload.single('aluminium_pic'),
  aluminiumController.add_aluminium
);
router.get('/get_aluminium', aluminiumController.get_aluminium);
router.get('/get_aluminium_id/:id', aluminiumController.get_aluminium_id);
router.patch('/update_aluminium/:id', aluminiumController.update_aluminium);
router.delete('/delete_aluminium/:id', aluminiumController.delete_aluminium);
router.get(
  '/get_aluminium_by_emp_id/:id',
  aluminiumController.get_aluminium_by_emp_name
);

// *************************** PAyment ****************
router.post('/add_payment', paymentController.add_payment);
router.get('/get_payment', paymentController.get_payments);
router.patch('/update_payment/:id', paymentController.update_payment);
router.delete('/delete_payment/:id', paymentController.delete_payment);

// ************************** Product Order ***************
router.post('/add_productorder', productorderController.add_productorder);
router.get('/get_productorder', productorderController.get_productorder);
router.get(
  '/get_lookupproductorder',
  productorderController.get_lookupproductorder
);

// ************************** Employee ***************
router.post('/add_employee', employeeController.add_employee);
router.get('/get_employee', employeeController.get_employee);
router.get('/get_employee_id/:id', employeeController.get_employee_id);
router.patch('/update_employee/:id', employeeController.update_employee);
router.delete('/delete_employee/:id', employeeController.delete_employee);

// ************************** Client  ***************
router.post('/add_client', clientController.add_client);
router.get('/get_client', clientController.get_client);
router.get('/get_client_id/:id', clientController.get_client_id);
router.patch('/update_client/:id', clientController.update_client);
router.delete('/delete_client/:id', clientController.delete_client);

// ************************** Safety Equipment  ***************
router.post(
  '/add_safetyequipment',
  safetyequipmentController.add_safetyequipment
);
router.get(
  '/get_safetyequipment',
  safetyequipmentController.get_safetyequipment
);
router.get(
  '/get_safetyequipment_id/:id',
  safetyequipmentController.get_safetyequipment_id
);
router.patch(
  '/update_safetyequipment/:id',
  safetyequipmentController.update_safetyequipment
);
router.delete(
  '/delete_safetyequipment/:id',
  safetyequipmentController.delete_safetyequipment
);

//******************************* quotation ****************************/
router.post('/add_quotation', quotationController.add_quotation);
router.get('/get_quotation', quotationController.get_quotation);
router.get('/get_quotation_id/:id', quotationController.get_quotation_id);
router.patch('/update_quotation/:id', quotationController.update_quotation);
router.delete('/delete_quotation/:id', quotationController.delete_quotation);

// ***************************** Stage-2 ****************************

router.post('/add_site_survey', siteSurveyController.add_survey);
router.get('/get_site_survey', siteSurveyController.get_surveys);
router.patch('/update_site_survey/:id', siteSurveyController.update_survey);
router.delete('/delete_survey/:id', siteSurveyController.delete_survey);
router.get('/get_survey_by_emp_id/:id',siteSurveyController.get_survey_by_emp_name);


router.post('/add_image',upload.single('site_survey_images'),uploadimagesController.add_image);
router.post('/add_elevation_image', upload.single('elevation_survey_images'));
router.get('/get_image', uploadimagesController.get_image);

router.post('/add_image2',upload.array('elevation_survey_images', 10),uploadimagesController2.add_image2);
router.get('/get_image2', uploadimagesController2.get_image2);

// ***************************** Handover ***************************
router.post('/add_handover',upload.single('handover_pic'),hanoverController.add_handover);
router.get('/get_handover', hanoverController.get_handover);
router.get('/get_handover_id/:id', hanoverController.get_handover_id);
router.patch('/update_handover/:id', hanoverController.update_handover);
router.delete('/delete_handover/:id', hanoverController.delete_handover);
router.get('/get_handover_by_emp_id/:id',hanoverController.get_handover_by_emp_name);

// ***************************** Glass ACP Fixing ****************************

router.post(
  '/add_glassacphplfixing',
  upload.single('glassacp_pic'),
  glassacpfikingController.add_glassacphplfixing
);
router.get(
  '/get_glassacphplfixing',
  glassacpfikingController.get_glassacphplfixing
);
router.get(
  '/get_glassacphplfixing_id/:id',
  glassacpfikingController.get_glassacphplfixing_id
);
router.patch(
  '/update_glassacphplfixing/:id',
  glassacpfikingController.update_glassacphplfixing
);
router.delete(
  '/delete_glassacphplfixing/:id',
  glassacpfikingController.delete_glassacphplfixing
);
router.get(
  '/get_glassacphplfixing_by_emp_id/:id',
  glassacpfikingController.get_glassacphplfixing_by_emp_name
);

// ***************************** Glass ACP Fixing ****************************

router.post('/add_notification', notificationController.add_notification);
router.get('/get_notification', notificationController.get_notification);
router.delete(
  '/delete_notification/:id',
  notificationController.delete_notification
);
router.patch(
  '/update_notification/:id',
  notificationController.update_notification
);
// router.patch(
//   '/update_notification_by_name/:id',
//   notificationController.update_notification_by_name
// );
router.get(
  '/get_notification_by_emp_name/:id',
  notificationController.get_notification_by_emp_name
);

module.exports = router;
