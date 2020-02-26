Creatures=
[
[1,1,1,"Peasant","Soldier",[]],
//[0,999,99999,"Alex","Soldier",["Guard( creature with guard must be attacked first)","Draw a card","Nobel","Rush( creature with rush can attack immediately after summon)"]],
[1,2,1,"Archer","Soldier",[]],
[3,3,3,"Knight","Soldier",[]],
[3,1,5,"Gate Guard","Soldier",["Guard( creature with guard must be attacked first)"]],
[2,3,1,"Cavalry","Soldier",["Rush( creature with rush can attack immediately after summon)"]],
/*[0,1,1,"Scout","Soldier",["Draw a card"]],
[0,2,3,"Paladin","Soldier",["When a friendly soldier dies get+1/+1"]],
[0,4,6,"Royal Guard","Soldier",["Guard","Draw a card"]],
[0,3,3,"Knight Champion","Soldier",["When you summon a soldier get +1/+1"]],
[0,3,5,"Guard Captain","Soldier",["When summon all creatures with guard get +1/+2"]],
[0,0,3,"Flag Carrier","Soldier",["While Flag Carrier is on the filed all soldiers get +2/+1"]],
[0,2,2,"Priest","Soldier",["When summon pick a friendly creature give that creature +0/+3"]],
[0,5,5,"Adrian, The friendly",["When summon pick a friendly soldier, give that creature +3/+3 Guard and Rush"]],
[0,1,1,"Bard",["While Bard is on the filed all friendly creatures get +1/0"]],
[0,3,5,"Teutonic Knight",["When a friendly soldier takes damage Teutonic Knight will get +1/+0"]],
[0,3,4,"Billmen",["While Billmen is on the field enemy creatures lose Rush"]],
[0,7,7,"Cataphract"[]],
[0,6,2,"Halberdier"["Halberdier can't be attacked by creatures with 3 or more attack"]]*/
]
Spells=
[
[0,"Let's ride","All frienldy creatures get Rush"],
//[0,"Hidden artillery","Deals 2 damage to all enemies"],
]
var deck_for_test_player1=[];
var i;
for (i=0;i<25;i++)
{
creature_pick=Creatures[Math.floor(Math.random() * Creatures.length)];
card=new Creature(creature_pick[0],creature_pick[1],creature_pick[2],creature_pick[3],creature_pick[4],creature_pick[5]);
deck_for_test_player1.push(card);
spell_pick=Spells[Math.floor(Math.random()*Spells.length)];
card=new Spell(spell_pick[0],spell_pick[1],spell_pick[2]);
deck_for_test_player1.push(card);
}

var deck_for_test_player2=[];
for (i=0;i<25;i++)
{
creature_pick=Creatures[Math.floor(Math.random() * Creatures.length)];
card=new Creature(creature_pick[0],creature_pick[1],creature_pick[2],creature_pick[3],creature_pick[4],creature_pick[5]);
deck_for_test_player2.push(card);
spell_pick=Spells[Math.floor(Math.random()*Spells.length)];
card=new Spell(spell_pick[0],spell_pick[1],spell_pick[2]);
deck_for_test_player2.push(card);
}
