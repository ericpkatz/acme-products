var router = require('express').Router();
var Product = require('./product.model');

router.get('/', function(req, res){
  res.render('products', { nav: 'products', products: Product.getProducts(), title: 'Products' });
});

router.get('/:id/edit', function(req, res){
  res.render('edit', {nav: 'products', product: Product.getProduct(req.params.id*1), title: 'Edit' });
});

router.put('/:id', function(req, res){
  Product.updateProduct(req.params.id*1, req.body);
  //product.name = req.body.name;
  res.redirect('/products');
});

router.delete('/:id', function(req, res){
  Product.deleteProduct(req.params.id*1);
  res.redirect('/products');
});

router.post('/', function(req, res){
  Product.addProduct(req.body);
  res.redirect('/products');
});

router.get('/add', function(req, res){
  res.render('add', { nav: 'products', title: 'Add' });
});

module.exports = router;
