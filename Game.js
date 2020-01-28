class Card
{
	constructor(number,type)
	{
		this.number=number;
		this.type=type;
		this.hidden=0;
	}
	print_card()
	{
		if (this.hidden==1)
		{
			return "Hidden card";
		}
		else
		{
			return this.number+" "+this.type;
		}
	}
}
class Player
{
	constructor(name,money)
	{	
		this.name=name;
		this.cards=[];
		this.hand_value=0;
		this.money=money;
	}
	
	show_hand()
	{
		var i;
		for (i=0;i<this.cards.length;i++)
		{
			this.cards[i].hidden=0;
		}
	}
	calculate_hand()
	{
		this.hand_value=0;
		var i;
		for (i=0;i<this.cards.length;i++)
		{	
			if (this.cards[i].number>11 && this.cards[i].hidden==0)
			{
				this.hand_value=this.hand_value+10;
			}
			else if (this.cards[i].hidden==0)
			{	
				this.hand_value=this.hand_value+this.cards[i].number;
			}
		}
		return this.hand_value;
	}
}

function show_hands(player,dealer)
{
	var result="";
		for (i=0;i<player.cards.length;i++)
		{
			result=result+player.cards[i].print_card()+"\n";
		}
		document.getElementById("cards_in_hand").innerHTML=result;
	result="";
	for (i=0;i<dealer.cards.length;i++)
		{
			result=result+dealer.cards[i].print_card()+"\n";
		}
		document.getElementById("dealer_hand").innerHTML=result;
}
function win_or_lose(player,dealer)
{
	show_hands(player,dealer);
	player.show_hand();
	dealer.show_hand();
	player.calculate_hand();
	dealer.calculate_hand();
	document.getElementById("Hand_value").innerHTML=player.calculate_hand();
	document.getElementById("Dealer_hand").innerHTML=dealer.calculate_hand();
	if (player.hand_value>dealer.hand_value && player.hand_value>21)
	{	
		document.getElementById("result").innerHTML="You lose";
		return 0;
	}
	else if (dealer.hand_value < player.hand_value && player.hand_value<= 21)
	{
		document.getElementById("result").innerHTML="You won";
		return 1;
	}
	else if (21 >= dealer.hand_value && dealer.hand_value > player.hand_value)
	{
		document.getElementById("result").innerHTML="You lose";
		return 0;
	}
	else if (dealer.hand_value > 21 && 21 >= player.hand_value)
	{
		document.getElementById("result").innerHTML="You won";
		return 1;
	}
	else if (dealer.hand_value == player.hand_value)
	{
		document.getElementById("result").innerHTML="Push";
		return 2;
	}
}

//--------------------------------------------------------------------------------
var my_decision="";
var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var type_cards = ['diamond', 'clover', 'hearts', 'spades'];
var card_number = numbers[Math.floor(Math.random() * numbers.length)];
var card_type= type_cards[Math.floor(Math.random() * type_cards.length)];
var deck=[];
var deck_copy=[];
var i,j;
player=new Player('Player',100);
dealer=new Player('Dealer',0);
//--------------------------------------------------------------------------------


for (i=0;i<numbers.length;i++)
{
	for (j=0;j<type_cards.length;j++)
		{
			deck_copy.push(new Card(numbers[i],type_cards[j]));
		}
}
deck=deck_copy.slice();

function main()
{
	document.getElementById("money").innerHTML="Your money:"+player.money;
	player_card=deck[Math.floor(Math.random() * deck.length)];
	player.cards.push(player_card);
	var index=deck.indexOf(player_card);
		if (index>-1)
		{
			deck.splice(index,1);
		}

	player_card=deck[Math.floor(Math.random() * deck.length)];
	player.cards.push(player_card);
	var index=deck.indexOf(player_card);
		if (index>-1)
		{
		deck.splice(index,1);
		}
		
	player_card=deck[Math.floor(Math.random() * deck.length)];
	dealer.cards.push(player_card);
	var index=deck.indexOf(player_card);
		if (index>-1)
		{
			deck.splice(index,1);
		}
		
	console.log(deck);
	player_card=deck[Math.floor(Math.random() * deck.length)];
	player_card.hidden=1;
	dealer.cards.push(player_card);
	var index=deck.indexOf(player_card);
		if (index>-1)
		{
			deck.splice(index,1);
		}
	document.getElementById("Hand_value").innerHTML=player.calculate_hand();
	document.getElementById("Dealer_hand").innerHTML=dealer.calculate_hand();
	if (player.hand_value==21)
	{
		win_or_lose(player,dealer);
		clean_and_reset();
	}
	else
	{	
		show_hands(player,dealer);
	}
}
function buttons_reset()
{
	document.getElementById("myBtn").disabled = false;
	document.getElementById("standbtn").disabled = true;
	document.getElementById("hitbtn").disabled = true;
}
function clean_and_reset()
{
	if (result==1)
	{	
		player.money=player.money-my_money
		buttons_reset();
		player.money=player.money+my_money+my_money;
	}
	else if (result==0)
	{
		buttons_reset();
		player.money=player.money-my_money;
	}
	else if (result==2)
	{
		buttons_reset();
	}
}
