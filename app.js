var express = require('express');
var app = express();
var request = require('request');
app.set("view engine","ejs");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended :true}));

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
	
	res.render("restaurants",{r: r});
});

app.post("/r",function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newR = { name:name, image:image}
	r.push(newR);
	res.redirect("/r");
	//get data from form and add to zomato app and also redirect to zomato restaurants page
});

app.get("/r/new",function(req, res){
	res.render("new");
});

app.listen(3000,function(req, res){
	console.log("Zomato app is running on sever 3000");
});