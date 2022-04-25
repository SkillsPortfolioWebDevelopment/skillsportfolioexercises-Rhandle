const sounds = [
    'Ahha',
    'Backofthenet',
    'Bangoutoforder',
    'Dan',
    'Goal',
    'Hellopartridge',
    'Jurassicpark',
    'Kissmyface',
    'Smellmycheese'
];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    function stopSongs() { // To keep the sounds from overlapping
        sounds.forEach((sound) => {
            const song = document.getElementById(sound);

            song.pause();
            song.currentTime = 0; 
        });
    };

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);

});