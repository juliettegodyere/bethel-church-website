<!DOCTYPE html>
    <html>
      <head>
        <title>CONTACT FORM SAMPLE</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>

<?php
    $to ="kelzvictoria@gmail.com";
    $subject ="My subject";
    $txt = "hi";
    $headers = "From: donotreply@bbc.com" . "\r\n" . 
    "CC: v@v.com";
    mail($to, $subject, $txt, $headers);
?>
<body>

</body>
</html>