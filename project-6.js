let quotes = [
    {
        text:"1.The purpose of our lives is to be happy.", author: " Dalai Lama"
    },

    { 
        text: "2.Life is what happens when you're busy making other plans.", author: "John Lennon"
    },

    {  text: "3.Get busy living or get busy dying.",author:" Stephen King"
        
    },

    { 
        text:"4.You only live once, but if you do it right, once is enough.", author: "Mae West"
    },

    {
        text: " 5.Many of life’s failures are people who did not realize how close they were to success when they gave up.",author:" Thomas A. Edison"
    },

]
console.log(quotes)


let currentIndex = 0;

function latestQuote() {
    let text = document.getElementById('quotes-text');
    let author = document.getElementById('quotes-author');
    if (text && author) {
        text.innerHTML = `"${quotes[currentIndex].text}"`;
        author.innerHTML =` -${quotes[currentIndex].author}`;
    }
}

function next() {
    currentIndex = (currentIndex + 1) % quotes.length; 
    latestQuote();
}

function prevues() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length; 
    latestQuote();
}

latestQuote()