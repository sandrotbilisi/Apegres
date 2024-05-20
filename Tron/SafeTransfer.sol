// SPDX-License-Identifier: MIT
// Adapted for TRC20 Tokens on TRON network

pragma solidity ^0.8.19;

import {ITRC20} from "../ITRC20.sol";
import {ITRC20Permit} from "./ITRC20Permit.sol";
import {Address} from "./Address.sol";

/**
 * @title SafeTRC20
 * @dev Wrappers around TRC20 operations that throw on failure. This library is adapted for the TRON network and
 * its TRC20 token standard. It provides safe methods to interact with TRC20 tokens, handling checks and balances
 * to ensure operations such as transfers and allowances succeed as intended.
 */
library SafeTRC20 {
    using Address for address;

    error SafeTRC20FailedOperation(address token);
    error SafeTRC20FailedDecreaseAllowance(address spender, uint256 currentAllowance, uint256 requestedDecrease);

    function safeTransfer(ITRC20 token, address to, uint256 value) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));
    }

    function safeTransferFrom(ITRC20 token, address from, address to, uint256 value) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
    }

    function safeIncreaseAllowance(ITRC20 token, address spender, uint256 value) internal {
        uint256 oldAllowance = token.allowance(address(this), spender);
        _forceApprove(token, spender, oldAllowance + value);
    }

    function safeDecreaseAllowance(ITRC20 token, address spender, uint256 requestedDecrease) internal {
        unchecked {
            uint256 currentAllowance = token.allowance(address(this), spender);
            if (currentAllowance < requestedDecrease) {
                revert SafeTRC20FailedDecreaseAllowance(spender, currentAllowance, requestedDecrease);
            }
            _forceApprove(token, spender, currentAllowance - requestedDecrease);
        }
    }

    function _forceApprove(ITRC20 token, address spender, uint256 value) internal {
        bytes memory approvalCall = abi.encodeWithSelector(token.approve.selector, spender, value);

        if (!_callOptionalReturnBool(token, approvalCall)) {
            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, 0));
            _callOptionalReturn(token, approvalCall);
        }
    }

    function _callOptionalReturn(ITRC20 token, bytes memory data) private {
bytes memory returndata = Address.functionCall(address(token), data);
        if (returndata.length > 0 && !abi.decode(returndata, (bool))) {
            revert SafeTRC20FailedOperation(address(token));
        }
    }

    function _callOptionalReturnBool(ITRC20 token, bytes memory data) private returns (bool) {
        (bool success, bytes memory returndata) = address(token).call(data);
        return success && (returndata.length == 0 || abi.decode(returndata, (bool))) && address(token).code.length > 0;
    }
}
