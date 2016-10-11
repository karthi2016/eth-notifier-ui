/**
 * Override any of the following values at config/local.js
 *
 * or as other files named at
 * https://github.com/lorenwest/node-config/wiki/Configuration-Files
 */
module.exports = {

  testnet: false,
  helperApiUrl: 'http://x.ethnotifier.com:4000',
  contract: {
    address: '0x98c04238BfB9768Cf0940b5aA3AEb2fe151982DF', // livenet
    abi: '[{"constant":false,"inputs":[{"name":"_user","type":"address"},{"name":"_amount","type":"uint256"}],"name":"returnFund","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_publicKey","type":"string"}],"name":"updateXIPFSPublicKey","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_candidate","type":"address"}],"name":"addManager","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"notifications","outputs":[{"name":"transport","type":"uint8"},{"name":"destination","type":"string"},{"name":"message","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_cost","type":"uint256"}],"name":"taskProcessedWithCosting","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_option","type":"bool"}],"name":"setDoNotAutoRefundTo","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"collectRev","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minEthPerNotification","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"checkTimeout","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"xnotify","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"doNotAutoRefund","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"xnotifications","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tasks","outputs":[{"name":"sender","type":"address"},{"name":"state","type":"uint8"},{"name":"isxIPFS","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_cost","type":"uint256"}],"name":"taskRejected","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"depositFor","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"availableBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_candidate","type":"address"}],"name":"removeManager","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tasksCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"spentBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"availableBalances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"xIPFSPublicKey","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"accountTxs","outputs":[{"name":"timeCreated","type":"uint256"},{"name":"user","type":"address"},{"name":"amountHeld","type":"uint256"},{"name":"amountSpent","type":"uint256"},{"name":"state","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newMin","type":"uint256"}],"name":"updateMinEthPerNotification","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_transport","type":"uint8"},{"name":"_destination","type":"string"},{"name":"_message","type":"string"}],"name":"notify","outputs":[],"payable":true,"type":"function"},{"inputs":[],"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"state","type":"uint8"}],"name":"TaskUpdated","type":"event"}]',
  },

  /**
   * For server-side companion
   */
  server: {
    ipfsNode: '/ip4/127.0.0.1/tcp/5001',
    web3Provider: 'http://localhost:8545',

    /**
     * Helper web server
     */
    port: 4000,
  },
};
