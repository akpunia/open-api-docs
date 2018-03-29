var assert = require('assert');

var attributes = {
  "productID": PRODUCT_ID,
  "product description": description,
  "contractAddress": SCAFFOLD_ADDRESS,
  "product name": NAME,
  "product quantity": quantity,
  "productType": PRODUCT_AMOUNT,
  "productPricing": PRICING_EXPRESSION
};

#Product can be created
it('should be successfully created', function() {
  return new Product(attributes);
});

#Product can be retrieved
describe('#get()', function() {
  it('should be retrieved without error', function(done) {
      #Database needs to be implemented
  });
});

#Product be saved
describe('#save()', function() {
  it('should save without error', function(done) {
    var product = new Product(attributes);
    product.save(function(err) {
      if (err) done(err);
      else done();
    });
  });
});

#Product can calculate SKU

#Product can parse SKU to Product ID and quantity

#Product can be read

#Product be updated

#Product can be deleted
