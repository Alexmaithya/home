var a = 0;
var text = "Alex is a cool guy.He can't stand shit...he runs solo."
var spd = 60;

function typeWriter() {
    if (a < text.length) {
        document.getElementById("ale").innerHTML += text.charAt(a);
        a++;
        setTimeout(typeWriter, spd);
    }
}