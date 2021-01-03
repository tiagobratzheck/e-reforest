const express = require('express');
const UserController = require('../controllers/userController');
const AddressesController = require('../controllers/addressController');
const EntityController = require('../controllers/entityController');
const PlantingRegController = require('../controllers/plantingRegController');
const ProjectController = require('../controllers/projectController');
const SupplierController = require('../controllers/supplierController');
const VarietyController = require('../controllers/varietyController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: "Hello World"});
})

// User routes
routes.post('/createuser', UserController.saveUser);
routes.get('/user/:user_id', UserController.getUserById)

// Addresses routes
routes.post('/createaddress', AddressesController.saveAddress);
routes.get('/address/:address_id', AddressesController.getAddresById);

// Entitites routes
routes.post('/createentity', EntityController.saveEntity);
routes.get('/entity/:entity_id', EntityController.getEntityById);
routes.get('/entities', EntityController.getAllEntities);

// Supplier routes
routes.post('/createsupplier', SupplierController.saveSupplier);
routes.get('/supplier/:sup_id', SupplierController.getSupplierById);
routes.get('/suppliers', SupplierController.getAllSuppliers);

module.exports = routes;
