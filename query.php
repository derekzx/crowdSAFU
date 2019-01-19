<?php
    
    $address = $_POST["target_address"];
    $chain = $_POST["chain"]



    $file = $chain.'Rep.json';
    // Creates file if it does not exist yet
    if(!is_file($file)){
        include "failedQuery.html";
    }
    else {
        $rep_file = fopen($chain.'Rep.json', "r+")
        $json_data = file_get_contents($rep_file);
        $arr_data = json_decode($json_data, true);
        $score = $arr_data[$address]["score"];
        $upvote_count = $arr_data[$address]["upvote"];
        $downvote_count = $arr_data[$address]["downvote"];
        include "return.html";
    }

    
?>