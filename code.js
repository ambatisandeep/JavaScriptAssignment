// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["red", "blue","orange"]

const password ="hdsjfhudsf"


// Use this object for your random name generator. Enter in a bunch of objects with first and last names. 
//When generating a new random name, try to grab a random first or last name from any object. 
//Don't just take object as a whole.

const names =
[
    {
        firstName: "Suresh",
        lastName: "Redyy"
    },

    {
        firstName: "Sachin",
        lastName: "Tendulkar"
    },

    {
        firstName: "Arjun",
        lastName: "Suraj"
    },
    {
        firstName: "Ravi",
        lastName: "Anavika"
    },
    {
        firstName: "Ms",
        lastName: "Dohni"
    },
]

function randomSentence(numInput){

 const arr = lorem.split(".")

var temp = ""

for(i=0;i<numInput;i++){
    temp+= " "+arr[getRndInteger(0,arr.length)]
}
return temp;
}


function randomCharacter(numInput){

    var temp =""

for(i=0;i<numInput;i++){
    temp+= lorem[getRndInteger(0,lorem.length)]
}
return temp;

}

function randomName(){

    fristRandom = names[getRndInteger(0,names.length)]

    secondRandom = names[getRndInteger(0,names.length)]

    return fristRandom.firstName + " " + secondRandom.lastName

}

randomName()

function init(){

    
document.getElementById('randomPasswordClick').onclick = function(){
    document.getElementById('randomPasswordClickOutput').innerHTML = randomString(0,password.length,password);
}

document.getElementById('randomStringInp').onclick = function(){
    document.getElementById('randomString').innerHTML = randomString(0,lorem.length,lorem);
    }

    document.getElementById('randomName').onclick = function(){
        document.getElementById('randomNameOutput').innerHTML = randomName(0,lorem.length,lorem);
        }

}




function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


function randomString(min, max,inputString) {
    min = getRndInteger(min, max)+1
    max = getRndInteger(min, max)-1
    return inputString.substring(min,max);
  }
  
  


function getDate(){

    const dateValue = new Date()
    return dateValue.getDate() + '/ ' + dateValue.getMonth() + '/ ' + dateValue.getFullYear()


}

function getCurrentTime() {

    const timeValue = new Date()

    return timeValue.getHours() + ':' + timeValue.getMinutes() + ':' + timeValue.getSeconds()

}

function convertInchtoFeet(inch){

    const feet = inch * 0.083333

    return feet
}


function convertfeettoInch(feet){

    const inch = feet/0.083333

    return inch
}


function compareWordLength (fristInput,secoundInput){

     if(fristInput.length === secoundInput.length){
         return "Length of the words are equal"
     }else{
        return "Length of the words are not equal"
     }


}




