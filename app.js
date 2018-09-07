var express = require('express'),
 	app 	= express(),
 	request = require('request'),
 	bodyParser = require('body-parser'),
 	mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/zomato",{ useNewUrlParser: true });
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended :true}));

//schema setup

var zomatoSchema = new mongoose.Schema({
	name: String,
	image: String
});

var Zomato = mongoose.model("restaurants", zomatoSchema);

// Zomato.create({
// 	name:"Sherlock",image:"https://b.zmtcdn.com/data/pictures/9/18270179/b7dc3b3a4a46aa516b1866068a301523_featured_v2.jpg"},
// function(err, zomato){
// 	if(err){
// 		console.log(err);
// 	}
// 	else{
// 		console.log("Newly created Zomato Rest");
// 		console.log(zomato);
// 	}
// })


var r = [
	{name:"Urban Solace", image:"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/s/x/p4473-143937081255cb0e3c1717b.jpg?w=1200" },
	{name:"Sherlock",image:"https://b.zmtcdn.com/data/pictures/9/18270179/b7dc3b3a4a46aa516b1866068a301523_featured_v2.jpg"},
	{name:"Sherlock",image:"https://b.zmtcdn.com/data/pictures/9/18270179/b7dc3b3a4a46aa516b1866068a301523_featured_v2.jpg"},
	{name:"Sherlock",image:"https://b.zmtcdn.com/data/pictures/9/18270179/b7dc3b3a4a46aa516b1866068a301523_featured_v2.jpg"},
	{name:"Sherlock",image:"https://b.zmtcdn.com/data/pictures/9/18270179/b7dc3b3a4a46aa516b1866068a301523_featured_v2.jpg"},
	{name:"Sherlock",image:"https://b.zmtcdn.com/data/pictures/9/18270179/b7dc3b3a4a46aa516b1866068a301523_featured_v2.jpg"}
	];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/r", function(req, res){
	
	Zomato.find({}, function(err, r){
		if(err){
			console.log(err);
		}
		else{
			res.render("restaurants", {r: r});
		}
	});
});

app.post("/r",function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newR = { name:name, image:image}
	//create a new restraunt and save to database
	Zomato.create(newR, function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/r");
		}
	});
	
	//get data from form and add to zomato app and also redirect to zomato restaurants page
});

app.get("/r/new",function(req, res){
	res.render("new");
});

app.listen(3000,function(req, res){
	console.log("Zomato app is running on sever 3000");
});