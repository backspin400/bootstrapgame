	var starthealth=60;
	var startbottlecaps=40;
	var startprompt='oh shit you\'re in a closet. what do you do?';
	var choice1start= 'shit i hate spiders! get out!';
	var choice2start= 'Wait a sec...I think I hear something';
	var isDanger;
	var health;
	var bottlecaps;
	var healthstatus;
	var bottlecapsstatus;
	var choice;
	var displayhealth=1;
	var displaybottlecaps=0;

function initiate_stats() {
	healthstatus='bar-warning';

	health=starthealth;
	bottlecaps=startbottlecaps;
	document.getElementById("resolution").innerHTML='<div></div>';
	document.getElementById("change").innerHTML='<div></div>';

	update_stats();
	document.getElementById("prompt").innerHTML= '<p></p>' +startprompt+'<br>';
	document.getElementById("prompt").innerHTML+= '<input type="button" value="'+choice1start+'" onClick="choice(1)">  <input type="button" value="' +choice2start+ '" onClick="choice(2)"> ';
}


function update_stats(){
	if (displayhealth){
	document.getElementById("healthbar").innerHTML='<div class="progress"> <div class="bar '+ healthstatus+' " style="width:'+health+ '%;"></div> </div>';}
	if(displaybottlecaps){
	document.getElementById("bottlecaps").innerHTML='<p><em>Bottlecaps</em></p><div><img src=\'assets/img/bottlecap.jpg\' style="height:20px"> '+ bottlecaps +'<p><br> </p></div> ';}

}

function onwards(resolve, next, lasthealth, lastbottlecaps, choice1text,choice1choice,   choice2text,  choice2choice) {
	document.getElementById("resolution").innerHTML='<div>'+resolve+'</div> ';
	if (lasthealth>0){
		document.getElementById("change").innerHTML='<div>sweet, regained '+lasthealth+' health</div>';
	}
	else if (lasthealth==0){
		document.getElementById("change").innerHTML='<div></div>';
	} else {
		document.getElementById("change").innerHTML='<div>ouch, lost ' +lasthealth+' health</div>';
	}

	if (lastbottlecaps>0){
		document.getElementById("change").innerHTML+='<div>sweet, found '+lastbottlecaps+' health</div>';
	}
	else if (lastbottlecaps==0){
		document.getElementById("change").innerHTML+='<div></div>';
	} else {
		document.getElementById("change").innerHTML+='<div>damn, lost ' +lastbottlecaps+' health</div>';
	}

health+=lasthealth;
bottlecaps+=lastbottlecaps;

if (health>100) {
	health=100;
	healthstatus='bar-success';
} else if (health > 65){
	healthstatus='bar-success';
}	else if (health>35){
	healthstatus='bar-warning';
}	else if (health>0){
	healthstatus='bar-danger'
}   else{health=0;
	healthstatus='bar-danger';
	return;
	};

	if (health>0){document.getElementById("prompt").innerHTML=next+'<br><input type="button" value="'+choice1text+ '" onClick="choice('+choice1choice+')"> \
	 <input type="button" value="'+choice2text+'" onClick="choice('+choice2choice+')">';
	} else{document.getElementById("prompt").innerHTML='<div>oh shit you\'re dead. try again?</div>'}

update_stats();

}

function choice(chose) {


	switch(chose){

		case 1:

		break;
		case 2:
		onwards('you tumble out of the closet. and crashing through the door comes a wolf. no, a werewolf. wait, where the fuck did the werewolf come from?','your heart starts to race, it just\
			saw you. what can you do?',0,0, 'RUN!',21,'fight that bastard', 22);
		break;

		case 21:

		break;

		case 22:
		onwards('just because he saw you first doesn\'t mean you can\'t take him. "My name is Inigo Montoya!" you yell, and you charge at him!', 'you\'ve tackled his ass to the ground and his head rolls away. wait a minute, it was just a mask! \
			 ' ,-15, 0, 'finish the job', 221, 'question him', 222);
		break;

		case 11:
		break;

		case 111:
		break;

		case 112:

		break;

		case 121:

		break;

		case 122:

		break;

		case 211:

		break;

		case 212:

		break;

		case 221:
		displaybottlecaps=1;
		onwards('you smash the guy\'s skull on the ground. bloody, but it had to be done. you pat down the body. in his pockets you find 15 bottlecaps- maybe they\'ll come in handy. you throw them in your pocket and realize that you\'ve had\
		a stash in your pocket the whole time!', 'what do we do next?', 0,15, 'search around' ,2211, 'get out of there', 2212 )

		break;

		case 222:

		break;

		default:
		break;


	};
}
