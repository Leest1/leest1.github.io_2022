<?php
    $name = $_EMAIL['name'];
    $email = $_EMAIL['email'];
    $message = $_EMAIL['message'];

    $from = 'From: site';
    $to = 'leest1@uci.edu';
    $subject = 'Hello!';

    $body = "From: $name\n E-mail: $email\n Message:\n $message";

    if ($_EMAIL['submit']) {
        if($name != '' && $email != '' && $message != '') {
            if (mail ($to, $subject, $body, $from)) {
                echo '<p>Your message has been sent :)</p>'
            } else {
                echo '<p>Something went wrong :(</p>';
            }
        }
    }
?>