const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

/*
function generateWord(n){
    let text = "";
    for(let i=0; i<n; i++){
        text+="JJ ";
    }
    
    return text;
};
*/

/* Based on number of characters provided
  function generateLoremIpsum(length) {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in aliquet ligula. Integer auctor, elit vel luctus interdum, velit sem pharetra nibh, eget dignissim risus erat vel justo. Duis facilisis, risus ut eleifend consequat, nisi nisl egestas magna, eu tristique quam velit vel metus. Proin quis est interdum, congue velit vel, tempor justo. Aenean vel dui non magna faucibus convallis. Sed vel neque vel urna pellentesque sollicitudin ac non sapien. Nam commodo nibh sem, vitae tincidunt nulla fringilla vitae. Aliquam blandit, nisi eu posuere scelerisque, nisi elit fringilla elit, vitae feugiat risus erat eu libero.";
  
    return loremIpsum.substr(0, length);
  }
*/

function generateLoremIpsum(length) {
    const words = [
      "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit.", 
      "Sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
      "magna", "aliqua.", "Ut", "enim", "ad", "minim", "veniam,", "quis", "nostrud", 
      "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", 
      "consequat.", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", 
      "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur.", 
      "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident,", "sunt", "in", 
      "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum."
    ];
    let result = '';
    for (let i = 0; i < length; i++) {
      //result += words[i % words.length] + ' ';
      result += words[(Math.random()*69).toFixed(0)] + ' '; //69 is size of words array.
    }
    return result;
}

let numberOfWords;
function generatePara(){
    numberOfWords= Number(input.value);

    const para = document.createElement("p");
    para.innerText = generateLoremIpsum(numberOfWords);
    // alert("hi");
    para.setAttribute("class", "paras");

    container.append(para);
};