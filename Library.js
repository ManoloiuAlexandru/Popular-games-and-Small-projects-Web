Creatures=
[
[0,1,1,"Peasant","Soldier",[]],
//[0,999,999,"Alex","Soldier",["Guard","Draw a card","Nobel","Rush"]],
[0,2,1,"Archer","Soldier",[]],
[0,1,3,"Knight","Soldier",[]],
]

var deck_for_test_player1=[];
var i;
for (i=0;i<25;i++)
{
creature_pick=Creatures[Math.floor(Math.random() * Creatures.length)];
card=new Creature(creature_pick[0],creature_pick[1],creature_pick[2],creature_pick[3],creature_pick[4],creature_pick[5]);
deck_for_test_player1.push(card);
}

var deck_for_test_player2=[];
for (i=0;i<25;i++)
{
creature_pick=Creatures[Math.floor(Math.random() * Creatures.length)];
card=new Creature(creature_pick[0],creature_pick[1],creature_pick[2],creature_pick[3],creature_pick[4],creature_pick[5]);
deck_for_test_player2.push(card);
}
