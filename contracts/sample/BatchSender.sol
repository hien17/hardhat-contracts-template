// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BatchSender {
    function sendEther(address[] memory recipients, uint[] memory amounts) external payable {
        require(recipients.length == amounts.length, "Arrays length mismatch");

        for (uint i = 0; i < recipients.length; i++) {
            payable(recipients[i]).transfer(amounts[i]);
        }
    }
}