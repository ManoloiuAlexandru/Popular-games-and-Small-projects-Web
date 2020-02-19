Creatures=
[
[0,1,1,"Peasant","Soldier",[]],
[0,999,999,"Alex","Soldier",["Guard","Draw a card","Nobel"]]
]

var deck_for_test=[];
var i;
for (i=0;i<25;i++)
{
creature_pick=Creatures[Math.floor(Math.random() * Creatures.length)];
card=new Creature(creature_pick[0],creature_pick[1],creature_pick[2],creature_pick[3],creature_pick[4],creature_pick[5]);
deck_for_test.push(card);
}
