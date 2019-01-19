// After installing, just require augur.js to use it.
var Augur = require("augur.js");
var augur = new Augur();

var ethereumNode = {
  httpAddresses: [
    // "http://127.0.0.1:8545", // local HTTP address for Geth node
    // "https://rinkeby.augur.net/ethereum-http" // hosted http address for Geth node on the Rinkeby test network
  ],
  wsAddresses: [
    "wss://rinkeby.augur.net/ethereum-ws" // hosted WebSocket address for Geth node on the Rinkeby test network
  ]
  // ipc addresses can also be specified as:
  // ipcAddresses: [ ... ]
};
// To connect to a hosted Augur Node instead of a local Augur Node, substitute its WebSocket address below.
var augurNode = "ws://rinkeby.augur.net/ethereum-ws"; // local WebSocket address for an Augur Node

var connectionInfo = {
  Controller: "0xa702f45c3b1fd31793a409768bd3a0a91fad32bc",
  Universe: "0x02149d40d255fceac54a3ee3899807b0539bad60",
  Augur: "0x990b2d2af7e87cd015a607c3a95d7622c9bbede1",
  OrdersFinder: "0xf8f15e2591881982183808e010626cb05152ff90",
  LegacyReputationToken: "0x903e028cb6752c9079bcf1b6bfae182d873b4b23",
  CancelOrder: "0x207fd3161632770367d4dbd251592d3a6f210bf8",
  Cash: "0x2da4d465978981bd75bbac4c9f3bda10be0b465c",
  ClaimTradingProceeds: "0x9e94fdea4aace8c61eeb1dc2d3c55bfc7b7e8739",
  CompleteSets: "0x48fcc9d538b9c86ba9d35b3eb0e7f64ee2b4664f",
  CreateOrder: "0xc32a16c3266d9af42ef0d32b4acf6b751accd903",
  FillOrder: "0x038a54379de640fe99af06caacdb50075ffcc3af",
  Order: "0xa63c56565abeb99ca635264dd3bf00e119336997",
  Orders: "0xee9a27c699c510e1a70b3784d3743b3bcad3a0b1",
  OrdersFetcher: "0x3861886c99cdf6abc9329682d2c05bf1be5b6777",
  ShareToken: "0x4541dc5f016afba66b251695afbcc69eb014fa96",
  Trade: "0x4b3a944ca8ce8117eba411b735bd12ea5c7b1b10",
  TradingEscapeHatch: "0x3f16fab467d4bbca93c6a1a555c937b0a968791c"
};

// Attempt to connect to a local Ethereum node
// If that fails, fall back to the hosted Ethereum node
augur.connect(
  { ethereumNode, augurNode },
  function(err, connectionInfo) {
    console.log(connectionInfo);
    augur.markets.getMarkets(
      {
        universe: "0x02149d40d255fceac54a3ee3899807b0539bad60"
      },
      function(error, result) {
        console.log(result);
      }
    );
  }
);
