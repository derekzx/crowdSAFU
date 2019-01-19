function computeCost() {
    var qty_long = document.getElementById("qty_long").value;
    var qty_short = document.getElementById("qty_short").value;
    var price_long = document.getElementById("price_long").value;
    var price_short = document.getElementById("price_short").value;
    
    var total_long = qty_long * price_long;
    var total_short = qty_short * price_short;
    document.getElementById("share_long").innerHTML = total_long.toString() + "  ETH";
    document.getElementById("fee_long").innerHTML = (total_long*0.05).toString() + "  ETH";
    document.getElementById("total_long").innerHTML = (total_long*1.05).toString() + "  ETH";

    document.getElementById("share_short").innerHTML = total_short.toString() + "  ETH";
    document.getElementById("fee_short").innerHTML = (total_short*0.05).toString() + "  ETH";
    document.getElementById("total_short").innerHTML = (total_short*1.05).toString() + "  ETH";


      }