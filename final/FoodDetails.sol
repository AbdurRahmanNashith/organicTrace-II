// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FoodDetails {
    // Define a struct to hold food details
    struct Food {
        string grains;
        string waterUsage;
        string cultivationMethod;
        string imageUrl;
    }

    // Define a mapping to store food details for each user address
    mapping(address => Food) public foodDetails;

    // Function to set food details
    function setFoodDetails(string memory _grains, string memory _waterUsage, string memory _cultivationMethod, string memory _imageUrl) public {
        // Store the food details for the sender's address
        foodDetails[msg.sender] = Food(_grains, _waterUsage, _cultivationMethod, _imageUrl);
    }
}
