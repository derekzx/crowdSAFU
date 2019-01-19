<?php
    //data is json
    $data = $_POST["data"];
    $addressData = json_decode($data);
    $address = $addressData->target_address;
    $chain = $addressData->chain;
    $voter = $addressData->address;
    $isUntainted = $addressData->isUntainted;


    $file = $chain.'Rep.json';
    // Creates file if it does not exist yet
    if(!is_file($file)){
        $contents = "";
        file_put_contents($file, $contents);
    }

    $rep_file = fopen($chain.'Rep.json', "r+") or die("Unable to create file!");
    $json_data = file_get_contents($rep_file);
    $arr_data = json_decode($json_data, true);

    //File format:
    //target_address:{
    //     score:1
    //     upvote:1
    //     downvote:0
    //     upvoters:[]
    //     downvoters:[]
    // }


    if(!array_key_exists($address, $arr_data)){
        if($isUntainted == "1"){
            $arr_data[$address] = array("score" => 1, "upvote" => 1, "downvote" => 0, "upvoters" => array($voter), "downvoters" => array());
        }
        else{
            $arr_data[$address] = array("score" => -1, "upvote" => 0, "downvote" => -1, "upvoters" => array(), "downvoters" => array($voter));
        }
    }
   else{
        if($isUntainted = "1"){
            $arr_data[$address]["score"]++;
            $arr_data[$address]["upvote"]++;
            array_push($arr_data[$address]["upvoters"], $voter);
        }
        else{
            $arr_data[$address]["score"]--;
            $arr_data[$address]["downvote"]++;
            array_push($arr_data[$address]["downvoters"], $voter);
        }
   }
   file_put_contents($rep_file, json_encode($arr_data));
?>