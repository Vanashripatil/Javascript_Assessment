let str = `"In 1961, producers Albert R. Broccoli and Harry Saltzman purchased the filming rights to Fleming's novels.[3] They founded Eon Productions and, with financial backing by United Artists, produced Dr. No, directed by Terence Young and featuring Connery as Bond.[4] Following its release in 1962, Broccoli and Saltzman created the holding company Danjaq to ensure future productions in the James Bond film series.[5] The series currently has twenty-five films, with the most recent, No Time to Die, released in September 2021. With a combined gross of nearly $7 billion to date, it is the fourth-highest-grossing film series.[6] Accounting for inflation, it has earned over $14 billion at current prices.[a] The films have won five Academy Awards: for Sound Effects (now Sound Editing) in Goldfinger (at the 37th Awards), to John Stears for Visual Effects in Thunderball (at the 38th Awards), to Per Hallberg and Karen Baker Landers for Sound Editing, to Adele and Paul Epworth for Original Song in Skyfall (at the 85th Awards) and to Sam Smith and Jimmy Napes for Original Song in Spectre (at the 88th Awards). Several of the songs produced for the films have been nominated for Academy Awards for Original Song, including Paul McCartney's "Live and Let Die", Carly Simon's "Nobody Does It Better" and Sheena Easton's "For Your Eyes Only". In 1982 Albert R. Broccoli received the Irving G. Thalberg Memorial Award.[8]"`;

console.log(str.length);

//Find out number of words

function printVariable(str1) {
  str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
     str1 = str1.replace(/[ ]{2,}/gi," ");
     str1 = str1.replace(/\n /,"\n");
     return str1.split(' ').length;
  
}

console.log("Number of words : " + printVariable(str));

//Find out number of blankspaces

console.log("number of blankspaces : " + (str.match(/ /g) || []).length);

//Find out number of Special characters e.g. ., ',',", (), $, etc.

function specialChar(str1){
  const sChar = "'.,()$'";
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(!sChar.includes(str1[i])){
       continue;
    }
    count++;
 }
 return count;
}

console.log("Number of Special characters : " + specialChar(str));

//Find out number of number of statements

const re = /[.!?]/;
const numOfSentences = str.split(re);
console.log("Number of statements : " + (numOfSentences.length - 1));

//Find out number of number ans positions of vowels (a,e,i,o,u)

console.log("Number of positions of vowels : " + str.match(/[aeiou]/gi).length);

//Find out number of time words 'of', 'the', 'and' occurrs in the string

function countWordOccurences(str1, word){
     return str1.split(word).length - 1;
}

console.log("number of time words 'of' occurrs in the string : " + countWordOccurences(str,"of"));
console.log("number of time words 'the' occurrs in the string : " + countWordOccurences(str,"the"));
console.log("number of time words 'and' occurrs in the string : " + countWordOccurences(str,"and"));

