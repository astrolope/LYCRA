/*



Copyright Garrett Criss
*/

var LYCRA = LYCRA || {}

LYCRA.Loader = function (element) {
    this.assets;

    this.preload = new createjs.LoadQueue(true);

    this.preload.on("progress", handleFileProgress);
    this.preload.on("complete", loadComplete);
    this.preload.on("error", loadError);
    this.preload.loadManifest(this.assets);
}

LYCRA.Loader.prototype = {
    initLoader: function () {
        this.preloaderEl = document.createElement("div");
        this.preloaderEl.classList.add("preloader");
        this.preloaderEl.innerHTML = "0";

        element.appendChild(this.preloaderEl);
    },
    startLoading: function () {

    },
    removeLoader: function () {
        
    }
}