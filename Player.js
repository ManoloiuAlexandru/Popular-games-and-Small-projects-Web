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
		for (i=0;i<this.hand.length;i++)
		{
			result=this.hand[i].print_creature();
			var card_to_play=document.createElement("Button");
			card_to_play.setAttribute("id","Card"+players_turn+i);
			card_to_play.onclick=function()
			{
				play_it(this.id,battle_for_player);
			}
			card_to_play.innerHTML=result;
			card_to_play.value=result;
			document.getElementById(players_turn).appendChild(card_to_play);
		}
	}
}
function play_it(id_of_card,battle_for_player)
{
	
	var card_on_field=document.createElement("Button");
	card_on_field.setAttribute("id","B"+id_of_card);
	card_on_field.onclick=function()
	{
		action(this.id,battle_for_player);
	}
	card_on_field.setAttribute("disabled","true");
	card_on_field.innerHTML=document.getElementById(id_of_card).value;
	card_on_field.value=document.getElementById(id_of_card).value;
	document.getElementById(battle_for_player).appendChild(card_on_field);
	
	if (battle_for_player=="battlefield_for_player1")
	{
		player1.creature_on_field.push(card_on_field);
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
	else
	{
		player2.creature_on_field.push(card_on_field);
		var i;
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
	document.getElementById(id_of_card).remove();
}
function action(id_of_card,battle_for_player)
{
	action_to_do(id_of_card,battle_for_player);
}
function draw_a_card(player_to_draw)
{
	player_to_draw.hand.push(player_to_draw.deck.slice(0,1)[0]);
	player_to_draw.deck.splice(0,1);
}
player1=new Player(deck_for_test_player1);
player2=new Player(deck_for_test_player2);
