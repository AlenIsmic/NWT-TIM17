<?php

function sendEmail (string firstname, string lastname, string email, string link) 
{

require 'PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer;
 
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                       // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'news.bookstore@gmail.com';                   // SMTP username
$mail->Password = 'tim17123';               // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
$mail->Port = 587;                                    //Set the SMTP port number - 587 for authenticated TLS
$mail->setFrom('news.bookstore@gmail.com', 'BookStore');     //Set who the message is to be sent from
$mail->addReplyTo('no-reply@gmail.com', 'NO REPLY');  //Set an alternative reply-to address
$mail->addAddress(email, firstname + ' ' + lastname);  // Add a recipient
$mail->addAddress(email);               // Name is optional
$mail->addCC('news.bookstore@gmail.com');
//$mail->addBCC('bcc@example.com');
$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
//$mail->addAttachment('/usr/labnol/file.doc');         // Add attachments
//$mail->addAttachment('/images/image.jpg', 'new.jpg'); // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
 
$mail->Subject = 'User verification';
$mail->Body    = 'Klinite na <a href="">link</a> da verifikujete profil.';
$mail->AltBody = '';
 
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
 
if(!$mail->send()) {
   //echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}
 
echo 'Message has been sent';

}

sendEmail("Alen", "Ismic", "alen.ismic@gmail.com", "http://klix.ba");
