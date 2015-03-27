<?php

  $url = $_GET['link'];

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

?>
