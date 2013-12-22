// Card Constructor
function Card(suit, value){
    var suit=suit;
    var value=value;
    this.getNumber=function(){
        return value;
    }
    this.getSuit=function(){
        if (suit===1){
            return "hearts";
        }
        else if (suit===2){
            return "diamonds";
        }
        else if(suit===3){
            return "clubs";
        }
        else{return "spades"};

    }
    this.getValue=function(){
        if (value==1){
            return 11;
        }
        else if (value>=10){
            return 10;
        }
        else{
            return value;
        }
    }
}

function deal(){
    suit =Math.ceil(Math.random()* 4);
    value=Math.ceil(Math.random()*13);
    return new Card(suit,value);
}

function Hand(){
    var array=[];
    array.push(deal());
    //console.log(array[0].getValue())
    array.push(deal());
    
    this.getHand=function(){
        return array;
    }
    this.score=function(){
        var sum=0;
        var aces=0;
        var l=array.length;
        //console.log("el is "+l)
        for(i=0;i<array.length;i++){
            sum+=array[i].getValue();
            //console.log("i is " + i + " "+sum)
            if (array[i].getValue()===11){aces++};
        }
        //console.log(aces)
        while (sum>21&&aces>0){
            sum-=10;
            aces--;
        }
        if (sum>21){sum=0}
        return sum;
    }
    
    this.printHand=function(){
    var hand="";
        for (i=0; i<array.length;i++){
            hand +=array[i].getNumber()+" of "+array[i].getSuit() + '\n';
        }
        console.log(hand);
    }
    
    this.hitMe=function(){
        array[array.length]=deal();
    }
}

var dealerHand;
function playAsDealer(){
    dealerHand=new Hand();
    //console.log(hand.score())
    while (dealerHand.score()<17){
        dealerHand.hitMe();
    }
    console.log("Final score: "  + dealerHand.score());
}

var playerHand;
function playAsUser(){
    playerHand= new Hand();
    var hit=true;
    while (hit){
        playerHand.printHand();
        hit=confirm("Hit?");
        if (hit){
            playerHand.hitMe();
        }
    }
    console.log("Final score: "+ playerHand.score())
}

function declareWinner(userHand,dealerHand){
    if (userHand.score()>dealerHand.score()){
        console.log( "You win!");
    }
    else if (userHand.score()<dealerHand.score()){
        console.log( "You lose!");
    }
    else {
        console.log( "You tied!");
    }
}

function playGame(){
    playAsUser();
    playAsDealer();
    declareWinner(playerHand,dealerHand);
}

playGame();