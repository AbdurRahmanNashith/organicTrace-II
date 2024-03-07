pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract FoodDetails {
    // Define a struct to hold food details
    struct Food {
        string grains;
        string waterUsage;
        string cultivationMethod;
        string imageUrl;
        string farmLocation;
        string organicFertilizer;
        string supplierInfo;
        string soilType;
    }

    // Define a mapping to store food details for each user address
    mapping(address => Food) public foodDetails;

    // Define a struct for the parameters
    struct FoodParameters {
        string grains;
        string waterUsage;
        string cultivationMethod;
        string imageUrl;
        string farmLocation;
        string organicFertilizer;
        string supplierInfo;
        string soilType;
    }

    // Function to set food details
    function setFoodDetails(FoodParameters memory params) public {
        // Store the food details for the sender's address
        foodDetails[msg.sender] = Food(
            params.grains,
            params.waterUsage,
            params.cultivationMethod,
            params.imageUrl,
            params.farmLocation,
            params.organicFertilizer,
            params.supplierInfo,
            params.soilType
        );
    }
}
