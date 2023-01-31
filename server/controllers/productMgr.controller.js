const ProductMgr = require('../models/productMgr.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createProductMgr = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    ProductMgr.create(request.body) //This will use whatever the body of the client's request sends over
        .then(ProductMgr => response.json(ProductMgr))
        .catch(err => response.json(err));
}

module.exports.getAllProduct = (request, response) => {
    ProductMgr.find({})
        .then(ProductMgrs => {
            console.log(ProductMgrs); //console logs are optional, but they are highly recommended for troubleshooting!
            response.json(ProductMgrs);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}
module.exports.getProduct = (request, response) => {
    ProductMgr.findOne({_id:request.params.id})
        .then(ProductMgr => response.json(ProductMgr))
        .catch(err => response.json(err));
}

module.exports.updateProduct = (request, response) => {
    ProductMgr.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    ProductMgr.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}