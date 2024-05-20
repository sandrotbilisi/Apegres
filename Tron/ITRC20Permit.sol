// SPDX-License-Identifier: MIT
// Adapted for TRC20 Tokens on TRON network with Permit functionality

pragma solidity ^0.8.19;

/**
 * @dev Interface for the TRC20 Permit extension allowing approvals to be made via signatures, tailored for the TRON network.
 *
 * This interface adds the {permit} method, enabling account allowance changes for TRC20 tokens via signed messages.
 * This method provides an alternative to {ITRC20-approve}, eliminating the need for token holders to initiate a transaction,
 * which could be especially beneficial for users without TRX (TRON's native currency) for transaction fees.
 *
 * ==== Security Considerations ====
 *
 * Utilizing `permit` requires careful handling to avoid potential security issues:
 * 1. Valid permit signatures only specify allowances, without implying how the allowance will be spent.
 * 2. Permits include replay protection and can be submitted by anyone, which could lead to frontrunning scenarios.
 *    Protocols should consider these factors to ensure robustness, possibly allowing `permit` calls to fail gracefully.
 *
 * A recommended usage pattern is:
 *
 * ```solidity
 * function doThingWithPermit(..., uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {
 *     try token.permit(msg.sender, address(this), value, deadline, v, r, s) {} catch {}
 *     doThing(..., value);
 * }
 *
 * function doThing(..., uint256 value) public {
 *     token.safeTransferFrom(msg.sender, address(this), value);
 *     ...
 * }
 * ```
 *
 * This ensures clarity on the signer's intent and resilience to frontrunning through the use of `try/catch`.
 *
 * Note: Smart contract wallets, which might not be able to generate permit signatures, should be considered, ensuring
 * alternative transaction methods are available.
 */
interface ITRC20Permit {
    /**
     * @dev Allows `spender` to spend `value` from `owner`'s account based on a signed approval.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `deadline` must specify a future time.
     * - `v`, `r`, and `s` must constitute a valid secp256k1 signature from `owner`, conforming to the EIP712 standard.
     * - The signature must be current, considering `owner`'s nonce (see {nonces}).
     *
     * CAUTION: It's crucial to adhere to the above security considerations.
     */
    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    /**
     * @dev Provides the current nonce for `owner`, which must be used when generating signatures for {permit}.
     *
     * Each successful call to {permit} increments the nonce for `owner`, preventing signature reuse.
     */
    function nonces(address owner) external view returns (uint256);

    /**
     * @dev Returns the domain separator for encoding the {permit} signature, as per the EIP712 standard.
     */
    function DOMAIN_SEPARATOR() external view returns (bytes32);
}