// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./SafeTransfer.sol";

contract TransactionLogger {
    
    address private owner;
    
    using SafeTRC20 for ITRC20;
    
    // Event to log transaction details
    event DepositReceived(address indexed from, address indexed to, uint256 amount);
    
    modifier onlyOwner() {
        require(
             msg.sender == owner,
            "Only the contract owner can call this function"
        );
        _;
    }
    
    constructor(){
        owner = msg.sender;
    }

    // Function to receive Ether and emit event details
    receive() external payable {
        emit DepositReceived(msg.sender, address(this), msg.value);
    }
    
    fallback() external payable {
        emit DepositReceived(msg.sender, address(this), msg.value);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
    
    function getUsdtBalance(ITRC20 token) view public returns(uint256){
        uint256 erc20Balance = token.balanceOf(address(this));
        return erc20Balance;
    }
    
    function widthrawUsdt(ITRC20 token, address to, uint256 amount) onlyOwner public {
        uint256 erc20Balance = token.balanceOf(address(this));
        require(amount <= erc20Balance, "Insufficient USDT Balance");
        token.safeTransfer(to, amount);
    }
}