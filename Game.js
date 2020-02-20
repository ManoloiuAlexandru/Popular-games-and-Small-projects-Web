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
		console.log(player1);
		console.log(player2);
		player1.print_hand("hand_player1","battlefield_for_player1");
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
		check_for_blocker(battle_for_player);
		if (check_for_blocker(battle_for_player)==1)
		{
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
		attack_hp=document.getElementById(id_of_card).value;
		attack_hp=attack_hp.split("\n");
		attack_hp=attack_hp[2].split(" ");
		attack=attack_hp[0]
		hp=attack_hp[attack_hp.length-1];
		player2.hp=player2.hp-attack;
		if (check_for_blocker(battle_for_player)==1)
		{
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
				battle(player2.creature_on_field[i],target,player1,player2);
				in_the_field=1;
				break;
			}
		}
		if (in_the_field==0)
		{
		alert("That is not a gurad!!");
		}
	}
	else if (battle_for_player=="battlefield_for_player1")
	{
		for (i=0;i<player2.creature_on_field.length;i++)
		{
			if (player2.creature_on_field[i].value.includes(target) && player2.creature_on_field[i].value.includes("Guard"))
			{
				battle(player1.creature_on_field[i],target,player1,player2);
				in_the_field=1;
				break;
			}
		}
		if (in_the_field==0)
		{
		alert("That is not a gurad!!");
		}
	}
}
function battle(creature,target,player_attaked,player_attacking)
{
	var i;
	var index_of_attacking_creature;
	var index_of_defending_creature;
	var the_attacking_creature;
	var the_defending_creature;
	for (i=0;i<player_attacking.creature_on_field.length;i++)
	{
		if (player_attacking.creature_on_field[i]==creature)
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
	
	if (Def_hp<=Attack_attack)
	{
		player_attaked.creature_graveyard.push(player_attaked.creature_on_field[index_of_defending_creature]);
		player_attaked.creature_on_field.splice(index_of_defending_creature,1);
	}
	if (Attack_hp<=Def_attack)
	{
		player_attacking.creature_graveyard.push(player_attacking.creature_on_field[index_of_attacking_creature]);
		player_attacking.creature_on_field.splice(index_of_attacking_creature,1);
	}
	console.log(player1);
	console.log(player2);
}
function check_for_blocker(battle_for_player)
{
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
