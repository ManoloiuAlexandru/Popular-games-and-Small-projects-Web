function end_turn(id_player)
{
	if (id_player=="player1")
	{
		document.getElementById("player1").disabled =true;
		document.getElementById("player2").disabled =false;
		var i;
		for (i=0;i<player2.creature_on_field.length;i++)
		{
			player2.creature_on_field[i].disabled=false;
			player2.creature_can_attack.push(player2.creature_on_field[i]);
		}
		draw_a_card(player1);
		console.log(player1);
		console.log(player2);
	}
	else if (id_player=="player2")
	{
		document.getElementById("player2").disabled =true;
		document.getElementById("player1").disabled =false;
		var i;
		for (i=0;i<player1.creature_on_field.length;i++)
		{
			player1.creature_on_field[i].disabled=false;
			player1.creature_can_attack.push(player1.creature_on_field[i]);
		}
		draw_a_card(player2);
		console.log(player1);
		console.log(player2);
	}
}

function action(id_of_card,battle_for_player)
{
	if (battle_for_player=="battlefield_for_player2")
	{
		attack_hp=document.getElementById(id_of_card).value;
		attack_hp=attack_hp.split("\n");
		attack_hp=attack_hp[2].split(" ");
		attack=attack_hp[0];
		hp=attack_hp[attack_hp.length-1];
		player1.hp=player1.hp-attack;
		document.getElementById("player1_hp").innerHTML="HP of player1:"+player1.hp;
		document.getElementById(id_of_card).disabled=true;
	}
	else
	{
		attack_hp=document.getElementById(id_of_card).value;
		attack_hp=attack_hp.split("\n");
		attack_hp=attack_hp[2].split(" ");
		attack=attack_hp[0]
		hp=attack_hp[attack_hp.length-1];
		player2.hp=player2.hp-attack;
		document.getElementById("player2_hp").innerHTML="HP of player2:"+player2.hp;
		document.getElementById(id_of_card).disabled=true;
	}
}
