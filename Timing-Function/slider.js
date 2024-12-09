let quotes = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fbackground&psig=AOvVaw0RnAL-4350GSEeNWf1ZeLV&ust=1732956804302000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiR2r2VgYoDFQAAAAAdAAAAABAE",
    "/image/7.jpg",
    "/image/8.jpg",
    "/image/9.jpg",
    "/image/10.jpg",
    "./image/11.jpg"

    // { 
    //     text: "2.Life is what happens when you're busy making other plans.", author: "John Lennon"
    // },

    // {  text: "3.Get busy living or get busy dying.",author:" Stephen King"
        
    // },

    // { 
    //     text:"4.You only live once, but if you do it right, once is enough.", author: "Mae West"
    // },

    // {
    //     text: " 5.Many of life’s failures are people who did not realize how close they were to success when they gave up.",author:" Thomas A. Edison"
    // },

]


let currentindex = 0;
let intervalid;

const showdisplay = (index) => {
    let text = document.getElementById('sldImsg');
    // let author = document.getElementById('quotes-author');
    text.setAttribute("src", `.${quotes[index]}`)
    // text.innerHTML = `" ${quotes[index].text} "`
    // author.innerHTML = `" ${quotes[index].author} "`

};

// showdisplay(currentindex)

document.getElementById('start-btn').addEventListener('click',() =>{
    intervalid = setInterval(()=>{
        currentindex = (currentindex + 1) % quotes.length;
        showdisplay(currentindex);
    },5000)

});

document.getElementById('stop-btn').addEventListener('click',() =>{
    clearInterval(intervalid);
    console.log('stop');
});
