<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars($_POST['name']);
    $societe = htmlspecialchars($_POST['societe']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message= htmlspecialchars($_POST['message']);

    $to = "pierre.roitg@live.fr";
    $subject = "Nouveau message de contact de $name";
    $body = "Nom: $name\nSociete: $societe\nTelephone: $phone\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "Merci! Votre message a été envoyé.";
    } else {
        echo "Erreur! Votre message n'a pas pu être envoyé."
    }
}
?>