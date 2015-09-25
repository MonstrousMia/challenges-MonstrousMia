var upcase = function upcase(message) {
    return (message).toUpperCase();
}
console.log(upcase("hi there"));

var lowercase = function lowercase(message) {
    return (message).toLowerCase();
}
console.log(lowercase("HI THERE"));

console.log(upcase("it works!"));

var userUpcase = prompt("Type a sentence and I'll shout it back at you!");
alert(upcase(userUpcase));

var userLowercase = prompt("Now type a sentence and I'll whisper it back at you!");
alert(lowercase(userLowercase));
