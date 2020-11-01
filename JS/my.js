// Elemek kigyüjtése

let buttonH1 = document.getElementById('buttonh1');
let buttonP = document.getElementById('buttonp');
let buttonStrong = document.getElementById('buttonstrong');
let buttonRed = document.getElementById('buttonsRed');
let input = document.getElementById('input');
let output = document.getElementById('output');

RenderOutput();

// események és eseménykezelők
buttonH1.addEventListener('click', OnClickH1);
buttonP.addEventListener('click', OnClickP);
buttonStrong.addEventListener('click', OnClickStrong);
buttonRed.addEventListener('click', OnClickRed);
input.addEventListener('keyup', RenderOutput);

function GetWrapperSelection(text, start,end,startTag,endTag){
    let left = text.slice(0,start);
    let middle = text.slice(start,end);
    let right = text.slice(end);
    let newText = `${left}${startTag}${middle}${endTag}${right}`;
    return newText;
}
function OnClickH1(){
    let startTag = "<h1>"
    let endTag = "</h1>"
    Changer(startTag,endTag);
}
function OnClickP(){
    let startTag = "<p>"
    let endTag = "</p>"
    Changer(startTag,endTag);
}
function OnClickStrong(){
    let startTag = "<strong>"
    let endTag = "</strong>"
    Changer(startTag,endTag);
}

function OnClickRed(){
    let startTag = "<span style='color:red'>"
    let endTag = "</span>"
    Changer(startTag,endTag);
}

function Changer(startTag,endTag){
    let text = $("#input").text();
    startTag = startTag;
    endTag = endTag;
    let start = input.selectionStart;
    let end = input.selectionEnd;
    input.value = GetWrapperSelection(text, start,end,startTag,endTag);
    RenderOutput();
}

function RenderOutput() {
    let html = $("#input").val()
    output.innerHTML = html;
}