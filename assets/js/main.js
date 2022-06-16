(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    default: ["1681px", null],
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  $(window).on("load", function () {
    // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({ "overflow-y": "visible" });
  });

  var sanitized = window.location.href
    .replace(/\en\//, "en")
    .replace(/\pt\//, "pt");

  window.onload = function urlChange() {
    //window.history.pushState({}, null, sanitized);
    window.history.replaceState({}, null, sanitized);

    if (window.location.hash.length > 0) {
      if (typeof $(window.location.hash).offset() !== "undefined")
        window.scrollTo(0, $(window.location.hash).offset().top);
    }
  };

  // Hack: Enable IE workarounds.
  if (browser.name == "ie") $body.addClass("is-ie");

  // Language icon
  //lang = "en"
  var href = location.href;
  lang = href.replace(/#.*/, "").match(/([^\/]*)\/*$/)[1];

  if (lang != "en" && lang != "pt") lang = "en";

  if (browser.mobile) {
    $("#language_div").css("margin-right", "-15px");
    $("#language_img").css("width", "60%");
  }

  if (lang == "pt") {
    $("#language_a").attr("href", "en");

    if (browser.mobile)
      $("#language_img").attr("src", "../assets/images/languages/en-white.png");
    else
      $("#language_img").attr("src", "../assets/images/languages/en-grey.png");
  } else {
    $("#language_a").attr("href", "pt");

    if (browser.mobile)
      $("#language_img").attr("src", "../assets/images/languages/pt-white.png");
    else
      $("#language_img").attr("src", "../assets/images/languages/pt-grey.png");
  }

  // Mobile?
  if (browser.mobile) $body.addClass("is-mobile");

  // Scrolly.
  $(".scrolly").scrolly({
    offset: 100,
  });

  // Fancybox
  Fancybox.bind("[data-fancybox]", {
    infinite: true,
    click: false,
    Image: {
      zoom: false,
      click: "toggleZoom",
      wheel: "zoom",
      Panzoom: {
        //zoomFriction: 0.99,
        maxScale: function () {
          return 3;
        },
      },
    },
    Carousel: {
      friction: 0.4,
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
    },
  });

  // Fill up information
  var index = 0;
  $(projects.categorys).each(function (i, category) {
    var category_name = category.name[lang];
    var category_path_images = category.config.paths.images;

    $(category.subcategories).each(function (i, subcategory) {
      var subcategory_name = subcategory.name[lang];
      var subcategory_path_images = subcategory.config.paths.images;

      var pieces = "";
      $(subcategory.pieces).each(function (i, piece) {
        var piece_name = piece.name[lang];
        var piece_slug = piece_name
          .toLowerCase()
          .replace(/ /g, "-")
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "");

        var carousel_slides = "";
        $(piece.images).each(function (i, image) {
          var image_caption = image.caption[lang];

          var paths_images = category_path_images + subcategory_path_images;
          var image_path =
            window.location.href
              .replace(/#.*/, "")
              .replace(/\en\//, "")
              .replace(/\pt\//, "") +
            paths_images +
            image.name;

          if (i == 0) src_image = "src";
          else src_image = "data-lazy-src";

          carousel_slides +=
            '<div id="' +
            piece_slug +
            '" class="carousel__slide">' +
            '<a class="project_images" data-width="1080" data-height="900" data-thumb="' +
            image_path +
            '-75.png" data-fancybox="gallery"' +
            'data-slug="' +
            piece_slug +
            '" data-srcset="' +
            image_path +
            '.png" data-caption="<strong>' +
            category_name +
            "</strong> > <strong>" +
            subcategory_name +
            "</strong><br>" +
            piece_name +
            "<br>" +
            image_caption +
            '<br>">' +
            '<img class="carousel_img"' +
            src_image +
            '="' +
            image_path +
            '.png">' +
            "</a>" +
            "</div>";
        });

        index = index + 1;
        pieces +=
          '<div class="carousel carousel' +
          index +
          '">' +
          carousel_slides +
          "</div>";
      });

      var category_on_first_piece = "";
      if (i == 0) category_on_first_piece = category_name;
      else category_on_first_piece = "";

      var section_element =
        "<section>" +
        "<header>" +
        '<h3 class="color_white">' +
        category_on_first_piece +
        "</h3>" +
        '<p class="color_white">' +
        subcategory_name +
        "</p>" +
        "</header>" +
        '<div class="content">' +
        '<div class="gallery">' +
        pieces +
        "</div>" +
        "</div>" +
        "</section>";

      $("#all_projects").append(section_element);
    });
  });

  for (var n = index; n > 0; n--) {
    new Carousel(document.querySelector(".carousel" + n), {
      slidesPerPage: 1,
      infinite: false,
      fill: false,
      center: true,
    });
  }

  $(main).each(function (i, item) {
    //intro
    $("#mainImage").attr("src", item.intro.image);
    $("#portfolio_intro").html(item.intro.portfolio[lang]);
    $("#bio_intro").html(item.intro.bio[lang]);
    $("#contact_intro").html(item.intro.contact[lang]);

    //creating_opportunities
    $("#creating_opportunities_title").html(
      item.creating_opportunities.title[lang]
    );
    $("#creating_opportunities_text").html(
      item.creating_opportunities.text[lang]
    );
    $("#creating_opportunities_image").attr(
      "src",
      item.creating_opportunities.image
    );

    //projects
    $("#projects_title").html(item.projects.title[lang]);
    $("#projects_text").html(item.projects.text[lang]);

    //carrer_path
    $("#carrer_path_title").html(item.carrer_path.title[lang]);
    $("#carrer_path_description").html(item.carrer_path.text[lang]);

    //carrer_path_education
    $("#carrer_path_subsections_education_title").html(
      item.carrer_path.subsections.education.title[lang]
    );

	//carrer_path_courses
	$("#carrer_path_subsections_courses_title").html(
		item.carrer_path.subsections.education.courses.title[lang]
	);

    var courses = "";
    $(item.carrer_path.subsections.education.courses.items).each(function (i, item) {
      courses +=
        '<li class="icon solid ' +
        item.favicon +
        '"> ' +
        item.name[lang] +
        "</li>";
    });
    $("#ul_courses").append(courses);

    //carrer_path_workshops
    $("#carrer_path_subsections_workshops_title").html(
      item.carrer_path.subsections.education.workshops.title[lang]
    );

    var workshops = "";
    $(item.carrer_path.subsections.education.workshops.items).each(function (
      i,
      item
    ) {
      workshops +=
        '<li class="icon solid ' +
        item.favicon +
        '"> ' +
        item.name[lang] +
        "</li>";
    });
    $("#ul_workshops").append(workshops);

    //carrer_path_minicourses
    $("#carrer_path_subsections_minicourses_title").html(
      item.carrer_path.subsections.education.minicourses.title[lang]
    );

    var minicourses = "";
    $(item.carrer_path.subsections.education.minicourses.items).each(function (
      i,
      item
    ) {
      minicourses +=
        '<li class="icon solid ' +
        item.favicon +
        '"> ' +
        item.name[lang] +
        "</li>";
    });
    $("#ul_minicourses").append(minicourses);

    //carrer_path_work
    $("#carrer_path_subsections_work_title").html(
      item.carrer_path.subsections.work.title[lang]
    );

    var work = "";
    $(item.carrer_path.subsections.work.items).each(function (i, item) {
      work +=
        '<li class="icon solid ' +
        item.favicon +
        '"> ' +
        item.name[lang] +
        "</li>";
    });
    $("#work_ul").append(work);

    //carrer_path_skills
    $("#carrer_path_subsections_skills_title").html(
      item.carrer_path.subsections.skills.title[lang]
    );

    var skills = "";
    $(item.carrer_path.subsections.skills.items).each(function (i, item) {
      skills +=
        '<li class="icon solid ' +
        item.favicon +
        '"> ' +
        item.name[lang] +
        "</li>";
    });
    $("#skills_ul").append(skills);

    //langugaes
    $("#carrer_path_subsections_languages_title").html(
      item.carrer_path.subsections.languages.title[lang]
    );

    var languages = "";
    $(item.carrer_path.subsections.languages.items).each(function (i, item) {
      languages +=
        '<li class="icon solid ' +
        item.favicon +
        '"> ' +
        item.name[lang] +
        "</li>";
    });
    $("#languages_ul").append(languages);

    //get_in_touch
    $("#getintouch_image").attr("src", item.get_in_touch.image);
    $("#getintouch_title").html(item.get_in_touch.title[lang]);
    $("#getintouch_text").html(item.get_in_touch.text[lang]);
    $("#getintouch_addresstitle").html(item.get_in_touch.addresstitle[lang]);
    $("#getintouch_elsewhere").html(item.get_in_touch.elsewhere[lang]);
    $("#getintouch_address").html(item.get_in_touch.address[lang]);
    $("#getintouch_linkedin").attr("href", item.get_in_touch.linkedin[lang]);
    $("#getintouch_email").html(item.get_in_touch.email);
  });
})(jQuery);

// favicon light and dark
matcher = window.matchMedia("(prefers-color-scheme: dark)");
matcher.addListener(onUpdate);
onUpdate();

function onUpdate() {
  lightSchemeIcon = document.querySelector("link#light-scheme-icon");
  darkSchemeIcon = document.querySelector("link#dark-scheme-icon");

  if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}
