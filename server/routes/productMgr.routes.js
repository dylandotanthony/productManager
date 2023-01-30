const productMgrController = require('../controllers/productMgr.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', productMgrController.index);
    app.post('/api/product', productMgrController.createProductMgr);
}
