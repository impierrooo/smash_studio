/*Fonction changement de page*/

function Page_presentation(){
	document.getElementById('page_presentation').style.display = 'block';	
	document.getElementById('page_commande').style.display = 'none';
	document.getElementById('page_contact').style.display = 'none';
}

function Page_commande(){
	document.getElementById('page_presentation').style.display = 'none';	
	document.getElementById('page_commande').style.display = 'block';
	document.getElementById('page_contact').style.display = 'none';
}

function Page_contact(){
	document.getElementById('page_presentation').style.display = 'none';	
	document.getElementById('page_commande').style.display = 'none';
	document.getElementById('page_contact').style.display = 'block';
}

/*Système de traduction*/

function langage_france(){
	document.getElementById("sidebar_top_text2").innerHTML = "Presentation";
	document.getElementById("sidebar_top_text3").innerHTML = "Commande";
	document.getElementById("sidebar_top_text4").innerHTML = "Contact";
	document.getElementById("menu_deroulant_list_lien1").innerHTML = "Langue";

	document.getElementById("sidebar_bottom_text1").innerHTML = "Plan du site";
	document.getElementById("sidebar_bottom_text2").innerHTML = "Presentation";
	document.getElementById("sidebar_bottom_text3").innerHTML = "Commande";
	document.getElementById("sidebar_bottom_text4").innerHTML = "Contact";
	document.getElementById("sidebar_bottom_text5").innerHTML = "Langue";
	document.getElementById("sidebar_bottom_text16").innerHTML = "Crédit";
	document.getElementById("sidebar_bottom_text17").innerHTML = "© 2022 Smash Studio.";
	document.getElementById("sidebar_bottom_text18").innerHTML = "Tous droits réservés.";
	document.getElementById("sidebar_bottom_text19").innerHTML = "Plan du site";
	document.getElementById("sidebar_bottom_text20").innerHTML = "Presentation";
	document.getElementById("sidebar_bottom_text21").innerHTML = "Commande";
	document.getElementById("sidebar_bottom_text22").innerHTML = "Contact";
	document.getElementById("sidebar_bottom_text23").innerHTML = "Langue";
	document.getElementById("sidebar_bottom_text34").innerHTML = "Crédit";
	document.getElementById("sidebar_bottom_text35").innerHTML = "© 2022 Smash Studio.";
	document.getElementById("sidebar_bottom_text36").innerHTML = "Tous droits réservés.";
	document.getElementById("sidebar_bottom_text37").innerHTML = "Plan du site";
	document.getElementById("sidebar_bottom_text38").innerHTML = "Presentation";
	document.getElementById("sidebar_bottom_text39").innerHTML = "Commande";
	document.getElementById("sidebar_bottom_text40").innerHTML = "Contact";
	document.getElementById("sidebar_bottom_text41").innerHTML = "Langue";
	document.getElementById("sidebar_bottom_text52").innerHTML = "Crédit";
	document.getElementById("sidebar_bottom_text53").innerHTML = "© 2022 Smash Studio.";
	document.getElementById("sidebar_bottom_text54").innerHTML = "Tous droits réservés.";

	document.getElementById("box_contact_part1_titre").innerHTML = "Nos réseaux sociaux";
	document.getElementById("box_contact_part2_titre").innerHTML = "Contactez-nous";
	document.getElementById("box_contact_part2_titre1").innerHTML = "Nom et prénom";
	document.getElementById("nom").placeholder = "Nom et prénom";
	document.getElementById("box_contact_part2_titre2").innerHTML = "Adresse e-mail";
	document.getElementById("email").placeholder = "Adresse e-mail";
	document.getElementById("box_contact_part2_titre3").innerHTML = "Contenu du message";
	document.getElementById("message").placeholder = "Contenu du message";
	document.getElementById("box_contact_part2_titre4").innerHTML = "Réponse rapide";
	document.getElementById("box_contact_part2_titre5").innerHTML = "La réponse sera envoyée en 24h maximum sur votre boîte mail. Nous ferons en sorte qu'elle soit la plus clair et précise possible.";

	var etat = document.getElementById("box_contact_part2_bouton").value;

	if ((etat == 'Envoyer') || (etat == 'Send') || (etat == 'Enviar')){
		document.getElementById("box_contact_part2_bouton").value = "Envoyer";
	} else {
		document.getElementById("box_contact_part2_bouton").value = "✔";
	}
}

function langage_angleterre(){
	document.getElementById("sidebar_top_text2").innerHTML = "Presentation";
	document.getElementById("sidebar_top_text3").innerHTML = "Order";
	document.getElementById("sidebar_top_text4").innerHTML = "Contact";
	document.getElementById("menu_deroulant_list_lien1").innerHTML = "Language";

	document.getElementById("sidebar_bottom_text1").innerHTML = "Site map";
	document.getElementById("sidebar_bottom_text2").innerHTML = "Presentation";
	document.getElementById("sidebar_bottom_text3").innerHTML = "Order";
	document.getElementById("sidebar_bottom_text4").innerHTML = "Contact";
	document.getElementById("sidebar_bottom_text5").innerHTML = "Language";
	document.getElementById("sidebar_bottom_text16").innerHTML = "Credit";
	document.getElementById("sidebar_bottom_text17").innerHTML = "© 2022 Smash Studio.";
	document.getElementById("sidebar_bottom_text18").innerHTML = "All rights reserved.";
	document.getElementById("sidebar_bottom_text19").innerHTML = "Site map";
	document.getElementById("sidebar_bottom_text20").innerHTML = "Presentation";
	document.getElementById("sidebar_bottom_text21").innerHTML = "Order";
	document.getElementById("sidebar_bottom_text22").innerHTML = "Contact";
	document.getElementById("sidebar_bottom_text23").innerHTML = "Language";
	document.getElementById("sidebar_bottom_text34").innerHTML = "Credit";
	document.getElementById("sidebar_bottom_text35").innerHTML = "© 2022 Smash Studio.";
	document.getElementById("sidebar_bottom_text36").innerHTML = "All rights reserved.";
	document.getElementById("sidebar_bottom_text37").innerHTML = "Site map";
	document.getElementById("sidebar_bottom_text38").innerHTML = "Presentation";
	document.getElementById("sidebar_bottom_text39").innerHTML = "Order";
	document.getElementById("sidebar_bottom_text40").innerHTML = "Contact";
	document.getElementById("sidebar_bottom_text41").innerHTML = "Language";
	document.getElementById("sidebar_bottom_text52").innerHTML = "Credit";
	document.getElementById("sidebar_bottom_text53").innerHTML = "© 2022 Smash Studio.";
	document.getElementById("sidebar_bottom_text54").innerHTML = "All rights reserved.";

	document.getElementById("box_contact_part1_titre").innerHTML = "Our social networks";
	document.getElementById("box_contact_part2_titre").innerHTML = "Contact us";
	document.getElementById("box_contact_part2_titre1").innerHTML = "First and last name";
	document.getElementById("nom").placeholder = "First and last name";
	document.getElementById("box_contact_part2_titre2").innerHTML = "E-mail address";
	document.getElementById("email").placeholder = "E-mail address";
	document.getElementById("box_contact_part2_titre3").innerHTML = "Message content";
	document.getElementById("message").placeholder = "Message content";
	document.getElementById("box_contact_part2_titre4").innerHTML = "Quick response";
	document.getElementById("box_contact_part2_titre5").innerHTML = "The reply will be sent to your mailbox in a maximum of 24 hours. We will make sure that it is as clear and precise as possible.";

	var etat = document.getElementById("box_contact_part2_bouton").value;

	if ((etat == 'Envoyer') || (etat == 'Send') || (etat == 'Enviar')){
		document.getElementById("box_contact_part2_bouton").value = "Send";
	} else {
		document.getElementById("box_contact_part2_bouton").value = "✔";
	}
}

function langage_espagne(){
	document.getElementById("sidebar_top_text2").innerHTML = "Presentacion";
	document.getElementById("sidebar_top_text3").innerHTML = "Pedido";
	document.getElementById("sidebar_top_text4").innerHTML = "Contacto";
	document.getElementById("menu_deroulant_list_lien1").innerHTML = "Lengua";

	document.getElementById("sidebar_bottom_text1").innerHTML = "Plan du site";
	document.getElementById("sidebar_bottom_text2").innerHTML = "Presentacion";
	document.getElementById("sidebar_bottom_text3").innerHTML = "Pedido";
	document.getElementById("sidebar_bottom_text4").innerHTML = "Contacto";
	document.getElementById("sidebar_bottom_text5").innerHTML = "Lengua";
	document.getElementById("sidebar_bottom_text16").innerHTML = "Crédito";
	document.getElementById("sidebar_bottom_text17").innerHTML = "© 2022 Smash Studio.";
	document.getElementById("sidebar_bottom_text18").innerHTML = "Reservados todos los derechos.";
	document.getElementById("sidebar_bottom_text19").innerHTML = "Plan du site";
	document.getElementById("sidebar_bottom_text20").innerHTML = "Presentacion";
	document.getElementById("sidebar_bottom_text21").innerHTML = "Pedido";
	document.getElementById("sidebar_bottom_text22").innerHTML = "Contacto";
	document.getElementById("sidebar_bottom_text23").innerHTML = "Lengua";
	document.getElementById("sidebar_bottom_text34").innerHTML = "Crédito";
	document.getElementById("sidebar_bottom_text35").innerHTML = "© 2022 Smash Studio.";
	document.getElementById("sidebar_bottom_text36").innerHTML = "Reservados todos los derechos.";
	document.getElementById("sidebar_bottom_text37").innerHTML = "Plan du site";
	document.getElementById("sidebar_bottom_text38").innerHTML = "Presentacion";
	document.getElementById("sidebar_bottom_text39").innerHTML = "Pedido";
	document.getElementById("sidebar_bottom_text40").innerHTML = "Contacto";
	document.getElementById("sidebar_bottom_text41").innerHTML = "Lengua";
	document.getElementById("sidebar_bottom_text52").innerHTML = "Crédito";
	document.getElementById("sidebar_bottom_text53").innerHTML = "© 2022 Smash Studio.";
	document.getElementById("sidebar_bottom_text54").innerHTML = "Reservados todos los derechos.";

	document.getElementById("box_contact_part1_titre").innerHTML = "Nuestras redes sociales";
	document.getElementById("box_contact_part2_titre").innerHTML = "Contáctenos";
	document.getElementById("box_contact_part2_titre1").innerHTML = "Nombre y apellido";
	document.getElementById("nom").placeholder = "Nombre y apellido";
	document.getElementById("box_contact_part2_titre2").innerHTML = "Correo electrónico";
	document.getElementById("email").placeholder = "Correo electrónico";
	document.getElementById("box_contact_part2_titre3").innerHTML = "Contenido del mensaje";
	document.getElementById("message").placeholder = "Contenido del mensaje";
	document.getElementById("box_contact_part2_titre4").innerHTML = "Respuesta rápida";
	document.getElementById("box_contact_part2_titre5").innerHTML = "La respuesta se enviará en 24 horas como máximo a su buzón de correo. Nos aseguraremos de que sea lo más clara y precisa posible.";

	var etat = document.getElementById("box_contact_part2_bouton").value;

	if ((etat == 'Envoyer') || (etat == 'Send') || (etat == 'Enviar')){
		document.getElementById("box_contact_part2_bouton").value = "Enviar";
	} else {
		document.getElementById("box_contact_part2_bouton").value = "✔";
	}
}

/*Fonction envoie du formulaire*/

function Formulaire(){
	var nom = document.getElementById("nom").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	if (nom == '') {
		document.getElementById('nom').style.backgroundColor = '#c285ff';
		setTimeout(fonctionAExecuter, 1000);
		
	} else if (email == '') {
		document.getElementById('email').style.backgroundColor = '#c285ff';
		setTimeout(fonctionAExecuter, 1000);
		
	} else if (message == '') {
		document.getElementById('message').style.backgroundColor = '#c285ff';
		setTimeout(fonctionAExecuter, 1000);
	
	} else {
		document.getElementById("box_contact_part2_bouton").style.width = "50px";
		document.getElementById("box_contact_part2_bouton").style.backgroundColor  = "#7F00FF";
		document.getElementById("box_contact_part2_bouton").style.cursor  = "default";
		document.getElementById("box_contact_part2_bouton").style.borderRadius  = "100px";
		document.getElementById("box_contact_part2_bouton").style.fontStyle = "normal";
		document.getElementById("box_contact_part2_bouton").value = "✔";
		document.getElementById('box_contact_part2_bouton').setAttribute('onclick','');

		var url = "https://discord.com/api/webhooks/985519275437592646/jKl0tIB9dJgYHQ4wls7-aXw7I3pwDlhxLPzzqDuWKbE5JcOw_28RSF6XtXUZV1pEam9O";
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader('Content-type', 'application/json');

		var myEmbed2 = {
			"title": "Formulaire de contact de mon Portfolio",
			"color": 0xDA7426,
			"fields": [
				{
					"name": "Nom et Prénom :",
					"value": nom,
				},
				{
					"name": "Email :",
					"value": email,
				},
				{
					"name": "Message :",
					"value": message
				}
			],
		}
		
		var params = {
        username: "Form Bot",
        embeds: [ myEmbed2 ]
		}
    
		request.send(JSON.stringify(params));
		
		document.getElementById("nom").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
	
		document.getElementById('nom').style.backgroundColor = '#F2F2F2';
		document.getElementById('email').style.backgroundColor = '#F2F2F2';
		document.getElementById('message').style.backgroundColor = '#F2F2F2';
	}
}

function fonctionAExecuter(){
	document.getElementById('nom').style.backgroundColor = '#F2F2F2';
	document.getElementById('email').style.backgroundColor = '#F2F2F2';
	document.getElementById('message').style.backgroundColor = '#F2F2F2';
}