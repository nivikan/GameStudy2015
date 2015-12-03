//#pragma strict

var DarkenScene1 : GameObject;
var DarkenScene2 : GameObject;
var DarkenScene3 : GameObject;
var DarkenScene4 : GameObject;

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
var aluna_milky_woods = false;
var scene2: Array;
var esther_milky_hill = false;
var scene3: Array;
var aluna_esther_hill = false;


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



	line = 0;
	//create a temporary replicated hashtable
	//Set1 = new Hashtable();


	//create a different dialoque sets and add them to the hashtable


	Set1 = new Hashtable();
	
////// MILKY & KONSTAL - ALONE Anywhere

	scene = new Array();
	scene.Push(["Konstal", "Hey- I have a bone to pick with you","angry"]);
	scene.Push(["Milky", "If it’s about the baby, I’m as confused as the next person.", "sad"]);
	scene.Push(["Konstal", "Really? Crator seems pretty concerned about you.","angry"]);
	scene.Push(["Milky", "Crator would be concerned about anyone.", "normal"]);
	scene.Push(["Konstal", "He seems to want to keep the baby.", "normal"]);
	scene.Push(["Milky", "He’s just concerned about it. It doesn’t mean he’s concerned about me specifically.","sigh"]);
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
	scene.Push(["Milky", "Sure, um. We didn’t do anything these last few weeks… did we?", "sad"]);
	scene.Push(["Milky", "I really don’t remember how I could have gotten pregnant.", "sad"]);
	scene.Push(["Crator", "No- We haven’t slept together.","surprise"]);
	scene.Push(["Milky", "Oh! Ok- thank you.","normal"]);
	scene.Push(["Crator", "I need to ask you something to. ", "normal"]);
	scene.Push(["Crator", "Are you going to keep the baby?","sad"]);
	scene.Push(["Milky", "I- I don’t know. At this point, I don’t even know where it came from.", "sad"]);
	scene.Push(["Crator", "But you’ll keep it no matter what, right? It’s a living thing and your baby.","angry"]);
	scene.Push(["Milky", "I don’t know.", "sad"]);
	scene.Push(["Crator", " I’ll help you take care of it. I’ll -","angry"]);
	scene.Push(["Milky", "CRATOR!", "angry"]);
	scene.Push(["Crator", "-...","surprise"]);
	scene.Push(["Milky", "Really... I’ll decide for myself. I just need some time alone right now.", "sad"]);
	scene.Push(["Crator", "...sure","sad"]);
	Set1.Add("milky_crator_anywhere",scene);


//ALUNA & MILKY - Alone - Any Scene
	scene = new Array();
	scene.Push(["Aluna", "So you really don’t remember what happened?", "normal"]);
	scene.Push(["Milky", "Weird, huh?", "sad"]);
	scene.Push(["Aluna", "I wouldn’t say that.", "sad"]);
	scene.Push(["Milky", "You know what did it?", "surprise"]);
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
	scene.Push(["Esther", "If you ask me, there’s some foul play going on. You better stay away from the boys.", "angry"]);
	scene.Push(["Milky", "You- you think they might have…? Without me knowing? ", "sad"]);
	scene.Push(["Esther", "There’s a high possibility.", "normal"]);
	scene.Push(["Milky", "I- I don’t know. Konstal and Crator are good people.", "sad"]);
	scene.Push(["Esther", "Maybe. But they can just as easily be terrible people.", "angry"]);
	scene.Push(["Esther", "I just don’t want you to be hurt again. ", "normal"]);
	scene.Push(["Esther", "Just stay away from them, ok? At least till we get all this figured out.", "normal"]);
	scene.Push(["Milky", "… (I really don’t think that’s the case).", "sad"]);
	Set1.Add("esther_milky_alone_anywhere",scene);

//ESTHER, ALUNA, and MILKY - Alone - Any Scene
	scene = new Array();
	scene.Push(["Esther", "How did you even get pregnant? Was it Crator?", "normal"]);
	scene.Push(["Milky", "No.", "normal"]);
	scene.Push(["Esther", "I know you said it was a freak anomaly but that’s a little hard to swallow.", "sigh"]);
	scene.Push(["Milky", "I don’t even know what happened. I just noticed I was pregnant.", "sad"]);
	scene.Push(["Esther", "You didn’t have sex with anyone either…", "normal"]);
	scene.Push(["Milky", "yeah…", "sad"]);
	scene.Push(["Esther", "c’mon- that’s way too farfetched.", "angry"]);
	scene.Push(["Aluna", "weirder stuff have happened. ", "normal"]);
	scene.Push(["Esther", "… ", "sad"]);
	Set1.Add("aluna_esther_milky_alone_anywhere",scene);


//KONSTAL and CRATOR - Alone - Any Scene
	scene = new Array();
	scene.Push(["Konstal", "So it is true then. Milky got herself knocked up.", "angry"]);
	scene.Push(["Crator", "It’s not as simple as that. She said she just turned up pregnant. She said she doesn’t know what happened. ", "normal"]);
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
	scene.Push(["Esther", "We told you… She just turned up pregnant. We need to find out how it happened.", "normal"]);
	scene.Push(["Konstal", "Right…", "normal"]);
	scene.Push(["Crator", "We need to split our rations.", "normal"]);
	scene.Push(["Milky", "You mean for the baby?", "normal"]);
	scene.Push(["Esther", "I thought we were going to find a way to abort it.", "surprise"]);
	scene.Push(["Crator", "Abort it? I thought we were keeping it?", "angry"]);
	scene.Push(["Esther", "Well, we can’t really feed it, can we? And Milky didn’t even want it in the first place.", "normal"]);
	scene.Push(["Crator", "But that doesn’t mean she wants it aborted.", "normal"]);
	scene.Push(["Konstal", "I think Esther’s right. We don’t have enough food to feed it.", "normal"]);
	scene.Push(["Crator", "Shut Up. Let’s just ask Milky.", "normal"]);
	scene.Push(["Milky", "I-I don’t know. I don’t really want it but I feel bad just killing it.", "normal"]);
	scene.Push(["Konstal", "It’s gonna feel even worse if it comes out here and we don’t even have a bed for it.", "normal"]);
	scene.Push(["Aluna", "I’m hungry. Let’s just eat dinner.", "normal"]);
	scene.Push(["Konstal", "Why did you think it was a good idea to get pregnant anyway, Milky?", "normal"]);
	scene.Push(["Esther", "Watch it- she didn’t want to get pregnant. It just happened.", "normal"]);
	scene.Push(["Konstal", "Right. “It just happened.” How convenient.", "normal"]);
	Set1.Add("aluna_crator_esther_konstal_milky_inCamp",scene);

//ESTHER and ALUNA - Alone - Anywhere (after "aluna_esther_milky_alone_anywhere" happened)
	scene = new Array();
	scene.Push(["Esther", " Milky was definitely forced. Did you see the guys? They look pretty guilty to me.", "angry"]);
	scene.Push(["Aluna", " …", "normal"]);
	scene.Push(["Esther", "She doesn’t remember anything. Obviously they used some sort of drug on her.", "normal"]);
	scene.Push(["Aluna", "Where would they even find drugs here?", "normal"]);
	scene.Push(["Esther", "I don’t know! MAybe they did it while she was asleep?! All I know is that some boy here can’t be trusted. ", "angry"]);
	scene.Push(["Aluna", "We’re being watched. ", "normal"]);
	scene.Push(["Esther", "Aluna, what the heck?", "surprise"]);
	scene.Push(["Aluna", "Sometimes, I feel like we’re being watched. Maybe everyone is telling the truth.", "normal"]);
	scene.Push(["Esther", "… You’re not making sense. (I knew I shouldn’t have talked to Aluna about this…)", "sigh"]);
	Set1.Add("aluna_esther_alone_anywhere",scene);
	
//ALUNA and KONSTAL and CRATOR - Alone - Anywhere
	scene = new Array();
	scene.Push(["Aluna", "Guys-", "normal"]);
	scene.Push(["Konstal", "Is this about Milky? We don’t know what happened", "angry"]);
	scene.Push(["Aluna", "No, well, yes. I just wanted to ask if you guys saw anything. ", "normal"]);
	scene.Push(["Crator", "Nothing out of the usual", "normal"]);
	scene.Push(["Konstal", "Nothing at all.", "normal"]);
	scene.Push(["Aluna", "It’s just, Do you sometimes feel like we’re not alone here?", "normal"]);
	scene.Push(["Konstal", "If you’re trying to help Milky sell her “I don’t who done it” story, it’s not going to work.", "normal"]);
	Set1.Add("aluna_crator_konstal_alone_anywhere",scene);
	
//ESTHER and KONSTAl and CRATOR - Alone - Anywhere
	scene = new Array();
	scene.Push(["Esther", "Hey guys. So Milky really doesn’t know how she got pregnant.", "normal"]);
	scene.Push(["Konstal", "Yeah, perfectly convenient for her.", "normal"]);
	scene.Push(["Esther", "Hm, yeah. ", "normal"]);
	scene.Push(["Esther", "Say, you guys wouldn’t happen to know what happened, would you?", "normal"]);
	scene.Push(["Konstal", "Why would we know? She doesn’t even know herself.", "normal"]);
	scene.Push(["Esther", "I don’t know, there’s a lot of ways a girl can not know what’s been done to her and only one way to get pregnant, y’know? ", "normal"]);
	scene.Push(["Konstal", "What are you getting at?", "mad"]);
	scene.Push(["Crator", "Esther, don’t worry. Konstal and I haven’t done anything. We’re just as clueless as anyone here.", "normal"]);
	scene.Push(["Konstal", "Why would we even want to get that dumb slut pregnant anyway?", "normal"]);
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
	scene.Push(["Esther", "You seem pretty defensive there. You sure you didn’t have anything to do with it? ", "smirk"]);
	scene.Push(["Konstal", "Wh-What?! Of course not! ", "angry"]);
	scene.Push(["Esther", "Hmmm…", "normal"]);
	Set1.Add("esther_konstal_maybeAluna_anywhere",scene);
	
//ESTHER and CRATOR - with or without Aluna - Anywhere
	scene = new Array();
	scene.Push(["Esther", "Hey, you really don’t know anything about Milky’s pregnancy? How it could have happened?", "normal"]);
	scene.Push(["Crator", "No. I didn’t have sex with her, so it was probably Konstal.", "normal"]);
	scene.Push(["Esther", "You think he drugged her?", "normal"]);
	scene.Push(["Crator", "What?! Why would you say that?", "normal"]);
	scene.Push(["Esther", "She said she didn’t remember what happened. It’s obviously foul play.", "normal"]);
	scene.Push(["Crator", "… I don’t thinks so.", "normal"]);
	Set1.Add("esther_crator_maybeAluna_anywhere",scene);
	

///////////////////////////////////////////
///////////////  PART 2
///////////////////////////////////////////

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
scene.Push(["Crator", "Well, y’know, how small and curvy they are. Besides, Milky is the only one here with heals.", "blush"]);
scene.Push(["Aluna", "Yeah… do you think they could have anything to do with how she got pregnant?", "normal"]);
scene.Push(["Crator", "Probably not. Unless we want to know where exactly she had sex which is pretty beside the point by now.", "normal"]);
scene.Push(["Aluna", "hmm…", "normal"]);
Set1.Add("aluna_crator_woods_part2_talk1",scene);

//ALUNA & MILKY Woods  - After "aluna_crator_woods_part2"
scene = new Array();
scene.Push(["Aluna", "Are those your footprint, Milky?", "normal"]);
scene.Push(["Milky", "Huh, I guess they are. ", "normal"]);
scene.Push(["Aluna", "So were you here yesterday? ", "normal"]);
scene.Push(["Milky", "Actually, I think those may be from before I was pregnant. ", "normal"]);
scene.Push(["Aluna", "Hmmm… maybe that means we can get some clue as to what you were doing that day if we follow them.", "normal"]);
scene.Push(["Milky", "Hey, that’s right… They look like they’re going towards the hill. I get a creepy feeling when I go there.", "sad"]);
scene.Push(["Aluna", "I think we’re on the right track. If I get the chance I’ll show everyone these footprints and see if anyone wants to help me check it out.", "normal"]);
scene.Push(["Milky", "Thank you, Aluna. I’m so glad at least someone is trying the figure out what exactly happened to me.", "happy"]);
Set1.Add("aluna_milky_woods_part2",scene);	

//ALUNA & KONSTAL Woods  - After #"aluna_crator_woods_part2"
scene = new Array();
scene.Push(["Aluna", "Hey, look at those footprints. I heard they were Milky’s", "normal"]);
scene.Push(["Konstal", "Cool, what do you want, a medal?", "normal"]);
scene.Push(["Aluna", "Let’s follow it. It may help us find out how she got pregnant!", "normal"]);
scene.Push(["Konstal", "We already know how she got pregnant- sleeping around. What we need now is a plan of action.", "normal"]);
scene.Push(["Aluna", "(guess I’ll have to ask someone else if I want Konstal’s help. Maybe if Krator asked him...)", "normal"]);
Set1.Add("aluna_konstal_woods_part2",scene);

//ALUNA & ESTHER Woods  -After #"aluna_crator_woods_part2"
scene = new Array();
scene.Push(["Aluna", "Hey, look at those footprints. I heard they were Milky’s", "normal"]);
scene.Push(["Esther", "Huh, why, was she here before?", "normal"]);
scene.Push(["Aluna", "I think these were from last night. I think if we follow them, we can find out exactly how she got pregnant.", "normal"]);
scene.Push(["Esther", "...Maybe we can see other footprints. Then we’ll know which one of the guys did it.", "angry"]);
scene.Push(["Aluna", "Or We’ll be able to how she got pregnant without having sex.", "normal"]);
scene.Push(["Esther", "Um, or that.", "normal"]);
scene.Push(["Aluna", "It looks like it’s leading to the hill.", "normal"]);
scene.Push(["Esther", "I’ll check it out when I’m over there next. Thanks, Aluna.", "happy"]);
Set1.Add("aluna_esther_woods_part2",scene);


//ALUNA & CRATOR Woods  -After #"aluna_crator_woods_part2"
scene = new Array();
scene.Push(["Aluna", "Hey, about the footprints.", "normal"]);
scene.Push(["Crator", "Yeah?", "normal"]);
scene.Push(["Aluna", "I think we can find out more about what happened to Milky if we follow the footprints. They look like they’re heading to the hill.", "normal"]);
scene.Push(["Crator", "I think it’s pretty obvious what happened…", "normal"]);
scene.Push(["Aluna", "But Milky doesn’t remember it. And you and Konstal haven’t had sex with her. Don’t you think this is all weird?", "normal"]);
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
scene.Push(["Konstal", "Why the hell would we want to? Our top priority right now should be to get some more food in case we do end up keeping this baby.", "normal"]);
scene.Push(["Crator", "C’mon. Just humor me.", "normal"]);
scene.Push(["Konstal", "Arrgh! Fine!", "normal"]);
scene.Push(["Konstal", "I’ll search around next time I’m at the Hill.", "normal"]);
Set1.Add("crator_konstal_woods_part2",scene);		


//ALUNA - Hill  -BEFORE #11 and #13 and #15 and #16 and #14
scene = new Array();
scene.Push(["Aluna", "Hmmm, I should let everyone know about the footprints before I start looking around here myself.", "normal"]);				
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
scene.Push(["Esther", "Not sure about walking back through the woods in the dark. I’ll just settle down here for the night.", "normal"]);	
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////






///////////////////////////////////////////
///////////////  PART 3
///////////////////////////////////////////


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
	
	if ( (storeVars.alunaShowedAllFootprints == false) && (Set1.Contains("aluna_milky_woods_part2") == false) &&  (Set1.Contains("aluna_konstal_woods_part2") == false)  && (Set1.Contains("aluna_esther_woods_part2") == false) && (Set1.Contains("aluna_crator_woods_part2") == false) )
	{
		storeVars.alunaShowedAllFootprints = true;
	}



if (storeVars.moved == true)
{
////////////////////////////////////////
///////////  CHECK  ANYWERE
////////////////////////////////////////

////// MILKY & CRATOR - ALONE Anywhere
if ((milkySet == cratorSet) && (milkySet != alunaSet) && (milkySet != estherSet) && (milkySet != konstalSet) && isInConvo == false)
{
		print ("milky_crator_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if(Set1.Contains("milky_crator_anywhere"))
    	{
    		currentConvo = Set1["milky_crator_anywhere"];
    		isInConvo = true;
    		currentConvoName ="milky_crator_anywhere";
    		makeConvo("milky_crator_anywhere");
    		
    	}
}

////// MILKY & KONSTAL - ALONE Anywhere
if ((milkySet == konstalSet) && (milkySet != alunaSet) && (milkySet != estherSet) && (milkySet != cratorSet) && isInConvo == false)
{
		print ("konstal_milky_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if(Set1.Contains("konstal_milky_anywhere"))
    	{
    		currentConvo = Set1["konstal_milky_anywhere"];
    		isInConvo = true;
    		currentConvoName ="konstal_milky_anywhere";
    		makeConvo("konstal_milky_anywhere");
    		
    	}
}


////// ALUNA & MILKY - ALONE Anywhere
if ((alunaSet == milkySet) && (alunaSet != cratorSet) && (alunaSet != estherSet) && (alunaSet != konstalSet) && isInConvo == false)
{
		print ("aluna_milky_alone_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if(Set1.Contains("aluna_milky_alone_anywhere"))
    	{
    		currentConvo = Set1["aluna_milky_alone_anywhere"];
    		isInConvo = true;
    		currentConvoName ="aluna_milky_alone_anywhere";
    		makeConvo("aluna_milky_alone_anywhere");

    	}
}

//ESTHER and MILKY - Alone - Any Scene
if ((milkySet == estherSet) && (milkySet != alunaSet) && (milkySet != cratorSet) && (milkySet != konstalSet) && isInConvo == false)
{
		print ("esther_milky_alone_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if(Set1.Contains("esther_milky_alone_anywhere"))
    	{
    		currentConvo = Set1["esther_milky_alone_anywhere"];
    		isInConvo = true;
    		currentConvoName ="esther_milky_alone_anywhere";
    		makeConvo("esther_milky_alone_anywhere");
    	}
}

////// ALUNA & ESTHER & MILKY - ALONE Anywhere
if ((alunaSet ==  estherSet) && (alunaSet == milkySet) && (alunaSet != cratorSet) && (alunaSet != konstalSet) && isInConvo == false)
{
		print ("aluna_esther_milky_alone_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if(Set1.Contains("aluna_esther_milky_alone_anywhere"))
    	{
    		currentConvo = Set1["aluna_esther_milky_alone_anywhere"];
    		isInConvo = true;
    		currentConvoName ="aluna_esther_milky_alone_anywhere";
    		makeConvo("aluna_esther_milky_alone_anywhere");
    	}
}


////// KONSTAL & CRATOR - ALONE Anywhere
if ((konstalSet == cratorSet) && (konstalSet != alunaSet) && (konstalSet != estherSet) && (konstalSet != milkySet) && isInConvo == false)
{
		print ("crator_konstal_alone_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if (Set1.Contains("crator_konstal_alone_anywhere"))
    	{
    		currentConvo = Set1["crator_konstal_alone_anywhere"];
    		isInConvo = true;
    		currentConvoName ="crator_konstal_alone_anywhere";
    		makeConvo("crator_konstal_alone_anywhere");
    	}
}



////// ALUNA & ESTHER - ALONE Anywhere
if ((alunaSet == estherSet) && (alunaSet != konstalSet) && (alunaSet != cratorSet) && (alunaSet != milkySet) && isInConvo == false)
{
		print ("aluna_esther_alone_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if ((Set1.Contains("aluna_esther_alone_anywhere")) && (Set1.Contains("aluna_esther_milky_alone_anywhere") == false))
    	{
    		currentConvo = Set1["aluna_esther_alone_anywhere"];
    		isInConvo = true;
    		currentConvoName ="aluna_esther_alone_anywhere";
    		makeConvo("aluna_esther_alone_anywhere");
    	}
}

////// ALUNA & KONSTAL & CRATOR - ALONE Anywhere
if ((alunaSet == konstalSet) && (alunaSet == cratorSet) && (alunaSet != estherSet) && (alunaSet != milkySet) && isInConvo == false)
{
		print ("aluna_crator_konstal_alone_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if (Set1.Contains("aluna_crator_konstal_alone_anywhere")) 
    	{
    		currentConvo = Set1["aluna_crator_konstal_alone_anywhere"];
    		isInConvo = true;
    		currentConvoName ="aluna_crator_konstal_alone_anywhere";
    		makeConvo("aluna_crator_konstal_alone_anywhere");
    	}
}


////// ESTHER & KONSTAL & CRATOR - alone Anywhere
if ((estherSet == konstalSet) && (estherSet == cratorSet) && (estherSet != milkySet) && (estherSet != alunaSet) && isInConvo == false)
{
		print ("crator_esther_konstal_alone_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if (Set1.Contains("crator_esther_konstal_alone_anywhere")) 
    	{
    		currentConvo = Set1["crator_esther_konstal_alone_anywhere"];
    		isInConvo = true;
    		currentConvoName ="crator_esther_konstal_alone_anywhere";
    		makeConvo("crator_esther_konstal_alone_anywhere");
    	}
}


////// ESTHER & KONSTAL- maybeAluna Anywhere
if ((estherSet == konstalSet) && (estherSet != cratorSet) && (estherSet != milkySet) && isInConvo == false)
{
		print ("esther_konstal_maybeAluna_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if (Set1.Contains("esther_konstal_maybeAluna_anywhere")) 
    	{
    		currentConvo = Set1["esther_konstal_maybeAluna_anywhere"];
    		isInConvo = true;
    		currentConvoName ="esther_konstal_maybeAluna_anywhere";
    		makeConvo("esther_konstal_maybeAluna_anywhere");
    	}
}

////// ESTHER & KONSTAL- maybeAluna Anywhere
if ((estherSet == cratorSet) && (estherSet != konstalSet) && (estherSet != milkySet) && isInConvo == false)
{
		print ("esther_crator_maybeAluna_anywhere");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if (Set1.Contains("esther_crator_maybeAluna_anywhere")) 
    	{
    		currentConvo = Set1["esther_crator_maybeAluna_anywhere"];
    		isInConvo = true;
    		currentConvoName ="esther_crator_maybeAluna_anywhere";
    		makeConvo("esther_crator_maybeAluna_anywhere");
    	}
}



////////////////////////////////////////
///////////  CHECK THE TENT
////////////////////////////////////////






////////////////////////////////////////
///////////  CHECK THE CAMP
////////////////////////////////////////


////// ALL 
if ((konstalSet == "inCamp") && (alunaSet == "inCamp") && (cratorSet == "inCamp") && (milkySet == "inCamp")&& (estherSet == "inCamp") && isInConvo == false)
{
		print ("aluna_crator_esther_konstal_milky_inCamp");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if (Set1.Contains("aluna_crator_esther_konstal_milky_inCamp"))
    	{
    		currentConvo = Set1["aluna_crator_esther_konstal_milky_inCamp"];
    		isInConvo = true;
    		currentConvoName ="aluna_crator_esther_konstal_milky_inCamp";
    		makeConvo("aluna_crator_esther_konstal_milky_inCamp");
    	}
}




////////////////////////////////////////
///////////  CHECK THE WOODS
////////////////////////////////////////

	if ((alunaSet == "inWoods") && (milkySet == "inWoods") && isInConvo == false)
	{
		print ("milky_aluna_woods");
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if(Set1.Contains("aluna_milky_woods"))
    	{
    		currentConvo = Set1["aluna_milky_woods"];
    		isInConvo = true;
    		currentConvoName ="aluna_milky_woods";
    		makeConvo("aluna_milky_woods");
    	}


	}



	if ((alunaSet == "inWoods") && storeVars.startPart2 == true)
	{
		print ("aluna_woods_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("aluna_woods_part2"))
    	{
    		currentConvo = Set1["aluna_woods_part2"];
    		isInConvo = true;
    		currentConvoName ="aluna_woods_part2";
    		makeConvo("aluna_woods_part2");
    		storeVars.alunaLookedAtFootprints = true;
    	}

	}

if ((cratorSet == "inWoods") && (alunaSet == "inWoods") &&  storeVars.alunaLookedAtFootprints == true)
	{
		print ("aluna_crator_woods_part2_talk1");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("aluna_crator_woods_part2_talk1"))
    	{
    		currentConvo = Set1["aluna_crator_woods_part2_talk1"];
    		isInConvo = true;
    		currentConvoName ="aluna_crator_woods_part2_talk1";
    		makeConvo("aluna_crator_woods_part2_talk1");
    		storeVars.alunaKnowsMilkyFootprints = true;
    	}

	}


if ((milkySet == "inWoods") && (alunaSet == "inWoods") &&  (storeVars.alunaKnowsMilkyFootprints == true) )
	{
		print ("aluna_milky_woods_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("aluna_milky_woods_part2"))
    	{
    		currentConvo = Set1["aluna_milky_woods_part2"];
    		isInConvo = true;
    		currentConvoName ="aluna_milky_woods_part2";
    		makeConvo("aluna_milky_woods_part2");
    		storeVars.milkyLookedAtFootprints = true;
    	}

	}
	
	
if ((konstalSet == "inWoods") && (alunaSet == "inWoods") &&  storeVars.alunaKnowsMilkyFootprints == true)
	{
		print ("aluna_konstal_woods_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("aluna_konstal_woods_part2"))
    	{
    		currentConvo = Set1["aluna_konstal_woods_part2"];
    		isInConvo = true;
    		currentConvoName ="aluna_konstal_woods_part2";
    		makeConvo("aluna_konstal_woods_part2");
    	}

	}


if ((estherSet == "inWoods") && (alunaSet == "inWoods") &&  storeVars.alunaKnowsMilkyFootprints == true)
	{
		print ("aluna_esther_woods_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("aluna_esther_woods_part2"))
    	{
    		currentConvo = Set1["aluna_esther_woods_part2"];
    		isInConvo = true;
    		currentConvoName ="aluna_esther_woods_part2";
    		makeConvo("aluna_esther_woods_part2");
    		storeVars.milkyLookedAtFootprints = true;
    	}

	}


if ((cratorSet == "inWoods") && (alunaSet == "inWoods") &&  storeVars.alunaKnowsMilkyFootprints == true)
	{
		print ("aluna_crator_woods_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("aluna_crator_woods_part2"))
    	{
    		currentConvo = Set1["aluna_crator_woods_part2"];
    		isInConvo = true;
    		currentConvoName ="aluna_crator_woods_part2";
    		makeConvo("aluna_crator_woods_part2");
    		storeVars.cratorLookedAtFootprints = true;
    	}

	}


if ((cratorSet == "inWoods") && (konstalSet == "inWoods") &&  storeVars.cratorLookedAtFootprints == true)
	{
		print ("crator_konstal_woods_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("crator_konstal_woods_part2"))
    	{
    		currentConvo = Set1["crator_konstal_woods_part2"];
    		isInConvo = true;
    		currentConvoName ="crator_konstal_woods_part2";
    		makeConvo("crator_konstal_woods_part2");
    		storeVars.konstalLookedAtFootprints = true;
    	}

	}
	
	
			
	
	
////////////////////////////////////////
///////////  CHECK THE Hill
////////////////////////////////////////

	if ((estherSet == "inHill") && (milkySet == "inHill") && isInConvo == false)
	{
		print ("milky_esther_hill");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("esther_milky_hill"))
    	{
    		currentConvo = Set1["esther_milky_hill"];
    		isInConvo = true;
    		currentConvoName ="esther_milky_hill";
    		makeConvo("esther_milky_hill");
    	}


	}
	




if ((alunaSet == "inHill") && (konstalSet != "inHill")  && (estherSet != "inHill") && (milkySet != "inHill") && (cratorSet != "inHill") &&  (storeVars.alunaShowedAllFootprints == false) )
	{
		print ("aluna_hill_part2_beforeShowingFootprints");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("aluna_hill_part2_beforeShowingFootprints"))
    	{
    		currentConvo = Set1["aluna_hill_part2_beforeShowingFootprints"];
    		isInConvo = true;
    		currentConvoName ="aluna_hill_part2_beforeShowingFootprints";
    		makeConvo("aluna_hill_part2_beforeShowingFootprints");
    	}

	}


if ((alunaSet == "inHill") && (konstalSet != "inHill")  && (estherSet != "inHill") && (milkySet != "inHill") && (cratorSet != "inHill") &&  (storeVars.alunaShowedAllFootprints == true) )
	{
		print ("aluna_hill_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("aluna_hill_part2"))
    	{
    		currentConvo = Set1["aluna_hill_part2"];
    		isInConvo = true;
    		currentConvoName ="aluna_hill_part2";
    		makeConvo("aluna_hill_part2");
    		storeVars.alunaIsPreganant = true;
    	}

	}
	
	
if ((estherSet == "inHill") && (konstalSet != "inHill")  && (alunaSet != "inHill") && (milkySet != "inHill") && (cratorSet != "inHill") &&  (storeVars.estherLookedAtFootprints == true) )
	{
		print ("esther_hill_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("esther_hill_part2"))
    	{
    		currentConvo = Set1["esther_hill_part2"];
    		isInConvo = true;
    		currentConvoName ="esther_hill_part2";
    		makeConvo("esther_hill_part2");
    		storeVars.estherIsPreganant = true;
    	}

	}

if ((cratorSet == "inHill") && (konstalSet != "inHill")  && (alunaSet != "inHill") && (milkySet != "inHill") && (estherSet != "inHill") &&  (storeVars.cratorLookedAtFootprints == true) )
	{
		print ("crator_hill_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("crator_hill_part2"))
    	{
    		currentConvo = Set1["crator_hill_part2"];
    		isInConvo = true;
    		currentConvoName ="crator_hill_part2";
    		makeConvo("crator_hill_part2");
    		storeVars.cratorIsPreganant = true;
    	}

	}	

if ((konstalSet == "inHill") && (cratorSet != "inHill")  && (alunaSet != "inHill") && (milkySet != "inHill") && (estherSet != "inHill") &&  (storeVars.konstalLookedAtFootprints == true) )
	{
		print ("konstal_hill_part2");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("konstal_hill_part2"))
    	{
    		currentConvo = Set1["konstal_hill_part2"];
    		isInConvo = true;
    		currentConvoName ="konstal_hill_part2";
    		makeConvo("konstal_hill_part2");
    		storeVars.konstalIsPreganant = true;
    	}

	}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





} // end to isMoved check statement

//Continue the current conversation
if (isInConvo == true)
{
	makeConvo(currentConvoName);
}



}







////////////////////////////////////////
///////////  Functions
////////////////////////////////////////




function makeConvo(stringName)
{
	if (mouseDownNumber == 0)
	{
		if (isInConvo == true)
		{
			if (mouseDownNumber == currentConvo.length)
			{
				//THIS IS WHERE CONVO ENDS!!!1
				gamestate.characterSpeaking = "none";
				SpeakingChar1.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				SpeakingChar2.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				//isInConvo = false;
				//mouseDownNumber = 0;
				isInConvo = false;
				mouseDownNumber = 0;
				Set1.Remove(stringName);
				storeVars.moved = false;
			
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
	
	}
	else if(Input.GetMouseButtonUp(0) == true)
	{
		
		if (isInConvo == true)
		{
			if (mouseDownNumber == currentConvo.length)
			{
				gamestate.characterSpeaking = "none";
				SpeakingChar1.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				SpeakingChar2.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				makeScreensLight();
				
				isInConvo = false;
				mouseDownNumber = 0;
				Set1.Remove(stringName);
				storeVars.moved = false;
			
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
	}

}

function makeScreensLight(){
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, 0);


}