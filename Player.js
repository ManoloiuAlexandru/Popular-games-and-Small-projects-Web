class Player
{
	constructor(deck)
	{
		this.deck=deck;
		this.hand=NaN;
		this.hp=20;
		this.creature_on_field=[];
		this.creature_can_attack=[];
		this.creature_graveyard=[];
		this.out_of_cards=0;
	}
	print_hand(players_turn,battle_for_player)
	{
		var div=document.getElementById(players_turn);
		while (div.firstChild)
		{
			div.removeChild(div.firstChild);
		}
		var i;
		var result="";
		var cards_played=0;
		var non_attr_result="";
		for (i=0;i<this.hand.length;i++)
		{
			try
			{
				result=this.hand[i].print_creature();
				non_attr_result=this.hand[i].print_non_attrib();
				var card_to_play=document.createElement("Button");
				card_to_play.setAttribute("id","Card"+players_turn+i);
				card_to_play.setAttribute("title",result);
				card_to_play.onclick=function()
				{
					play_it(this.id,battle_for_player);
				}
				card_to_play.innerHTML=non_attr_result;
				card_to_play.value=result;
				Style_cards(card_to_play);
				document.getElementById(players_turn).appendChild(card_to_play);
			}
			catch(err)
			{
				result=this.hand[i].print_effect();
				non_attr_result=this.hand[i].print_spell();
				var card_to_play=document.createElement("Button");
				card_to_play.setAttribute("id","Card"+players_turn+i);
				card_to_play.setAttribute("title",result);
				card_to_play.onclick=function()
				{
					Cast_spell(this.id,battle_for_player);
				}
				card_to_play.innerHTML=non_attr_result;
				card_to_play.value=non_attr_result+" "+result;
				Style_cards(card_to_play);
				document.getElementById(players_turn).appendChild(card_to_play);
			}
		}
	}
}
function play_it(id_of_card,battle_for_player)
{
	
	var card_on_field=document.createElement("Button");
	card_on_field.setAttribute("id","B"+id_of_card);
	card_on_field.onclick=function()
	{
		action_to_do(this.id,battle_for_player);
	}
	Style_cards(card_on_field);
	card_on_field.setAttribute("disabled","false");
	card_on_field.innerHTML=document.getElementById(id_of_card).innerHTML;
	card_on_field.title=document.getElementById(id_of_card).value;
	card_on_field.value=document.getElementById(id_of_card).value;
	if (card_on_field.value.includes("Rush"))
	{
		card_on_field.disabled=false;
	}
	document.getElementById(battle_for_player).appendChild(card_on_field);
	
	if (battle_for_player=="battlefield_for_player1")
	{
		player1.creature_on_field.push(card_on_field);
		remove_card_from_hand(id_of_card,"hand1");
	}
	else
	{
		player2.creature_on_field.push(card_on_field);
		remove_card_from_hand(id_of_card,"hand2");
	}
	document.getElementById(id_of_card).remove();
}
function draw_a_card(player_to_draw)
{
	if (player_to_draw.hand.length>7)
	{
		alert("Your hand is full");
		player_to_draw.deck.splice(0,1);
		console.log(player_to_draw);
	}
	else if (player_to_draw.deck.length>0)
	{
		player_to_draw.hand.push(player_to_draw.deck.slice(0,1)[0]);
		player_to_draw.deck.splice(0,1);
	}
	else
	{
		player_to_draw.out_of_cards+=1;
		alert("You are out of cards lose "+ player_to_draw.out_of_cards +" HP")
		player_to_draw.hp-=player_to_draw.out_of_cards;
		document.getElementById("player1_hp").innerHTML="HP of player1:"+player1.hp;
		document.getElementById("player2_hp").innerHTML="HP of player2:"+player2.hp;
		win_or_lost();
	}
}
player1=new Player(deck_for_test_player1);
player2=new Player(deck_for_test_player2);
