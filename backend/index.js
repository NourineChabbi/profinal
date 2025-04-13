var express = require('express');
var app = express();
var cors =require('cors')
var port = 5001;
var hostname = "127.0.0.1";
var mongoose = require("mongoose");
var url = "mongodb://127.0.0.1:27017/project";
var bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to database
async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log(" Connected to the database");
    } catch (error) {
        console.error(" Database connection error:", error);
    }
}

connectDB()
var userschema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})
var user = mongoose.model('user', userschema, 'user');  

//USER METHOD GET ALL PRODUCT
app.get('/user', function(req,res){
    user.find()
        .then(function(user){
            res.json(user);
        })
        .catch(function(error){
            console.error("error fetching users: ",error);
            res.status(500).send("error finding users");
        });
});
// USER METHOD GET USER BY ID
app.get('/user/:id', function(req, res) {
    var userId = req.params.id;

    user.findById(userId)
        .then(function(user) {
            if (!user) {
                return res.status(404).send("User not found");
            }
            res.json(user);
        })
        .catch(function(error) {
            console.error("Error fetching user by ID: ", error);
            res.status(500).send("Error finding user");
        });
});


"http://127.0.0.1:5000/user"

//USER METHOD POST
app.post('/postuser', function(req,res){
    var newUser = new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });

    newUser.save()
        .then(function(user){
            res.status(201).json({message: "User created successfuly", user: user});
        })
        .catch(function(error){
            console.error("Error creating user: ", error);
            res.status(500).send("Error creating user");
        })
})

//USER METHOD PUT
app.put('/updateuser/:id', function(req, res) {
    var updatedUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    user.findByIdAndUpdate(req.params.id, updatedUser, { new: true })
        .then(function(user) {
            if (!user) {
                return res.status(404).send("User not found");
            }
            res.status(200).json({ message: "User updated successfully", user: user });
        })
        .catch(function(error) {
            console.error("Error updating user: ", error);
            res.status(500).send("Error updating user");
        });
});

//PROODUCT

var productschema=mongoose.Schema({
    name:String,
    price:Number,
    img:String,
    description:String,
    category:String
})
var product = mongoose.model('product', productschema, 'product');

//PRODUCT METHOD GET ALL PRODUCT
app.get('/product', function (req,res){
    product.find() 
        .then(function(product){
            res.json(product);
        })
        .catch(function(error){
            console.error("Error fetching products:", error);
            res.status(500).send("Error finding products");
        })
});

app.get('/product/men', function (req, res) {

    product.find( {category: "homme"} )
        .then(function(product) {
            if (!product) {
                return res.status(404).send("Product not found");
            }
            res.json(product);
        })
        .catch(function(error) {
            console.error("Error fetching product by ID:", error);
            res.status(500).send("Error finding product");
        });
});
app.get('/product/women', function (req, res) {

    product.find( {category: "femme"} )
        .then(function(product) {
            if (!product) {
                return res.status(404).send("Product not found");
            }
            res.json(product);
        })
        .catch(function(error) {
            console.error("Error fetching product by ID:", error);
            res.status(500).send("Error finding product");
        });
});
app.get('/product/kids', function (req, res) {

    product.find( {category: "enfant"} )
        .then(function(product) {
            if (!product) {
                return res.status(404).send("Product not found");
            }
            res.json(product);
        })
        .catch(function(error) {
            console.error("Error fetching product by ID:", error);
            res.status(500).send("Error finding product");
        });
});
// PRODUCT METHOD GET PRODUCT BY ID
app.get('/product/:id', function (req, res) {
    var productId = req.params.id;

    product.findById(productId)
        .then(function(product) {
            if (!product) {
                return res.status(404).send("Product not found");
            }
            res.json(product);
        })
        .catch(function(error) {
            console.error("Error fetching product by ID:", error);
            res.status(500).send("Error finding product");
        });
});

"http://127.0.0.1:5000/product"
//PRODUCT METHOD POST
app.post('/postproduct', function(req,res){
    var newProduct = new product({
        name:req.body.name,
        price:req.body.price,
        img:req.body.img,
        description:req.body.description,
        category:req.body.category
    });
    newProduct.save()
        .then(function(product){
            res.status(201).json({message: "Product created successfuly", product: product});
        })
        .catch(function(error){
            console.error("Error creating product: ", error);
            res.status(500).send("Error creating product");
        })
})

//PRODUCT UPDATE METHOD
app.put('/updateproduct/:id', function(req, res) {
    var updatedProduct = {
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
        description: req.body.description,
        category: req.body.category
    };

    product.findByIdAndUpdate(req.params.id, updatedProduct, { new: true })
        .then(function(product) {
            if (!product) {
                return res.status(404).send("Product not found");
            }
            res.status(200).json({ message: "Product updated successfully", product: product });
        })
        .catch(function(error) {
            console.error("Error updating product: ", error);
            res.status(500).send("Error updating product");
        });
});

//login function and signup function 
// Signup Route
const jwt = require('jsonwebtoken');

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new user({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ userId: newUser._id }, 'your_secret_key', { expiresIn: '1h' });

        res.status(201).json({ message: "Signup successful", token });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});


// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.json({ message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).send("Something went wrong during login");
    }
});

app.listen(port, hostname, () =>{
    console.log(`running server at http://${hostname}:${port}/`);
});