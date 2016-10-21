$(document).ready(function() {    
      
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var openCell = "<td>", closeCell = "</td>", openIDcell = "<td id='", openClose = "'>";


var text104 = "Sergeant: Aw, Fonzie. I'm ashamed of you. I never expected to see you in here for draggin' - especially against Skizzy. Now, don't tell me you lost your cool.<br><span class='fonz'>Fonzie: Hey, he insulted a friend. I just thought it was my duty to drive, you know?</span><br>Sergeant: Well, I guess chivalry ain't what it used to be.";

var text107 = "Richie: You make school sound like good fun.<br><span class='fonz'>Fonzie: Well, school's got good points. I mean, smoking in the bathroom, cutting classes, showing my tattoo to the chicks.</span><br><br>Marion: What do you plan to do when you get out of school?<br><span class='fonz'>Fonzie: Oh, I was thinking I might become a cop.</span><br>Marion: That's very admirable.<br><span class='fonz'>Fonzie: I mean, it's the only job I know where they pay you to drive a motorcycle.</span>"

var text114 = "<span class='fonz'>Fonzie: You gotta have cousins and in-laws and stuff. I mean, all those people! I got nothing against marriage, but how am I gonna get them all on my bike at the same time?</span>";

var text115 = "<span class='fonz'>Fonzie: Hey, Cunningham, which is cooler? The mirrors up like this at an angle or down like this, straight?</span><br>Richie: Well, I think you can see better with them down at an angle.<br><span class='fonz'>Fonzie: Hey, I don't wanna see where I've been. I wanna see how cool I look getting there!</span>";

var text116 = "<span class='fonz'>Fonzie: Like I always say, you live fast, you die young, you leave a good-looking corpse.</span><br>Potsie: Hey, that's cool.<br>Richie: Nick Romano said that in Knock on Any Door.<br><span class='fonz'>Fonzie: I think I said it better.</span>";

var text202 = "Richie: Fonzie, did your family ever have a second car?<br><span class='fonz'>Fonzie: Nope. But we got four motorcycles. We even got a sidecar for my grandma.</span>";

var text203 = "<span class='fonz'>Fonzie: I went out with a girl like that once. Broke up with her in two and a half minutes.</span><br>Richie: How did you do it?<br><span class='fonz'>Fonzie: Well, I wrote a note and threw it through her window. Of course, it was wrapped in a brick.</span>";

var text206 = "<span class='fonz'>Fonzie: You got nothing to fear but fear itself.</span><br>Richie: Didn't somebody else say that?<br><span class='fonz'>Fonzie: Well, if they did, they got it from the Fonz.</span>";

var text210 = "Richie: I don't know that much about Hamlet, Fonzie, but I'll teach you everything I know.<br><span class='fonz'>Fonzie: Go.<br>Richie: All right.</span><br>Howard: So, you're gonna play the 'Melancholy Dane,' huh?<br><span class='fonz'>Fonzie: Hey, wait a minute! I don't play animals!</span>";

var text211 = "Marion: What would we do without you, Fonzie?<br><span class='fonz'>Fonzie: Well, you'd be up a creek, Mrs. C.</span><br>Richie: Yeah, our car'd be stuck in the snow, our tree'd be out, and our Santa Claus would be mugging the neighbors.";

var text212 = "Richie: You know what my idea of a perfect girl is, Fonz?<br><span class='fonz'>Fonzie: [rolling eyes] I have no idea. Thrill me.</span><br>Richie: I like a girl... with a cute face... a cute build... and a nice personality.<br><span class='fonz'>Fonzie: No, you don't say.</span><br>Richie: What's your idea of the perfect girl, Fonzie?<br><span class='fonz'>Fonzie: 45-22-34... with her own Harley.</span>";

var text219 = "<span class='fonz'>Fonzie: Yeah, just wait 'til my bongo solo.</span><br>Ralph: [glancing at the others] We don't have a bongo solo. [Fonzie glares at him] Oh, but we'll put one in, Fonz! Right guys?";

var text221 = "Ralph: What do you think we should do?<br><span class='fonz'>Fonzie: I think we should rake him over the coals until he cries wolf.</span><br>Potsie: Isn't that a mixed metaphor?<br><span class='fonz'>Fonzie: Do you think he's gonna know the difference? ------</span><br>[Richie studies the dedication Fonzie wants him to read out on the radio]<br>Richie: 'To the Drysdale sisters, Beth and Jenny, from Fonzie and Sam.'<br><span class='fonz'>Fonzie: Yeah.</span><br>Richie: Who's Sam?<br><span class='fonz'>Fonzie: Oh, that's me. I don't want the Drysdale sisters to know they're competing.</span>";


function chooseExcerpt() {
    var excerpt = $("select[name='excerpts']").val();

    switch(excerpt) {
        case "w1":
            $("#choose").hide();
            $("#excerpt").html(text104);
            break;
        case "w2":
            $("#choose").hide();
            $("#excerpt").html(text107);
            break;
        case "w3":
            $("#choose").hide();
            $("#excerpt").html(text114);
            break;
        case "w4":
            $("#choose").hide();
            $("#excerpt").html(text115);
            break;
        case "w5":
            $("#choose").hide();
            $("#excerpt").html(text116);
            break;
        case "w6":
            $("#choose").hide();
            $("#excerpt").html(text202);
            break;
        case "w7":
            $("#choose").hide();
            $("#excerpt").html(text203);
            break;
        case "w8":
            $("#choose").hide();
            $("#excerpt").html(text206);
            break;
        case "w9":
            $("#choose").hide();
            $("#excerpt").html(text210);
            break;
        case "w10":
            $("#choose").hide();
            $("#excerpt").html(text211);
            break;
        case "w11":
            $("#choose").hide();
            $("#excerpt").html(text212);
            break;
        case "w12":
            $("#choose").hide();
            $("#excerpt").html(text219);
            break;
        case "w13":
            $("#choose").hide();
            $("#excerpt").html(text221);
            break;
        default:
            $("#choose").show();
    }
}

function ccPay(){
    var name = $("input[name='fname']").val();
    alert("Thanksamundo for your donation, " + name + "!");
}
    
$("#excerptform input[type='submit']").click(function(){
    chooseExcerpt();
});
    
$("#payform input[type='submit']").click(function(){
    ccPay();
});    

$("#homebutton").click(function(){
    $("#home").show();
    $("#sermons").hide(); 
    $("#give").hide(); 
    $("#media").hide();
    $("#join").hide();
});

$("#sermonsbutton").click(function(){
    $("#home").hide();
    $("#sermons").show(); 
    $("#give").hide(); 
    $("#media").hide();
    $("#join").hide();
}); 

$("#givebutton").click(function(){
    $("#home").hide();
    $("#sermons").hide(); 
    $("#give").show(); 
    $("#media").hide();
    $("#join").hide();
}); 

$("#mediabutton").click(function(){
    $("#home").hide();
    $("#sermons").hide();
    $("#give").hide();
    $("#media").show();
    $("#join").hide();
}); 

$("#joinbutton").click(function(){
    $("#home").hide();
    $("#sermons") .hide();
    $("#give").hide();
    $("#media").hide();
    $("#join").show();
});

    $("#home").show();
    
});    