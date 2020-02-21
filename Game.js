function end_turn(id_player)
{
	console.log("Ending turn");
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
		//console.log(player1);
		//console.log(player2);
		player2.print_hand("hand_player2","battlefield_for_player2");
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
		//console.log(player1);
		//console.log(player2);
		player1.print_hand("hand_player1","battlefield_for_player1");
	}
}

function action(id_of_card,battle_for_player)
{
	if (battle_for_player=="battlefield_for_player2")
	{

		if (check_for_blocker(battle_for_player)==1)
		{
			attack_hp=document.getElementById(id_of_card).value;
			attack_hp=attack_hp.split("\n");
			attack_hp=attack_hp[2].split(" ");
			attack=attack_hp[0];
			hp=attack_hp[attack_hp.length-1];
			player1.hp=player1.hp-attack;
			check_for_blocker(battle_for_player);
			document.getElementById("player1_hp").innerHTML="HP of player1:"+player1.hp;
			document.getElementById(id_of_card).disabled=true;
		}
		else
		{
			pick_target(battle_for_player,id_of_card);
		}
	}
	else
	{
		if (check_for_blocker(battle_for_player)==1)
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
		else
		{
			pick_target(battle_for_player,id_of_card);
		}
	}
}

function pick_target(battle_for_player,id_of_card)
{
	var target=prompt("Pick a target that has guard");
	var in_the_field=0;
	if (battle_for_player=="battlefield_for_player2")
	{
		for (i=0;i<player1.creature_on_field.length;i++)
		{
			if (player1.creature_on_field[i].value.includes(target) && player1.creature_on_field[i].value.includes("Guard"))
			{
				in_the_field=1;
				break;
			}
		}
		if (in_the_field==0)
		{
		alert("That is not a Guard!!");
		}
		else if (in_the_field==1)
		{
			battle(id_of_card,target,player1,player2);
		}
	}
	else if (battle_for_player=="battlefield_for_player1")
	{
		for (i=0;i<player2.creature_on_field.length;i++)
		{
			if (player2.creature_on_field[i].value.includes(target) && player2.creature_on_field[i].value.includes("Guard"))
			{
				in_the_field=1;
				break;
			}
		}
		if (in_the_field==0)
		{
		alert("That is not a Guard!!");
		}
		else if (in_the_field==1)
		{
			battle(id_of_card,target,player2,player1);
		}
	}
}
function battle(creature,target,player_attaked,player_attacking)
{
	console.log("Battle");
	var i;
	var index_of_attacking_creature;
	var index_of_defending_creature;
	var the_attacking_creature;
	var the_defending_creature;
	console.log(player1);
	console.log(player2);
	for (i=0;i<player_attacking.creature_on_field.length;i++)
	{
		if (player_attacking.creature_on_field[i].id==creature)
		{
			the_attacking_creature=player_attacking.creature_on_field[i];
			index_of_attacking_creature=i;
			break;
		}
	}
	for (i=0;i<player_attaked.creature_on_field.length;i++)
	{
		if (player_attaked.creature_on_field[i].value.includes(target))
		{
			the_defending_creature=player_attaked.creature_on_field[i];
			index_of_defending_creature=i;
			break;
		}
	}
	Defending_attack_hp=the_defending_creature.value.split("\n");
	Defending_attack_hp=Defending_attack_hp[2].split(" ");
	Def_attack=Defending_attack_hp[0]
	Def_hp=Defending_attack_hp[Defending_attack_hp.length-1];
	
	Attacking_attack_hp=the_attacking_creature.value.split("\n");
	Attacking_attack_hp=Attacking_attack_hp[2].split(" ");
	Attack_attack=Attacking_attack_hp[0]
	Attack_hp=Attacking_attack_hp[Attacking_attack_hp.length-1];
	
	if (parseInt(Def_hp)<=parseInt(Attack_attack))
	{
		player_attaked.creature_graveyard.push(player_attaked.creature_on_field[index_of_defending_creature]);
		player_attaked.creature_on_field.splice(index_of_defending_creature,1);
		player_attaked.creature_can_attack.splice(index_of_defending_creature,1);
	}
	if (parseInt(Attack_hp)<=parseInt(Def_attack))
	{
		player_attacking.creature_graveyard.push(player_attacking.creature_on_field[index_of_attacking_creature]);
		player_attacking.creature_on_field.splice(index_of_attacking_creature,1);
		player_attacking.creature_can_attack.splice(index_of_attacking_creature,1);
	}
	if (parseInt(Def_hp)>parseInt(Attack_attack))
	{
		Def_hp=Def_hp-Attack_attack;
		after_battle=Def_attack+"  "+Def_hp;
		//console.log(the_defending_creature.value);
		update_status_of_card=the_defending_creature.value.split("\n");
		update_status_of_card[2]=after_battle;
		var i=0;
		var final_status="";
		for (i=0;i<update_status_of_card.length;i++)
		{
			final_status=final_status+update_status_of_card[i]+"\n";
		}
		the_defending_creature.value=final_status;
		//console.log(the_defending_creature);
		the_defending_creature.innerHTML=final_status;
		
		Attack_hp=Attack_hp-Def_attack;
		after_battle=Attack_attack+"  "+Attack_hp;
		//console.log(the_defending_creature.value);
		update_status_of_card=the_attacking_creature.value.split("\n");
		update_status_of_card[2]=after_battle;
		var i=0;
		var final_status="";
		for (i=0;i<update_status_of_card.length;i++)
		{
			final_status=final_status+update_status_of_card[i]+"\n";
		}
		the_attacking_creature.value=final_status;
		//console.log(the_defending_creature);
		the_attacking_creature.innerHTML=final_status;
	}
	
	//console.log(player1);
	//console.log(player2);
	clean_board();
}
function check_for_blocker(battle_for_player)
{
	console.log("Check if there are blockers on the map");
	if (battle_for_player=="battlefield_for_player2")
	{
		for (i=0;i<player1.creature_on_field.length;i++)
		{
			if (player1.creature_on_field[i].value.includes("Guard"))
			{
				alert("There are gurads on the battle take them out!!");
				return 0;
			}
		}
		return 1;
	}
	else if (battle_for_player=="battlefield_for_player1")
	{
		for (i=0;i<player2.creature_on_field.length;i++)
		{
			if (player2.creature_on_field[i].value.includes("Guard"))
			{
				alert("There are gurads on the battle take them out!!");
				return 0;
			
			}
		}
		return 1;
	}
}

function clean_board()
{
	console.log("Clean board");
	var div=document.getElementById("battlefield_for_player1");
		while (div.firstChild)
		{
			div.removeChild(div.firstChild);
		}
	var div=document.getElementById("battlefield_for_player2");
		while (div.firstChild)
		{
			div.removeChild(div.firstChild);
		}
	print_battlefield()
}
function print_battlefield()
{
	var i;
	for (i=0;i<player1.creature_on_field.length;i++)
	{
		document.getElementById("battlefield_for_player1").appendChild(player1.creature_on_field[i]);
	}
	for (i=0;i<player2.creature_on_field.length;i++)
	{
		document.getElementById("battlefield_for_player2").appendChild(player2.creature_on_field[i]);
	}
}
