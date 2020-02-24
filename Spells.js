class Spell
{
	constructor(mana,name,effect)
	{
		this.mana=mana;
		this.name=name;
		this.effect=effect;
	}
	print_spell()
	{
		var result="";
		result=result+this.mana+"\n"+this.name
		return result;
	}
	print_effect()
	{
		return this.effect;
	}
}
function Ride_spell(id_of_card,casting_player)
{
	if (casting_player.includes("1"))
	{
		var i;
		for (i=0;i<player1.creature_on_field.length;i++)
		{
			player1.creature_on_field[i].disabled=false;
		}
	}
	else if (casting_player.includes("2"))
	{
		var i;
		for (i=0;i<player2.creature_on_field.length;i++)
		{
			player2.creature_on_field[i].disabled=false;
		}
	}
	
}
