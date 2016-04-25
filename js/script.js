
//
function question(questionText){
  order = prompt(questionText);
}

//array
var menuPrompts = [
  ["What type of meat?"],
  ["What type of bean?"],
];

//While loop
var secondList = "<ul>";
var i = 0;

while (i < menuPrompts.length){
  secondList += "<li>" + menuPrompts[i]+ " response: " + prompt(menuPrompts[i]) +"</li>";
  i++;
}

secondList +="</ul>";

//Print it out
document.write(secondList);
