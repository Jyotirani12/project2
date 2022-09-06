
// let express = require('express');
// let app = express();

// let dotenv = require('dotenv');

// dotenv.config();
// let port = process.env.PORT || 9870;
// let morgan = require('morgan');
// app.use(morgan('common'));
// let bodyParser = require('body-parser');
// let cors = require('cors');

// let mongo = require('mongodb');

// let MongoClient = mongo.MongoClient;
// let MongoUrl="mongodb://localhost:27017"

// //let MongoUrl = "mongodb+srv://test:test123@cluster0.cxbxf.mongodb.net/?retryWrites=true&w=majority"
// let db;


// app.use(bodyParser.urlencoded({ extended: true }));
//  app.use(bodyParser.json());
// app.use(cors());
// // app.get('/loc',(res,res))
let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let MongoUrl = "mongodb://localhost:27017"
//let MongoUrl= "mongodb+srv://rehan321:test321@cluster0.5fw4xxl.mongodb.net/?retryWrites=true&w=majority"
let db;
app.get('/', (req, res) => {
    res.send("hi from express3");
})

// app.get('/category', (req, res) => {
//     db.collection('category').find().toArray((err, result) => {
//         if (err) throw err;
//         res.send(result);
//     })
// })
// app.get('/category', (req, res) => {
//     let id = req.query.categoryId

//     db.collection('category').find({category_id: Number(id)}).toArray((err, result) => {
//         if (err) throw err;
//         res.send(result);
//     })
// })
app.get('/category', (req, res) => {
    let id = req.query.Id
    db.collection('category').find({ category_id: Number(id) }).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

app.get('/subcategory', (req, res) => {
    // let id =  req.params.id;
    let id = req.query.categoryId
    // or                 let {categoryId} = req.query  
    db.collection('subcategory').find({ category_id: Number(id) }).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})
app.get('/subcategory', (req, res) => {
    db.collection('subcategory').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//to show all Product
// app.get('/product', (req, res) => {
//     db.collection('product').find({}, { 'product_name': 1, '_id': 0 }).toArray((err, result) => {
//         if (err) throw err;
//         res.send(result);
//     })
// })

app.get('/details/:id', (req, res) => {
    let id = Number(req.params.id);
    db.collection('product').find({ product_id: Number(id) }, { product_name: 1, _id: 0 }).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//To show Product Acc to category
// app.get('/productCat/:id', (req, res) => {
//     let id = req.params.id;
//     db.collection('product').find({ category_id: Number(id) }).toArray((err, result) => {
//         if (err) throw err;
//         res.send(result);
//     })
// })
//To show Product Acc to category using Query
app.get('/productCat', (req, res) => {
    let id = req.query.categoryId;
    db.collection('product').find({ category_id: Number(id) }).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})
app.get('/orders', (req, res) => {
    db.collection('orders').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})
// app.get('/product',(req,res)=>{
//     db.collection('product').find().toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })

// })
app.get('/placeOrder', (req, res) => {
    db.collection('orders').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})
app.get('/restaurant', (req, res) => {
    db.collection('product').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

//product wrt to category and subcategory
app.get('/productWrt', (req, res) => {

    let query = {}
    let categoryId = Number(req.query.categoryId);
    let subcategoryId = Number(req.query.subcategoryId);
    if (categoryId) {
        query = { category_id: categoryId }
    } else if (subcategoryId) {
        query = { subcategory_id: subcategoryId }

    } else {
        query = {}
    }
    db.collection('product').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//To show Product according Color using Filter on Subcategories
app.get('/filter/:subcategoryId', (req, res) => {
    let query = {}
    let subcategoryId = Number(req.params.subcategoryId);
    let colorId = Number(req.query.colorId);
    if (colorId) {
        query = {
            subcategory_id: subcategoryId,
            "color.color_id": colorId
        }
    }
    else {
        query = {
            subcategory_id: subcategoryId
        }
    }

    db.collection('product').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

//To show Product according Color & cost using Filter on Subcategories
app.get('/filterc/:subcategoryId', (req, res) => {
    let query = {}
    let subcategoryId = Number(req.params.subcategoryId);
    let colorId = Number(req.query.colorId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);

    if (colorId) {
        query = {
            subcategory_id: subcategoryId,
            "color.color_id": colorId
        }
    }
    else if (lcost && hcost) {
        query = {
            subcategory_id: subcategoryId,
            $and: [{ Price: { $gt: lcost, $lt: hcost } }]
        }
    } else {
        query = { subcategory_id: subcategoryId}
    }

    db.collection('product').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})
// app.get(`/filter/:subcategoryId`,(req,res) => {
//     let query = {}
//     let sort = {Price:1}
//     let subcategoryId = Number(req.params.subcategoryId);
//     let colorId = Number(req.query.colorId);
//     let lcost = Number(req.query.lcost);
//     let hcost = Number(req.query.hcost);
//     if(req.query.sort){
//         sort={Price:req.query.sort}
//     }
//     if(colorId && lcost && hcost){
//         query = {
//             "subcategory_id":subcategoryId,
//             "color.color_id":colorId,
//             $and:[{Price:{$gt:lcost,$lt:hcost}}]
//         }
//     }
//     else if(colorId){
//         query = {
//             "subcategory_id":subcategoryId,
//             "color.color_id":colorId
//         }
//     }else if(lcost && hcost){
//         query = {
//             "subcategory_id":subcategoryId,
//             $and:[{Price:{$gt:lcost,$lt:hcost}}]
//         }
//     }
//     else{
//         query = {
//             "subcategory_id":subcategoryId
//         }
//     }
//     db.collection('product').find(query).sort(sort).toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)
//     })

// })
app.get('/filterm/:mealId',(req,res) => {
    let query = {}
    let sort = {cost:1}
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    if(req.query.sort){
        sort={cost:req.query.sort}
    }
    if(cuisineId && lcost && hcost){
        query = {
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else if(cuisineId){
        query = {
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(lcost && hcost){
        query = {
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {
            "mealTypes.mealtype_id":mealId,
        }
    }
    db.collection('restaurant').find(query).sort(sort).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })

})




//     let id=req.params.id;
//     //let subcategoryId=Number(req.query.subcategoryId);
//     let productId=Number(req.query.productId);
//     let query={};
//     if(productId){
//         query={
//             category_id:Number(id),
//             product_id:productId

//         }
//     }else {
//        query={}

//     }
//     db.collection('product').find({ query}).toArray((err, result) => {
//                  if (err) throw err;
//                 res.send(result);
//     })

// })



////To show Product Acc to Brands
// app.get('/products',(req,res)=>{
//     let query = {}
//     let brandId = Number(req.query.brandId);
//     if(brandId){
//         query = {"Brand.brand_id":brandId}
//     }else{
//         query = {}
//     }
//     db.collection('product').find(query).toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result);
//     })
// })
// app.get('/product',(req,res)=>{
//    let id=req.query.category_id;
// //let {category_id}=req.query;
//     db.collection('product').find({category_id:Number(id)}).toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result);
//     })
// })
// app.get('filter'/)

MongoClient.connect(MongoUrl, (err, client) => {
    if (err) console.log(`Error While Connecting`);
    db = client.db('amazon');
    app.listen(port, () => {
        console.log(`listening on port ${port}`);

    })
})
