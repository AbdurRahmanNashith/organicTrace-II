const FoodDetails = artifacts.require("FoodDetails");

module.exports = function(deployer) {
  deployer.deploy(FoodDetails);
};
