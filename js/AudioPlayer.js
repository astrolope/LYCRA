/*



Copyright Garrett Criss
*/

var LYCRA = LYCRA || {}

LYCRA.Audio = function (audio) {

    this.activeSound;
    this.playing = false;

    this.soundParams = {
        playState: true,
        volume: 0.5
    }
}

LYCRA.Audio.prototype = {
    init: function () {

    },
    toggleSound: function (state) {
        //var that = this;

        //console.log(map.soundParams);
        if (this.soundParams.playState === false) {
            //turn sound on
            this.activeSound.fade(0, this.soundParams.volume, 1000);
            this.soundParams.playState = true;
            //map.audioButton.src = `${map.globalData.assetUrl}images/sidebar/audio-on.png`;

        } else {
            //turn sound off
            this.activeSound.fade(this.soundParams.volume, 0, 1000);
            this.soundParams.playState = false;
            //map.audioButton.src = `${map.globalData.assetUrl}images/sidebar/audio-off.png`;
            //Howler.muted(true);
            //map.backgroundSound.stop();
        }
    },
    isPlaying: function () {
        return this.soundParams.playState;
    }
}