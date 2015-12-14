//#pragma strict

var DarkenScene1 : GameObject;
var DarkenScene2 : GameObject;
var DarkenScene3 : GameObject;
var DarkenScene4 : GameObject;


var clickHere: GameObject;
var SpeakingChar1: GameObject;
var SpeakingChar2: GameObject;
var blank: Sprite;

var allCharacters : Animator;

var isInConvo = false;
var currentConvo: Array;
currentConvo = new Array();
var currentConvoName = "";
var mouseDownNumber = 0;
var chara;
var dialogue;
var emotion;


//var counter = System.Math.Floor(Time.time);
var scenes : ScenesScript;
var gamestate : GameState;



var game : GameObject;
var anim : Animator;



//Create a hashtable of dialogues which will contain all scenes and dialoque for each scenes
var dialogues : Hashtable;
var Set1 : Hashtable;
var Set2 : Hashtable;

var currentSet : Hashtable;

//(temp) this is the dialogue being said now
var currentDialogue;

//temp var to store lines
var line;

//get the universal script to store values
var storeVars : storeVars;




var cratorSet = "inCamp";
var konstalSet = "inCamp";
var alunaSet = "inTent";
var estherSet = "inTent";
var milkySet = "inTent";

var scene: Array;



///STORY  VARIABLES
var weaponProgress = 0;
var decoyProgress = 0;


////////////////////////////////////////
///////////  START
////////////////////////////////////////


function Start () {
	
	
	//find the variables so you dont need to define them
	game = GameObject.Find("GameObject");
	anim = GetComponent(Animator);
	
	
	
	//find the universal script withing objects and set variable
	storeVars = game.GetComponent("storeVars");
	scenes = game.GetComponent("ScenesScript");
	gamestate = game.GetComponent("GameState");
	
	DarkenScene1 = GameObject.Find("DarkenScene1");
	DarkenScene2 = GameObject.Find("DarkenScene2");
	DarkenScene3 = GameObject.Find("DarkenScene3");
	DarkenScene4 = GameObject.Find("DarkenScene4");
	SpeakingChar1 = GameObject.Find("SpeakingChar1");
	SpeakingChar2 = GameObject.Find("SpeakingChar2");
	clickHere = GameObject.Find("clickHere");



	line = 0;
	//create a temporary replicated hashtable
	//Set1 = new Hashtable();


	//create a different dialoque sets and add them to the hashtable


	Set1 = new Hashtable();
	Set2 = new Hashtable();
	
////// MILKY & KONSTAL - ALONE Anywhere

	scene = new Array();
	scene.Push(["Konstal", "Hey- I have a bone to pick with you","angry"]);
	scene.Push(["Milky", "If it’s about the baby, I’m as confused as the next person.", "sad"]);
	scene.Push(["Konstal", "Really? Crator seems pretty concerned about you.","angry"]);
	scene.Push(["Milky", "Crator would be concerned about anyone.", "normal"]);
	scene.Push(["Konstal", "He seems to want to keep the baby.", "normal"]);
	scene.Push(["Milky", "He’s just concerned about it.", "sigh"]); 
	scene.Push(["Milky", "It doesn’t mean he’s concerned about me specifically.","sigh"]);
	scene.Push(["Konstal", "Right…","normal"]);
	scene.Push(["Milky", "So I’m assuming we didn’t have sex… right?", "normal"]);
	scene.Push(["Konstal", "WHAT?!","angry"]);
	scene.Push(["Konstal", "Of course not!", "angry"]);
	scene.Push(["Milky", "Huh.","normal"]);
	Set1.Add("konstal_milky_anywhere",scene);
	
////// MILKY & CRATOR - ALONE Anywhere

	scene = new Array();
	scene.Push(["Crator", "Milky- I have to talk to you.","normal"]);
	scene.Push(["Milky", "I actually have to talk to you too…", "normal"]);
	scene.Push(["Crator", "You first- please.","normal"]);
	scene.Push(["Milky", "Um, we didn’t do anything these last few weeks… did we?", "sad"]);
	scene.Push(["Milky", "I really don’t remember how I could have gotten pregnant.", "sad"]);
	scene.Push(["Crator", "No- We haven’t slept together.","surprise"]);
	scene.Push(["Milky", "Oh! Ok- thank you.","normal"]);
	scene.Push(["Crator", "I need to ask you something too. ", "normal"]);
	scene.Push(["Crator", "Are you going to keep the baby?","sad"]);
	scene.Push(["Milky", "I- I don’t know. At this point, I don’t even know where it came from.", "sad"]);
	scene.Push(["Crator", "But you’ll keep it no matter what, right? It’s a living thing and your baby.","angry"]);
	scene.Push(["Milky", "I don’t know.", "sad"]);
	scene.Push(["Crator", " I’ll help you take care of it. I’ll -","angry"]);
	scene.Push(["Milky", "CRATOR!", "angry"]);
	scene.Push(["Crator", "...","surprise"]);
	scene.Push(["Milky", "Really... I’ll decide for myself. I just need some time alone right now.", "sad"]);
	scene.Push(["Crator", "...Sure","sad"]);
	Set1.Add("milky_crator_anywhere",scene);


//ALUNA & MILKY - Alone - Any Scene
	scene = new Array();
	scene.Push(["Aluna", "So you really don’t remember what happened?", "normal"]);
	scene.Push(["Milky", "Weird, huh?", "sad"]);
	scene.Push(["Aluna", "I wouldn’t say that.", "sad"]);
	scene.Push(["Milky", "You know what happened?", "surprise"]);
	scene.Push(["Aluna", "No- nothing like that. It’s just…", "normal"]);
	scene.Push(["Aluna", "Don’t you feel like something really weird is going on on this planet?", "angry"]);
	scene.Push(["Milky", "Weird? Weird as in how?", "normal"]);
	scene.Push(["Aluna", "Like you turning up pregnant. Among other things.", "normal"]);
	scene.Push(["Aluna", "Sometimes I feel like… we’re being watched.", "normal"]);
	scene.Push(["Milky", "Sound’s crazy.", "normal"]);
	scene.Push(["Aluna", "I know. I just can’t help but wonder…", "normal"]);
	Set1.Add("aluna_milky_alone_anywhere",scene);
	

//ESTHER and MILKY - Alone - Any Scene
	scene = new Array();
	scene.Push(["Esther", "Milky! Let’s talk. Now that we’re in private", "normal"]);
	scene.Push(["Milky", "Oh! Sure. If it’s about the pregnancy, I really don’t know what happened.", "normal"]);
	scene.Push(["Esther", "Exactly! You don’t know what happened.", "angry"]);
	scene.Push(["Esther", "If you ask me, there’s some foul play going on.", "angry"]);
	scene.Push(["Esther", "You better stay away from the boys.", "angry"]);
	scene.Push(["Milky", "You- you think they might have…? Without me knowing? ", "sad"]);
	scene.Push(["Esther", "There’s a high possibility.", "normal"]);
	scene.Push(["Milky", "I- I don’t know. Konstal and Crator are good people.", "sad"]);
	scene.Push(["Esther", "Maybe. But they can just as easily be terrible people.", "angry"]);
	scene.Push(["Esther", "I just don’t want you to be hurt again. ", "normal"]);
	scene.Push(["Esther", "Just stay away from them, ok? At least till we get all this figured out.", "normal"]);
	scene.Push(["Milky", "….", "sad"]);
	Set1.Add("esther_milky_alone_anywhere",scene);

//ESTHER, ALUNA, and MILKY - Alone - Any Scene
	scene = new Array();
	scene.Push(["Esther", "How did you even get pregnant? Was it Crator?", "normal"]);
	scene.Push(["Milky", "No.", "normal"]);
	scene.Push(["Esther", "I know you said it was a freak anomaly but that’s a little hard to swallow.", "sigh"]);
	scene.Push(["Milky", "I don’t even know what happened. I just noticed I was pregnant.", "sad"]);
	scene.Push(["Esther", "You didn’t have sex with anyone either…", "normal"]);
	scene.Push(["Milky", "Yeah…", "sad"]);
	scene.Push(["Esther", "C’mon- that’s way too farfetched.", "angry"]);
	scene.Push(["Aluna", "Weirder stuff have happened. ", "normal"]);
	scene.Push(["Esther", "… ", "sad"]);
	Set1.Add("aluna_esther_milky_alone_anywhere",scene);


//KONSTAL and CRATOR - Alone - Any Scene
	scene = new Array();
	scene.Push(["Konstal", "So it is true then. Milky got herself knocked up.", "angry"]);
	scene.Push(["Crator", "It’s not as simple as that. She said she just turned up pregnant.", "angry"]);
	scene.Push(["Crator", "She said she doesn’t know what happened. ", "normal"]);
	scene.Push(["Konstal", "Well, I think it’s pretty obvious what happened... ", "normal"]);
	scene.Push(["Konstal", "And you and Milky have always been on good terms.", "smirk"]);
	scene.Push(["Crator", "She said she didn’t have sex with anyone.", "normal"]);
	scene.Push(["Konstal", "You really believe that?", "normal"]);
	scene.Push(["Crator", "…", "normal"]);
	scene.Push(["Konstal", "How are we even gonna feed it?", "angry"]);
	scene.Push(["Crator", "...", "sad"]);
	scene.Push(["Crator", " I guess we’ll just have to split our rations a bit more.", "sad"]);
	scene.Push(["Konstal", "Yeah, let’s all starve to death. Great idea.", "angry"]);
	Set1.Add("crator_konstal_alone_anywhere",scene);
	
//All character in camp ("crator_konstal_alone_anywhere" already happened)
	scene = new Array();
	scene.Push(["Esther", "Hey guys- did you get dinner ready?", "normal"]);
	scene.Push(["Konstal", "Did you all find out how Milky even got pregnant?", "angry"]);
	scene.Push(["Esther", "We told you… She just turned up pregnant.", "normal"]);
	scene.Push(["Esther", "We need to find out how it happened.", "normal"]);
	scene.Push(["Konstal", "Right…", "normal"]);
	scene.Push(["Crator", "We need to split our rations.", "normal"]);
	scene.Push(["Milky", "You mean for the baby?", "normal"]);
	scene.Push(["Esther", "I thought we were going to find a way to abort it.", "surprise"]);
	scene.Push(["Crator", "Abort it? I thought we were keeping it?", "angry"]);
	scene.Push(["Esther", "Well, we can’t really feed it, can we?", "normal"]);
	scene.Push(["Esther", "And Milky didn’t even want it in the first place.", "normal"]);
	scene.Push(["Crator", "But that doesn’t mean she wants it aborted.", "normal"]);
	scene.Push(["Konstal", "I think Esther’s right. We don’t have enough food to feed it.", "normal"]);
	scene.Push(["Crator", "Shut Up. Let’s just ask Milky.", "normal"]);
	scene.Push(["Milky", "I-I don’t know. I don’t really want it but I feel bad just killing it.", "normal"]);
	scene.Push(["Konstal", "It’s gonna feel even worse if it comes out here", "normal"]);
	scene.Push(["Konstal", "and we don’t even have a bed for it.", "normal"]);
	scene.Push(["Aluna", "I’m hungry. Let’s just eat dinner.", "normal"]);
	scene.Push(["Konstal", "Why did you think it was a good idea to get pregnant anyway, Milky?", "normal"]);
	scene.Push(["Esther", "Watch it- she didn’t want to get pregnant. It just happened.", "normal"]);
	scene.Push(["Konstal", "Right. “It just happened.” How convenient.", "normal"]);
	Set1.Add("aluna_crator_esther_konstal_milky_inCamp",scene);

//ESTHER and ALUNA - Alone - Anywhere (after "aluna_esther_milky_alone_anywhere" happened)
	scene = new Array();
	scene.Push(["Esther", " Milky was definitely forced. Did you see the guys?", "angry"]);
	scene.Push(["Esther", "They look pretty guilty to me.", "angry"]);
	scene.Push(["Aluna", " …", "normal"]);
	scene.Push(["Esther", "She doesn’t remember anything. Obviously they used some sort of drug on her.", "normal"]);
	scene.Push(["Aluna", "Where would they even find drugs here?", "normal"]);
	scene.Push(["Esther", "I don’t know! MAybe they did it while she was asleep?!", "angry"]);
	scene.Push(["Esther", "All I know is that some boy here can’t be trusted.", "angry"]);
	scene.Push(["Aluna", "We’re being watched. ", "normal"]);
	scene.Push(["Esther", "Aluna, what the heck?", "surprise"]);
	scene.Push(["Aluna", "Sometimes, I feel like we’re being watched.", "normal"]);
	scene.Push(["Aluna", "Maybe everyone is telling the truth.", "normal"]);
	scene.Push(["Esther", "… You’re not making sense.", "sigh"]);
	Set1.Add("aluna_esther_alone_anywhere",scene);
	
//ALUNA and KONSTAL and CRATOR - Alone - Anywhere
	scene = new Array();
	scene.Push(["Aluna", "Guys-", "normal"]);
	scene.Push(["Konstal", "Is this about Milky? We don’t know what happened", "angry"]);
	scene.Push(["Aluna", "No, well, yes. I just wanted to ask if you guys saw anything. ", "normal"]);
	scene.Push(["Crator", "Nothing out of the usual", "normal"]);
	scene.Push(["Konstal", "Nothing at all.", "normal"]);
	scene.Push(["Aluna", "It’s just, Do you sometimes feel like we’re not alone here?", "normal"]);
	scene.Push(["Konstal", "If you’re trying to help Milky sell her ", "normal"]);
	scene.Push(["Konstal", "'I don’t who did it' story, it’s not going to work.", "normal"]);
	Set1.Add("aluna_crator_konstal_alone_anywhere",scene);
	
//ESTHER and KONSTAl and CRATOR - Alone - Anywhere
	scene = new Array();
	scene.Push(["Konstal", "What are you doing here?", "normal"]);
	scene.Push(["Esther", "Hey guys. So Milky really doesn’t know how she got pregnant.", "normal"]);
	scene.Push(["Konstal", "Yeah, perfectly convenient for her.", "normal"]);
	scene.Push(["Esther", "Hm, yeah. ", "normal"]);
	scene.Push(["Esther", "Say, you guys wouldn’t happen to know what happened, would you?", "normal"]);
	scene.Push(["Konstal", "Why would we know? She doesn’t even know herself.", "normal"]);
	scene.Push(["Esther", "I don’t know, there’s lots of ways a girl can not know", "normal"]);
	scene.Push(["Esther", "what’s been done to her and only one way to get pregnant, y’know? ", "normal"]);
	scene.Push(["Konstal", "What are you getting at?", "mad"]);
	scene.Push(["Crator", "Esther, don’t worry. Konstal and I haven’t done anything.", "normal"]);
	scene.Push(["Crator", "We’re just as clueless as anyone here.", "normal"]);
	scene.Push(["Konstal", "Why would we even want to get Milky pregnant anyway?", "normal"]);
	scene.Push(["Esther", "Huh, just checking…", "normal"]);
	Set1.Add("crator_esther_konstal_alone_anywhere",scene);

//ESTHER and KONSTAL - with or without Aluna - Anywhere
	scene = new Array();
	scene.Push(["Esther", "Hey- you really don’t know how Milky got pregnant?", "normal"]);
	scene.Push(["Konstal", "She’s a pretty bad liar. She and Crator definitely hooked up.", "normal"]);
	scene.Push(["Konstal", "She just wants to be innocent and cute so she lied about not knowing.", "normal"]);
	scene.Push(["Esther", "And you know this?", "normal"]);
	scene.Push(["Konstal", "Well, no. But it’s fairly obvious if you look at both of them.", "normal"]);
	scene.Push(["Esther", "I believe Milky. She really doesn’t know what happened.", "normal"]);
	scene.Push(["Konstal", "What else could have happened other than sex?", "normal"]);
	scene.Push(["Esther", "You're pretty defensive there.", "normal"]);
	scene.Push(["Esther", "You sure you didn’t have anything to do with it? ", "smirk"]);
	scene.Push(["Konstal", "Wh-What?! Of course not! ", "angry"]);
	scene.Push(["Esther", "Hmmm…", "normal"]);
	Set1.Add("esther_konstal_maybeAluna_anywhere",scene);
	
//ESTHER and CRATOR - with or without Aluna - Anywhere
	scene = new Array();
	scene.Push(["Esther", "Hey, you really don’t know anything about Milky’s pregnancy?", "normal"]);
	scene.Push(["Crator", "No. I didn’t have sex with her, so it was probably Konstal.", "normal"]);
	scene.Push(["Esther", "You think he drugged her?", "normal"]);
	scene.Push(["Crator", "What?! Why would you say that?", "normal"]);
	scene.Push(["Esther", "She said she didn’t remember what happened. It’s obviously foul play.", "normal"]);
	scene.Push(["Crator", "… I don’t think he would drug her.", "normal"]);
	Set1.Add("esther_crator_maybeAluna_anywhere",scene);
	


//ALUNA - Woods 
scene = new Array();
scene.Push(["Aluna", "Hey, those are footprints.", "normal"]);
scene.Push(["Aluna", "I wonder who’s they are...", "normal"]);
Set1.Add("aluna_woods_part2",scene);

//ALUNA & CRATOR- Woods 
scene = new Array();
scene.Push(["Aluna", "Hey, those are foot prints.", "normal"]);
scene.Push(["Crator", "Yeah, they look like Milky’s foot prints. ", "normal"]);
scene.Push(["Aluna", "Really? How can you tell?", "normal"]);
scene.Push(["Crator", "Well, y’know, how small and curvy they are.", "normal"]);
scene.Push(["Crator", "Besides, Milky is the only one here with heels.", "blush"]);
scene.Push(["Aluna", "Yeah… do you think they could have anything to do with how she got pregnant?", "normal"]);
scene.Push(["Crator", "Probably not. Unless we want to know exactly where", "normal"]);
scene.Push(["Crator", "she had sex which is pretty beside the point by now.", "normal"]);
scene.Push(["Aluna", "hmm…", "normal"]);
Set1.Add("aluna_crator_woods_part2_talk1",scene);

//ALUNA & MILKY Woods  - After "aluna_crator_woods_part2"
scene = new Array();
scene.Push(["Aluna", "Are those your footprint, Milky?", "normal"]);
scene.Push(["Milky", "Huh, I guess they are. ", "normal"]);
scene.Push(["Aluna", "So were you here yesterday? ", "normal"]);
scene.Push(["Milky", "Actually, I think those may be from before I was pregnant. ", "normal"]);
scene.Push(["Aluna", "Hmmm… maybe that means we can get some clue as to", "normal"]);
scene.Push(["Aluna", "what you were doing that day if we follow them.", "normal"]);
scene.Push(["Milky", "Hey, that’s right… They look like they’re going towards the hill.", "sad"]);
scene.Push(["Milky", " I get a creepy feeling when I go there.", "sad"]);
scene.Push(["Aluna", "I think we’re on the right track. If I get the chance I’ll show everyone these ", "normal"]);
scene.Push(["Aluna", "footprints and see if anyone wants to help me check it out.", "normal"]);
scene.Push(["Milky", "Thank you, Aluna. For, y'know, trying to figure this out. ", "happy"]);
Set1.Add("aluna_milky_woods_part2",scene);	

//ALUNA & KONSTAL Woods  - After #"aluna_crator_woods_part2"
scene = new Array();
scene.Push(["Aluna", "Hey, look at those footprints. I heard they were Milky’s", "normal"]);
scene.Push(["Konstal", "Cool, what do you want, a medal?", "normal"]);
scene.Push(["Aluna", "Let’s follow it. It may help us find out how she got pregnant!", "normal"]);
scene.Push(["Konstal", "We already know how she got pregnant- sleeping around.", "normal"]);
scene.Push(["Konstal", "What we need now is a plan of action.", "normal"]);
scene.Push(["Aluna", "(guess I’ll have to ask someone else if I want Konstal’s help. Maybe Crator ...)", "normal"]);
Set1.Add("aluna_konstal_woods_part2",scene);

//ALUNA & ESTHER Woods  -After #"aluna_crator_woods_part2"
scene = new Array();
scene.Push(["Aluna", "Hey, look at those footprints. I heard they were Milky’s", "normal"]);
scene.Push(["Esther", "Huh, why, was she here before?", "normal"]);
scene.Push(["Aluna", "I think these were from last night.", "normal"]);
scene.Push(["Aluna", "I think if we follow them, we can find out exactly how she got pregnant.", "normal"]);
scene.Push(["Esther", "...Maybe we can see other footprints.", "angry"]);
scene.Push(["Esther", "Then we’ll know which one of the guys did it.", "angry"]);
scene.Push(["Aluna", "Or We’ll be able to how she got pregnant without having sex.", "normal"]);
scene.Push(["Esther", "Um, or that.", "normal"]);
scene.Push(["Aluna", "It looks like it’s leading to the hill.", "normal"]);
scene.Push(["Esther", "I’ll check it out when I’m over there next. Thanks, Aluna.", "happy"]);
Set1.Add("aluna_esther_woods_part2",scene);


//ALUNA & CRATOR Woods  -After #"aluna_crator_woods_part2"
scene = new Array();
scene.Push(["Aluna", "Hey, about the footprints.", "normal"]);
scene.Push(["Crator", "Yeah?", "normal"]);
scene.Push(["Aluna", "I think we can find out more about what happened to Milky if we follow the footprints.", "normal"]);
scene.Push(["Aluna", "They look like they’re heading to the hill.", "normal"]);
scene.Push(["Crator", "I think it’s pretty obvious what happened…", "normal"]);
scene.Push(["Aluna", "But Milky doesn’t remember it. And you and Konstal haven’t", "normal"]);
scene.Push(["Aluna", "had sex with her. Don’t you think this is all weird?", "normal"]);
scene.Push(["Crator", "Huh… You’re really thinking too much.", "normal"]);
scene.Push(["Aluna", "Please. We need to find out what happened.", "normal"]);
scene.Push(["Crator", "If it’s that important to you, I’ll check out the hill next time I’m there.", "sigh"]);
scene.Push(["Aluna", "Thank You. Also, Can you also tell Konstal about this?", "normal"]);
scene.Push(["Crator", "Konstal, why?", "normal"]);
scene.Push(["Aluna", "Something tells me he’ll take this more seriously if it’s coming from you.", "angry"]);
scene.Push(["Crator", "(sigh)... I guess I’ll let him know if I remember.", "sigh"]);
Set1.Add("aluna_crator_woods_part2",scene);

//KONSTAL & CRATOR Woods  -After #"aluna_crator_woods_part2"  && "aluna_crator_woods_part2
scene = new Array();
scene.Push(["Crator", "Oh yeah, see those footprints?", "normal"]);
scene.Push(["Konstal", "Yeah? ", "normal"]);
scene.Push(["Crator", "They’re Milky’s and they’re leading to the hill. We should investigate.", "normal"]);
scene.Push(["Konstal", "Why the hell would we want to? Our top priority right now should", "normal"]);
scene.Push(["Konstal", " be to get some more food in case we do end up keeping this baby.", "normal"]);
scene.Push(["Crator", "C’mon. Just humor me.", "normal"]);
scene.Push(["Konstal", "Arrgh! Fine!", "normal"]);
scene.Push(["Konstal", "I’ll search around next time I’m at the Hill.", "normal"]);
Set1.Add("crator_konstal_woods_part2",scene);		


//ALUNA - Hill  -BEFORE #11 and #13 and #15 and #16 and #14
scene = new Array();
scene.Push(["Aluna", "Hmmm, I should let everyone know about the footprints before I look around myself.", "normal"]);				
Set1.Add("aluna_hill_part2_beforeShowingFootprints",scene);		


//Aluna - Hill - After #11 and #13 and #15 and #14
scene = new Array();
scene.Push(["Aluna", "I guess it’s up to me to investigate the Hill.", "normal"]);	
scene.Push(["Aluna", "Nothing here-", "normal"]);	
scene.Push(["Aluna", "Not here either.", "normal"]);	
scene.Push(["Aluna", "This is going to take longer than I thought.", "sigh"]);		
//>CUTSCENE: GET PREGNANT<	
Set1.Add("aluna_hill_part2",scene);	


// ESTHER -  Hill  -alone -After #14
scene = new Array();
scene.Push(["Esther", "So the footprints lead here.", "normal"]);	
scene.Push(["Esther", "there has to be some clue here… we can find out which one of the guys in a lying sick.", "normal"]);	
scene.Push(["Esther", "Hmmm…..", "normal"]);	
scene.Push(["Esther", "Still looking.", "angry"]);	
scene.Push(["Esther", "I’m starting to think this was a bad idea…", "sigh"]);	
scene.Push(["Esther", "Huh, It’s starting to get dark. I’ll have to call it a day.", "sigh"]);	
scene.Push(["Esther", "Not sure about walking back through the woods in the dark.", "normal"]);	
scene.Push(["Esther", "I’ll just settle down here for the night.", "normal"]);	
//>CUTSCENE: GET PREGNANT<
Set1.Add("esther_hill_part2",scene);	

//CRATOR Hill - alone - after #15
scene = new Array();
scene.Push(["Crator", "So the footprints lead here.", "normal"]);	
scene.Push(["Crator", "I did promise Aluna I would take a look around…", "normal"]);	
scene.Push(["Crator", "Hmm… ", "normal"]);	
scene.Push(["Crator", "Nothing here.", "normal"]);	
scene.Push(["Crator", "Nothing over here, either.", "normal"]);	
scene.Push(["Crator", "What am I even supposed to be looking for?", "normal"]);	
scene.Push(["Crator", "Damn, the suns getting low. No point looking now, I guess.", "normal"]);	
scene.Push(["Crator", "It’s a little bit too dark to get back to camp…", "normal"]);	
scene.Push(["Crator", "I’ll just lay down here and get going in the morning.", "normal"]);	
Set1.Add("crator_hill_part2",scene);

//KONSTAL Hill  -After #16 - alone
scene = new Array();
scene.Push(["Konstal", "Well I’m here. Guess I should look around to see what I can find.", "angry"]);	
scene.Push(["Konstal", "Hmmm…", "normal"]);	
scene.Push(["Konstal", "Not here….", "normal"]);	
scene.Push(["Konstal", "…", "normal"]);	
scene.Push(["Konstal", "Aaaargh! I told them there wouldn’t be anything here! ", "angry"]);	
scene.Push(["Konstal", "Figures, I get stuck doing their dirty work…", "angry"]);	
scene.Push(["Konstal", "Huh, it’s getting dark. Might as well take a nap here.", "sigh"]);
Set1.Add("konstal_hill_part2",scene);	
//>CUTSCENE: GET PREGNANT<




//26.
//IF ESTHER IS PREGNANT 
//All In Camp
scene = new Array();
scene.Push(["Esther", "I feel terrible… Something is growing inside me…", "sad"]);
scene.Push(["Konstal", "What’s going on with you?", "normal"]);
scene.Push(["Esther", "I just…", "sad"]);
scene.Push(["Crator", "Esther, sit down for a bit. You look like you’ve seen a ghost.", "angry"]);
scene.Push(["Esther", "Exactly! I was at the Hill last night. I fell asleep there.", "angry"]);
scene.Push(["Milky", "That happened to me too! Before I got pregnant.", "surprise"]);
scene.Push(["Esther", "Yeah- that’s what I thought. See, I think I got pregnant from sleeping there too.", "sad"]);
scene.Push(["Crator", "What?", "angry"]);
scene.Push(["Konstal", "You girls are so delusional.", "angry"]);
scene.Push(["Esther", "Excuse me?!", "angry"]);
scene.Push(["Konstal", "No one just wakes up pregnant. You were probably sleeping around earlier this month.", "normal"]);
scene.Push(["Esther", "I know this sounds impossible but I KNOW what happened to me", "angry"]);
scene.Push(["Esther", " and I KNOW this did not happen weeks ago.", "angry"]);
scene.Push(["Esther", "I got pregnant last night after sleeping at the hill.", "angry"]);
scene.Push(["Milky", "It happened to me too! You have to believe us!", "sad"]);
scene.Push(["Konstal", "You girls are so stupid. C’mon Crator, let’s get out of here.", "angry"]);
scene.Push(["Crator", "Sure.", "normal"]);
scene.Push(["Esther", "Damn. They don’t believe us at all.", "angry"]);
scene.Push(["Milky", "I wish it was one of them in this situation…", "sad"]);
scene.Push(["Aluna", "Maybe that’s not impossible…", "normal"]);
scene.Push(["Milky", "What? ", "normal"]);
scene.Push(["Aluna", "Nothing. Just that maybe if they see it the hill themselves they'll believe us.", "normal"]);
scene.Push(["Esther", "Yeah, make them do something for a change.", "normal"]);
Set1.Add("Esther_Pregnant_All_InCamp",scene);



//22. 
//IF ESTHER IS PREGNANT AND NO ONE ELSE 
//KONSTAL and ESTHER and ALUNA 
scene = new Array();
scene.Push(["Aluna", "Esther, you look like you saw a ghost- what happened? ", "normal"]);
scene.Push(["Konstal", "Yeah, where the hell were you last night?", "angry"]);
scene.Push(["Esther", "This is going to sound crazy… but I think I’m pregnant.", "sad"]);
scene.Push(["Konstal", "WHAT!", "surprise"]);
scene.Push(["Konstal", "You just found out?", "normal"]);
scene.Push(["Esther", "I just got up this morning and, I don’t know - I just know it.", "sad"]);
scene.Push(["Esther", "I feel... I can kinda feel it.", "sad"]);
scene.Push(["Aluna", "Weird, you normally have to wait a few weeks to display any symptoms…", "normal"]);
scene.Push(["Konstal", "Maybe she’s just more sensitive than most.", "normal"]);
scene.Push(["Konstal", "But more importantly, it just means you were out having sex!", "normal"]);
scene.Push(["Esther", "Excuse me?!", "normal"]);
scene.Push(["Konstal", "You really think we need another mouth to feed right now?", "normal"]);
scene.Push(["Esther", "I was not having sex. I know I did not have sex!", "angry"]);
scene.Push(["Aluna", "And I saw both you boys around the camp last night. Esther was no where near you two.", "normal"]);
scene.Push(["Konstal", "I don’t care! You probably got pregnant a few weeks ago", "normal"]);
scene.Push(["Konstal", "and only noticed it now considering how much you weigh.", "normal"]);
scene.Push(["Esther", "EXCUSE ME?!!", "angry"]);
scene.Push(["Esther", "I KNOW my body and I know that I somehow woke up pregnant last night.", "angry"]);
scene.Push(["Esther", "Besides, I didn’t even do anything recently.", "angry"]);
scene.Push(["Konstal", "Yeah right. I have more important things to think about.", "angry"]);
scene.Push(["Konstal", "Apparently, I need to think about how to feed another kid.", "angry"]);
scene.Push(["Konstal", "Or a safe method of abortion with the limited tools we have…", "sad"]);
scene.Push(["Aluna", "It’s just like what happened with Milky...", "normal"]);
Set1.Add("Esther_Pregnant_Aluna_Konstal",scene);


//23. 
//IF ESTHER IS PREGNANT and all camp scene did not happen
//KONSTAL and ESTHER
scene = new Array();
scene.Push(["Esther", "Something abnormal happened last night... I feel weird and bloated…", "sad"]);
scene.Push(["Konstal", "What was that?", "normal"]);
scene.Push(["Esther", "Oh, sorry just talking to myself.", "normal"]);
scene.Push(["Konstal", "Yeah, don’t. Could you stop spacing out and get out of the way.", "normal"]);
scene.Push(["Esther", "You’re such a dick.", "angry"]);
Set1.Add("Esther_Pregnant_Konstal",scene);



//24. 
//IF ESTHER IS PREGNANT  and all camp scene did not happen
//CRATOR and ESTHER
scene = new Array();
scene.Push(["Esther", "I really don’t feel right… ever since I woke up today...", "sad"]);
scene.Push(["Crator", "Hey- you ok?", "normal"]);
scene.Push(["Esther", "Oh! Yeah- I’m fine. Just distracted.", "normal"]);
scene.Push(["Crator", "Where were you last night?", "normal"]);
scene.Push(["Esther", "Just took a nap down at the hill. ", "normal"]);
scene.Push(["Esther", "Do I need permission or something?", "sigh"]);
scene.Push(["Crator", "No- just that Aluna was looking for you. ", "normal"]);
scene.Push(["Esther", "Sorry, I’ll try talking to her soon.", "normal"]);
Set1.Add("Esther_Pregnant_Crator",scene);


//25. 
//IF ESTHER IS PREGNANT and all camp scene did not happen
//MILKY and ESTHER
scene = new Array();
scene.Push(["Esther", "I think I’m… Ugh, I can’t even say it.", "sad"]);
scene.Push(["Milky", "Esther, what’s wrong?", "sad"]);
scene.Push(["Esther", "Milky- did you happen to take a nap at the hill the night before you got pregnant. ", "normal"]);
scene.Push(["Milky", "Huh, now that you mention it, I did sleep a bit under the big tree down there.", "normal"]);
scene.Push(["Esther", "This is bad…", "angry"]);
Set1.Add("Esther_Pregnant_Milky",scene);



//26.
//IF ESTHER IS PREGNANT AND NO ONE ELSE and all camp scene did not happen
//ALUNA and ESTHER
scene = new Array();
scene.Push(["Esther", "I feel terrible… what’s happening to me?", "sad"]);
scene.Push(["Aluna", "Esther, you ok? I was looking for you.", "normal"]);
scene.Push(["Esther", "Sorry- just a bit distracted. What did you need to talk about?", "normal"]);
scene.Push(["Aluna", "Where were you last night?", "normal"]);
scene.Push(["Esther", "Actually, I was sleeping up on the hill. Under the big tree.", "normal"]);
scene.Push(["Aluna", "So did you see anything? Any ideas what’s happening?", "normal"]);
scene.Push(["Esther", "Actually, Aluna, I- I", "angry"]);
scene.Push(["Aluna", "Yeah? ", "normal"]);
scene.Push(["Esther", "I think I’m pregnant.", "angry"]);
scene.Push(["Aluna", "What?", "normal"]);
scene.Push(["Esther", "I know- this sounds crazy. But last night I think I got pregnant. It’s weird.", "normal"]); 
scene.Push(["Esther", "You’re not supposed to be able to tell if you’re", "normal"]);
scene.Push(["Esther", "you’re pregnant for a few weeks after conception.", "normal"]);
scene.Push(["Esther", "But I just feel it. i know I got pregnant last night. ", "normal"]);
scene.Push(["Aluna", "It’s just like Milky…", "normal"]);
scene.Push(["Esther", "Exactly, I think so too. We both got like this through similar means. ", "normal"]);
scene.Push(["Aluna", "Did you see anything?", "normal"]);
scene.Push(["Esther", "No. I was asleep. ", "sad"]);
scene.Push(["Aluna", "In any case, we should gather everyone at the camp to tell them what’s going on.", "normal"]);
Set1.Add("Esther_Pregnant_Aluna",scene);


//26A.
//IF ESTHER IS PREGNANT and ALUNA is Pregnant and all camp scene did not happen
//ALUNA and ESTHER
scene = new Array();
scene.Push(["Esther", "If feel terrible… what’s happening to me?", "normal"]);
scene.Push(["Aluna", "Esther, you ok. I was looking for you.", "normal"]);
scene.Push(["Esther", "Sorry, just a bit distracted. What did you need to talk about?", "normal"]);
scene.Push(["Aluna", "Where were you last night?", "normal"]);
scene.Push(["Esther", "Actually, I was sleeping up on the hill. Under the big tree.", "normal"]);
scene.Push(["Aluna", "So did you see anything? Any ideas what’s happening?", "normal"]);
scene.Push(["Esther", "Actually, Aluna, I- I", "normal"]);
scene.Push(["Aluna", "Yeah? ", "normal"]);
scene.Push(["Esther", "I think I’m pregnant.", "normal"]);
scene.Push(["Aluna", "What?", "normal"]);
scene.Push(["Esther", "I know- this sounds crazy. But last night I think I got pregnant. It’s weird.", "normal"]); 
scene.Push(["Esther", "You’re not supposed to be able to tell if you’re pregnant for a few weeks after conception.", "normal"]);
scene.Push(["Esther", "But I just feel it. i know I got pregnant last night. ", "normal"]);
scene.Push(["Aluna", "It’s just like Milky and I…", "normal"]);
scene.Push(["Esther", "Exactly, I think so too. We all got pregnant through similar means. ", "normal"]);
scene.Push(["Aluna", "Did you see anything?", "normal"]);
scene.Push(["Esther", "No. I was asleep. ", "normal"]);
scene.Push(["Aluna", "In any case, we should gather everyone at the camp to tell them what’s going on.", "normal"]);
Set1.Add("Esther_Pregnant_Aluna_Pregnant",scene);


//27.
//IF KONSTAL IS PREGNANT AND NO ONE ELSE 
//After aluna and Milky and Konstal Speak
//ALL in Camp
scene = new Array();
scene.Push(["Milky", "Hey everyone, we have some news.", "normal"]);
scene.Push(["Aluna", "It has to do with Konstal.", "normal"]);
scene.Push(["Konstal", "It has more to do with the Hill.", "angry"]);
scene.Push(["Esther", "Just tell us what’s going on.", "angry"]);
scene.Push(["Milky", "Well I realized that I was at the jill before when I got pregnant. I took a nap there.", "normal"]);
scene.Push(["Milky", "And just last night, Konstal took a nap there and now he’s experiencing pregnancy symptoms.", "sad"]);
scene.Push(["Konstal", "But I’m NOT pregnant. I just have some sort of thing growing inside me...", "angry"]); 
scene.Push(["Konstal", "...sucking up my life source, and generally eating me from the inside out.", "angry"]);
scene.Push(["Esther", "… Ew.", "normal"]);
scene.Push(["Crator", "You ok, man?", "sad"]);
scene.Push(["Aluna", "Anyway, I think that seals it-", "normal"]);
scene.Push(["Aluna", "Something at the hill is getting people pregnant- regardless of gender.", "normal"]);
scene.Push(["Crator", "… Should we go see what’s up?", "sad"]);
scene.Push(["Milky", "I told you all I didn’t have sex!", "angry"]);
scene.Push(["Esther", "Sorry Milky. I guess I just assumed that you had to have had sex…", "sad"]);
scene.Push(["Crator", "I mean… It seemed obvious that sex was the only thing that could have happened.", "sad"]);
scene.Push(["Crator", "But now that Konstal’s pregnant…", "sad"]);
scene.Push(["Konstal", "I AM NOT PREGNANT!", "angry"]);
scene.Push(["Aluna", "Everyone- let’s head to the Hill.", "normal"]);
Set1.Add("Konstal_Pregnant_all_inCamp",scene);


//28.
//IF KONSTAL IS PREGNANT 
//KONSTAL and MILKY
scene = new Array();
scene.Push(["Konstal", "What happened last night? My body feels so weird.", "normal"]);
scene.Push(["Konstal", "I feel like I’m made of shit with a rock inside my gut.", "normal"]);
scene.Push(["Milky", "Hey, what’s going on? Why are you talking to yourself like that?", "normal"]);
scene.Push(["Konstal", "Nothing. Go away.", "normal"]);
scene.Push(["Milky", "Ok…", "normal"]);
scene.Push(["Konstal", "...", "normal"]);
scene.Push(["Milky", "Where were you last night?", "normal"]);
scene.Push(["Konstal", "Ugghhhhh.", "normal"]);
scene.Push(["Milky", "...Sorry.", "normal"]);
scene.Push(["Konstal", "… I was at the Hill. Took a nap.", "normal"]);
scene.Push(["Milky", "That’s cool. Did you see anything weird there? I was there when I got pregnant, y’know?", "normal"]);
scene.Push(["Konstal", " …", "normal"]);
scene.Push(["Konstal", "…", "normal"]);
scene.Push(["Konstal", " Hey, how does it feel to be pregnant?", "normal"]);
scene.Push(["Milky", "Like you’re made of shit with rocks inside you.", "normal"]);
scene.Push(["Konstal", "…", "normal"]);
Set1.Add("Konstal_Pregnant_Milky",scene);



//29.
//IF KONSTAL IS PREGNANT 
//KONSTAL and ALUNA
scene = new Array();
scene.Push(["Konstal", "Ughhh… my head…", "sad"]);
scene.Push(["Konstal", "I feel like I crashed into a wall.", "angry"]);
scene.Push(["Konstal", "My gut’s trying to eat me from the inside…", "angry"]);
scene.Push(["Aluna", "Hey Konstal, where were you last night?", "normal"]);
scene.Push(["Konstal", "Geez, I just took a nap at the Hill. What’s it to you?", "angry"]);
scene.Push(["Aluna", "Did you see anything? Any clue what’s happening here?", "normal"]);
scene.Push(["Konstal", "N-No! I have no idea. I told you it was a waste of time.", "normal"]);
scene.Push(["Aluna", "Ok… You don’t look too good.", "normal"]);
scene.Push(["Konstal", "Yeah? Well, look in a mirror.", "angry"]);
scene.Push(["Aluna", "… See you.", "normal"]);
scene.Push(["Konstal", "… damn.", "sigh"]);
Set1.Add("Konstal_Pregnant_Aluna",scene);


//30.
//IF KONSTAL IS PREGNANT
//ALUNA and MILKY
scene = new Array();
scene.Push(["Milky", "Hey, Aluna, don’t you think Konstal is acting super weird? ", "sad"]);
scene.Push(["Aluna", "Like how?", "normal"]);
scene.Push(["Milky", "I dunno. It’s just- I think he slept next to the hill last night", "sad"]);
scene.Push(["Milky", "That’s where I slept when I got pregnant. You don’t think Konstal is pregnant too… do you?", "sad"]);
scene.Push(["Aluna", "Milky, that’s-", "normal"]);
scene.Push(["Milky", "I know it’s farfetched. I mean, it’s impossible for a guy to get pregnant.", "sad"]);
scene.Push(["Milky", "But you believe in this sort of thing, right, Aluna?", "sad"]);
scene.Push(["Milky", "This sort of unexplainable, impossible stuff?", "sad"]);
scene.Push(["Aluna", "Yeah… Let’s ask him next time we see him together.", "normal"]);
scene.Push(["Milky", "Ok. But If I were him I’d have a tough time admitting it even if it is true.", "normal"]);
scene.Push(["Aluna", "Why?", "normal"]);
scene.Push(["Milky", "Well, it’s a little bit emasculating, isn’t it? I feel sorry for him.", "sad"]);
scene.Push(["Aluna", "… I guess it is.", "normal"]);
Set1.Add("Konstal_Pregnant_Aluna_Milky_alone",scene);



//31.
//IF KONSTAL IS PREGNANT 
//After aluna and Milky Speak
//ALUNA and MILKY and KONSTAL
scene = new Array();
scene.Push(["Milky", "Konstal- we wanted to talk to you.", "normal"]);
scene.Push(["Konstal", "What the hell is this?", "angry"]);
scene.Push(["Aluna", "You don’t look too good. Milky and I were worried.", "normal"]);
scene.Push(["Konsal", "I’m fine.", "normal"]);
scene.Push(["Milky", "Did something happen at the Hill? ", "normal"]);
scene.Push(["Aluna", "It’s ok - we’re thinking something supernatural may have happened.", "normal"]);
scene.Push(["Milky", "Like what happened to me.", "normal"]);
scene.Push(["Konstal", "I…", "angry"]);
scene.Push(["Konstal", "Well…", "sad"]);
scene.Push(["Konstal", " … Something did happen. I feel weird, bloated. Kind of like I’m-", "sad"]);
scene.Push(["Milky", "Pregnant?", "normal"]);
scene.Push(["Konstal", "I AM NOT PREGNANT! I just feel weird like there's something growing inside my belly...", "angry"]);
scene.Push(["Konstal", "...and sucking all the energy away from me and rearranging my inner organs…", "angry"]);
scene.Push(["Milky", "Ok…", "sad"]);
scene.Push(["Aluna", "This happened after you were at the hill.", "normal"]); 
scene.Push(["Aluna", "Let’s gather everyone for a meeting at the campsite.", "normal"]); 
scene.Push(["Aluna", "We need to devise a plan to find out what exactly is going on at the hill.", "normal"]);
scene.Push(["Konstal", "Ok.", "normal"]);
scene.Push(["Milky", "Right.", "normal"]);
Set1.Add("Konstal_Pregnant_Aluna_Milky_confrontation",scene);


//32.
//IF KONSTAL IS PREGNANT and all camp scene did not happen
//KONSTAL and Crator
scene = new Array();
scene.Push(["Konstal", "Ugh, what was that? I feel so weird.. like there’s something inside of me. ", "sad"]);
scene.Push(["Konstal", "No… it can’t be.", "angry"]);
scene.Push(["Crator", "You ok, man?", "normal"]);
scene.Push(["Konstal", "No, yeah, I’m fine.", "normal"]);
scene.Push(["Crator", "Sure.", "normal"]);
Set1.Add("Konstal_Pregnant_Crator",scene);


//33.
//IF KONSTAL IS PREGNANT and all camp scene did not happen
//KONSTAL and ESTHER
scene = new Array();
scene.Push(["Konstal", "My body feels like lead. I really feel like there’s something", "sad"]);
scene.Push(["Konstal", "inside of me… like I’m... Oh God, I can’t even say it.", "sad"]);
scene.Push(["Esther", "talking to yourself?", "normal"]);
scene.Push(["Konstal", "What the- don’t sneak up on me.", "angry"]);
scene.Push(["Esther", "I’ve been here for awhile.", "normal"]);
scene.Push(["Konstal", "Yeah, well, get out of my face.", "angry"]);
scene.Push(["Esther", "You don’t look too good.", "sad"]);
scene.Push(["Konstal", "Fuck off.", "angry"]);
scene.Push(["Esther", "Huh, you too, then.", "sigh"]);
Set1.Add("Konstal_Pregnant_Esther",scene);


//34.
//IF ALUNA IS PREGNANT AND NO ONE ELSE 
//All In Camp
scene = new Array();
scene.Push(["Aluna", "Something is growing inside me…", "sad"]);
scene.Push(["Konstal", "What’s going on here?", "normal"]);
scene.Push(["Aluna", "I was at the hill last night. I fell asleep there. I'm pregnant.", "normal"]);
scene.Push(["Aluna", "I think Milky slept there too, before she got pregnant.", "normal"]);
scene.Push(["Aluna", "I think there’s something about that hill that makes people pregnant.", "normal"]);  
scene.Push(["Aluna", "A weird type of preganncy that shows symptoms the next day.", "normal"]);
scene.Push(["Crator", "Excuse me?", "normal"]);
scene.Push(["Konstal", "Oh my god- here we go again.", "angry"]);
scene.Push(["Aluna", "You don’t believe me? The proof is right in front of you.", "normal"]);
scene.Push(["Konstal", "The only proof here is that, like Milky, you're pretty slow. No one just wakes up pregnant. ", "normal"]);
scene.Push(["Aluna", "Well that was uncalled for.", "normal"]);
scene.Push(["Milky", "It happened to me too! You have to believe us!", "angry"]);
scene.Push(["Konstal", "AUGH! I can’t take this! C’mon, Crator, let’s get out of here.", "angry"]);
scene.Push(["Crator", "Sure.", "normal"]);
scene.Push(["Aluna", "Esther? How about you?", "normal"]);
scene.Push(["Esther", "I wish I could believe you but… It’s just so farfetched… ", "sad"]);
scene.Push(["Esther", "It’s more likely that one of the boys drugged you.", "sad"]);
scene.Push(["Aluna", "...", "normal"]);
scene.Push(["Milky", "I believe you, Aluna!", "normal"]);
scene.Push(["Aluna", " …", "normal"]);
scene.Push(["Aluna", "Maybe if they see the hill for themselves, they’ll believe me...", "normal"]);
Set1.Add("Aluna_Pregnant_All_inCamp",scene);


//35.
//IF ALUNA IS PREGNANT AND ESTHER is pregnant
//All In Camp
scene = new Array();
scene.Push(["Aluna", "Something is growing inside me…", "sad"]);
scene.Push(["Konstal", "What’s going on here?", "normal"]);
scene.Push(["Aluna", "I was at the Hill last night. I fell asleep there.", "normal"]);
scene.Push(["Aluna", "I think Milky slept there too, before she got pregnant.", "normal"]);
scene.Push(["Aluna", "I think there’s something about that hill that makes people pregnant.", "normal"]);
scene.Push(["Aluna", "A weird type of preganncy that shows symptoms the next day.", "normal"]);
scene.Push(["Crator", "Excuse me?", "normal"]);
scene.Push(["Konstal", "Oh my god- here we go again.", "angry"]);
scene.Push(["Aluna", "You don’t believe me? The proof is right in front of you.", "normal"]);
scene.Push(["Konstal", "The only proof here is that, like Milky, you're pretty slow. No one just wakes up pregnant. ", "normal"]);
scene.Push(["Aluna", "Well that was uncalled for.", "normal"]);
scene.Push(["Milky", "It happened to me too! You have to believe us!", "angry"]);
scene.Push(["Esther", "I’m pregnant too! You guys can’t seriously not believe all three of us, can you?", "angry"]);
scene.Push(["Konstal", "AUGH! I can’t take this! C’mon, Crator, let’s get out of here.", "angry"]);
scene.Push(["Crator", "Sure.", "normal"]);
scene.Push(["Esther", "Augh! They are so impossible!", "angry"]);
scene.Push(["Aluna", "…", "normal"]);
scene.Push(["Aluna", "Maybe if they see the hill for themselves, they’ll believe us..", "normal"]);
Set1.Add("Aluna_Pregnant_Esther_pregnant_All_inCamp",scene);



//36.
//IF ALUNA IS PREGNANT AND NO ONE ELSE and all camp scene did not happen
//ALUNA and ESTHER
scene = new Array();
scene.Push(["Aluna", "I feel so weird. Something crazy happened last night. Something- extraterrestrial.", "normal"]);
scene.Push(["Esther", "Hey, Aluna. What’s going on? You look a bit spooked.", "normal"]);
scene.Push(["Aluna", "Oh. It’s just that something really weird happened last night.", "normal"]);
scene.Push(["Esther", "Weird? How?", "normal"]);
scene.Push(["Aluna", "I’m pregnant. ", "normal"]);
scene.Push(["Esther", "That’s terrible! The mystery rapist strikes again, huh?", "normal"]); 
scene.Push(["Esther", "We should just ban together and throw those two in a ditch or something! We- ", "normal"]);
scene.Push(["Aluna", "No. It wasn’t them. I don’t even think it was human.", "normal"]);
scene.Push(["Esther", "Ok…", "normal"]);
Set1.Add("Aluna_Pregnant_esther",scene);


//37.
//IF ALUNA IS PREGNANT and ESTHER is pregnant and all camp scene did not happen
//ALUNA and ESTHER
scene = new Array();
scene.Push(["Aluna", "I feel so weird. Something crazy happened last night. Something- extraterrestrial.", "normal"]);
scene.Push(["Esther", "Hey, Aluna. What’s going on? You look a bit spooked.", "normal"]);
scene.Push(["Aluna", "Oh. It’s just that something really weird happened last night.", "normal"]);
scene.Push(["Esther", " Weird? How?", "normal"]);
scene.Push(["Aluna", "I’m pregnant. ", "normal"]);
scene.Push(["Esther", "That’s terrible! Was it the same thing that happened to me and Milky?", "surprise"]);
scene.Push(["Aluna", "Yes. I think it wasn’t human. We need to tell the boys. Lets all meet at the camp.", "normal"]);
scene.Push(["Esther", "Right. Hopefully they’ll believe us with three pregnant girls.", "smirk"]);
Set1.Add("Aluna_Pregnant_Esther_Pregnant",scene);




//38.
//IF ALUNA IS PREGNANT  and all camp scene did not happen
//ALUNA and MILKY
scene = new Array();
scene.Push(["Aluna", "I feel something in my gut. It’s like I’m pregnant… like Milky.", "sad"]);
scene.Push(["Milky", "Aluna- what’s going on?", "normal"]);
scene.Push(["Aluna", "Milky- you fell asleep at the hill when you get pregnant, didn’t you?", "normal"]);
scene.Push(["Milky", "Y-Yes. Did I tell you that?", "surprise"]);
scene.Push(["Aluna", "I fell asleep there last night and now… it seems like I’m pregnant.", "sad"]);
scene.Push(["Milky", "Aluna! That’s awful!", "normal"]);
scene.Push(["Aluna", "But now we know- something at that hill is weird.", "normal"]);
scene.Push(["Aluna", "Something is happening at the hill. We need to tell everyone.", "normal"]);
scene.Push(["Milky", "Alright… but I don’t know if everyone will believe you.", "sad"]);
scene.Push(["Aluna", "You believe me, right?", "normal"]);
scene.Push(["Milky", "Well, yes. I want to believe you since it would really explain why I’m pregnant.", "normal"]);
scene.Push(["Aluna", "Good enough for me.", "normal"]);
Set1.Add("Aluna_Pregnant_Milky",scene);



//39.
//IF ALUNA IS PREGNANT and all camp scene did not happen
//ALUNA and KONSTAL
scene = new Array();
scene.Push(["Aluna", "Something weird definitely happened at the Hill Last night.", "sad"]);
scene.Push(["Aluna", "Something is in my body.", "sad"]);
scene.Push(["Konstal", "What’s going on?", "normal"]);
scene.Push(["Aluna", "I think I’m pregnant ...like Milky.", "normal"]);
scene.Push(["Konstal", "Great. Just what we need.", "angry"]);
scene.Push(["Aluna", "I think It’s because I slept under the big tree at the Hill last night.", "normal"]);
scene.Push(["Something weird is happening there.", "normal"]);
scene.Push(["Aluna", "We need to go investigate it.", "normal"]);
scene.Push(["Konstal", "Save your nonsensical theories for someone who cares.", "sigh"]);
scene.Push(["Konstal", "Apparently, I need to go work on the distributions of rations… again.", "sigh"]);
Set1.Add("Aluna_Pregnant_Konstal",scene);


//40.
//IF ALUNA IS PREGNANT AND NO ONE ELSE and all camp scene did not happen
//ALUNA and CRATOR
scene = new Array();
scene.Push(["Aluna", "Something crazy is happening at the Hill.", "sad"]); 
scene.Push(["Aluna", "I just know something happened last night while I was asleep.", "sad"]); 
scene.Push(["Aluna", "It’s why my gut feels full right now. I need to tell everyone about this.", "sad"]);
scene.Push(["Crator", "What’s going on, Aluna? ", "normal"]);
scene.Push(["Aluna", "Something strange is going on at the Hill. I think I’m… pregnant.", "normal"]);
scene.Push(["Aluna", "From sleeping under the large tree there.", "normal"]);
scene.Push(["Crator", " …", "normal"]);
scene.Push(["Aluna", "I’m going to tell everyone. We need to come up with a plan to find out", "normal"]);
scene.Push(["Aluna", "out what’s going on. Remember- don’t go next to the tree. ", "normal"]);
scene.Push(["Crator", "… Sure.", "normal"]);
scene.Push(["Aluna", "See you.", "normal"]);
scene.Push(["Crator", "That girl ain’t right…", "normal"]);
Set1.Add("Aluna_Pregnant_Crator",scene);

////.,.l;,;,;

//41.
//IF CRATOR IS PREGNANT 
//ALL in Camp
scene = new Array();
scene.Push(["Crator", "Everyone- I think I was unfair to Milky earlier. I think- she was right.", "sad"]);
scene.Push(["Esther", "What brought this on all of a sudden?", "normal"]);
scene.Push(["Milky", "Crator! You believe me?", "surprise"]);
scene.Push(["Crator", "Yeah… last night I slept under the big tree at the hill. ", "sad"]);
scene.Push(["Crator", "I’m pregnant.", "sad"]);
scene.Push(["Konstal", "…!", "surprise"]);
scene.Push(["Aluna", "…!", "surprise"]);
scene.Push(["Esther", " …!", "surprise"]);
scene.Push(["Milky", "... !", "surprise"]);
scene.Push(["Konstal", "What are you saying? You’re a guy!", "angry"]);
scene.Push(["Crator", "Then maybe I’m not but it sure feels that way.", "normal"]);
scene.Push(["Crator", "Here- you can feel it. Something is moving inside my gut.", "normal"]);
scene.Push(["Milky", "Oh my god, he’s right!", "surprise"]);
scene.Push(["Aluna", "I knew it… it is the hill. Something is happening there and we need to find out what. ", "normal"]);
scene.Push(["Crator", "I agree.", "normal"]);
scene.Push(["Konstal", "How can this be… a boy getting pregnant...", "surprise"]);
scene.Push(["Milky", "I told you all I didn’t have sex!", "angry"]);
scene.Push(["Esther", "Sorry Milky. I guess I just assumed that you had to have had sex…", "sad"]);
scene.Push(["Crator", "I mean… It seemed obvious that sex was the only thing that could have happened but now…", "sad"]);
scene.Push(["Aluna", "Everyone- let’s head to the Hill.", "normal"]);
Set1.Add("Crator_Pregnant_all_inCamp",scene);


//42.
//IF CRATOR IS PREGNANT and all camp scene did not happen
//CRATOR and ALUNA:
scene = new Array();
scene.Push(["Crator", "I feel… so weird. My gut is bloated and I feel something moving in there…", "sad"]);
scene.Push(["Aluna", "Crator, did you see anything at the Hill last night?", "normal"]);
scene.Push(["Crator", "… I might have.", "sad"]);
scene.Push(["Aluna", "What is it? Any clue as to what’s going on?", "normal"]);
scene.Push(["Crator", " … A small clue. ", "normal"]);
scene.Push(["Aluna", "Well?", "normal"]);
scene.Push(["Crator", "I’ll tell everyone at once. When we all meet at the Camp.", "sad"]);
scene.Push(["Aluna", "Sure.", "normal"]);
Set1.Add("Crator_Pregnant_aluna",scene);

//43.
//IF CRATOR IS PREGNANT and all camp scene did not happen
//CRATOR and KONSTAL:
scene = new Array();
scene.Push(["Crator", "Something’s moving in my stomach.", "sad"]);
scene.Push(["Crator", " Something fucked up is happening here.", "sad"]);
scene.Push(["Konstal", "What do you mean?", "normal"]);
scene.Push(["Crator", " … nothing.", "sad"]);
Set1.Add("Crator_Pregnant_konstal",scene);


//44.
//IF CRATOR IS PREGNANT and all camp scene did not happen
//CRATOR and ESTHER:
scene = new Array();
scene.Push(["Crator", "I feel it in my gut... Oh god, it’s moving!", "angry"]);
scene.Push(["Crator", "I’m going to fuck up whatever did this to me!", "angry"]);
scene.Push(["Esther", "Quit mumbling to yourself.", "angry"]);
scene.Push(["Crator", "…", "normal"]);
Set1.Add("Crator_Pregnant_esther",scene);


//44A.
//IF CRATOR IS PREGNANT and all camp scene did not happen
//CRATOR and MILKY:
scene = new Array();
scene.Push(["Crator", "God, it really does feel like I’m pregnant…", "angry"]);
scene.Push(["Milky", "You talking about me?", "normal"]);
scene.Push(["Crator", "What? Of course, not.", "normal"]);
scene.Push(["Milky", "Oh, I just heard you say ‘pregnant’.", "normal"]);
scene.Push(["Crator", "Milky…", "sad"]);
scene.Push(["Milky", "Hm?", "normal"]);
scene.Push(["Crator", "I’m so sorry I doubted you…", "sad"]);
Set1.Add("Crator_Pregnant_milky",scene);

//45.
//ALL in HILL
scene = new Array();
scene.Push(["Aluna", "Good. It’s getting dark. We’ll see our mystery culprit for sure.", "normal"]);
scene.Push(["Konstal", "We’ll show that fucker. ", "angry"]);
scene.Push(["Crator", "I don’t know… Maybe we need someone under the tree to attract whatever is doing this. ", "concerned"]);
scene.Push(["Milky", "Why do you think that, Crator? ", "concerned"]);
scene.Push(["Crator", "Well, we’ve been on this planet for awhile now, right? And nothing like this happened till now. And it’s,", "normal"]);
scene.Push(["Crator", "presumably, because none of us have ever really fallen asleep under the tree before.", "normal"]);
scene.Push(["Esther", "That’s true.. I’ve been here at night and nothing like this has ever happened to me.", "normal"]);
scene.Push(["Esther", "It must be that you have to actually fall asleep under that tree to attract whatever is doing this.", "normal"]);
scene.Push(["Aluna", "Any volunteers?", "normal"]);
scene.Push(["Konstal", "Really, Aluna?", "normal"]);
scene.Push(["Milky", "Aluna, you’re not serious, are you? You want to use someone as bait?", "angry"]);
scene.Push(["Aluna", "We won’t be able to get rid of this threat till we figure out what it is.", "normal"]);
scene.Push(["Konstal", "You do it, then, if you’re so interested.", "angry"]);
scene.Push(["Aluna", "Fine, I will. You all wait here.", "normal"]);
scene.Push(["Milky", "No! Aluna, it’s dangerous!", "surprise"]);
scene.Push(["Esther", "It’s ok, Milky, Aluna knows what she’s doing.", "normal"]);
scene.Push(["Esther", "And we’re all here to watch her back in case something does go down.", "normal"]);
scene.Push(["Esther", "We’re counting on you, Aluna.", "normal"]);
scene.Push(["Aluna", "Thanks", "normal"]);
scene.Push(["Esther", "We’ll all watch from behind those bushes.", "normal"]);
//(Cutscene: aluna lays under the tree. others move behind the bushes)
scene.Push(["Konstal", "Stop Pushing!", "angry"]);
scene.Push(["Esther", "Stop Pulling!", "angry"]);
//(pause)
scene.Push(["Milky", "I don’t see anything.", "normal"]);
scene.Push(["Esther", "It’ll happen soon, I’m sure.", "normal"]);
//(pause)
scene.Push(["Milky", "I don’t - ", "surprise"]);
scene.Push(["Crator", "HOLY FUCK! WHAT IS THAT?!", "surprise"]);
//(Image of spider coming down to infect Aluna)
scene.Push(["Esther", "ALUNA!!! WAKE UP! GET OUT OF THERE!", "surprise"]);
Set1.Add("Hill_SeeMonster",scene);


///////////////////////////////////////////
///////////////  PART 2
///////////////////////////////////////////



//46.
//ALL in CAMP
// if Konstal is pregnant
scene = new Array();
scene.Push(["Aluna", "That was messed up.", "normal"]);
scene.Push(["Esther", "What do we do now? It’s only a matter of time before that things starts eating us.", "angry"]);
scene.Push(["Milky", "I’m scared, you guys…", "sad"]);
scene.Push(["Crator", "Don’t worry, Milky, I’m here for you.", "normal"]);
scene.Push(["Konstal", "I was right! I’m not pregnant!", "happy"]);
scene.Push(["Esther", "Konstal, what the fuck?", "angry"]);
scene.Push(["Kosntal", "Don’t you see- it’s probably a species that needs hosts to incubate it’s eggs.", "happy"]);
scene.Push(["Kosntal", "You all thought I was pregnant but I’m not!", "happy"]);
scene.Push(["Kosntal", "The monster’s just using our guts to incubate it’s eggs.", "happy"]);
scene.Push(["Esther", "Thanks Konstal, the fact that you’re not pregnant", "normal"]); 
scene.Push(["Esther", "but incubating eggs was really important to bring up right now.", "normal"]);
scene.Push(["Esther", "I don’t know how we could have gone on without knowing that bit of information.", "normal"]);
scene.Push(["Konstal", "Huh, just wanted to set the record straight.", "happy"]);
scene.Push(["Crator", "Guys- how are we going to solve this?", "normal"]);
scene.Push(["Milky", "… will we have to fight it?", "sad"]);
scene.Push(["Crator", "I don’t know.", "normal"]);
scene.Push(["Konstal", "Seems like a good plan. But it won’t come down unless we have some bait. ", "normal"]);
scene.Push(["Aluna", "I could- ", "normal"]);
scene.Push(["Milky", "You are NOT acting as our bait! Now that I saw that monster I cannot let you.", "angry"]) ;
scene.Push(["Milky", "Oh god, we’ve all been sleeping so close to that thing…", "angry"]);
scene.Push(["Milky", "I have that thing’s babies in me!", "surprise"]);
scene.Push(["Aluna", "So we need some sort of decoy, huh?", "normal"]);
scene.Push(["Crator", "... I can’t think of anything.", "normal"]);
scene.Push(["Esther", "Guys, we’ve been up all night. Let’s just take it easy for now.", "normal"]);
scene.Push(["Esther", "Maybe if we split up for a bit we can think of something.", "normal"]);
scene.Push(["Milky", "yeah… something much safer.", "sad"]);
scene.Push(["Aluna", "We need a decoy and we need weapons.", "normal"]);
Set2.Add("Regroup_KonstalIsPregnant",scene);




//46A.
//ALL in CAMP if konstal is not pregnant
scene = new Array();
scene.Push(["Aluna", "That was messed up.", "normal"]);
scene.Push(["Esther", "What do we do now? It’s only a matter of time before that things starts eating us.", "angry"]);
scene.Push(["Milky", "I’m scared, you guys…", "sad"]);
scene.Push(["Crator", "Don’t worry, Milky, I’m here for you.", "normal"]);
scene.Push(["Milky", "Oh god, we’ve all been sleeping so close to that thing… I have that thing’s babies in me!", "angry"]);
scene.Push(["Milky", "I have that thing’s babies in me!", "surprise"]);
scene.Push(["Crator", "It seems to be a species that needs hosts to incubate its eggs.", "normal"]); 
scene.Push(["Crator", "You're not pregnant in the traditional sense of the word.", "normal"]); 
scene.Push(["Crator", "It's mor elike you're incubating eggs in your body.", "normal"]);
scene.Push(["Milky", "Ew...", "sad"]);
scene.Push(["Crator", "Guys- how are we going to solve this?", "normal"]);
scene.Push(["Milky", "… Will we have to fight it?", "sad"]);
scene.Push(["Crator", "I don’t know.", "normal"]);
scene.Push(["Konstal", "Seems like a good plan. But it won’t come down unless we have some bait. ", "normal"]);
scene.Push(["Aluna", "I could- ", "normal"]);
scene.Push(["Milky", "You are NOT acting as our bait! Now that I saw that monster I cannot let you. ", "angry"]);
scene.Push(["Aluna", "So we need some sort of decoy, huh?", "normal"]);
scene.Push(["Crator", "... I can’t think of anything.", "normal"]);
scene.Push(["Esther", "Guys, we’ve been up all night. Let’s just take it easy for now.", "normal"]);
scene.Push(["Esther", "Maybe if we split up for a bit we can think of something.", "normal"]);
scene.Push(["Milky", "Yeah… something much safer.", "sad"]);
scene.Push(["Aluna", "We need a decoy and we need weapons.", "normal"]);
Set2.Add("Regroup_KonstalIsNotPregnant",scene);


//47.
//ALUNA and Konstal anywhere other than hill & before 48
scene = new Array();
scene.Push(["Aluna", "Do you know where we can find a decoy? ", "normal"]);
scene.Push(["Konstal", "D-Decoy? Of course not! I don’t have anything we can use as a decoy!", "angry"]);
scene.Push(["Aluna", "Um, I was just asking.", "normal"]);
scene.Push(["Konstal", "Yeah? Well, um, ask someone else!", "angry"]);
Set2.Add("Aluna_Konstal_beforeAlunaAndMilky_pillow0",scene);


//48.
//ALUNA and MILKY anywhere other than hill
scene = new Array();
scene.Push(["Aluna", "Do you know where we can find a decoy?", "normal"]);
scene.Push(["Milky", "By decoy, you basically mean anything that looks like a person, right?", "normal"]);
scene.Push(["Aluna", "Yes- exactly.", "normal"]);
scene.Push(["Milky", "Um, not sure if this will work.", "normal"]);
scene.Push(["Milky", "But Konstal has a body pillow that he sleeps with at night.", "normal"]);
scene.Push(["Aluna", "Konstal has a body pillow? That’s perfect!", "surprise"]);
scene.Push(["Milky", "Yeah, the problem is that he doesn’t want anyone to know ", "normal"]);
scene.Push(["Milky", "he has it so You’ll have to seriously pry it from him.", "normal"]);
scene.Push(["Aluna", "Yes- thank you! I’ll do that. Thanks, Milky!", "happy"]);
Set2.Add("Aluna_Milky_pillow",scene);


//49.
//ALUNA and Konstal anywhere other than hill & after 48
scene = new Array();
scene.Push(["Aluna", "Do you know where we can find a decoy? ", "normal"]);
scene.Push(["Konstal", "D-Decoy? Of course not! I don’t have anything we can use as a decoy!", "angry"]);
scene.Push(["Aluna", "Milky told me you have a body pillow. Could we use that? ", "normal"]);
scene.Push(["Konstal", " She’s Lying!", "angry"]);
scene.Push(["Aluna", "I don’t think so.", "normal"]);
scene.Push(["Konstal", "… ", "normal"]);
scene.Push(["Konstal", "She’s Lying.", "normal"]);
scene.Push(["Aluna", "Konstal, we really need it-", "normal"]);
scene.Push(["Konstal", "I can’t take this right now.", "angry"]);
scene.Push(["Konstal", "I’ll find a way to protect us from the monster. Don’t worry.", "angry"]);
scene.Push(["Aluna", "But Konstal - ", "normal"]);
scene.Push(["Konstal", "I said don’t worry! You just leave this to me.", "angry"]);
scene.Push(["Konstal", "Just go- go clean up around the tent or something.", "angry"]);
scene.Push(["Aluna", "Seriously, Konstal-", "normal"]);
scene.Push(["Konstal", "I’m not in the mood, Aluna. Just go make me a sandwhich or something.", "angry"]);
scene.Push(["Aluna", "...", "normal"]);
scene.Push(["Konstal", " See you.", "normal"]);
scene.Push(["Aluna", "… he’ll probably feel bad for saying that to me.", "normal"]);
scene.Push(["Aluna", "Maybe I can use that to my advantage.", "normal"]);
scene.Push(["Aluna", " I think I will go make him that sandwich.", "normal"]);
scene.Push(["Aluna", "A sandwich, a sandwich…. ", "normal"]);
scene.Push(["Aluna", "I need bread, and maybe some peanut butter. ", "normal"]);
scene.Push(["Aluna", "Crator is in charge of all the supplies. I’ll go ask him.", "normal"]);
Set2.Add("Aluna_Konstal_pillow1",scene);



//50.
//ALUNA and CRATOR after #49 anywhere but hill
scene = new Array();
scene.Push(["Aluna", "Crator. I need ingredients for a sandwich.", "normal"]);
scene.Push(["Crator", "A sandwich? Why do you want a sandwich now? ", "surprise"]);
scene.Push(["Aluna", "I just need one. I have a reason. I promise. ", "normal"]);
scene.Push(["Crator", "I don’t know, Aluna, I need to save our rations", "normal"]);
scene.Push(["Crator", "especially with the situation we’re in right now…", "normal"]);
scene.Push(["Aluna", "It’s ok, I’ll skip my next meal for it. I promise.", "normal"]);
scene.Push(["Crator", "Aluna, you’re a skinny twig. I can’t let you skip your next meal. Sorry Aluna.", "sad"]);
scene.Push(["Aluna", "If Milky asked, I bet you’d say ok…", "normal"]);
scene.Push(["Crator", "What was that?", "normal"]);
scene.Push(["Aluna", "Nothing! Just thought of another plan.", "normal"]);
Set2.Add("Aluna_Crator_pillow",scene);



//51.
//ALUNA and MILKY after #50 anywhere but hill
scene = new Array();
scene.Push(["Aluna", " Milky. I need a favor.", "normal"]);
scene.Push(["Milky", "What is it? I’ll help if I can.", "normal"]);
scene.Push(["Aluna", "Can you ask Crator for some sandwhich ingredients?", "normal"]);
scene.Push(["Milky", "Um, sure. But why me? Why can’t you do it?", "surprise"]);
scene.Push(["Aluna", "I think he’ll be more receptive to you.", "normal"]);
scene.Push(["Milky", "Ok… I’ll ask next time I see him.", "normal"]);
Set2.Add("Aluna_Milky_pillow2",scene);


//52.
//MILKY and CRATOR after #51 anywhere but hill
scene = new Array();
scene.Push(["Milky", "Hey Crator.", "normal"]);
scene.Push(["Crator", "Milky. Hey.", "normal"]);
scene.Push(["Milky", "Can I have some bread and some peanut butter? ", "normal"]);
scene.Push(["Crator", "Making a sandwhich, Milky?", "normal"]);
scene.Push(["Milky", "Is that a problem?", "normal"]);
scene.Push(["Crator", "Um, no. Here you go.", "normal"]);
scene.Push(["Milky", "Thanks, Crator.", "normal"]);
scene.Push(["Crator", "Don’t mention it.", "happy"]);
Set2.Add("Crator_Milky_pillow",scene);


//53.
//MILKY and ALUNA after #52 anywhere but hill
scene = new Array();
scene.Push(["Milky", "Here are the sandwich ingredients you needed, Aluna.", "normal"]);
scene.Push(["Aluna", "Thanks, Milky! I couldn’t have done it without you.", "happy"]);
scene.Push(["Milky", "It’s all good.", "happy"]);
scene.Push(["Aluna", "Just put this here…", "normal"]);
scene.Push(["Aluna", "A little there…", "normal"]);
scene.Push(["Aluna", "And Ta-Da! Here it is! The perfect peanut butter sandwich.", "normal"]);
scene.Push(["Milky", "Good job, Aluna.", "happy"]);
Set2.Add("Aluna_Milky_pillow3",scene);


//54.
//ALUNA and KONSTAL after #53 anywhere but hill
scene = new Array();
scene.Push(["Aluna", "Here’s that sandwich you wanted. ", "normal"]);
scene.Push(["Konstal", "What?", "normal"]);
scene.Push(["Aluna", " You told me to go make one. I realize it was just you being mean", "normal"]);
scene.Push(["Aluna", "but, um, you do look really pale… and stuff.", "normal"]);
scene.Push(["Konstal", "Seriously, Aluna? You went through all this trouble…", "surprise"]);
scene.Push(["Konstal", "... if you want, you can have that body pillow. ", "normal"]);
scene.Push(["Konstal", "God you must have known I would say that…", "angry"]);
scene.Push(["Aluna", "How did you even guess?", "happy"]);
scene.Push(["Aluna", "Thanks for the body Pillow, Konstal.", "normal"]);
scene.Push(["Konstal", "Sure…", "normal"]);
scene.Push(["Aluna", "This won’t really fool the monster, I think.", "normal"]); 
scene.Push(["Aluna", "I need someone to dress it up. Make it cute.", "normal"]); 
scene.Push(["Aluna", "Someone who knows makeup… maybe Esther?", "normal"]);
Set2.Add("Aluna_Konstal_pillow2",scene);



//55.
//ALUNA and ESTHER after #54 anywhere but hill
scene = new Array();
scene.Push(["Aluna", "Esther, I was looking for you.", "normal"]);
scene.Push(["Esther", "What do you need?", "normal"]);
scene.Push(["Aluna", "I need you to help me turn this body pillow into a good decoy.", "normal"]);
scene.Push(["Esther", "Aluna! That’s perfect! Where did you even find a body pillow?", "surprise"]);
scene.Push(["Aluna", "It’s a secret. Will you help?", "normal"]);
scene.Push(["Esther", "Of course! Let me just get out my make up. ", "happy"]);
scene.Push(["Esther", "Add some red over here… some blush over there…", "happy"]);
scene.Push(["Esther", "some mascara… eyeliner… and Viola!", "happy"]);
scene.Push(["Esther", "There you go. I think it’s pretty convincing.", "happy"]);
scene.Push(["Aluna", "Thank you Esther! I’ll put this under the tree once it’s time.", "happy"]);
scene.Push(["Esther", "Great going, Aluna!", "happy"]);
Set2.Add("Aluna_Esther_pillow",scene);


//55.
//ALUNA and CRATOR anywhere but hill before #56
scene = new Array();
scene.Push(["Aluna", "Any ideas for a weapon? ", "normal"]);
scene.Push(["Crator", "I’m not sure… Esther is pretty good at fabricating things, isn’t she?", "normal"]);
scene.Push(["Crator", " Why don’t you ask her?", "normal"]);
scene.Push(["Crator", "Why don’t you ask her?", "normal"]);
scene.Push(["Aluna", "Yeah… She is pretty good at stuff like that. I’ll go ask.", "normal"]);
Set2.Add("Aluna_Crator_weapon1",scene);


//56.
//ALUNA and ESTHER anywhere but hill
scene = new Array();
scene.Push(["Aluna", "Esther- you’re pretty good at crafting, aren’t you?", "normal"]);
scene.Push(["Aluna", " Do you think you could make some sort of weapon for us? ", "normal"]);
scene.Push(["Esther", "I could. But it’s a matter of finding the right materials for it.  ", "normal"]);
scene.Push(["Aluna", "Tell me what you need. I’ll find the materials for you. ", "normal"]);
scene.Push(["Esther", "Well, if you’re sure... ", "surprise"]);
scene.Push(["Esther", "I was thinking of making bows and arrows for all of us.", "normal"]); 
scene.Push(["Esther", "They’re easy to make with the right equipment.", "normal"]); 
scene.Push(["Esther", "And I have the wood for the bow and arrows right here.", "normal"]);
scene.Push(["Esther", "I gathered them in the forest. ", "normal"]);
scene.Push(["Aluna", "What do you need me to do? ", "normal"]);
scene.Push(["Esther", "I need feathers for the back of the bows so they’ll fly properly.", "normal"]); 
scene.Push(["Esther", "I also need string for the bow.", "normal"]); 
scene.Push(["Esther", "It has to be strong but light. And sort of stretchy. ", "normal"]);
scene.Push(["Aluna", "Alright… got it.  ", "normal"]);
Set2.Add("Aluna_Esther_weapon1",scene);


//57.
//ALUNA and KONSTAL after #56 anywhere but hill
scene = new Array();
scene.Push(["Aluna", "Hey, any ideas where I can find feathers or string? ", "normal"]);
scene.Push(["Konstal", "Sorry. I’m busy at the moment.", "normal"]);
scene.Push(["Konstal", "And where would you even find those things on this planet? ", "normal"]);
scene.Push(["Aluna", "That’s what I want to know… ", "normal"]);
Set2.Add("Aluna_Konstal_weapon",scene);


//58.
//ALUNA and MILKY after #56 anywhere but hill
scene = new Array();
scene.Push(["Aluna", "Hey, any ideas where I can find feathers or string? ", "normal"]);
scene.Push(["Milky", "Hm, Crator may know. I know he really liked bird watching back on earth. ", "normal"]);
scene.Push(["Milky", "I looked at his photo album on his cellphone once and it was all birds. ", "normal"]);
scene.Push(["Aluna", "Why were you looking at his photo album? ", "normal"]);
scene.Push(["Milky", "No reason. I asked permission if that’s what you mean. ", "normal"]);
scene.Push(["Aluna", "Thanks, Milky. I’ll go ask Crator about it. ", "normal"]);
Set2.Add("Aluna_Milky_weapon",scene);


//59.
//ALUNA and CRATOR after #56 anywhere but hill
scene = new Array();
scene.Push(["Aluna", "Hey, any ideas where I can find feathers or string?", "normal"]);
scene.Push(["Crator", "Actually, I do have some feathers.", "normal"]);
scene.Push(["Aluna", "Really?! You found them here?", "normal"]);
scene.Push(["Crator", "No, I brought them with me from earth.", "normal"]);
scene.Push(["Crator", "I kind of have a thing for bird watching.", "normal"]);
scene.Push(["Crator", "But… it’s ok, I guess, if you take them.", "sad"]);
scene.Push(["Crator", "It’s for the plan to take care of the monster, right?", "sad"]);
scene.Push(["Aluna", "Crator… are you sure?", "surprise"]);
scene.Push(["Crator", "Yes, of course. Here you go.", "normal"]);
scene.Push(["Aluna", "Thank you, Crator.", "happy"]);
Set2.Add("Aluna_Crator_weapon2",scene);


//60.
//ALUNA at the hill after #56 anywhere but hill
scene = new Array();
scene.Push(["Aluna", "Hm, feathers or string….", "normal"]);
scene.Push(["Aluna", "You know… this webbing on the floor kind of looks like string.", "normal"]);
scene.Push(["Aluna", "Maybe this’ll work.", "normal"]);
scene.Push(["Aluna", "Hmm….. yup, definitely quite strong.", "normal"]);
scene.Push(["Aluna", "I hope Esther doesn’t ask where I got this from…", "normal"]);
Set2.Add("Aluna_weapon_OnHill",scene);


//61.
//ALUNA and ESTHER after #60 & #59 anywhere but hill
scene = new Array();
scene.Push(["Aluna", "Esther. Here are the items you needed.", "normal"]);
scene.Push(["Esther", " Aluna! I can’t believe you got these!", "surprise"]);
scene.Push(["Aluna", "Yeah… I just needed to ask around a bit.", "normal"]);
scene.Push(["Esther", "Thank you… I couldn’t have got these without you.", "happy"]);
scene.Push(["Aluna", "I didn’t really do anything…", "normal"]);
scene.Push(["Esther", "Just put this here…", "normal"]);
scene.Push(["Esther", "Some over there…", "normal"]);
scene.Push(["Esther", "Tie this around here…", "normal"]);
scene.Push(["Esther", "And there it is! Bows and arrows for all!", "happy"]);
Set2.Add("Aluna_Esther_Weapon2",scene);


//61.
//ALUNA after #61 & #55 anywhere but hill
scene = new Array();
scene.Push(["Aluna", "We’re done! We have all the things we need to face that monster!.", "normal"]);
Set2.Add("Aluna_weapon_decoy_Done",scene);


//All_Done
//62.
//EVERYTHINGS IS DONE _ FINAl CONFRONTATION
scene = new Array();
scene.Push(["Aluna", "This is it, guys. We're going in.", "normal"]);
scene.Push(["Esther", "Is everyone ready for this?", "angry"]);
scene.Push(["Milky", "Yes! At least if we get rid of it I can sleep properly...", "angry"]);
scene.Push(["Crator", "Even if we weren't ready there isn't any choice.", "sigh"]);
scene.Push(["Crator", "It's it or us.", "angry"]);
scene.Push(["Konstal", "Down with the monster!!", "angry"]);
scene.Push(["Aluna", "Wow... what a violent group of people.", "surprise"]);
scene.Push(["Aluna", "Not that I'm not the same.", "sigh"]);
scene.Push(["Aluna", "C'mon, guys. Let's do this.", "smirk"]);
scene.Push(["Esther", "Right! Descoy in place?", "smirk"]);
scene.Push(["Konstal", "Check.", "smirk"]);
scene.Push(["Crator", "Do we have our weapon?", "smirk"]);
scene.Push(["Milky", "Check!", "surprise"]);
scene.Push(["Aluna", "And the Sun's coming down. Perfect timing...", "smirk"]);
Set2.Add("All_Done",scene);

//overHere///////////////////////////////////////////////////////////////////////////////////////////////////////////////

currentSet = Set1;


}



function Update () { 


	

	cratorSet = storeVars.cratorSet;
	konstalSet = storeVars.konstalSet;
	alunaSet = storeVars.alunaSet;
	estherSet = storeVars.estherSet;
	milkySet = storeVars.milkySet;

	//UPDATE VARIABLAES to keep track of where we are in the story

	if ( (storeVars.startPart2 == false) && (Set1.Contains("milky_crator_anywhere") == false) &&  (Set1.Contains("konstal_milky_anywhere") == false)  && (Set1.Contains("aluna_milky_alone_anywhere") == false) && (Set1.Contains("esther_milky_alone_anywhere") == false) )
	{
		storeVars.startPart2 = true;
	}
	
	if ( (storeVars.alunaShowedAllFootprints == false) && (storeVars.estherLookedAtFootprints == true) &&  (storeVars.cratorLookedAtFootprints == true) &&  (storeVars.konstalLookedAtFootprints == true))
	{
		storeVars.alunaShowedAllFootprints = true;
	}

	if (Set1 == null)
	{
		print ("Set1 is null");
	}
//	Debug.Log (Set2.Count);
	if (Set2 == null)
	{
		print ("Set2 is null");
	}

if (storeVars.moved == true)
{

	if (storeVars.SetNum == 1)
	{

		////////////////////////////////////////
		///////////  CHECK THE CAMP
		////////////////////////////////////////


		////// ALL 
		if ((storeVars.moved == true) &&(konstalSet == "inCamp") && (alunaSet == "inCamp") && (cratorSet == "inCamp") && (milkySet == "inCamp")&& (estherSet == "inCamp") && isInConvo == false)
		{
				print ("aluna_crator_esther_konstal_milky_inCamp");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if (Set1.Contains("aluna_crator_esther_konstal_milky_inCamp"))
		    	{
		    		currentConvo = Set1["aluna_crator_esther_konstal_milky_inCamp"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_crator_esther_konstal_milky_inCamp";
		    		makeConvo("aluna_crator_esther_konstal_milky_inCamp", Set1);
		    		storeVars.moved = false;
		    	}
		}

		// ALL TALK - esther is pregnant 
		if ((storeVars.moved == true) &&(storeVars.estherIsPreganant == true ) && (storeVars.alunaIsPreganant == true ) && (konstalSet == "inCamp") && (alunaSet == "inCamp") && (cratorSet == "inCamp") && (milkySet == "inCamp")&& (estherSet == "inCamp") && isInConvo == false)
		{
				print ("Esther_Pregnant_All_InCamp");
				
				//anim.Play("Esther_Pregnant_All_InCamp");
				
		    	if (Set1.Contains("Esther_Pregnant_All_InCamp"))
		    	{
		    		currentConvo = Set1["Esther_Pregnant_All_InCamp"];
		    		isInConvo = true;
		    		currentConvoName ="Esther_Pregnant_All_InCamp";
		    		makeConvo("Esther_Pregnant_All_InCamp", Set1);
		    		storeVars.moved = false;
		    	}
		    	storeVars.allTalk_estherIsPreganant = true;
		    	
		}

		// ALL TALK - konstal is pregnant 
		if ( (storeVars.moved == true) &&(storeVars.konstalIsPreganant == true ) && (storeVars.milkyAlunaTalkAboutKonstalPreg== true) && (konstalSet == "inCamp") && (alunaSet == "inCamp") && (cratorSet == "inCamp") && (milkySet == "inCamp")&& (estherSet == "inCamp") && isInConvo == false)
		{
				print ("Konstal_Pregnant_all_inCamp");
				
				//anim.Play("Esther_Pregnant_All_InCamp");
				
		    	if (Set1.Contains("Konstal_Pregnant_all_inCamp"))
		    	{
		    		currentConvo = Set1["Konstal_Pregnant_all_inCamp"];
		    		isInConvo = true;
		    		currentConvoName ="Konstal_Pregnant_all_inCamp";
		    		makeConvo("Konstal_Pregnant_all_inCamp", Set1);
		    		storeVars.moved = false;
		    	}
		    	storeVars.allTalk_konstalIsPreganant = true;
		}

		// ALL TALK - aluna is pregnant 
		if ((storeVars.moved == true) && (storeVars.alunaIsPreganant == true ) &&  (storeVars.estherIsPreganant == false ) && (storeVars.allTalk_alunaIsPreganant == false)  && (konstalSet == "inCamp") && (alunaSet == "inCamp") && (cratorSet == "inCamp") && (milkySet == "inCamp")&& (estherSet == "inCamp") && isInConvo == false)
		{
				print ("Aluna_Pregnant_All_inCamp");
				
				//anim.Play("Aluna_Pregnant_All_inCamp");
				
		    	if (Set1.Contains("Aluna_Pregnant_All_inCamp"))
		    	{
		    		currentConvo = Set1["Aluna_Pregnant_All_inCamp"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Pregnant_All_inCamp";
		    		makeConvo("Aluna_Pregnant_All_inCamp", Set1);
		    		storeVars.moved = false;
		    	}
		    	storeVars.allTalk_alunaIsPreganant = true;
		}

		// ALL TALK - aluna is pregnant  - esther is pregnant
		if ((storeVars.moved == true) && (storeVars.alunaIsPreganant == true ) &&  (storeVars.estherIsPreganant == true ) && (storeVars.allTalk_alunaIsPreganant == false) && (konstalSet == "inCamp") && (alunaSet == "inCamp") && (cratorSet == "inCamp") && (milkySet == "inCamp")&& (estherSet == "inCamp") && isInConvo == false)
		{
				print ("Aluna_Pregnant_Esther_pregnant_All_inCamp");
				
				//anim.Play("Aluna_Pregnant_All_inCamp");
				
		    	if (Set1.Contains("Aluna_Pregnant_Esther_pregnant_All_inCamp"))
		    	{
		    		currentConvo = Set1["Aluna_Pregnant_Esther_pregnant_All_inCamp"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Pregnant_Esther_pregnant_All_inCamp";
		    		makeConvo("Aluna_Pregnant_Esther_pregnant_All_inCamp", Set1);
		    		storeVars.moved = false;
		    	}
		    	storeVars.allTalk_alunaIsPreganant = true;
		}


		// ALL TALK - crator is pregnant 
		if ((storeVars.moved == true) && (storeVars.cratorIsPreganant == true )  && (storeVars.allTalk_cratorIsPreganant == false) && (konstalSet == "inCamp") && (alunaSet == "inCamp") && (cratorSet == "inCamp") && (milkySet == "inCamp")&& (estherSet == "inCamp") && isInConvo == false)
		{
				print ("Crator_Pregnant_all_inCamp");
				
				//anim.Play("Crator_Pregnant_all_inCamp");
				
		    	if (Set1.Contains("Crator_Pregnant_all_inCamp"))
		    	{
		    		currentConvo = Set1["Crator_Pregnant_all_inCamp"];
		    		isInConvo = true;
		    		currentConvoName ="Crator_Pregnant_all_inCamp";
		    		makeConvo("Crator_Pregnant_all_inCamp", Set1);
		    		storeVars.moved = false;
		    	}
		    	storeVars.allTalk_alunaIsPreganant = true;
		}





		////////////////////////////////////////
		///////////  CHECK  ANYWERE
		////////////////////////////////////////
		
			////// ESTHER & KONSTAL & ALUNA - esther is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther") || (storeVars.justClickedChar == "Konstal")) && (storeVars.allTalk_estherIsPreganant == false) && (storeVars.estherIsPreganant == true) && (estherSet == cratorSet) && (estherSet == alunaSet) && isInConvo == false)
		{
				print ("Esther_Pregnant_Aluna_Konstal");
				
				//anim.Play("Esther_Pregnant_Aluna_Konstal");
				
		    	if (Set1.Contains("Esther_Pregnant_Aluna_Konstal")) 
		    	{
		    		currentConvo = Set1["Esther_Pregnant_Aluna_Konstal"];
		    		isInConvo = true;
		    		currentConvoName ="Esther_Pregnant_Aluna_Konstal";
		    		makeConvo("Esther_Pregnant_Aluna_Konstal", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// ESTHER & KONSTAL - esther is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Esther") || (storeVars.justClickedChar == "Konstal")) && (storeVars.allTalk_estherIsPreganant == false) && (storeVars.estherIsPreganant == true) && (estherSet == konstalSet) && isInConvo == false)
		{
				print ("Esther_Pregnant_Konstal");
				
				//anim.Play("Esther_Pregnant_Konstal");
				
		    	if (Set1.Contains("Esther_Pregnant_Konstal")) 
		    	{
		    		currentConvo = Set1["Esther_Pregnant_Konstal"];
		    		isInConvo = true;
		    		currentConvoName ="Esther_Pregnant_Konstal";
		    		makeConvo("Esther_Pregnant_Konstal", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// ESTHER & CRATOR - esther is pregnant
		if ((storeVars.moved == true) && (storeVars.allTalk_estherIsPreganant == false) &&( (storeVars.justClickedChar == "Crator") || (storeVars.justClickedChar == "Esther")) && (storeVars.estherIsPreganant == true) && (estherSet == cratorSet) && isInConvo == false)
		{
				print ("Esther_Pregnant_Crator");
				
				//anim.Play("Esther_Pregnant_Crator");
				
		    	if (Set1.Contains("Esther_Pregnant_Crator")) 
		    	{
		    		currentConvo = Set1["Esther_Pregnant_Crator"];
		    		isInConvo = true;
		    		currentConvoName ="Esther_Pregnant_Crator";
		    		makeConvo("Esther_Pregnant_Crator", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// ESTHER & MILKY - esther is pregnant
		if ((storeVars.moved == true) && (storeVars.allTalk_estherIsPreganant == false) && ( (storeVars.justClickedChar == "Esther") || (storeVars.justClickedChar == "Milky")) && (storeVars.estherIsPreganant == true) && (estherSet == milkySet) && isInConvo == false)
		{
				print ("Esther_Pregnant_Milky");
				
				//anim.Play("Esther_Pregnant_Milky");
				
		    	if (Set1.Contains("Esther_Pregnant_Milky")) 
		    	{
		    		currentConvo = Set1["Esther_Pregnant_Milky"];
		    		isInConvo = true;
		    		currentConvoName ="Esther_Pregnant_Milky";
		    		makeConvo("Esther_Pregnant_Milky", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// ESTHER & ALUNA - esther is pregnant - aluna is not pregnant
		if ((storeVars.moved == true) && (storeVars.allTalk_estherIsPreganant == false) && (storeVars.estherIsPreganant == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther") ) && (storeVars.alunaIsPreganant == false) && (estherSet == alunaSet) && isInConvo == false)
		{
				print ("Esther_Pregnant_Aluna");
				
				//anim.Play("Esther_Pregnant_Aluna");
				
		    	if (Set1.Contains("Esther_Pregnant_Aluna")) 
		    	{
		    		currentConvo = Set1["Esther_Pregnant_Aluna"];
		    		isInConvo = true;
		    		currentConvoName ="Esther_Pregnant_Aluna";
		    		makeConvo("Esther_Pregnant_Aluna", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// ESTHER & KONSTAL - esther is pregnant - aluna is pregant
		if ((storeVars.moved == true) && ((storeVars.justClickedChar == "Esther") || (storeVars.justClickedChar == "Konstal")) && (storeVars.allTalk_estherIsPreganant == false) && (storeVars.estherIsPreganant == true) && (storeVars.alunaIsPreganant == true)  && (estherSet == alunaSet) && isInConvo == false)
		{
				print ("Esther_Pregnant_Aluna_Pregnant");
				
				//anim.Play("Esther_Pregnant_Aluna_Pregnant");
				
		    	if (Set1.Contains("Esther_Pregnant_Aluna_Pregnant")) 
		    	{
		    		currentConvo = Set1["Esther_Pregnant_Aluna_Pregnant"];
		    		isInConvo = true;
		    		currentConvoName ="Esther_Pregnant_Aluna_Pregnant";
		    		makeConvo("Esther_Pregnant_Aluna_Pregnant", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// KONSTAL & MILKY - konstal is pregnant 
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Konstal") ||  (storeVars.justClickedChar == "Milky")) && (storeVars.allTalk_konstalIsPreganant == false) && (storeVars.konstalIsPreganant == true) && (konstalSet == milkySet) && isInConvo == false)
		{
				print ("Konstal_Pregnant_Milky");
				
				//anim.Play("Konstal_Pregnant_Milky");
				
		    	if (Set1.Contains("Konstal_Pregnant_Milky")) 
		    	{
		    		currentConvo = Set1["Konstal_Pregnant_Milky"];
		    		isInConvo = true;
		    		currentConvoName ="Konstal_Pregnant_Milky";
		    		makeConvo("Konstal_Pregnant_Milky", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// KONSTL: & ALUNA - konstal is pregnant 
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Konstal")) && (storeVars.allTalk_konstalIsPreganant == false) && (storeVars.konstalIsPreganant == true) && (konstalSet == alunaSet) && isInConvo == false)
		{
				print ("Konstal_Pregnant_Aluna");
				
				//anim.Play("Konstal_Pregnant_Aluna");
				
		    	if (Set1.Contains("Konstal_Pregnant_Aluna")) 
		    	{
		    		currentConvo = Set1["Konstal_Pregnant_Aluna"];
		    		isInConvo = true;
		    		currentConvoName ="Konstal_Pregnant_Aluna";
		    		makeConvo("Konstal_Pregnant_Aluna", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// MILKY & ALUNA - konstal is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Milky")) && (storeVars.allTalk_konstalIsPreganant == false) && (storeVars.konstalIsPreganant == true) && (milkySet == alunaSet) && isInConvo == false)
		{
				print ("Konstal_Pregnant_Aluna_Milky_alone");
				
				//anim.Play("Konstal_Pregnant_Aluna_Milky_alone");
				
		    	if (Set1.Contains("Konstal_Pregnant_Aluna_Milky_alone")) 
		    	{
		    		currentConvo = Set1["Konstal_Pregnant_Aluna_Milky_alone"];
		    		isInConvo = true;
		    		currentConvoName ="Konstal_Pregnant_Aluna_Milky_alone";
		    		makeConvo("Konstal_Pregnant_Aluna_Milky_alone", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// KONSTAL & MILKY & ALUNA - konstal is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Konstal") || (storeVars.justClickedChar == "Milky")) && (storeVars.allTalk_konstalIsPreganant == false) && (storeVars.konstalIsPreganant == true) && (milkySet == konstalSet) && (milkySet == alunaSet) && isInConvo == false)
		{
				print ("Konstal_Pregnant_Aluna_Milky_confrontation");
				
				//anim.Play("Konstal_Pregnant_Aluna_Milky_confrontation");
				
		    	if (Set1.Contains("Konstal_Pregnant_Aluna_Milky_confrontation")) 
		    	{
		    		currentConvo = Set1["Konstal_Pregnant_Aluna_Milky_confrontation"];
		    		isInConvo = true;
		    		currentConvoName ="Konstal_Pregnant_Aluna_Milky_confrontation";
		    		makeConvo("Konstal_Pregnant_Aluna_Milky_confrontation", Set1);
		    		storeVars.milkyAlunaTalkAboutKonstalPreg = true;
		    		storeVars.moved = false;
		    	}
		}


		////// KONSTAL & CRATOR - konstal is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Konstal") || (storeVars.justClickedChar == "Crator")) && (storeVars.allTalk_konstalIsPreganant == false) && (storeVars.konstalIsPreganant == true) && (cratorSet == konstalSet) && isInConvo == false)
		{
				print ("Konstal_Pregnant_Crator");
				
				//anim.Play("Konstal_Pregnant_Crator");
				
		    	if (Set1.Contains("Konstal_Pregnant_Crator")) 
		    	{
		    		currentConvo = Set1["Konstal_Pregnant_Crator"];
		    		isInConvo = true;
		    		currentConvoName ="Konstal_Pregnant_Crator";
		    		makeConvo("Konstal_Pregnant_Crator", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// KONSTAL & ESTHER - konstal is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Konstal") || (storeVars.justClickedChar == "Esther")) && (storeVars.allTalk_konstalIsPreganant == false) && (storeVars.konstalIsPreganant == true) && (estherSet == konstalSet) && isInConvo == false)
		{
				print ("Konstal_Pregnant_Esther");
				
				//anim.Play("Konstal_Pregnant_Esther");
				
		    	if (Set1.Contains("Konstal_Pregnant_Esther")) 
		    	{
		    		currentConvo = Set1["Konstal_Pregnant_Esther"];
		    		isInConvo = true;
		    		currentConvoName ="Konstal_Pregnant_Esther";
		    		makeConvo("Konstal_Pregnant_Esther", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// ALUNA & ESTHER - Aluna is pregnant - esther is not pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther")) && (storeVars.allTalk_alunaIsPreganant == false) && (storeVars.alunaIsPreganant == true) && (storeVars.estherIsPreganant == false) && (alunaSet == estherSet) && isInConvo == false)
		{
				print ("Aluna_Pregnant_esther");
				
				//anim.Play("Aluna_Pregnant_esther");
				
		    	if (Set1.Contains("Aluna_Pregnant_esther")) 
		    	{
		    		currentConvo = Set1["Aluna_Pregnant_esther"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Pregnant_esther";
		    		makeConvo("Aluna_Pregnant_esther", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// ALUNA & ESTHER - Aluna is pregnant - esther is  pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther")) && (storeVars.allTalk_alunaIsPreganant == false) && (storeVars.alunaIsPreganant == true) && (storeVars.estherIsPreganant == true) && (alunaSet == estherSet) && isInConvo == false)
		{
				print ("Aluna_Pregnant_Esther_Pregnant");
				
				//anim.Play("Aluna_Pregnant_esther");
				
		    	if (Set1.Contains("Aluna_Pregnant_Esther_Pregnant")) 
		    	{
		    		currentConvo = Set1["Aluna_Pregnant_Esther_Pregnant"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Pregnant_Esther_Pregnant";
		    		makeConvo("Aluna_Pregnant_Esther_Pregnant", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// ALUNA & Milky - Aluna is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Milky")) && (storeVars.allTalk_alunaIsPreganant == false) && (storeVars.alunaIsPreganant == true) && (alunaSet == milkySet) && isInConvo == false)
		{
				print ("Aluna_Pregnant_Milky");
				
				//anim.Play("Aluna_Pregnant_Milky");
				
		    	if (Set1.Contains("Aluna_Pregnant_Milky")) 
		    	{
		    		currentConvo = Set1["Aluna_Pregnant_Milky"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Pregnant_Milky";
		    		makeConvo("Aluna_Pregnant_Milky", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// ALUNA & KONSTAL - Aluna is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Konstal")) && (storeVars.allTalk_alunaIsPreganant == false) && (storeVars.alunaIsPreganant == true) && (alunaSet == konstalSet) && isInConvo == false)
		{
				print ("Aluna_Pregnant_Konstal");
				
				//anim.Play("Aluna_Pregnant_Milky");
				
		    	if (Set1.Contains("Aluna_Pregnant_Konstal")) 
		    	{
		    		currentConvo = Set1["Aluna_Pregnant_Konstal"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Pregnant_Konstal";
		    		makeConvo("Aluna_Pregnant_Konstal", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// ALUNA & CRATOR - Aluna is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Crator")) && (storeVars.allTalk_alunaIsPreganant == false) && (storeVars.alunaIsPreganant == true) && (alunaSet == cratorSet) && isInConvo == false)
		{
				print ("Aluna_Pregnant_Crator");
				
				//anim.Play("Aluna_Pregnant_Milky");
				
		    	if (Set1.Contains("Aluna_Pregnant_Crator")) 
		    	{
		    		currentConvo = Set1["Aluna_Pregnant_Crator"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Pregnant_Crator";
		    		makeConvo("Aluna_Pregnant_Crator", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// CRATOR & ALUNA - crator is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Crator")) && (storeVars.allTalk_cratorIsPreganant == false) && (storeVars.cratorIsPreganant == true) && (cratorSet == alunaSet) && isInConvo == false)
		{
				print ("Crator_Pregnant_aluna");
				
				//anim.Play("Aluna_Pregnant_Milky");
				
		    	if (Set1.Contains("Crator_Pregnant_aluna")) 
		    	{
		    		currentConvo = Set1["Crator_Pregnant_aluna"];
		    		isInConvo = true;
		    		currentConvoName ="Crator_Pregnant_aluna";
		    		makeConvo("Crator_Pregnant_aluna", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// CRATOR & KONSTAL - crator is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Crator") || (storeVars.justClickedChar == "Konstal")) && (storeVars.allTalk_cratorIsPreganant == false) && (storeVars.cratorIsPreganant == true) && (cratorSet == konstalSet) && isInConvo == false)
		{
				print ("Crator_Pregnant_konstal");
				
				//anim.Play("Aluna_Pregnant_Milky");
				
		    	if (Set1.Contains("Crator_Pregnant_konstal")) 
		    	{
		    		currentConvo = Set1["Crator_Pregnant_konstal"];
		    		isInConvo = true;
		    		currentConvoName ="Crator_Pregnant_konstal";
		    		makeConvo("Crator_Pregnant_konstal", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// CRATOR & ESTHER - crator is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Crator") || (storeVars.justClickedChar == "Esther") ) && (storeVars.allTalk_cratorIsPreganant == false) && (storeVars.cratorIsPreganant == true) && (cratorSet == estherSet) && isInConvo == false)
		{
				print ("Crator_Pregnant_esther");
				
				//anim.Play("Aluna_Pregnant_Milky");
				
		    	if (Set1.Contains("Crator_Pregnant_esther")) 
		    	{
		    		currentConvo = Set1["Crator_Pregnant_esther"];
		    		isInConvo = true;
		    		currentConvoName ="Crator_Pregnant_esther";
		    		makeConvo("Crator_Pregnant_esther", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// CRATOR & ESTHER - crator is pregnant
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Crator") || (storeVars.justClickedChar == "Esther")) && (storeVars.allTalk_cratorIsPreganant == false) && (storeVars.cratorIsPreganant == true) && (cratorSet == milkySet) && isInConvo == false)
		{
				print ("Crator_Pregnant_milky");
				
				//anim.Play("Crator_Pregnant_milky");
				
		    	if (Set1.Contains("Crator_Pregnant_milky")) 
		    	{
		    		currentConvo = Set1["Crator_Pregnant_milky"];
		    		isInConvo = true;
		    		currentConvoName ="Crator_Pregnant_milky";
		    		makeConvo("Crator_Pregnant_milky", Set1);
		    		storeVars.moved = false;
		    	}
		}




		////// MILKY & CRATOR - ALONE Anywhere
		if ((storeVars.moved == true) &&( (storeVars.justClickedChar == "Milky") || (storeVars.justClickedChar == "Crator")) && (milkySet == cratorSet) && (milkySet != alunaSet) && (milkySet != estherSet) && (milkySet != konstalSet) && isInConvo == false)
		{
				print ("milky_crator_anywhere");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if(Set1.Contains("milky_crator_anywhere"))
		    	{
		    		currentConvo = Set1["milky_crator_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="milky_crator_anywhere";
		    		makeConvo("milky_crator_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// MILKY & KONSTAL - ALONE Anywhere
		if ((storeVars.moved == true) &&( (storeVars.justClickedChar == "Konstal") || (storeVars.justClickedChar == "Milky")) && (milkySet == konstalSet) && (milkySet != alunaSet) && (milkySet != estherSet) && (milkySet != cratorSet) && isInConvo == false)
		{
				print ("konstal_milky_anywhere");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if(Set1.Contains("konstal_milky_anywhere"))
		    	{
		    		currentConvo = Set1["konstal_milky_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="konstal_milky_anywhere";
		    		makeConvo("konstal_milky_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// ALUNA & MILKY - ALONE Anywhere
		if ((storeVars.moved == true) &&( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Milky")) && (alunaSet == milkySet) && (alunaSet != cratorSet) && (alunaSet != estherSet) && (alunaSet != konstalSet) && isInConvo == false)
		{
				print ("aluna_milky_alone_anywhere");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if(Set1.Contains("aluna_milky_alone_anywhere"))
		    	{
		    		currentConvo = Set1["aluna_milky_alone_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_milky_alone_anywhere";
		    		makeConvo("aluna_milky_alone_anywhere", Set1);
		    		storeVars.moved = false;

		    	}
		}

		//ESTHER and MILKY - Alone - Any Scene
		if ((storeVars.moved == true) &&( (storeVars.justClickedChar == "Milky") || (storeVars.justClickedChar == "Esther")) && (milkySet == estherSet) && (milkySet != alunaSet) && (milkySet != cratorSet) && (milkySet != konstalSet) && isInConvo == false)
		{
				print ("esther_milky_alone_anywhere");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if(Set1.Contains("esther_milky_alone_anywhere"))
		    	{
		    		currentConvo = Set1["esther_milky_alone_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="esther_milky_alone_anywhere";
		    		makeConvo("esther_milky_alone_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// ALUNA & ESTHER & MILKY - ALONE Anywhere
		if ((storeVars.moved == true) &&( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther") || (storeVars.justClickedChar == "Milky")) && (alunaSet ==  estherSet) && (alunaSet == milkySet) && (alunaSet != cratorSet) && (alunaSet != konstalSet) && isInConvo == false)
		{
				print ("aluna_esther_milky_alone_anywhere");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if(Set1.Contains("aluna_esther_milky_alone_anywhere"))
		    	{
		    		currentConvo = Set1["aluna_esther_milky_alone_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_esther_milky_alone_anywhere";
		    		makeConvo("aluna_esther_milky_alone_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// KONSTAL & CRATOR - ALONE Anywhere
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Konstal") || (storeVars.justClickedChar == "Crator")) && (konstalSet == cratorSet) && (konstalSet != alunaSet) && (konstalSet != estherSet) && (konstalSet != milkySet) && isInConvo == false)
		{
				print ("crator_konstal_alone_anywhere");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if (Set1.Contains("crator_konstal_alone_anywhere"))
		    	{
		    		currentConvo = Set1["crator_konstal_alone_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="crator_konstal_alone_anywhere";
		    		makeConvo("crator_konstal_alone_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}



		////// ALUNA & ESTHER - ALONE Anywhere
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther")) && (alunaSet == estherSet) && (alunaSet != konstalSet) && (alunaSet != cratorSet) && (alunaSet != milkySet) && isInConvo == false)
		{
				print ("aluna_esther_alone_anywhere");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if ((Set1.Contains("aluna_esther_alone_anywhere")) && (Set1.Contains("aluna_esther_milky_alone_anywhere") == false))
		    	{
		    		currentConvo = Set1["aluna_esther_alone_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_esther_alone_anywhere";
		    		makeConvo("aluna_esther_alone_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// ALUNA & KONSTAL & CRATOR - ALONE Anywhere
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Konstal") || (storeVars.justClickedChar == "Crator")) && (alunaSet == konstalSet) && (alunaSet == cratorSet) && (alunaSet != estherSet) && (alunaSet != milkySet) && isInConvo == false)
		{
				print ("aluna_crator_konstal_alone_anywhere");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if (Set1.Contains("aluna_crator_konstal_alone_anywhere")) 
		    	{
		    		currentConvo = Set1["aluna_crator_konstal_alone_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_crator_konstal_alone_anywhere";
		    		makeConvo("aluna_crator_konstal_alone_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// ESTHER & KONSTAL & CRATOR - alone Anywhere
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Esther") || (storeVars.justClickedChar == "Konstal") || (storeVars.justClickedChar == "Crator")) && (estherSet == konstalSet) && (estherSet == cratorSet) && (estherSet != milkySet) && (estherSet != alunaSet) && isInConvo == false)
		{
				print ("crator_esther_konstal_alone_anywhere");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if (Set1.Contains("crator_esther_konstal_alone_anywhere")) 
		    	{
		    		currentConvo = Set1["crator_esther_konstal_alone_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="crator_esther_konstal_alone_anywhere";
		    		makeConvo("crator_esther_konstal_alone_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}


		////// ESTHER & KONSTAL- maybeAluna Anywhere
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Esther") || (storeVars.justClickedChar == "Konstal")) && (estherSet == konstalSet) && (estherSet != cratorSet) && (estherSet != milkySet) && (isInConvo == false))
		{
				print ("esther_konstal_maybeAluna_anywhere");
				
				//anim.Play("esther_konstal_maybeAluna_anywhere");
				
		    	if (Set1.Contains("esther_konstal_maybeAluna_anywhere")) 
		    	{
		    		currentConvo = Set1["esther_konstal_maybeAluna_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="esther_konstal_maybeAluna_anywhere";
		    		makeConvo("esther_konstal_maybeAluna_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}

		////// ESTHER & KONSTAL- maybeAluna Anywhere
		if ((storeVars.moved == true) && ((storeVars.justClickedChar == "Esther") || (storeVars.justClickedChar == "Crator")) && (estherSet == cratorSet) && (estherSet != konstalSet) && (estherSet != milkySet) && isInConvo == false)
		{
				print ("esther_crator_maybeAluna_anywhere");
				
				//anim.Play("esther_crator_maybeAluna_anywhere");
				
		    	if (Set1.Contains("esther_crator_maybeAluna_anywhere")) 
		    	{
		    		currentConvo = Set1["esther_crator_maybeAluna_anywhere"];
		    		isInConvo = true;
		    		currentConvoName ="esther_crator_maybeAluna_anywhere";
		    		makeConvo("esther_crator_maybeAluna_anywhere", Set1);
		    		storeVars.moved = false;
		    	}
		}



	

		////////////////////////////////////////
		///////////  CHECK THE TENT
		////////////////////////////////////////





		////////////////////////////////////////
		///////////  CHECK THE WOODS
		////////////////////////////////////////

			if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Milky")) && (alunaSet == "inWoods") && (milkySet == "inWoods") && isInConvo == false)
			{
				print ("milky_aluna_woods");
				
				//anim.Play("scene1_milky_aluna_woods");
				
		    	if(Set1.Contains("aluna_milky_woods"))
		    	{
		    		currentConvo = Set1["aluna_milky_woods"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_milky_woods";
		    		makeConvo("aluna_milky_woods", Set1);
		    		storeVars.moved = false;
		    	
		    	}


			}



			if ((storeVars.moved == true) &&  ( (storeVars.justClickedChar == "Aluna"))&& (alunaSet == "inWoods") && storeVars.startPart2 == true)
			{
				print ("aluna_woods_part2");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("aluna_woods_part2"))
		    	{
		    		currentConvo = Set1["aluna_woods_part2"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_woods_part2";
		    		makeConvo("aluna_woods_part2", Set1);
		    		storeVars.alunaLookedAtFootprints = true;
		    		storeVars.moved = false;
		    	}

			}

		if ((storeVars.moved == true) && (storeVars.alunaKnowsMilkyFootprints == false) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Crator") ) && (storeVars.startPart2 == true)&& (cratorSet == "inWoods") && (alunaSet == "inWoods") &&  storeVars.alunaLookedAtFootprints == true)
			{
				print ("aluna_crator_woods_part2_talk1");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("aluna_crator_woods_part2_talk1"))
		    	{
		    		currentConvo = Set1["aluna_crator_woods_part2_talk1"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_crator_woods_part2_talk1";
		    		makeConvo("aluna_crator_woods_part2_talk1", Set1);
		    		storeVars.alunaKnowsMilkyFootprints = true;
		    		storeVars.moved = false;
		    	}

			}


		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Milky"))&& (storeVars.startPart2 == true) && (milkySet == "inWoods") && (alunaSet == "inWoods") &&  (storeVars.alunaLookedAtFootprints == true) )
			{
				print ("aluna_milky_woods_part2");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("aluna_milky_woods_part2"))
		    	{
		    		currentConvo = Set1["aluna_milky_woods_part2"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_milky_woods_part2";
		    		makeConvo("aluna_milky_woods_part2", Set1);
		    		storeVars.milkyLookedAtFootprints = true;
		    		storeVars.alunaKnowsMilkyFootprints= true;
		    		storeVars.moved = false;
		    	}

			}
			
			
		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Konstal")) && (storeVars.startPart2 == true)&& (konstalSet == "inWoods") && (alunaSet == "inWoods") &&  (storeVars.alunaKnowsMilkyFootprints == true))
			{
				print ("aluna_konstal_woods_part2");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("aluna_konstal_woods_part2"))
		    	{
		    		currentConvo = Set1["aluna_konstal_woods_part2"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_konstal_woods_part2";
		    		makeConvo("aluna_konstal_woods_part2", Set1);
		    		storeVars.moved = false;
		    	}

			}


		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther"))&& (storeVars.startPart2 == true) && (estherSet == "inWoods") && (alunaSet == "inWoods") &&  storeVars.alunaKnowsMilkyFootprints == true)
			{
				print ("aluna_esther_woods_part2");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("aluna_esther_woods_part2"))
		    	{
		    		currentConvo = Set1["aluna_esther_woods_part2"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_esther_woods_part2";
		    		makeConvo("aluna_esther_woods_part2", Set1);
		    		storeVars.estherLookedAtFootprints = true;
		    		storeVars.moved = false;
		    	}

			}


		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Crator")) && (storeVars.startPart2 == true)&& (cratorSet == "inWoods") && (alunaSet == "inWoods") &&  storeVars.alunaKnowsMilkyFootprints == true)
			{
				print ("aluna_crator_woods_part2");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("aluna_crator_woods_part2"))
		    	{
		    		currentConvo = Set1["aluna_crator_woods_part2"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_crator_woods_part2";
		    		makeConvo("aluna_crator_woods_part2", Set1);
		    		storeVars.cratorLookedAtFootprints = true;
		    		storeVars.moved = false;
		    	}

			}


		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Crator") || (storeVars.justClickedChar == "Konstal")) && (storeVars.startPart2 == true)&& (cratorSet == "inWoods") && (konstalSet == "inWoods") &&  storeVars.cratorLookedAtFootprints == true)
			{
				print ("crator_konstal_woods_part2");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("crator_konstal_woods_part2"))
		    	{
		    		currentConvo = Set1["crator_konstal_woods_part2"];
		    		isInConvo = true;
		    		currentConvoName ="crator_konstal_woods_part2";
		    		makeConvo("crator_konstal_woods_part2", Set1);
		    		storeVars.konstalLookedAtFootprints = true;
		    		storeVars.moved = false;
		    	}

			}
			
			
					
			
			
		////////////////////////////////////////
		///////////  CHECK THE Hill
		////////////////////////////////////////
			



		if ( (storeVars.moved == true) && (storeVars.justClickedChar == "Aluna")&& (storeVars.startPart2 == true) && (alunaSet == "inHill") && (konstalSet != "inHill")  && (estherSet != "inHill") && (milkySet != "inHill") && (cratorSet != "inHill") &&  (storeVars.alunaShowedAllFootprints == false) )
			{
				print ("aluna_hill_part2_beforeShowingFootprints");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("aluna_hill_part2_beforeShowingFootprints"))
		    	{
		    		currentConvo = Set1["aluna_hill_part2_beforeShowingFootprints"];
		    		isInConvo = true;
		    		currentConvoName ="aluna_hill_part2_beforeShowingFootprints";
		    		makeConvo("aluna_hill_part2_beforeShowingFootprints", Set1);
		    		storeVars.moved = false;
		    	}

			}


		if ((storeVars.moved == true) && ( (storeVars.justClickedChar == "Aluna"))&& (storeVars.startPart2 == true) && (alunaSet == "inHill") && (konstalSet != "inHill")  && (estherSet != "inHill") && (milkySet != "inHill") && (cratorSet != "inHill") &&  (storeVars.alunaShowedAllFootprints == true) )
			{
				print ("aluna_hill_part2");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("aluna_hill_part2"))
		    	{
		    		print ("aluna_hill_PREG CUTSCENE");
		    		storeVars.alunaIsPreganant = true;
		    		storeVars.currentCutscene = "alunaPreg";
		    		storeVars.inCutscene = true;
		    		Set1.Remove("aluna_hill_part2");
		    	}

			}
			
			
		if ((storeVars.moved == true) && ((storeVars.justClickedChar == "Esther"))&& (storeVars.startPart2 == true) && (estherSet == "inHill") && (konstalSet != "inHill")  && (alunaSet != "inHill") && (milkySet != "inHill") && (cratorSet != "inHill") &&  (storeVars.estherLookedAtFootprints == true) )
			{
				print ("esther_hill_part2");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("esther_hill_part2"))
		    	{
		    		print ("esther_hill_PREG CUTSCENE");
		    		storeVars.estherIsPreganant = true;
		    		storeVars.currentCutscene = "estherPreg";
		    		storeVars.inCutscene = true;
		    		Set1.Remove("esther_hill_part2");
		    	}

			}

		if ((storeVars.moved == true) && ((storeVars.justClickedChar == "Crator"))&& (storeVars.startPart2 == true) && (cratorSet == "inHill") && (konstalSet != "inHill")  && (alunaSet != "inHill") && (milkySet != "inHill") && (estherSet != "inHill") &&  (storeVars.cratorLookedAtFootprints == true) )
			{
				print ("crator_hill_part2");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("crator_hill_part2"))
		    	{
		    		print ("crator_hill_PREG CUTSCENE");
		    		storeVars.cratorIsPreganant = true;
		    		storeVars.currentCutscene = "cratorPreg";
		    		storeVars.inCutscene = true;
		    		Set1.Remove("crator_hill_part2");
		    	}

			}	

		if ((storeVars.moved == true) && ((storeVars.justClickedChar == "Konstal"))&& (konstalSet == "inHill") && (cratorSet != "inHill")  && (alunaSet != "inHill") && (milkySet != "inHill") && (estherSet != "inHill") &&  (storeVars.konstalLookedAtFootprints == true) )
			{

				
		    	if(Set1.Contains("konstal_hill_part2"))
		    	{
		    		print ("konstal_hill_PREG CUTSCENE");
		    		storeVars.konstalIsPreganant = true;
		    		storeVars.currentCutscene = "konstalPreg";
		    		storeVars.inCutscene = true;
		    		Set1.Remove("konstal_hill_part2");
		    	}

			}
			
			
		if ((storeVars.moved == true) && (storeVars.allTalk_konstalIsPreganant == true || storeVars.allTalk_cratorIsPreganant == true) && (storeVars.startPart2 == true) && (konstalSet == "inHill") && (cratorSet == "inHill")  && (alunaSet == "inHill") && (milkySet == "inHill") && (estherSet == "inHill") )
			{
				print ("Hill_SeeMonster");
				
				//anim.Play("scene1_aluna_esther_woods");
				
		    	if(Set1.Contains("Hill_SeeMonster"))
		    	{
		    		
		    		currentConvo = Set1["Hill_SeeMonster"];
		    		isInConvo = true;
		    		currentConvoName ="Hill_SeeMonster";
		    		makeConvo("Hill_SeeMonster", Set1);
		    		storeVars.SetNum = 2;
		    		
		    	}

			}
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	}
	
	
	
	
	if (storeVars.SetNum == 2)
	{

		////////////////////////////////////////
		///////////  CHECK THE CAMP
		////////////////////////////////////////
		
		if ((storeVars.moved == true) &&  (storeVars.regrouped == false) && (storeVars.konstalIsPreganant == true) && (konstalSet == "inCamp") && (cratorSet == "inCamp")  && (alunaSet == "inCamp") && (milkySet == "inCamp") && (estherSet == "inCamp") )
			{
				print ("Regroup_KonstalIsPregnant");
				
				//anim.Play("Regroup_KonstalIsPregnant");
				
		    	if(Set2.Contains("Regroup_KonstalIsPregnant"))
		    	{
		    		currentConvo = Set2["Regroup_KonstalIsPregnant"];
		    		isInConvo = true;
		    		currentConvoName ="Regroup_KonstalIsPregnant";
		    		makeConvo("Regroup_KonstalIsPregnant", Set2);
		    		storeVars.regrouped = true;	
		    		storeVars.moved = false;
		    	}

			}


		if ( (storeVars.moved == true) && (storeVars.regrouped == false) && (storeVars.konstalIsPreganant == false)  && (konstalSet == "inCamp") && (cratorSet == "inCamp")  && (alunaSet == "inCamp") && (milkySet == "inCamp") && (estherSet == "inCamp") )
			{
				print ("Regroup_KonstalIsNotPregnant");
				
				//anim.Play("Regroup_KonstalIsNotPregnant");
				
		    	if(Set2.Contains("Regroup_KonstalIsNotPregnant"))
		    	{
		    		currentConvo = Set2["Regroup_KonstalIsNotPregnant"];
		    		isInConvo = true;
		    		currentConvoName ="Regroup_KonstalIsNotPregnant";
		    		makeConvo("Regroup_KonstalIsNotPregnant", Set2);
		    		storeVars.regrouped = true;	
		    		storeVars.moved = false;
		    	}

			}
			
			

		////////////////////////////////////////
		///////////  CHECK  ANYWERE
		////////////////////////////////////////

		if ( (storeVars.moved == true) && ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Konstal")) &&(storeVars.regrouped == true) && (decoyProgress == 0)  && (alunaSet != "inHill") && (alunaSet == konstalSet) )
			{
				print ("Aluna_Konstal_beforeAlunaAndMilky_pillow0");
				
				//anim.Play("Aluna_Konstal_beforeAlunaAndMilky_pillow0");
				
		    	if(Set2.Contains("Aluna_Konstal_beforeAlunaAndMilky_pillow0"))
		    	{
		    		currentConvo = Set2["Aluna_Konstal_beforeAlunaAndMilky_pillow0"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Konstal_beforeAlunaAndMilky_pillow0";
		    		makeConvo("Aluna_Konstal_beforeAlunaAndMilky_pillow0", Set2);
		    		storeVars.moved = false;
		    	}

			}
		
		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Milky")) && (storeVars.regrouped == true) && (decoyProgress == 0)  && (alunaSet != "inHill") && (alunaSet == milkySet) )
			{
				print ("Aluna_Milky_pillow");
				
				//anim.Play("Aluna_Milky_pillow");
				
		    	if(Set2.Contains("Aluna_Milky_pillow"))
		    	{
		    		currentConvo = Set2["Aluna_Milky_pillow"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Milky_pillow";
		    		makeConvo("Aluna_Milky_pillow", Set2);
		    		decoyProgress = 1;	
		    		storeVars.moved = false;
		    	}
			}
		
	
		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Konstal")) && (storeVars.regrouped == true) && (decoyProgress == 1)  && (alunaSet != "inHill") && (alunaSet == konstalSet) )
			{
				print ("Aluna_Konstal_pillow1");
				
				//anim.Play("Aluna_Konstal_pillow1");
				
		    	if(Set2.Contains("Aluna_Konstal_pillow1"))
		    	{
		    		currentConvo = Set2["Aluna_Konstal_pillow1"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Konstal_pillow1";
		    		makeConvo("Aluna_Konstal_pillow1", Set2);
		    		decoyProgress = 2;
		    		storeVars.moved = false;
		    	}
			}
			
		
		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Crator")) && (storeVars.regrouped == true) && (decoyProgress == 2)  && (alunaSet != "inHill") && (alunaSet == cratorSet) )
			{
				print ("Aluna_Crator_pillow");
				
				//anim.Play("Aluna_Konstal_pillow1");
				
		    	if(Set2.Contains("Aluna_Crator_pillow"))
		    	{
		    		currentConvo = Set2["Aluna_Crator_pillow"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Crator_pillow";
		    		makeConvo("Aluna_Crator_pillow", Set2);
		    		decoyProgress = 3;
		    		storeVars.moved = false;
		    	}
			}
		
		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Milky")) && (storeVars.regrouped == true) && (decoyProgress == 3)  && (alunaSet != "inHill") && (alunaSet == milkySet) )
			{
				print ("Aluna_Milky_pillow2");
				
				//anim.Play("Aluna_Konstal_pillow1");
				
		    	if(Set2.Contains("Aluna_Milky_pillow2"))
		    	{
		    		currentConvo = Set2["Aluna_Milky_pillow2"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Milky_pillow2";
		    		makeConvo("Aluna_Milky_pillow2", Set2);
		    		decoyProgress = 4;
		    		storeVars.moved = false;
		    	}
			}
			
			
		
		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Crator") || (storeVars.justClickedChar == "Milky")) && (storeVars.regrouped == true) && (decoyProgress == 4)  && (milkySet != "inHill") && (milkySet == cratorSet) )
			{
				print ("Crator_Milky_pillow");
				
				//anim.Play("Crator_Milky_pillow");
				
		    	if(Set2.Contains("Crator_Milky_pillow"))
		    	{
		    		currentConvo = Set2["Crator_Milky_pillow"];
		    		isInConvo = true;
		    		currentConvoName ="Crator_Milky_pillow";
		    		makeConvo("Crator_Milky_pillow", Set2);	
		    		decoyProgress = 5;
		    		storeVars.moved = false;
		    	}
			}
			
		
		if ((storeVars.moved == true) && ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Milky")) &&  (storeVars.regrouped == true) && (decoyProgress == 5)  && (alunaSet != "inHill") && (alunaSet == milkySet) )
			{
				print ("Aluna_Milky_pillow3");
				
				//anim.Play("Aluna_Milky_pillow3");
				
		    	if(Set2.Contains("Aluna_Milky_pillow3"))
		    	{
		    		currentConvo = Set2["Aluna_Milky_pillow3"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Milky_pillow3";
		    		makeConvo("Aluna_Milky_pillow3", Set2);	
		    		decoyProgress = 6;
		    		storeVars.moved = false;
		    	}
			}
		
		
		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Konstal")) && (storeVars.regrouped == true) && (decoyProgress == 6)  && (alunaSet != "inHill") && (alunaSet == konstalSet) )
			{
				print ("Aluna_Konstal_pillow2");
				
				//anim.Play("Aluna_Konstal_pillow2");
				
		    	if(Set2.Contains("Aluna_Konstal_pillow2"))
		    	{
		    		currentConvo = Set2["Aluna_Konstal_pillow2"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Konstal_pillow2";
		    		makeConvo("Aluna_Konstal_pillow2", Set2);	
		    		decoyProgress = 7;
		    		storeVars.moved = false;
		    	}
			}
		

		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther")) && (storeVars.regrouped == true) && (decoyProgress == 7)  && (alunaSet != "inHill") && (alunaSet == estherSet) )
			{
				print ("Aluna_Esther_pillow");
				
				//anim.Play("Aluna_Esther_pillow");
				
		    	if(Set2.Contains("Aluna_Esther_pillow"))
		    	{
		    		currentConvo = Set2["Aluna_Esther_pillow"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Esther_pillow";
		    		makeConvo("Aluna_Esther_pillow", Set2);	
		    		decoyProgress = 8;
		    		storeVars.moved = false;
		    	}
			}
			
		
		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Crator")) && (storeVars.regrouped == true) && (weaponProgress == 0)  && (alunaSet != "inHill") && (alunaSet == cratorSet) )
			{
				print ("Aluna_Crator_weapon1");
				
				//anim.Play("Aluna_Esther_pillow");
				
		    	if(Set2.Contains("Aluna_Crator_weapon1"))
		    	{
		    		currentConvo = Set2["Aluna_Crator_weapon1"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Crator_weapon1";
		    		makeConvo("Aluna_Crator_weapon1", Set2);	
		    		storeVars.moved = false;
		    	}
			}	
		
		if ((storeVars.moved == true) && ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther")) &&  (storeVars.regrouped == true) && (weaponProgress == 0)  && (alunaSet != "inHill") && (alunaSet == estherSet) )
			{
				print ("Aluna_Esther_weapon1");
				
				//anim.Play("Aluna_Esther_weapon1");
				
		    	if(Set2.Contains("Aluna_Esther_weapon1"))
		    	{
		    		currentConvo = Set2["Aluna_Esther_weapon1"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Esther_weapon1";
		    		makeConvo("Aluna_Esther_weapon1", Set2);	
		    		weaponProgress = 1;
		    		storeVars.moved = false;
		    	}
			}
			
		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Konstal")) && (storeVars.regrouped == true) && (weaponProgress == 0)  && (alunaSet != "inHill") && (alunaSet == konstalSet) )
			{
				print ("Aluna_Konstal_weapon");
				
				//anim.Play("Aluna_Konstal_weapon");
				
		    	if(Set2.Contains("Aluna_Konstal_weapon"))
		    	{
		    		currentConvo = Set2["Aluna_Konstal_weapon"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Konstal_weapon";
		    		makeConvo("Aluna_Konstal_weapon", Set2);
		    		storeVars.moved = false;	
		    	}
			}

		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Milky")) && (storeVars.regrouped == true) && (weaponProgress == 1)  && (alunaSet != "inHill") && (alunaSet == milkySet) )
			{
				print ("Aluna_Milky_weapon");
				
				//anim.Play("Aluna_Milky_weapon");
				
		    	if(Set2.Contains("Aluna_Milky_weapon"))
		    	{
		    		currentConvo = Set2["Aluna_Milky_weapon"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Milky_weapon";
		    		makeConvo("Aluna_Milky_weapon", Set2);
		    		storeVars.moved = false;	
		    	}
			}

		if ((storeVars.moved == true) &&  ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Crator")) && (storeVars.regrouped == true) && (weaponProgress == 1)  && (alunaSet != "inHill") && (alunaSet == cratorSet) )
			{
				print ("Aluna_Crator_weapon2");
				
				//anim.Play("Aluna_Milky_weapon");
				
		    	if(Set2.Contains("Aluna_Crator_weapon2"))
		    	{
		    		currentConvo = Set2["Aluna_Crator_weapon2"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Crator_weapon2";
		    		makeConvo("Aluna_Crator_weapon2", Set2);
		    		storeVars.moved = false;	
		    		weaponProgress = 2;
		    	}
			}
			

		if ( (storeVars.moved == true) && ((storeVars.justClickedChar == "Aluna")) && (storeVars.regrouped == true) && (weaponProgress == 2)  && (alunaSet == "inHill") )
			{
				print ("Aluna_weapon_OnHill");
				
				//anim.Play("Aluna_weapon_OnHill");
				
		    	if(Set2.Contains("Aluna_weapon_OnHill"))
		    	{
		    		currentConvo = Set2["Aluna_weapon_OnHill"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_weapon_OnHill";
		    		makeConvo("Aluna_weapon_OnHill", Set2);	
		    		weaponProgress = 3;
		    		storeVars.moved = false;
		    	}
			}
			

		if ((storeVars.moved == true) && ((storeVars.justClickedChar == "Aluna") || (storeVars.justClickedChar == "Esther")) &&  (storeVars.regrouped == true) && (weaponProgress == 3)  && (alunaSet != "inHill")&& (alunaSet == estherSet) )
			{
				print ("Aluna_Esther_Weapon2");
				
				//anim.Play("Aluna_weapon_OnHill");
				
		    	if(Set2.Contains("Aluna_Esther_Weapon2"))
		    	{
		    		currentConvo = Set2["Aluna_Esther_Weapon2"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_Esther_Weapon2";
		    		makeConvo("Aluna_Esther_Weapon2", Set2);	
		    		weaponProgress = 3;
		    		storeVars.moved = false;
		    	}
			}
		
		if ((storeVars.moved == true) && (storeVars.justClickedChar == "Aluna") &&  (storeVars.regrouped == true) && (weaponProgress == 4) && (decoyProgress == 8) )
			{
				print ("Aluna_weapon_decoy_Done");
				
				//anim.Play("Aluna_weapon_Done");
				
		    	if(Set2.Contains("Aluna_weapon_decoy_Done"))
		    	{
		    		currentConvo = Set2["Aluna_weapon_decoy_Done"];
		    		isInConvo = true;
		    		currentConvoName ="Aluna_weapon_decoy_Done";
		    		makeConvo("Aluna_weapon_decoy_Done", Set2);	
		    		storeVars.moved = false;
		    	}
			}
		
		
		
		
		
			
		////////////////////////////////////////
		///////////  CHECK THE TENT
		////////////////////////////////////////




		////////////////////////////////////////
		///////////  CHECK THE WOODS
		////////////////////////////////////////

		
			
			
			
		////////////////////////////////////////
		///////////  CHECK THE Hill
		////////////////////////////////////////

		if ((storeVars.moved == true) &&  (storeVars.regrouped == true) && (weaponProgress >= 4) && (decoyProgress >= 8) && (alunaSet == "inHill") && (cratorSet == "inHill")&& (estherSet == "inHill")&& (milkySet == "inHill") && (konstalSet == "inHill"))
			{
				print ("All_Done");
				
				//anim.Play("All_Done");
				
		    	if(Set2.Contains("All_Done"))
		    	{
		    		currentConvo = Set2["All_Done"];
		    		isInConvo = true;
		    		currentConvoName ="All_Done";
		    		makeConvo("All_Done", Set2);	
		    		storeVars.moved = false;
		    	}
			}





		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	}
	


} // end to isMoved check statement

//Continue the current conversation
if (isInConvo == true)
{
	makeConvo(currentConvoName, currentSet);
}



if(isInConvo == false)
{
		clickHere.GetComponent.<Collider2D>().enabled=false;
}
else
{
		clickHere.GetComponent.<Collider2D>().enabled=true;
}

//print("end update");
}







////////////////////////////////////////
///////////  Functions
////////////////////////////////////////




function makeConvo(stringName,hashtableName)
{
	if (mouseDownNumber == 0)
	{
		if (isInConvo == true)
		{
			if (mouseDownNumber == currentConvo.length)
			{
				//THIS IS WHERE CONVO ENDS!!!1
				print("Hit mouseDownNumber == currentConvo.length");
				gamestate.characterSpeaking = "none";
				SpeakingChar1.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				SpeakingChar2.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				//isInConvo = false;
				//mouseDownNumber = 0;
				isInConvo = false;
				mouseDownNumber = 0;
				Debug.Log(hashtableName, stringName);
				hashtableName.Remove(stringName);
				storeVars.moved = false;
			
			}
			else
			{
				
				//print (currentConvo);
				chara = currentConvo[mouseDownNumber][0];
		        dialoque = currentConvo[mouseDownNumber][1];
		        emotion = currentConvo[mouseDownNumber][2];
		 	    scenes.makeCharacterSpeak( chara, dialoque, emotion);
		 	    mouseDownNumber ++;
		 	    //print("this should be first");
	 	    }
		}
	
	}
	else if(storeVars.clicked == true)
	{
		
		if (isInConvo == true)
		{
			if (currentConvo == null)
			{
				print ("currentCovo equals null!"); //NEWLY ADDED
			}
			if ((currentConvo == null) || (mouseDownNumber == currentConvo.length)) //END THE CONVERSATION  //'(currentConvo == null)' NEWLY ADDED
			{
				gamestate.characterSpeaking = "none";
				SpeakingChar1.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				SpeakingChar2.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				makeScreensLight();
				
				isInConvo = false;
				mouseDownNumber = 0;
				hashtableName.Remove(stringName);
				storeVars.moved = false;
				scenes.selectedChar = SpeakingChar1; //NEWLY ADDED
				
				if ( stringName == "Hill_SeeMonster")
				{
					print ("Hit Here");
					Application.LoadLevel ("DiscoveryScene");
				}
				if ( stringName == "All_Done")
				{
					print ("Hit Here");
					Application.LoadLevel ("MainScene_Part3");
				}
			
			}
			else
			{
				//print (currentConvo);
				chara = currentConvo[mouseDownNumber][0];
		        dialoque = currentConvo[mouseDownNumber][1];
		        emotion = currentConvo[mouseDownNumber][2];
		 	    scenes.makeCharacterSpeak( chara , dialoque, emotion);
		 	    mouseDownNumber ++;
	 	    }
		}
		storeVars.clicked = false;
	}

}

function makeScreensLight(){
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, 0);


}