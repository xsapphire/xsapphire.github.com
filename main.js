/**
 * Created by SS on 10/5/2017.
 */
(function(){
    // render nav
    $("#project-navbar").append('<nav class="navbar navbar-expand-lg navbar-light bg-faded"><a class="navbar-brand" href="../index.html">' +
        '<img src="../img/icon.png" width="140" height="140" alt="icon" style="padding: 10px;"></a><button ' +
        'class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="' +
        'navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon">' +
        '</span></button><div id="navbarNavDropdown" class="navbar-collapse collapse"><ul class="navbar-nav mr-auto">' +
        '</ul><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" href="../index.html">Design Works</a>' +
        '</li><li class="nav-item"><a class="nav-link" href="../digitalPainting.html">Digital Paintings</a></li>' +
        '<li class="nav-item dropdown"><a class="nav-link" href="../about.html">About</a></li></ul></div></nav>');

    // Render footer
    $("#footer").append('<p class="text-center-align">&#169; Copyright Jinglin Shan &#9900; 2017 - 2018 &#9900; ' +
        '<a href="https://www.linkedin.com/in/jinglin-shan/">Linkedin</a></p>');



})();