var a = 0;
var text = "Hey love.... hope you are fine... As you know what this is about.But I know the stubborn you..You are most likely...100% say you don't know..but thats my work as your diary I'll just remind you babe .So this is about the meeting I had told you before..Well now you know...Let me commence my lady...So babe my heart as always had alot to say...so this is what my heart had to say.    I am not a poet but you are my muse,my inspiration,my motivation ...You are world.You make me want to see another day; during my darkest moments when I feel like giving up like all hope is lost..i just think about you and look at your pictures also read all those sweet words you say to me while chatting and everything seems to work out,I regain my strenght and keep on fighting for us....for our future...Everything I do I do it for you..you inspire me to become a better person...a  better hubby to you...Lakini sometimes I might say I lack words but thats not usually the case...I'm just dumbfonded,,or better surprised..or I just I'm too over excited because of the excess love you show me.....You spoil me with love...Babe thats all from the meeting...But sijaseme upunguze mapenzi...I LOVE YOU "
var spd = 60;

function typeWriter() {
    if (a < text.length) {
        document.getElementById("ale").innerHTML += text.charAt(a);
        a++;
        setTimeout(typeWriter, spd);
    }
}