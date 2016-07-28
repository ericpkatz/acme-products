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
    var max = this.getProducts().reduce(function(max, item){
      if(item.id > max)
        max = item.id;
      return max;
    });
    max++;
    product.id = max; 
    _products.push(product);
  },
  deleteProduct: function(id){
    _products.splice(_products.indexOf(this.getProduct(id)), 1);
  }
};
