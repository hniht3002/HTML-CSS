var getUpdating = document.querySelectorAll(".updating")
    getUpdating.forEach(function(item){
        item.onclick = function() {
            alert("Không biết :)))")
        }
    })

var playBtn = document.querySelector(".play")
var pauseBtn = document.querySelector(".pause")
var getAudio = document.querySelector('.audio')

playBtn.onclick = function() {
    getAudio.play()
}


pauseBtn.onclick = function() {
    getAudio.pause()
}
