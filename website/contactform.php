
<?php/* Start Second try*/ ?>
<?php 
 
  //response generation function
  $response = "";
 
  //function to generate response
  function my_contact_form_generate_response($type, $message){
 
    global $response;
 
    if($type == "success") $response = "<div class='success'>{$message}</div>";
    else $response = "<div class='error'>{$message}</div>";
 
  }

  //response messages
$not_human       = "Human verification incorrect.";
$missing_content = "Please supply all information.";
$email_invalid   = "Email Address Invalid.";
$message_unsent  = "Message was not sent. Try Again.";
$message_sent    = "Thanks! Your message has been sent.";
 
//user posted variables
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$human = $_POST['human'];
 
//php mailer variables
$to = "kelzvictoria@gmail.com"; //remember to change to bbc mail
$subject = "Someone sent a message from ". $name;
$headers = 'From: '. $email . "\r\n" .
  'Reply-To: ' . $email . "\r\n";

          mail($to, $subject, $message, $headers);
          header("Location: contact.php?mailsend");

 ?>
