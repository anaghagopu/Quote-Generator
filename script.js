const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const x_twitterBtn = document.querySelector(".x-twitter");


function randomQuote(){
    quoteBtn.innerText = "Loading...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
    });
};

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

x_twitterBtn.addEventListener("click", ()=>{
    let postUrl = `https://x.com/intent/post?url=${quoteText.innerText}`;
    window.open(postUrl, "_black");
});

quoteBtn.addEventListener("click", randomQuote);