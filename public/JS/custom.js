$(document).ready(function(){
    $(".content-section:first").show().addClass("is-current");
    $(".nav-header:first").addClass("is-current"); 
    $(".content-section #next-step").click(function(){
        console.log("clicked");
        var selectedTab = $(".article-list-wrapper").find(".content-section.is-current");
        var selectedId = selectedTab.attr("id");
        var navId = $(".left-nav").find(".nav-header.is-current").attr("id");
        if (selectedId == navId ){
            selectedTab.removeClass("is-current").addClass("is-complete");
            $(".left-nav").find(".nav-header.is-current").removeClass("is-current").addClass("is-complete");
            $(".content-section.is-complete").hide();
            selectedTab.next('.content-section').addClass('is-current');
            $(".left-nav").find(".nav-header.is-complete").next('.nav-header').addClass('is-current');
        } 
        if ($(".content-section:first").hasClass("is-complete")){
            $(".article-list-nav").hide();
        }
    });
}); 