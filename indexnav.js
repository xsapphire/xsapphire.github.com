/**
 * Created by SS on 4/6/2018.
 */
(function () {
    var projectSection = document.querySelector("#project-section");
    var aboutSection = document.querySelector("#about-section");
    var gallerySection = document.querySelector("#gallery-section");

    const sectionContainers = [projectSection, aboutSection, gallerySection];

    var projectNav = document.querySelector("#work-nav");
    var aboutNav = document.querySelector("#about-nav");
    var galleryNav = document.querySelector("#gallery-nav");

    var curActiveSection = projectSection;
    var curActiveNav = projectNav;

    function switchViews (newSection, newNav) {
        // Hide all sections that are not new Section
        sectionContainers.forEach(function(container){
            if (container !== newSection){
                container.style.display = 'none';
            } else {
                container.style.display = 'block';
            }
        });
        curActiveSection = newSection;

        $(curActiveNav).removeClass ('active');
        $(newNav).addClass('active');
        curActiveNav = newNav;
    }

    $("#about-nav").click(function(){
        console.log("clicked");
        switchViews(aboutSection, aboutNav);
    });

    $("#gallery-nav").click(function(){
        switchViews(gallerySection, galleryNav);
    });

    $("#work-nav").click(function(){
        switchViews(projectSection, projectNav);
    });
})();