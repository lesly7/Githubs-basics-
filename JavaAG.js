// https://unsplash.com/ (img source)
var map = [];
map[0] = "Green pathway to enjoy";
map[1] = "A hungry Lion";
map[2] = " A magical house";
map[3] = "An open door";
map[4] = " A mysterious boat";
map[5] = " Redy to have a picnic";
map[6] = " A scary Forest";
map[7] = " A storm starting";
map[8] = "";

var mapLocation = 4;

var images = [];
//https://unsplash.com/
images[0] = "path.jpg";
images[1] = "lion.jpg";
images[2] = "house.jpg";
images[3] = "door.jpg";
images[4] = "boat.jpg";
images[5] = "picnic.jpg";
images[6] = "scary.jpg";
images[7] = "storm.jpg";
images[8] = "";

var pathmessages = [];

pathmessages[0]="You should think twice before going that way";
pathmessages[1]="That way can lead you to a bad end";
pathmessages[2]="wait the other way look more atractive";
pathmessages[3]="You could be knoking to a private place";
pathmessages[4]="A floting can destroy you!";
pathmessages[5]="stop! don't go if you are hungry";
pathmessages[6]="Darkness is comming pick another way";
pathmessages[7]="if you are afraid of storms this is not a good way to go";
pathmessages[8]="";

var helpMessages=[];

helpMessages[0]= "";
helpMessages[1]= "";
helpMessages[2]= "";
helpMessages[3]= "You will see small with money. it can be usuful";
helpMessages[4]= "Here is a knife. It will keep you safe from the bad guys";
helpMessages[5]= "Take the food!. There is still a long way in front of you. Food might be necessary";
helpMessages[6]= "";
helpMessages[7]= "";
helpMessages[8]= "";

var items = ["money","knife","food"];
var itemLocations = [3,4,5];

var bag =[];

var playersInput ="";

var gameMessage = "";


var directionsCreate = ["north","east", "south", "west", 
     "take", "use"];
var directions = "";
var itemsIn = ["money","knife","food"];
var item = "";

var image=document.querySelector("img");

var output = document.querySelector("#output");
output.innerHTML= map[mapLocation];
var input= document.querySelector("#input");

var button=document.querySelector("button");
button.style.cursor="poiter";
button.addEventListener("click",clickHandler,false);

render();
function clickHandler(){
    playGame();
}
function playGame(){
    playersInput = input.value;
    playersInput = playersInput.toLowerCase();
     
    gameMessage = "";
    action="";
    
    for(i = 0; i< directionsCreate.length; i++){ 
        if(playersInput.indexOf(directionsCreate[i])!== -1){
           action= directionsCreate[i];
            console.log("player's action:"+action);
            break;
        }
    }
    switch(action){
         case"north":
            mapLocation -= 3;
            break;
         
        case "east";
            mapLocation +=1;
            break;
            
        case "south":
            mapLocation += 3;
        
        case "west":
            mapLocation -=1;
            break;
        default:
            gameMessage="I don't understand that,";
            
    }
    render();
        
}

function render(){
    output.innerHTML= map[mapLocation];
    output.innerHTML += "<br><em>"+gameMessage+"</em>"; 
}


 