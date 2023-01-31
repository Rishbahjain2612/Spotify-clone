console.log("Welcome to Soptify");
let index = 0;

let masterPlay = document.getElementById('masterPlay')
let stepBack = document.getElementById('stepBack')
let stepForward = document.getElementById('stepForward')
let gif = document.getElementById('gif');

let progressBar = document.getElementById('progressBar')
let audioElement = new Audio('songs/0.mp3');




let songs = [
    {songName: 'Dance Monkey'        , filePath:'songs/0.mp3', coverPath:'covers/01.jpg' },
    {songName: 'Chand Sifarish'      , filePath:'songs/1.mp3', coverPath:'covers/02.jpg' },
    {songName: 'Pal'                 , filePath:'songs/2.mp3', coverPath:'covers/03.jpg' },
    {songName: 'Pasoori'             , filePath:'songs/3.mp3', coverPath:'covers/04.jpg' },
    {songName: 'Chaudhary'           , filePath:'songs/4.mp3', coverPath:'covers/05.jpg' },
    {songName: 'Mexico Koka'         , filePath:'songs/5.mp3', coverPath:'covers/06.jpg' },
    {songName: 'Why this Kolaveri Di', filePath:'songs/6.mp3', coverPath:'covers/07.jpg' },
]




masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity='1';
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity='0';
    }
})


// audioElement.play();

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress =  parseInt ( (audioElement.currentTime/audioElement.duration) *100);
    
    progressBar.value = progress; 
})

progressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
       
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        
        index = parseInt(e.target.id);
        
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${index}.mp3`;
        masterSong.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity='1';
       
        
    })
});

document.getElementById('stepBack').addEventListener('click', ()=>{
    if(index<=0){
        index = 6
    }
    else{
        index-=1;
    }
    
    audioElement.src = `songs/${index}.mp3`;
    masterSong.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('stepForward').addEventListener('click', ()=>{
    if(index>=6){
        index = 0
    }
    else{
        index+=1;
    }

    
    audioElement.src = `songs/${index}.mp3`;
    masterSong.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})