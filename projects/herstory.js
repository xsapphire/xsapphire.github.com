/**
 * Created by SS on 4/5/2018.
 */
(function () {
    /* --  Expand Pictures -- */
    var wireframe1modal = document.getElementById('wireframe1Modal');
    var wireframeA = document.getElementById('wireframe1');
    var modalWireframeA = document.getElementById("modalwireframe1");
    wireframeA.onclick = function(){
        wireframe1modal.style.display = "block";
        modalWireframeA.src = this.src;
    }

    var wireframe2modal = document.getElementById('wireframe2Modal');
    var wireframeB = document.getElementById('wireframe2');
    var modalWireframeB = document.getElementById("modalwireframe2");
    wireframeB.onclick = function(){
        wireframe2modal.style.display = "block";
        modalWireframeB.src = this.src;
    }

    var wireframe3modal = document.getElementById('wireframe3Modal');
    var wireframeC = document.getElementById('wireframe3');
    var modalWireframeC = document.getElementById("modalwireframe3");
    wireframeC.onclick = function(){
        wireframe3modal.style.display = "block";
        modalWireframeC.src = this.src;
    }

    var taskAmodal = document.getElementById('taskAModal');
    var taskA = document.getElementById('taskA');
    var modaltaskA = document.getElementById("modaltaskA");
    taskA.onclick = function(){
        taskAmodal.style.display = "block";
        modaltaskA.src = this.src;
    }

    var taskBmodal = document.getElementById('taskBModal');
    var taskB = document.getElementById('taskB');
    var modaltaskB = document.getElementById("modaltaskB");
    taskB.onclick = function(){
        taskBmodal.style.display = "block";
        modaltaskB.src = this.src;
    }

    var taskCmodal = document.getElementById('taskCModal');
    var taskC = document.getElementById('taskC');
    var modaltaskC = document.getElementById("modaltaskC");
    taskC.onclick = function(){
        taskCmodal.style.display = "block";
        modaltaskC.src = this.src;
    }

    var DMAmodal = document.getElementById('designMoodAModal');
    var DMA = document.getElementById('designMoodA');
    var DMAimg = document.getElementById("designMoodAImg");
    DMA.onclick = function(){
        DMAmodal.style.display = "block";
        DMAimg.src = this.src;
    }

    var DMBmodal = document.getElementById('designMoodBModal');
    var DMB = document.getElementById('designMoodB');
    var DMBimg = document.getElementById("designMoodBImg");
    DMB.onclick = function(){
        DMBmodal.style.display = "block";
        DMBimg.src = this.src;
    }

    var DMCmodal = document.getElementById('designMoodCModal');
    var DMC = document.getElementById('designMoodC');
    var DMCimg = document.getElementById("designMoodCImg");
    DMC.onclick = function(){
        DMCmodal.style.display = "block";
        DMCimg.src = this.src;
    }

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close");
    console.log(span);
// When the user clicks on <span> (x), close the modal
    for (var i = 0; i < span.length; i++){
        span[i].addEventListener("click", function(){
            wireframe1modal.style.display = "none";
            wireframe2modal.style.display = "none";
            wireframe3modal.style.display = "none";
            taskAmodal.style.display = "none";
            taskBmodal.style.display = "none";
            taskCmodal.style.display = "none";
            DMAmodal.style.display = "none";
            DMBmodal.style.display = "none";
            DMCmodal.style.display = "none";
        });
    }
})();