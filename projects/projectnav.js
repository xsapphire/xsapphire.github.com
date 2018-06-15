/**
 * Created by SS on 4/6/2018.
 */
(function(){

    var curURL = window.location.href;
    console.log(curURL.toString());
    var rootURL = curURL.toString().split("projects")[0];
    console.log(rootURL);

    $("#work-nav").click(function(){
        window.location.href = rootURL+"index.html";
    });
})();