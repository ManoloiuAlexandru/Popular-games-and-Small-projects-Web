class Creature
{
	constructor(mana,attack,hp,name,type,list_of_attrib)
	{
		this.mana=mana;
		this.name=name;
		this.type=type;
		this.attack=attack;
		this.hp=hp;
		this.draw_card=false;
		this.guard=false;
		this.nobel=false;
		this.list_of_attrib=list_of_attrib;
		if (list_of_attrib.includes("Guard"))
		{
			this.guard=true;
		}
		if (list_of_attrib.includes("Draw a card"))
		{
			this.draw_card=true;
		}
		if (list_of_attrib.includes("Nobel"))
		{
			this.nobel=true;
		}
	}
	
	print_creature()
	{
		var result="";
		result=this.mana+" "+this.type+"\n"+this.name+"\n"+this.attack+"   "+this.hp+"\n";
		var i;
		for (i=0;i<this.list_of_attrib.length;i++)
		{
			result=result+this.list_of_attrib[i]+",";
		}
		return result;
	}
}

