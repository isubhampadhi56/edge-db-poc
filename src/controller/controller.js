const { prisma } = require('../config/sqlConn.js');
async function addProduct(req,res) {
    const createProduct = await prisma.product.create({
        data: {
            storeId: req.storeId,
            categoryId: req.categoryId,
            supplierId: req.supplierId,
            productName: req.productName,
            quantity: req.quantity,
            price: req.price,
            description: req.description
        }
    });
    // if(createProduct.) {
    res.json(createProduct);
}

async function addStore(req,res){
    const createStore = await prisma.store.create({
        data:{
            storeName: req.storeName,
            address: req.address,
            description:req.description
        }
    });
    res.json(createStore);
}

async function addCategory(req,res){
    const createCategory = await prisma.category.create({
        data: {
            storeId: req.storeId,
            categoryId: req.categoryId,
            description: req.description
        }
    });
    res.json(createCategory);
}

async function addUser(req, res) {
    const createUser = await prisma.users.create({
        data:{
            storeId: req.storeId,
            username: req.username,
            password: req.password,
            role: req.role
        }
    });
    res.json(createUser);
}

module.exports = {
    addProduct,
    addCategory,
    addStore,
    addUser,
}