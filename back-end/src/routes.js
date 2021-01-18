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
    return res.json({ message: "Hello World" });
})

// User routes
routes.post('/createuser', UserController.saveUser);
routes.get('/user/:user_id', UserController.getUserById)
routes.put('/user/update/:user_id', UserController.updateUserById);
routes.post('/user/login', UserController.login);
routes.delete('/user/:user_id', UserController.deleteUser);

// Addresses routes
routes.post('/createaddress', AddressesController.saveAddress);
routes.get('/address/:address_id', AddressesController.getAddresById);
routes.put('/address/:address_id', AddressesController.updateAddressById);
routes.delete('/address/:address_id', AddressesController.deleteAddress);

// Entitites routes
routes.post('/createentity', EntityController.saveEntity);
routes.get('/entity/:entity_id', EntityController.getEntityById);
routes.get('/entities', EntityController.getAllEntities);
routes.put('/entity/:entity_id', EntityController.updateEntityById);
routes.delete('/entity/:entity_id', EntityController.deleteEntity);

// Supplier routes
routes.post('/createsupplier', SupplierController.saveSupplier);
routes.get('/supplier/:sup_id', SupplierController.getSupplierById);
routes.get('/suppliers', SupplierController.getAllSuppliers);
routes.put('/supplier/:sup_id', SupplierController.updateSupplierById);
routes.delete('/supplier/:sup_id', SupplierController.deleteSupplier);

// Variety routes
routes.post('/createvariety', VarietyController.saveVariety);
routes.get('/variety/:variety_id', VarietyController.getVarietyById);
routes.put('/variety/:variety_id', VarietyController.updateVarietyById);
routes.delete('/variety/:variety_id', VarietyController.deleteVariety); 

// Project routes
routes.post('/createproject', ProjectController.saveProject);
routes.get('/project/get/:id', ProjectController.getProjectById);
routes.get('/projects', ProjectController.getAllProject);
routes.put('/project/:project_id', ProjectController.updateProjectById);
routes.delete('/project/:id', ProjectController.deleteProject);

// PR routes
routes.post('/createplantingregister', PlantingRegController.savePlantingRegister);
routes.get('/plantingregister/:id', PlantingRegController.getPlantingRegisterById);
routes.get('/plantingregister/project/:id', PlantingRegController.getPlantingRegisterByProjectId);
routes.put('/plantingregister/:id', PlantingRegController.updatePlantingRegister);
routes.delete('/plantingregister/:id', PlantingRegController.deletePlantingRegister);

module.exports = routes;
