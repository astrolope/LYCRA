/*



Copyright Garrett Criss
*/

var LYCRA = LYCRA || {}

LYCRA.Audio = function (audio) {

    this.state = {};

    this.activeSound = {};
    this.playing = false;

    this.soundParams = {
        playState: true,
        volume: 0.5
    }
}

LYCRA.Audio.prototype = {
    // @param: An array of sounds
    init: function (sounds) {

        this.activeSound = new Howl({
            src: sounds,
            autoplay: true,
            loop: true,
            volume: 0,
            onend: function () {
                //console.log('Finished!');
            }
        });
    },
    stopSound: function ()  {
        this.activeSound.stop();
    },
    playSound: function () {
        this.activeSound.play();
    },
    toggleSound: function (state) {
        //var that = this;

        //console.log(map.soundParams);
        if (this.soundParams.playState === false) {
            //turn sound on
            this.activeSound.fade(0, this.soundParams.volume, 1000);
            this.soundParams.playState = true;

        } else {
            //turn sound off
            this.activeSound.fade(this.soundParams.volume, 0, 1000);
            this.soundParams.playState = false;

        }
    },
    isPlaying: function () {
        return this.soundParams.playState;
    }
}