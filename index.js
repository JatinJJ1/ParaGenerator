const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

function generateWord(n){
    let text = "";
    for(let i=0; i<n; i++){
        text+="JJ ";
    }
    
    return text;
};

let numberOfWords;
function generatePara(){
    numberOfWords= Number(input.value);

    const para = document.createElement("p");
    para.innerText = generateWord(numberOfWords);
    // alert("hi");
    para.setAttribute("class", "paras");

    container.append(para);
};