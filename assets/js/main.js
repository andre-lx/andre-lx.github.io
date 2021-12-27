(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        default: ['1681px', null],
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Hack: Enable IE workarounds.
    if (browser.name == 'ie')
        $body.addClass('is-ie');

    // Mobile?
    if (browser.mobile)
        $body.addClass('is-mobile');

    // Scrolly.
    $('.scrolly')
        .scrolly({
            offset: 100
        });



    // Fancybox
    Fancybox.bind("[data-fancybox]", {
        infinite: true,
        click: "next",
        Image: {
            zoom: false,
        },
        Carousel: {
            friction: 0.4,
        },
        Panzoom: {
            zoomFriction: 0.99,
            maxScale: 50,
            step: 0.1,
            baseScale: 2,
        },
        Toolbar: {
            display: [
                { id: "prev", position: "center" },
                { id: "counter", position: "center" },
                { id: "next", position: "center" },
                "zoom",
                "fullscreen",
                "thumbs",
                "close",
                //"slideshow",
            ],
        }
    });

    // Fill up information
    //lang = "en"
    var href = location.href;
    lang = href.match(/([^\/]*)\/*$/)[1];

    if (lang != "en" && lang != "pt")
        lang = "en"

    $(projects.projects).each(function(i, item) {

        var parent_title = item.title[lang]
        var paths_images = projects.config.paths.images
        var paths_thumbnails = projects.config.paths.thumbnails

        var images = ""
        $(item.images).each(function(i, item) {

            not_visible_class = "hiddenimages"
            if (item.visible)
                not_visible_class = ""

            images += '<a class="projects_images ' + not_visible_class + '" data-fancybox="gallery" data-src="' + paths_images + item.fullimage + '" data-caption="<strong>' + parent_title + '</strong><br>' + item.caption[lang] + '">' +
                '<img src="' + paths_thumbnails + item.thumbnail + '" />' +
                '</a>'
        });

        var section_element = '<section>' +
            '<header>' +
            '<h3 class="color_white">' + item.title[lang] + '</h3>' +
            '<p class="color_white">' + item.description[lang] + '</p>' +
            '</header>' +
            '<div class="content">' +
            '<div class="gallery">' +
            images +
            '</div>' +
            '</div>' +
            '</section>';

        $("#all_projects").append(section_element)
    })

    $(main).each(function(i, item) {

        //intro
        $("#mainImage").attr("src", item.intro.image)

        //creating_opportunities
        $("#creating_opportunities_title").html(item.creating_opportunities.title[lang])
        $("#creating_opportunities_text").html(item.creating_opportunities.text[lang])
        $("#creating_opportunities_image").attr("src", item.creating_opportunities.image)

        //projects
        $("#projects_title").html(item.projects.title[lang])
        $("#projects_text").html(item.projects.text[lang])

        //carrer_path
        $("#carrer_path_title").html(item.carrer_path.title[lang])

        //carrer_path_education
        $("#carrer_path_subsections_education_title").html(item.carrer_path.subsections.education.title[lang])
        $("#carrer_path_subsections_education_text").html(item.carrer_path.subsections.education.text[lang])

        var education = ""
        $(item.carrer_path.subsections.education.courses).each(function(i, item) {
            education += '<li class="icon solid ' + item.favicon + '"> ' + item.name[lang] + '</li>'
        });
        $("#education_ul").append(education)

        //carrer_path_minicourses
        $("#carrer_path_subsections_minicourses_title").html(item.carrer_path.subsections.education.minicourses.title[lang])

        var minicourses = ""
        $(item.carrer_path.subsections.education.minicourses.items).each(function(i, item) {
            minicourses += '<li class="icon solid ' + item.favicon + '"> ' + item.name[lang] + '</li>'
        });
        $("#ul_minicourses").append(minicourses)

        //carrer_path_work
        $("#carrer_path_subsections_work_title").html(item.carrer_path.subsections.work.title[lang])
        $("#carrer_path_subsections_work_text").html(item.carrer_path.subsections.work.text[lang])

        var work = ""
        $(item.carrer_path.subsections.work.items).each(function(i, item) {
            work += '<li class="icon solid ' + item.favicon + '"> ' + item.name[lang] + '</li>'
        });
        $("#work_ul").append(work)

        //carrer_path_skills
        $("#carrer_path_subsections_skills_title").html(item.carrer_path.subsections.skills.title[lang])
        $("#carrer_path_subsections_skilss_text").html(item.carrer_path.subsections.skills.text[lang])

        var skills = ""
        $(item.carrer_path.subsections.skills.items).each(function(i, item) {
            skills += '<li class="icon solid ' + item.favicon + '"> ' + item.name[lang] + '</li>'
        });
        $("#skills_ul").append(skills)

        //get_in_touch
        $("#getintouch_image").attr("src", item.get_in_touch.image)
        $("#getintouch_title").html(item.get_in_touch.title[lang])
        $("#getintouch_text").html(item.get_in_touch.text[lang])
        $("#getintouch_addresstitle").html(item.get_in_touch.addresstitle[lang])
        $("#getintouch_elsewhere").html(item.get_in_touch.elsewhere[lang])
        $("#getintouch_address").html(item.get_in_touch.address[lang])
        $("#getintouch_email").html(item.get_in_touch.email)
    })

})(jQuery);

// favicon light and dark
matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

function onUpdate() {
    lightSchemeIcon = document.querySelector('link#light-scheme-icon');
    darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

    if (matcher.matches) {
        lightSchemeIcon.remove();
        document.head.append(darkSchemeIcon);
    } else {
        document.head.append(lightSchemeIcon);
        darkSchemeIcon.remove();
    }
}