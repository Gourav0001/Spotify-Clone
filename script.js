console.log("Welcome to Spotify - Clone")


// Initializing Variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let Songs = [
    {SongName : "Summer High", filepath: "Songs/1.mp3", coverPath: "Covers/1.jpg"},
    {SongName : "Chitta Kurta", filepath: "Songs/2.mp3", coverPath: "Covers/2.jpg"},
    {SongName : "Mexico", filepath: "Songs/3.mp3", coverPath: "Covers/3.jpg"},
    {SongName : "We Rollin", filepath: "Songs/4.mp3", coverPath: "Covers/4.jpg"},
    {SongName : "Badmashi", filepath: "Songs/5.mp3", coverPath: "Covers/5.jpg"},
    {SongName : "Palazzo", filepath: "Songs/6.mp3", coverPath: "Covers/6.jpg"},
    {SongName : "Brown Munde", filepath: "Songs/7.mp3", coverPath: "Covers/7.jpg"},
    {SongName : "Putt Jatt Da", filepath: "Songs/8.mp3", coverPath: "Covers/8.jpg"},
    {SongName : "Mitran Da Junction", filepath: "Songs/9.mp3", coverPath: "Covers/9.jpg"},
    {SongName : "5 Taara", filepath: "Songs/10.mp3", coverPath: "Covers/10.jpg"},
]

songItems.forEach((element, i) =>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = Songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerHTML = Songs[i].SongName;

})

// Handling Play/Pause Click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused ||audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to Event. 
audioElement.addEventListener('timeupdate', () =>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;
})
myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressbar.value * audioElement.duration)/100);
}) 

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex}.mp3`;
        masterSongName.innerText = Songs[songIndex - 1].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = Songs[songIndex - 1].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 1
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = Songs[songIndex - 1].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})