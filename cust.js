var dd = window.location.href
var splitStr = dd.substring(dd.indexOf('msg=')+4, dd.lastIndexOf("&"));
var theKey = dd.substring(dd.indexOf('key=')+4)


var content = [{"key":"1hy",
"intro":"I'm a highly adaptable UX designer looking for my next role in a fast and dynamic environment.",
"description":"I have experience designing at different phases of the design cycle, including:",
    "r1":"&#x1F4AD; Facilitating design thinking workshops to align and ideate solutions at IBM.",
    "r2":"&#x1F9EA; Experimenting with new ideas to raise funding for public radio at WBUR's innovation lab.",
    "r3":"&#x1F4CB; Conducting exploratory UX research to use VR to help enrich lives at Cornell's Virtual Embodiment Lab. <br><br>Please take a look around and get a feel for my design process. I hope to hear back from you!"},
{"key":"2tg",
    "intro":"I'm a highly adaptable UX designer looking to immerse myself in a fast paced, experiment driven environment where I am constantly challenged to push boundaries.",
    "description":
    "I have experience designing at different phases of the design cycle,including:",
    "r1":"&#x1F4AD; Facilitating design thinking workshops to align and ideate solutions at IBM.",
    "r2":"&#x1F9EA; Experimenting with new ideas to raise funding for public radio at WBUR's innovation lab.",
    "r3":"<br>&#x1F4CB; Conducting exploratory UX research to use VR to help enrich lives at Cornell's Virtual Embodiment Lab.<br><br>Please take a look around and get a feel for my design process. I hope to hear back from you!"},
{"key":"3gu",
    "intro":"I'm a data driven UX designer. Data (qualitative and quantitative) is at the center of my design process. It guides me through ideation, every following design iteration and enables me to craft relatable stories to share with my stakeholders.",
    "description":
    "I have extensive experience using data in my work, including:",
    "r1":"&#x1F4CA; Creating data visualizations to help users easily understand their complex billing structures at IBM.",
    "r2":"&#x1F4C8; Using web metrics to measure design experiments at WBUR's innovation lab.",
    "r3":"&#x1F4DD; Analyzing tens of thousands of rows of movement data while conducting exploratory UX research aimed to enrich lives at Cornell's Virtual Embodiment Lab. <br><br> Please take a look around and get a feel for my design process. I hope to hear back from you!"}]

var result = content.filter(content => {
    return content.key===theKey
})

console.log(splitStr)
console.log(result)

window.onload = function(){
    if (dd.includes("msg")){
        document.getElementById('mess').innerHTML = "&#x1F44B; Hi, " + splitStr +" hiring team!";
        document.getElementById('thnx').innerHTML = "Thanks for dropping by."
        document.getElementById('prev').innerHTML = result[0].intro + " " + result[0].description;
        document.getElementById('reasons').remove()
        document.getElementById('r1').innerHTML = result[0].r1;
        document.getElementById('r2').innerHTML = result[0].r2;
        document.getElementById('r3').innerHTML = result[0].r3;
    }
};