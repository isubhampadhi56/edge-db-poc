const productSchema = new Schema('product',{
    storeId: {type: 'string'},
    productId: {type: 'string'},
    categoryId: {type: 'string'},
    supplierId: {type: 'string'},
    productName: {type: 'string'},
    quantity: {type: 'number'},
    price: {type: 'number'},
    description: {type: 'string'},
    lastUpdated: {type: 'datetime'},
});

const storeSchema = new Schema('store',{
    storeId: {type: 'string'},
    storeName: {type: 'string'},
    address: {type: 'string'},
});

const categorySchema = new Schema('category',{
    categoryId: {type: 'string'},
    categoryName: {type: 'string'},
    description: {type: 'string'},
});

const userSchema = new Schema('users',{
    userId: {type: 'string'},
    storeId: {type: 'string'},
    usernames: {type: 'string'},
    password: {type: 'string'},
    role: {type: 'string'},

});