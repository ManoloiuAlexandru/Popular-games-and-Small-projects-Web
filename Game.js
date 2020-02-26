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
		draw_a_card(player2);
		player2.print_hand("hand_player2","battlefield_for_player2");
		if (player2.full_mana>9){}
		else
		{
		player2.full_mana+=1;
		player2.rest_of_mana=player2.full_mana;
		}
		console.log(player1.full_mana);
		console.log(player2.full_mana);
		display_players_values();
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
		draw_a_card(player1);
		player1.print_hand("hand_player1","battlefield_for_player1");
		if (player1.full_mana>9){}
		else
		{
		player1.full_mana+=1;
		player1.rest_of_mana=player1.full_mana;
		}
		console.log(player1.full_mana);
		console.log(player2.full_mana);
		display_players_values();
	}
}

function display_players_values()
{
	document.getElementById("player1_hp").innerHTML="Castle of player1:"+player1.hp;
	document.getElementById("player2_hp").innerHTML="Castle of player2:"+player2.hp;
	document.getElementById("player1_mana").innerHTML="Mana of player1:"+player1.rest_of_mana;
	document.getElementById("player2_mana").innerHTML="Mana of player2:"+player2.rest_of_mana;
}
function get_attack_and_hp(id_of_card)
{
	attack_hp=document.getElementById(id_of_card).value;
	attack_hp=attack_hp.split("\n");
	attack_hp=attack_hp[2].split(" ");
	return attack_hp;
}

function win_or_lost()
{
	if (player1.hp==0)
	{
		alert("You lost");
		location.reload();
	}
	else if (player2.hp==0)
	{
		alert("You won");
		location.reload();
	}
}
var in_battle=false;
var attaker;
var defender;
function action_to_do(id_of_card)
{
	if (in_battle==false)
	{
		in_battle=true;
		attaker=id_of_card;
		setTimeout(action_to_do,60000);
	}
	else if (in_battle==true)
	{
		in_battle=false;
		defender=id_of_card;
		action(attaker,defender);
	}
}
var no_castle=0;
function action(attacker,defender)
{
	no_castle=1;
	try
	{
		if (defender.includes("Castle"))
		{
			no_castle=0;
		}
		if (defender.charAt(defender.length-1)==2 || defender.charAt(defender.length-2)==2)
		{
			if (no_castle==0 && check_for_blocker("battlefield_for_player1")==1)
			{
				attack_hp=get_attack_and_hp(attacker);
				attack=attack_hp[0];
				hp=attack_hp[attack_hp.length-1];
				player2.hp=player2.hp-attack;
				/*document.getElementById("player2_hp").innerHTML="Castle of player2:"+player2.hp;*/
				display_players_values();
				document.getElementById(attacker).disabled=true;
				win_or_lost();
			}
			else 
			{
				pick_target(attacker,defender);
			}
		}
		else if (defender.charAt(defender.length-1)==1 || defender.charAt(defender.length-2)==1)
		{
			if (no_castle==0 && check_for_blocker("battlefield_for_player2")==1)
			{
				attack_hp=get_attack_and_hp(attacker);
				attack=attack_hp[0];
				hp=attack_hp[attack_hp.length-1];
				player1.hp=player1.hp-attack;
				//document.getElementById("player1_hp").innerHTML="Castle of player1:"+player1.hp;
				display_players_values();
				document.getElementById(attacker).disabled=true;
				win_or_lost();
			}
			else 
			{
				pick_target(attacker,defender);
			}
		}
	}
	catch(err)
	{
		console.log(err);
	}
}
function check_for_Guards(target)
{
	get_target=document.getElementById(target);
	if (get_target.value.includes("Guard"))
	{
		return 1;
	}
	else 
	{
		if (target.charAt(target.length-2)==1)
		{
			if (check_for_blocker("battlefield_for_player2")==0)
			{
				return 0;
			}
		}
		else if (target.charAt(target.length-2)==2)
		{
			if (check_for_blocker("battlefield_for_player1")==0)
			{
				return 0;
			}
		}
	}
	return 1;
}
function pick_target(attacker,target)
{
	console.log("pick_target",attacker,target);
	if (target=="Castle2")
	{
		no_castle=1;
		for (i=0;i<player2.creature_on_field.length;i++)
		{
			player2.creature_on_field[i].disabled=false;
		}
		setTimeout(action_to_do,60000);
	}
	else if (target=="Castle1")
	{
		no_castle=1;
		for (i=0;i<player1.creature_on_field.length;i++)
		{
			player1.creature_on_field[i].disabled=false;
		}
		setTimeout(action_to_do,60000);
	}
	else
	{
		get_target=document.getElementById(target);
		creature=document.getElementById(attacker);
		if (check_for_Guards(target)==1)
		{
			if (attacker.charAt(attacker.length-2)=="1")
			{
				player_attacking=player1;
				player_attaked=player2;
			}
			else if (attacker.charAt(attacker.length-2)=="2")
			{
				player_attacking=player2;
				player_attaked=player1;
			}
			//console.log(get_target);
			//console.log(creature);
			//console.log(player_attacking);
			//console.log(player_attaked);
			battle(creature,get_target,player_attaked,player_attacking);
		}
		else
		{
			alert("That is not a Guard");
			setTimeout(action_to_do,60000);
		}
	}
}
function remove_card_from_hand(id_of_card,player_hand)
{
	if (player_hand.includes("1"))
	{
		var i;
		for (i=0;i<player1.hand.length;i++)
		{
			discard_text=document.getElementById(id_of_card).value;
			if (discard_text.includes(player1.hand[i].name))
			{
				player1.hand.splice(i,1);
				break;
			}
		}
	}
	else if (player_hand.includes("2"))
	{
		for (i=0;i<player2.hand.length;i++)
		{
			discard_text=document.getElementById(id_of_card).value;
			if (discard_text.includes(player2.hand[i].name))
			{
				player2.hand.splice(i,1);
				break;
			}
		}
	}
}
function Cast_spell(id_of_card,casting_player)
{
	card_to_play=document.getElementById(id_of_card).value.split("\n");
	card_to_play=card_to_play[0].split(" ");
	if (casting_player[casting_player.length-1]=="1" && player1.rest_of_mana<card_to_play[0])
	{
			alert("Low mana");
	}
	else if (casting_player[casting_player.length-1]=="2" && player2.rest_of_mana<card_to_play[0])
	{
			alert("Low mana");
	}
	else
	{
		if (casting_player[casting_player.length-1]=="1")
		{
			player1.rest_of_mana-=parseInt(card_to_play[0]);
		}
		else if (casting_player[casting_player.length-1]=="2")
		{
			player2.rest_of_mana-=parseInt(card_to_play[0]);
		}
		remove_card_from_hand(id_of_card,casting_player);
		spell_to_cast=document.getElementById(id_of_card);
		document.getElementById(id_of_card).remove();
		if (spell_to_cast.value.includes("Let's"))
		{
			from_spell_click=1;
			Ride_spell(id_of_card,casting_player);
		}
	}
	console.log(player1);
	console.log(player2);
}
function battle(creature,target,player_attaked,player_attacking)
{
	console.log("Battle");
	var i;
	var index_of_attacking_creature;
	var index_of_defending_creature;
	var the_attacking_creature;
	var the_defending_creature;
	//console.log(player1);
	//console.log(player2);
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
		if (player_attaked.creature_on_field[i]==target)
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
	if (parseInt(Def_hp)>parseInt(Attack_attack) || parseInt(Attack_hp)>parseInt(Def_attack))
	{
		Def_hp=Def_hp-Attack_attack;
		after_battle=Def_attack+"  "+Def_hp;
		update_status_of_card=the_defending_creature.value.split("\n");
		update_status_of_card[2]=after_battle;
		var i=0;
		var final_status="";
		for (i=0;i<update_status_of_card.length;i++)
		{
			final_status=final_status+update_status_of_card[i]+"\n";
		}
		the_defending_creature.value=final_status;
		final_status="";
		for (i=0;i<update_status_of_card.length-1;i++)
		{
			if (update_status_of_card[i].includes("Guard(") || update_status_of_card[i].includes("Rush("))
			{
			}
			else
			{
				final_status=final_status+update_status_of_card[i]+"\n";
			}
		}
		the_defending_creature.innerHTML=final_status;
		Attack_hp=Attack_hp-Def_attack;
		after_battle=Attack_attack+"  "+Attack_hp;
		update_status_of_card=the_attacking_creature.value.split("\n");
		update_status_of_card[2]=after_battle;
		final_status="";
		for (i=0;i<update_status_of_card.length;i++)
		{
			final_status=final_status+update_status_of_card[i]+"\n";
		}
		the_attacking_creature.value=final_status;
		final_status="";
		for (i=0;i<update_status_of_card.length-1;i++)
		{
			if (update_status_of_card[i].includes("Guard(") || update_status_of_card[i].includes("Rush("))
			{
			}
			else
			{
				final_status=final_status+update_status_of_card[i]+"\n";
			}
		}
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
