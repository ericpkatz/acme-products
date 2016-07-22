var _products = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'bazz' },

];
module.exports = {
  getProduct: function(id){
    return _products.filter(function(product){
      return product.id === id;
    })[0];
  },
  getProducts: function(){
    return _products;
  },
  addProduct: function(product){
    product.id = _products.length;
    _products.push(product);
  },
  deleteProduct: function(id){
    _products.splice(_products.indexOf(this.getProduct(id)), 1);
  }
};
