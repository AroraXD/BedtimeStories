// A2Z F16
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F16

// Tracery by Kate Compton
// https://github.com/galaxykate/tracery

var grammar;

// Here is the grammar
var data = {
		"origin": ["#[#setCharacters#]story#"],
		"setCharacters": ["[#setPronouns#][hero:#name#][heroanimal:#animal#][enemy:#animal#][home:#place#][heroFlaw:#flaw#]"],
		"story": ["#intro# #journey# #conclusion#"],
		"intro": ["#introline# there lived a #adj# #heroanimal#, #hero#. #heroThey# was known to all for #heroTheir# #adj# #bodypart#. Although not known to most, #hero# had one big flaw. #heroThey.capitalize# had no #heroFlaw#. #intro2#"],

		"intro2":["One day #hero# realised that #heroThey# had no #heroFlaw#, it took #heroThem# a lot of courage to admit it, but it was a flaw #heroThey# had and #heroThey# wanted to fix it. #heroThey.capitalize# decided to leave the comfort of the #home# they had spent their whole life in and go on an epic journey."],
		
		"journey": ["#hero# must have been traveling for #timeperiod# when #heroThey# encountered a #enemy#. #greeting# #hero# said to the #enemy#. The #enemy# did not respond to #hero.s# words, instead it bared its #adj# and #adj# teeth, #hero# took a step back. #fight#. #hero# couldn’t keep this up, #heroThey# were hurt, and didn’t want to attack someone #heroThey# just met. #run#."],
		
		"run": ["#heroThey# ran as far as they could, until the horrible #enemy# could not see #heroThem# again."],
		
		"conclusion": [" #hero# was safe for now, but alone, cold and afraid. The journey had been nothing like #heroThey# expected, with only problem after problem to face. Maybe #heroThey# should just accept themselves for who they are, flaws and all. #hero# was pleased that he could now accept he had no #heroFlaw# and then headed down the long path back home.", "#hero# kept running, #heroThey# ran and ran until they were in #home.a#, it seemed very familiar, maybe because it was the very #home# #heroThey# left from in the beginning, #hero# could finally relax now that #heroThey# was back, #heroThey# might not have completely solved there problem of having no #heroFlaw#, but they felt the journey outside has helped them in other ways, and if #heroThey# put some effort in #heroThey# have some #heroFlaw# in no time."],


		"introline": ["Long ago", "Once upon a time", "Many years ago"],
		"name": ["Adam", "Bevis", "Kevin", "Jess", "Yuuma", "Darcy",
		"Mia",
		"Chiaki",
		"Izzi",
		"Azra",
		"Lina",
		"Cheri",
		"Morgana",
		"Becky",
		"Jedoo",
		"Brick",
		"Shadow",
		"Krox",
		"Urga",
		"Zelph",
		"Harambay",
		"Shrek",
		"Barry",
		"Tom"
	],
	"setPronouns": ["[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]", "[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]", "[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"],
	"animal": ["dragon", "fox", "dog", "puppy", "doggo", "pupper", "cat",
	"kitty", "unicorn", "mouse", "donkey", "ogre", "bee","racoon", "badger",
	"penguin", "bullet ant", "three-toed sloth", "dwarf elephant"],
"adj": ["big","bright", "powerful", "rough", "smooth", "fuzzy", "slender", "great", "jagged", "sharp"],
"bodypart": [ "feet", "paws", "legs", "tail", "head", "hair", "body "],
"flaw": ["self esteem", "friends", "self confidence", "work ethic", ],
"place": ["house", "forest","cave","kingdom", "village", "town", "city" ],
"timeperiod": ["weeks","years", "months", "days", "hours"], 
"greeting": ["Hello", "Hey there", "Hello, what is your name ? ", "Hey, what are you doing out here ? "],
"fight": ["the hostile #enemy# attacked, #hero# was scratched by them", "the #enemy# attacked, #hero# dodged, #fight#", "the #enemy# lunged forward and attacked, #hero# was bitten"]
}

function setup() {
	noCanvas();
	// Make the grammar
	grammar = tracery.createGrammar(data);

	// A button to generate a new sentence
	var button = select('#generate');
	button.mousePressed(generate);

	// A button to clear everything
	var clear = select('#clear');
	clear.mousePressed(clearAll);
}

// Remove everything
function clearAll() {
	var elements = selectAll('.text');
	for (var i = 0; i < elements.length; i++) {
		elements[i].remove();
	}
}

function generate() {
	var expansion = grammar.flatten('#origin#');
	var par = createP(expansion);
	var r = floor(random(100, 255));
	var g = floor(random(150, 255));
	var b = floor(random(200, 255));
	par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
	par.class('text');
}
