# Popular-games-and-Small-projects-Web
In this repository you can find implementation of popular games and small projects using JavaScript,HTML and CSS.

----------------------------------------------------------------------------------------------------------------------------------------

 ## BlackJack:
  
  Blackjack is the American variant of a globally popular banking game known as Twenty-One. It is a comparing card game between one or more players and a dealer, where each player in turn competes against the dealer. Players do not compete against each other. It is played with one or more decks of 52 cards, and is the most widely played casino banking game in the world. The objective of the game is to beat the dealer in one of the following ways:

  Get 21 points on the player's first two cards (called a "blackjack" or "natural"), without a dealer blackjack;
  Reach a final score higher than the dealer without exceeding 21; 
  or
  Let the dealer draw additional cards until their hand exceeds 21 ("busted").
  
   [Wikipedia](https://en.wikipedia.org/wiki/Blackjack)
  
  *Implementation*</br>
  The implementation is in JavaScript and HTML. It is using using basic Object Oriented concepts. The class card is used to define an object that has the 2 attributes of a normal card and a specific attribute: 
  - number
  - card_type 
  - hidden= this attribute is for the dealer part, BlackJack has a rule: the dealer will have 2 cards in the start as the player but only one is shown. 
  
  The class player has 4 attributes: 
  - name= name of the player
  - cards= gives the cards that the player has in his hands
  - hand_value= that increase with the number on the card
  - money= this is the money that the player has at the start. 
  
  ***Note: The functions buttons_reset and clean_and_reset from Game.js are for cleaning the web page.***
  
  *Gameplay*</br>
  The game begins with the player geting 2 cards and the dealer geting 2 cards. The player will not see his cards or the dealer's cards until he bet a number, if he bets a number bigger then he's money he will be asked to bet less money. 
  The game then is simple after the bet he will be asked if he wants to "stand" or if he wants to "hit". The "stand" option means that if the dealer will have the hand_value<17 the dealer will draw cards until it gets over or equal to 17, then he's hand value will be calculated, with the player's class method "calculate_hand", then using the function "win_or_lose", which will check who won and return 1 if the player won, 2 if it is a draw or 0 if the dealer won. After we see who won the player will recive his bet * 2 back. If the player selects "hit" this will give him a new card. If with the new card he goes over 21 he lose, if the hand_value <21 he will have to choice again if he wants to "hit" or "stand", the game will end when he is out of money.

----------------------------------------------------------------------------------------------------------------------------------------

## Hangman:
  
  Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters, within a certain number of guesses. [Wikipedia](https://en.wikipedia.org/wiki/Hangman_(game))

  *Implementation*</br>
  The implementation is in JavaScript and HTML. The list of words is used to define the word that the player has to guess. In order to get the word that the player has to guess the program uses the Javascript math object and takes a word from the list_of_words, which is a list. The variabile "full_word" which is used to see if the player has found the word or not, the initial value of this variable is 0, the chances to 1 when to player finds the word. 
  
  There are other variables like: 
  - the life, which means the number of tryes that the player has, if this value gets to 0 and the player dosen't guess the word until then the game is over
  - the letters_tryed, which is used to store all the letters that the player has tryed until now, this is used so that the player will not lose lives if he uses more then once a letter. 
  
  *Gameplay*</br>
  The games start after the player choices what type of game he/she wants: 2 if the player wants to see the first and the last letter of the word or 1 if the player dosen't want to see any of the letters, after that he types what letter he wants to try. The game ends when the player is out of lifes or if he finds the word.  
  
----------------------------------------------------------------------------------------------------------------------------------------

 ## Path_Convertor
 
 The file URI scheme is a URI scheme defined in RFC 8089, typically used to retrieve files from within one's own computer.
Previously the file URI scheme was specified in RFC 1630 and RFC 1738. The Internet Engineering Task Force (IETF) published RFC 8089, obsoleting these RFCs, with "a syntax based on the generic syntax of RFC 3986 that is compatible with most existing usages." [Wikipedia](https://en.wikipedia.org/wiki/File_URI_scheme)

 *Implementation*</br>
 The implementation is in JavaScript and HTML. 
 
 *How it Works*</br>
 After opening the web page there will be a filed where you will put your path to the file. After pressing the button "Convert for Python path" this will call the function "Convert" that will replace the \ with \\. After is done it will print on the screen the converted path.
