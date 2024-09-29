let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) =>{
    let speakInput = new SpeechSynthesisUtterance(input);
    // speakInput.rate = -2;
    speakInput.pitch = 1;
    speakInput.volume = 1;
    speakInput.lang = 'en-US'
    window.speechSynthesis.speak(speakInput);
}
window.onload = () =>{
    // speakFunc("hello i am a coder");
    greetingFanc();
}

const greetingFanc = () =>{
    let date = new Date();
    let hour = date.getHours();
    if(hour >=0 && hour < 12){
        speakFunc("good  morning,How can i help you");
    }else if(hour >=12 && hour < 16){
        speakFunc("good aftermoon sir,How can i help you")
    }else{
        speakFunc("Good evening sir,How can i help you")
    }
}

const startVoiceInput = () =>{
    if('webkitSpeechRecognition' in window)
    {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = (e) =>{
            let spokenText = (e.results[0][0].transcript);
            handleCommands(spokenText.toLowerCase());
            box.classList.remove("btn-box");
            btn.innerHTML = ` <i class="fa-solid fa-maicrophone-lines-slash"></i>`;
        }
        recognition.start();
    }else{
        alert("your Browser does not support voice input !")
    }
}

btn.onclick = () =>{
    box.classList.add("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
}


const handleCommands = (command) =>{
    console.log(command);
    if(command.includes("open code with harry youtube channel") || command.includes("code with harry") || command.includes("channel"))
    {
        speakFunc("opening... code with harry youtube channel");
        window.open("https://www.youtube.com/results?search_query=code+with+harry");
    }
    else if(command.includes("open google") || command.includes("google"))
    {
        speakFunc("opening...google");
        window.open("https://www.google.com");
    }else{
        speakFunc(`your searching are ${command}`)
        window.open(`https://www.google.com/search?q=${command}`)
    }         
}