class Creature
{
	constructor(mana,attack,hp,name,type,list_of_attrib)
	{
		this.mana=mana;
		this.name=name;
		this.type=type;
		this.attack=attack;
		this.hp=hp;
		this.list_of_attrib=list_of_attrib;
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
	print_non_attrib()
	{
		var result="";
		result=this.mana+" "+this.type+"\n"+this.name+"\n"+this.attack+"   "+this.hp+"\n";
		return result;
	}
}
