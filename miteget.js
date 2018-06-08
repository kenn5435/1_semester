(function () {

    var aboutEl = $('section.omMig'),
        aboutElOffset = aboutEl.offset().top / 2,
        documentEl = $(document);

    documentEl.on('scroll', function () {
        if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden');
    });


})();
