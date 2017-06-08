//Round 1
function lengths(arrayOfStrings){
	var arrayOfNumbers = [];

	for (var i = 0; i < arrayOfStrings.length; i++){
		arrayOfNumbers.push(arrayOfStrings[i].length)
	}
	console.log(arrayOfNumbers)
}

lengths(["I", "am", "changing", "my", "album", "name", "to", "SWISH"])



//Round 2
function transmogrifier(x, y, z){
	console.log(Math.pow((x * y), z))
}

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)



//Round 3
function toonify(accent, sentence){
	if (accent === "daffy"){
		var duck = sentence.replace(/s/g, "th")
		console.log(duck)
	} else if (accent === "elmer") {
		var fudd = sentence.replace(/r/g, "w")
		console.log(fudd)
	} else {
		console.log(sentence)
	}
}

toonify("daffy", "so you smell like sausage")
 


//Round 4
function wordReverse(string){
	console.log(string.split(" ").reverse().join(" "))
}

wordReverse("Now I know what a TV dinner feels like")



//Round 5
function letterReverse(string){
	console.log(string.split('').reverse().join(''))

}

letterReverse("Now I know what a TV dinner feels like")
letterReverse("Put Hans back on the line")


//Round 6
function longest(array){
	var longestWord = '';
	var tie = [];
	
    for(var i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
        longestWord = array[i]
        } else if (array[i].length === longestWord.length){
        		tie.push(array[i])		//missing something here to capture first instance of duplicate, but not quite sure what. HELP
        		longestWord = tie[0]
        	}
        }  
   console.log(longestWord)
}

longest(["oh", "good", "grief", "hello"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])


//Final Round
function wordReverse(string){
	console.log(string.split(' ').reverse().join(' '))
}

function toUpperCase(string){
	console.log(string.toUpperCase() + " proves that I am the rep MASTER!")
}

function repMaster(input, myFunction){
	return myFunction(input);
}


repMaster("Never give your heart to a blockhead", wordReverse) 
repMaster("I finished this practice", toUpperCase);