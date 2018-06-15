/**
 * Created by SS on 4/5/2018.
 */
(function () {
    var sampleABeforeModal = document.getElementById('sampleABeforeModal');
    var sampleABefore = document.getElementById('sampleABefore');
    var sampleABeforeImg = document.getElementById("sampleABeforeImg");
    sampleABefore.onclick = function(){
        sampleABeforeModal.style.display = "block";
        sampleABeforeImg.src = this.src;
    }

    var sampleAAfterModal = document.getElementById('sampleAAfterModal');
    var sampleAAfter = document.getElementById('sampleAAfter');
    var sampleAAfterImg = document.getElementById("sampleAAfterImg");
    sampleAAfter.onclick = function(){
        sampleAAfterModal.style.display = "block";
        sampleAAfterImg.src = this.src;
    }

    var sampleBBeforeModal = document.getElementById('sampleBBeforeModal');
    var sampleBBefore = document.getElementById('sampleBBefore');
    var sampleBBeforeImg = document.getElementById("sampleBBeforeImg");
    sampleBBefore.onclick = function(){
        sampleBBeforeModal.style.display = "block";
        sampleBBeforeImg.src = this.src;
    }

    var sampleBAfterModal = document.getElementById('sampleBAfterModal');
    var sampleBAfter = document.getElementById('sampleBAfter');
    var sampleBAfterImg = document.getElementById("sampleBAfterImg");
    sampleBAfter.onclick = function(){
        sampleBAfterModal.style.display = "block";
        sampleBAfterImg.src = this.src;
    }

    var sampleCBeforeModal = document.getElementById('sampleCBeforeModal');
    var sampleCBefore = document.getElementById('sampleCBefore');
    var sampleCBeforeImg = document.getElementById("sampleCBeforeImg");
    sampleCBefore.onclick = function(){
        sampleCBeforeModal.style.display = "block";
        sampleCBeforeImg.src = this.src;
    }

    var sampleCAfterModal = document.getElementById('sampleCAfterModal');
    var sampleCAfter = document.getElementById('sampleCAfter');
    var sampleCAfterImg = document.getElementById("sampleCAfterImg");
    sampleCAfter.onclick = function(){
        sampleCAfterModal.style.display = "block";
        sampleCAfterImg.src = this.src;
    }


    var span = document.getElementsByClassName("close");
    for (var i = 0; i < span.length; i++){
        span[i].addEventListener("click", function(){
            sampleABeforeModal.style.display = "none";
            sampleAAfterModal.style.display = "none";
            sampleBBeforeModal.style.display = "none";
            sampleBAfterModal.style.display = "none";
            sampleCBeforeModal.style.display = "none";
            sampleCAfterModal.style.display = "none";
        });
    }
})();