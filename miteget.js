// scroll down effects



(function () {

    var aboutEl = $('section.omMig'),
        aboutElOffset = aboutEl.offset().top / 2,
        documentEl = $(document);

    documentEl.on('scroll', function () {
        if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden');
    });


})();


(function () {

    var aboutEl = $('section.ourWork'),
        aboutElOffset = aboutEl.offset().top / 2,
        documentEl = $(document);

    documentEl.on('scroll', function () {
        if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden');
    });


})();

(function () {

    var aboutEl = $('section#cv'),
        aboutElOffset = aboutEl.offset().top / 2,
        documentEl = $(document);

    documentEl.on('scroll', function () {
        if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden');
    });


})();

(function () {

    var aboutEl = $('section#resumecv'),
        aboutElOffset = aboutEl.offset().top / 2,
        documentEl = $(document);

    documentEl.on('scroll', function () {
        if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden');
    });


})();








(function () {

    var aboutEl = $('section.footer'),
        aboutElOffset = aboutEl.offset().top / 2,
        documentEl = $(document);

    documentEl.on('scroll', function () {
        if (documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden')) aboutEl.removeClass('hidden');
    });


})();

// Typewriter

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    // Speed

    var that = this;
    var delta = 100 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 1px solid #fff}";
    document.body.appendChild(css);
};


// scroll down effects


$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
});



// top
