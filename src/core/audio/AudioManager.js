export class AudioManager {
    constructor(game) 
    {
        // Propriété(s) de l'instance
        this.game = game;
        this.THREE = this.game.THREE;
        this.camera = this.game.camera.camera;

        // Instance(s)
        this.listener = new this.THREE.AudioListener();
        this.audioLoader = new this.THREE.AudioLoader();

        // Instruction(s)
        this.camera.add(this.listener);

        // Sons stockés
        this.sounds = {}
    }

    loadSound(name, path, loop = false, isPositional = false, volume, rate)
    {
        let sound; 

        if (isPositional)
        {
            // Création d'un son spatial
            sound = new this.THREE.PositionalAudio(this.listener);
        }
        else 
        {
            // Création d'un son standard
            sound = new this.THREE.Audio(this.listener);
        }

        // Charger le fichier
        this.audioLoader.load(path, (buffer) => {

            // Options fournies
            sound.setBuffer(buffer);
            sound.setLoop(loop);
            sound.setVolume(volume);
            sound.setPlaybackRate(rate);

            if (isPositional) {
                sound.setRefDistance(1);      // Distance de référence par défaut
                sound.setMaxDistance(1000);   // Distance max d'écoute par défaut
                sound.setRolloffFactor(1);        // Facteur de décroissance par défaut
            }

            this.sounds[name] = sound;
        })
    }

    playSound(name)
    {
        const sound = this.sounds[name];
        
        if (sound && !sound.isPlaying)
        {
            sound.play();
        }
    }

    stopSound(name)
    {
        const sound = this.sounds[name];

        if (sound && sound.isPlaying)
        {
            sound.stop();
        }
    }
}