var _products = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'bazz' },

];
module.exports = {
  getProduct: function(id){
    return this.getProducts().filter(function(product){
      return product.id === id;
    })[0];
  },
  getProducts: function(){
    return _products;
  },
  updateProduct: function(id, data){
    var product = this.getProduct(id);
    product.name = data.name;
  },
  addProduct: function(product){
    var max = this.getProducts().reduce(function(max, product){
      if(product.id > max)
        max = product.id;
      return max;
    }, 0);
    max++;
    product.id = max; 
    _products.push(product);
  },
  deleteProduct: function(id){
    var idx = this.getProducts().indexOf(this.getProduct(id));
    this.getProducts().splice(idx, 1);
  }
};
