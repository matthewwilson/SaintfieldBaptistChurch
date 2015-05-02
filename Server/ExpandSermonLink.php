<?php

  $url = NULL;

  if (isset($_GET['link'])) {
   $url = $_GET['link'];

   if(endsWith($url, '.mp3')) {
     $arr = array('expandedUrl' => $url);

     header('Access-Control-Allow-Origin: *');
     header('Content-Type: application/json');
     echo json_encode($arr);
     
   } else {

     $ch = curl_init($url);
     curl_setopt($ch,CURLOPT_HEADER,true); // Get header information
     curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
     curl_setopt($ch, CURLOPT_FOLLOWLOCATION,false);
     $header = curl_exec($ch);

     $fields = explode("\r\n", preg_replace('/\x0D\x0A[\x09\x20]+/', ' ', $header)); // Parse information

     for($i=0;$i<count($fields);$i++)
     {
         if(strpos($fields[$i],'Location') !== false)
         {
             $url = str_replace("Location: ","",$fields[$i]);
         }
     }

     $arr = array('expandedUrl' => $url);

     header('Access-Control-Allow-Origin: *');
     header('Content-Type: application/json');
     echo json_encode($arr);
   }

  } else {
    $result = array('error' => 'required parameter missing');
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    echo json_encode($result);
  }

  function endsWith($haystack, $needle) {
    // search forward starting from end minus needle length characters
    return $needle === "" || (($temp = strlen($haystack) - strlen($needle)) >= 0 && strpos($haystack, $needle, $temp) !== FALSE);
  }

?>
