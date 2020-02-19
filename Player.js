class Player
{
	constructor(deck)
	{
		this.deck=deck;
		this.hand=NaN;
		this.hp=20;
	}
	print_hand(players_turn,battle_for_player)
	{
		var i;
		var result="";
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
	var card=document.getElementById(id_of_card);
	var card_on_field=document.createElement("Button");
	card_on_field.setAttribute("id","B"+id_of_card);
	card_on_field.onclick=function()
	{
		action(this.id,battle_for_player);
	}
	console.log(battle_for_player);
	card_on_field.innerHTML=document.getElementById(id_of_card).value;
	card_on_field.value=document.getElementById(id_of_card).value;
	document.getElementById(battle_for_player).appendChild(card_on_field);
	document.getElementById(id_of_card).remove();
}
function action(id_of_card,battle_for_player)
{
	console.log(id_of_card);
	console.log(battle_for_player);
}
player1=new Player(deck_for_test);
player2=new Player(deck_for_test);
