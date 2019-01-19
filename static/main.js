window.addEventListener("load", function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== "undefined") {
    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log("No web3? You should consider trying MetaMask!");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Now you can start your app & access web3 freely:
  // startApp();
});

var DESTINATION_ADDRESS = "0x4b43dc3d49476dfc4f49151dd72e9fee07ccb9de";

var SUBMIT_ADDRESS_DEPOSIT = web3.toWei("0.0001", "ether");
var TRADE_AMOUNT = web3.toWei("0.0001", "ether");

var REDIRECT_TO = "http://localhost:5000/submit-successful.html";

function promptForDeposit(value, callback) {
  web3.eth.sendTransaction(
    {
      to: DESTINATION_ADDRESS,
      value: value
    },
    callback
  );
}

document.addEventListener("DOMContentLoaded", function() {
  $("form").submit(SUBMIT_ADDRESS_DEPOSIT, function(e) {
    e.preventDefault();
    promptForDeposit(function(err, hash) {
      if (!err) {
        window.location = REDIRECT_TO;
      }
    });
  });

  $(".trade-btn").click(function(e) {
    e.preventDefault();
    promptForDeposit(TRADE_AMOUNT, function(err, hash) {
      if (!err) {
        window.location = REDIRECT_TO;
      }
    });
  });
});
