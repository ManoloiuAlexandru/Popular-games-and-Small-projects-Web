class Player
{
	constructor(deck)
	{
		this.deck=deck;
		this.hand=NaN;
	}
	print_hand(players_turn)
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
				play_it(this.id);
			}
			card_to_play.innerHTML=result;
			card_to_play.value=result;
			document.getElementById(players_turn).appendChild(card_to_play);
		}
	}
}
function play_it(id_of_card)
{
	var result="";
	result=document.getElementById(id_of_card).value;
	document.getElementById("battlefield").innerHTML=document.getElementById("battlefield").innerHTML+result;
	document.getElementById(id_of_card).remove();
}
