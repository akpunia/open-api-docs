var assert = require('assert');

var attributes =  {
  "transaction_address": transaction_address,
  "userAddress": USER_ADDRESS,
  "scaffoldAddress": SCAFFOLD_ADDRESS,
  "product_sku": PRODUCT_SKU,
  "funds": FUNDS
  };

#Transaction can be created
  it('should be successfully created', function() {
    return new Transaction(attributes);
  });

#Transaction can be retrieved
describe('#get()', function() {
  it('should be retrieved without error', function(done) {
      #Database needs to be implemented
  });
});

#Transaction be saved
describe('#save()', function() {
  it('should save without error', function(done) {
    var transaction = new Transaction(attributes);
    transaction.save(function(err) {
      if (err) done(err);
      else done();
    });
  });
});

#Transaction can be verified?
