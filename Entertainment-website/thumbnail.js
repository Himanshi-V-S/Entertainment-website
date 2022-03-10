//Function to open Navigation bar
function openNavBar() {
	document.getElementById("navBar").style.width = "100%";
}

//Function to close Navigation bar
function closeNavBar() {
	document.getElementById("navBar").style.width = "0%";
}

//Function to get option selected from pull down menu
function getSelectedValue(selectList){
	return selectList[selectList.selectedIndex].value;
}

//Function to change page background color based on user preference
function changeBgColor(formRef){
	var colorChoice = getSelectedValue(formRef.backgroundColors);
	if (colorChoice == "pink"){
		document.body.style.backgroundColor = "#FFFCE6";
	}else if(colorChoice == "green"){
		document.body.style.backgroundColor = "#c6f2bf";
	}else if(colorChoice == "grey"){
		document.body.style.backgroundColor = "#C9D8B6";
	}
}

//Function to change page text color based on user preference
function changeTxtColor(formRef){
	var colorChoice = getSelectedValue(formRef.textColors);
	if (colorChoice == "black"){
		document.body.style.color = "black";
	}else if(colorChoice == "darkBlue"){
		document.body.style.color = "#005A8D";
	}else if(colorChoice == "green"){
		document.body.style.color = "#286e1e";
	}
}


//Five individual functions to display the five books
function displayAftershocksBook(){
	document.getElementById("largeImage").src = "BookImages/AftershocksBook.jpg";
	document.getElementById("largeImage").alt = "Aftershocks book image";
	document.getElementById("heading").innerHTML = "Aftershocks";
	document.getElementById("author").innerHTML = " Nadia Owusu";
	document.getElementById("storyline").innerHTML = "Nadia Owusu’s debut memoir, Aftershocks, has"
	+ " those residual tremors that follow an earthquake as its central metaphor, and the author"
	+ " had plenty of life-shaking events around which to orient her narrative. The daughter of an"
	+ " erudite Ghanaian U.N. official and an emotionally distant Armenian mother, Owusu grew up"
	+ " straddling cultures and following her impressive father. But the uneasiness in her life"
	+ " derived not from her fluid, third-culture upbringing but from the death of her father"
	+ " when Owusu was still a child; the abandonment of her mother; and a strained relationship"
	+ " with the stepmother who carried out the difficult process of raising her. There is something"
	+ " fairy tale–like about Owusu’s story, an orphan-like existence of struggle and survival, but there"
	+ " is no fairy godmother who rescues this heroine—just a growing sense of self-awareness to orient"
	+ " her in a troubling world. —Chloe Schama";
}

function displayWhereaboutsBook(){
	document.getElementById("largeImage").src = "BookImages/WhereaboutsBook.jpg";
	document.getElementById("largeImage").alt = "Whereabouts book image";
	document.getElementById("heading").innerHTML = "Whereabouts";
	document.getElementById("author").innerHTML = " Jhumpa Lahiri";
	document.getElementById("storyline").innerHTML = "Much of Jhumpa Lahiri’s early work was a very"
	+ " specific study in character and place. In her latest, Whereabouts, she goes in a different"
	+ " direction, presenting a narrator who drifts through her life, unmoored and untethered. I"
	+ " had to squint hard after the first dozen pages or so to figure out where the story was even"
	+ " located—was that “trattoria” a giveaway of an overseas setting or more of a signal of a"
	+ "universal cosmopolitan urbanism? The very language has a slightly cool, distanced feel, which"
	+ " makes a certain degree of sense: Lahiri, whose native language is English but who has famously"
	+ " become fluent in Italian, wrote the story in that language and then translated it back to English."
	+ " The slim and elegant book is an interior work, light on plot but high on the kind of introspection"
	+ "	that can take place anywhere. —Chloe Schama";
}

function displayTheLastThingBook(){
	document.getElementById("largeImage").src = "BookImages/TheLastThingBookBig.jpg";
	document.getElementById("largeImage").alt = "The Last Thing He Told Me book image";
	document.getElementById("heading").innerHTML = "The Last Thing He Told Me";
	document.getElementById("author").innerHTML = " Laura Dave";
	document.getElementById("storyline").innerHTML = "Was 'The Last Thing He Told Me'"
	+ " engineered to become a prestige drama? Probably not, but reading it you do get"
	+ " the sense that it's the kind of book to get a producer’s gears turning: mysterious"
	+ " disappearance;lively, somewhat lonesome heroine; sulky stepdaughter along for the"
	+ " ride. The book is set mostly in northern California, where the protagonist, a"
	+ " furniture-maker-slash-artist called Hannah, has made a home with her husband,"
	+ " Owen, and his stepdaughter Bailey. The public implosion of Owen’s company leads"
	+ " to his disappearance and ignites Hannah’s quest to try to figure out what’s happened—not"
	+ "just where he’s gone, but why he’s left behind a rather large duffel bag full of cash and,"
	+ " as it turns out, a very light imprint on the world before she met him. The Last Thing He"
	+ " Told me goes down like the limited series it will almost certainly become—Julia Roberts"
	+ "has signed on to a production engineered by Hello Sunshine—light and bright, despite its"
	+ " seemingly seedy undertones. - Chloe Schama";
}

function displayLetMeTellBook(){
	document.getElementById("largeImage").src = "BookImages/LetMeTellBook.jpg";
	document.getElementById("largeImage").alt = "Let Me Tell You What I Mean book image";
	document.getElementById("heading").innerHTML = "Let Me Tell You What I Mean";
	document.getElementById("author").innerHTML = " Joan Didion";
	document.getElementById("storyline").innerHTML = " Even Didion’s B-sides are hits." 
	+ " This slim volume of uncollected nonfiction—mostly short essays she wrote for The"
	+ " Saturday Evening Post in the late ’60s as well as a few longer pieces for The New"
	+ " York Times and The New Yorker—is full of small pleasures: Didion’s trademark"
	+ " anti-sentimentality, for one; her rhythmic prose; her ruthlessness (see her"
	+ " assessments of gambling addicts, hippies, Nancy Reagan); her wit.";
}

function displayTheFinalRevivalBook(){
	document.getElementById("largeImage").src = "BookImages/TheFinalRevivalBook.jpg";
	document.getElementById("largeImage").alt = "The Final Revival book image";
	document.getElementById("heading").innerHTML = "The Final Revival";
	document.getElementById("author").innerHTML = " Dawnie Walton";
	document.getElementById("storyline").innerHTML = "If there were a genre for popular"
	+ " postmodern literature, The Final Revival of Opal and Nev would fall squarely within"
	+ " it. Easy to read, and yet layered in both its organization and its impact, Dawnie"
	+ " Walton’s novel tells the story of ’70s musicians Opal and Nev and is alternatingly"
	+ " structured as an oral history and recurring editors’ notes from a journalist assembling"
	+ " the twisty, politically inflected tale.(The journalist just so happens to be the daughter" 
	+ " of an erstwhile bandmate who had an affair with Opal.) —Chloe Schama";
}


//Five individual functions to display the five video games
function displaySekiroGame(){
	document.getElementById("largeImage").src = "GameImages/SekiroGame.jpg";
	document.getElementById("largeImage").alt = "Sekiro: Shadows Die Twice video game poster";
	document.getElementById("heading").innerHTML = "Sekiro: Shadows Die Twice";
	document.getElementById("releaseDate").innerHTML = " March 22, 2019";
	document.getElementById("mode").innerHTML = " Single-player video game";
	document.getElementById("platforms").innerHTML = " PlayStation 4, Xbox One, Google Stadia, Microsoft Windows";
	document.getElementById("aboutGame").innerHTML = "Sekiro: Shadows Die Twice is an action-adventure video game"
	+ " developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as he"
	+ " attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.";
}

function displayCODBlackOpsGame(){
	document.getElementById("largeImage").src = "GameImages/CODBlackOpsGame.jpg";
	document.getElementById("largeImage").alt = "Call of Duty: Black Ops Cold War video game poster";
	document.getElementById("heading").innerHTML = "Call of Duty: Black Ops Cold War";
	document.getElementById("releaseDate").innerHTML = " November 13, 2020";
	document.getElementById("mode").innerHTML = " Single-player and multiplayer video game";
	document.getElementById("platforms").innerHTML = "  PlayStation 4, Xbox One, PlayStation 5, Xbox Series X and Series S, Microsoft Windows";
	document.getElementById("aboutGame").innerHTML = "Call of Duty: Black Ops Cold War is a 2020 first-person"
	+ " shooter video game developed by Treyarch and Raven Software and published by Activision.";
}

function displayValorantGame(){
	document.getElementById("largeImage").src = "GameImages/ValorantGame.jpg";
	document.getElementById("largeImage").alt = "Valorant video game poster";
	document.getElementById("heading").innerHTML = "Valorant";
	document.getElementById("releaseDate").innerHTML = " June 2, 2020";
	document.getElementById("mode").innerHTML = " Multiplayer video game";
	document.getElementById("platforms").innerHTML = " Microsoft Windows";
	document.getElementById("aboutGame").innerHTML = "Valorant is a free-to-play first-person hero shooter"
	+ " developed and published by Riot Games, for Microsoft Windows.";
}

function displayPUBGGame(){
	document.getElementById("largeImage").src = "GameImages/PUBGGame.jpg";
	document.getElementById("largeImage").alt = "PlayerUnknown's Battlegrounds(PUBG) video game poster";
	document.getElementById("heading").innerHTML = "PlayerUnknown's Battlegrounds(PUBG)";
	document.getElementById("releaseDate").innerHTML = " December 20, 2017";
	document.getElementById("mode").innerHTML = " Multiplayer video game";
	document.getElementById("platforms").innerHTML = "Microsoft Windows, Android, iOS, Xbox One, PlayStation 4, Stadia";
	document.getElementById("aboutGame").innerHTML = "PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer"
	+ " battle royale game ";
}

function displayFIFA21Game(){
	document.getElementById("largeImage").src = "GameImages/FIFA21Game.jpg";
	document.getElementById("largeImage").alt = "FIFA 21 video game poster";
	document.getElementById("heading").innerHTML = "FIFA 21";
	document.getElementById("releaseDate").innerHTML = " October 5, 2020";
	document.getElementById("mode").innerHTML = " Single-player and Multiplayer video game";
	document.getElementById("platforms").innerHTML = " PlayStation 4, Xbox One, PlayStation 5,"
	+" Nintendo Switch, Xbox Series X and Series S, Google Stadia, Microsoft Windows";
	document.getElementById("aboutGame").innerHTML = "FIFA 21 is a association football simulation video"
	+ " game published by Electronic Arts as part of the FIFA series.";
}


//Five individual functions to display the five movies
function displayTheTomorrowWarMovie(){
	document.getElementById("largeImage").src = "MovieImages/TheTomorrowWarMovie.jpg";
	document.getElementById("largeImage").alt = "The Tomorrow War Movie poster";
	document.getElementById("heading").innerHTML = "The Tomorrow War";
	document.getElementById("imdbRate").innerHTML = " 6.7";
	document.getElementById("duration").innerHTML = " 2h 20min";
	document.getElementById("director").innerHTML = " Chris McKay";
	document.getElementById("writer").innerHTML = " Zach Dean";
	document.getElementById("stars").innerHTML = " Chris Pratt, Yvonne Strahovski, J.K. Simmons, Betty Gilpin";
	document.getElementById("storyline").innerHTML = "The world is stunned when a group"
	+ " of time travelers arrive from the year 2051 to deliver an urgent message: Thirty" 
	+ " years in the future, mankind is losing a global war against a deadly alien species." 
	+ " The only hope for survival is for soldiers and civilians from the present to be"	
	+ " transported to the future and join the fight. Among those recruited is high school"
	+ " teacher and family man Dan Forester (Chris Pratt). Determined to save the world for"
    + " his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and" 
	+ " his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.";
	document.getElementById("releaseDate").innerHTML = "July 2, 2021 (United States)";
	document.getElementById("genres").innerHTML = "Action, Adventure, Drama, Sci-Fi, Thriller";
}

function displayNobodyMovie(){
	document.getElementById("largeImage").src = "MovieImages/NobodyMovie.jpg";
	document.getElementById("largeImage").alt = "Nobody Movie poster";
	document.getElementById("heading").innerHTML = "Nobody";
	document.getElementById("imdbRate").innerHTML = " 7.4";
	document.getElementById("duration").innerHTML = " 1h 32min";
	document.getElementById("director").innerHTML = " Ilya Naishuller";
	document.getElementById("writer").innerHTML = " Derek Kolstad";
	document.getElementById("stars").innerHTML = " Bob Odenkirk, Aleksey Serebryakov, Connie Nielsen, Christopher Lloyd";
	document.getElementById("storyline").innerHTML = "Emmy winner Bob Odenkirk (Better"
	+ "Call Saul, The Post, Nebraska) stars as Hutch Mansell, an underestimated and" 
	+ "overlooked dad and husband, taking life's indignities on the chin and never" 
	+ " pushing back. A nobody. When two thieves break into his suburban home one night," 
	+ " Hutch declines to defend himself or his family, hoping to prevent serious violence." 
	+ " His teenage son, Blake (Gage Munroe, The Shack), is disappointed in him and his" 
	+ " wife, Becca (Connie Nielsen, Wonder Woman), seems to pull only further away. The"
	+ " aftermath of the incident strikes a match to Hutch's long-simmering rage, triggering"
    + " dormant instincts and propelling him on a brutal path that will surface dark secrets"
    + " and lethal skills. In a barrage of fists, gunfire and squealing tires, Hutch must"
    + " save his family from a dangerous adversary (famed Russian actor Aleksey Serebryakov,"
    + " Amazon's McMafia)-and ensure that he will never be underestimated as a nobody again.";
	document.getElementById("releaseDate").innerHTML = " March 26, 2021 (United States)";
	document.getElementById("genres").innerHTML = " Action, Crime, Drama, Thriller";
}

function displayCruellaMovie(){
	document.getElementById("largeImage").src = "MovieImages/CruellaMovie.jpg";
	document.getElementById("largeImage").alt = "Cruella Movie poster";
	document.getElementById("heading").innerHTML = "Cruella";
	document.getElementById("imdbRate").innerHTML = " 7.4";
	document.getElementById("duration").innerHTML = " 2h 14min";
	document.getElementById("director").innerHTML = " Craig Gillespie";
	document.getElementById("writer").innerHTML = " Dana Fox(screenplay by)Tony McNamara(screenplay by)Aline Brosh McKenna(story by)";
	document.getElementById("stars").innerHTML = " Emma Stone, Emma Thompson, Joel Fry, Paul Walter Hauser";
	document.getElementById("storyline").innerHTML = "Before she becomes Cruella de Vil,"
	+ " teenage Estella has a dream. She wishes to become a fashion designer, having"
    + " been gifted with talent, innovation, and ambition all in equal measures."
	+ " But life seems intent on making sure her dreams never come true."
    + " Having wound up penniless and orphaned in London at 12, 10 years later Estella runs"
    + " wild through the city streets with her best friends and partners-in-(petty)-crime,"
    + " Horace and Jasper, two amateur thieves. When a chance encounter vaults Estella into"
    + " the world of the young rich and famous, however, she begins to question the existence"
    + " she's built for herself in London and wonders whether she might, indeed, be destined"
    + " for more after all. When an up-and-coming rock star commissions Estella to design him"
    + " a signature piece, she begins to feel as though she has truly arrived. But what is the"
    + " cost of keeping up with the fast crowd- and is it a price Estella is willing to pay? ";
	document.getElementById("releaseDate").innerHTML = " May 28, 2021 (United States)";
	document.getElementById("genres").innerHTML = " Comedy, Crime";
}

function displayBossBabyMovie(){
	document.getElementById("largeImage").src = "MovieImages/BossBabyMovie.jpg";
	document.getElementById("largeImage").alt = "Boss Baby: Family Business Movie poster";
	document.getElementById("heading").innerHTML = "Boss Baby: Family Business";
	document.getElementById("imdbRate").innerHTML = " 6.0";
	document.getElementById("duration").innerHTML = " 1h 47min";
	document.getElementById("director").innerHTML = " Tom McGrath";
	document.getElementById("writer").innerHTML = " Michael McCullers(screenplay by)Tom McGrath(story by)Marla Frazee(based on the books by)";
	document.getElementById("stars").innerHTML = " Alec Baldwin, James Marsden, Amy Sedaris, Ariana Greenblatt";
	document.getElementById("storyline").innerHTML = "The Templeton brothers have become"
	+ " adults and drifted away from each other, but a new boss baby with a cutting-edge"
    + " approach is about to bring them together again - and inspire a new family business.";
	document.getElementById("releaseDate").innerHTML = " July 2, 2021 (United States)";
	document.getElementById("genres").innerHTML = " Animation, Adventure, Comedy, Family, Fantasy";
}

function displayTheConjuring3Movie(){
	document.getElementById("largeImage").src = "MovieImages/TheConjuring3Movie.jpg";
	document.getElementById("largeImage").alt = "The Conjuring 3 Movie poster";
	document.getElementById("heading").innerHTML = "The Conjuring: The Devil Made Me Do It";
	document.getElementById("imdbRate").innerHTML = " 6.3";
	document.getElementById("duration").innerHTML = " 1h 52min";
	document.getElementById("director").innerHTML = " Michael Chaves";
	document.getElementById("writer").innerHTML = " David Leslie Johnson-McGoldrick(screenplay by), James Wan(story by), Chad Hayes(based on characters created by)";
	document.getElementById("stars").innerHTML = " Patrick Wilson, Vera Farmiga, Ruairi O'Connor, Sarah Catherine Hook";
	document.getElementById("storyline").innerHTML = "A chilling story of terror, murder and"
	+ "unknown evil that shocked even experienced real-life paranormal investigators Ed and" 
	+ " Lorraine Warren. One of the most sensational cases from their files, it starts with a"
	+ "fight for the soul of a young boy, then takes them beyond anything they'd ever seen"
	+ " before, to mark the first time in U.S. history that a murder suspect would claim" 
	+ " demonic possession as a defense.";
	document.getElementById("releaseDate").innerHTML = " June 4, 2021 (United States)";
	document.getElementById("genres").innerHTML = " Horror, Mystery, Thriller";
}





