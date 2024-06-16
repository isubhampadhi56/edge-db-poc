const prisma =  require('../config/sqlConn.js');

async function addProduct(req,res) {
    const createProduct = await prisma.product.create({
        data: {
            supplierId: req.body.supplierId,
            productName: req.body.productName,
            quantity: req.body.quantity,
            price: req.body.price,
            description: req.body.description,
            storeRel: {
                connect: { storeId: req.body.storeId } // This will throw an error if the store with the given id does not exist
            },
            categoryRel: {
                connect: { categoryId: req.body.categoryId } // This will throw an error if the store with the given id does not exist
            }
        }
    });
    // if(createProduct.) {
    res.json(createProduct);
}

async function addStore(req,res){
    const createStore = await prisma.store.create({
        data:{
            storeName: req.body.storeName,
            address: req.body.address,
            description:req.body.description
        }
    });
    res.json(createStore);
}

async function addCategory(req,res){
    const createCategory = await prisma.category.create({
        data: {
            storeId: req.body.storeId,
            categoryName: req.body.categoryName,
            description: req.body.description
        }
    });
    res.json(createCategory);
}

async function addUser(req, res) {
    const createUser = await prisma.user.create({
        data:{
            storeId: req.body.storeId,
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
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