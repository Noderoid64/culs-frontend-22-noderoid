const PRESENTATION_OFFSET = 104; // Control panel offset. Please change if the height of the control panel is changed.

var chapterNumber = 0;
var slideNumber = 0;
var chapters = [
    {
        title: 'Intro',
        pages: 12
    },
    {
        title: 'Tools',
        pages: 24
    },
    {
        title: 'Content',
        pages: 8
    },
    {
        title: 'Presentation',
        pages: 12
    },
    {
        title: 'Scripting',
        pages: 12
    },
    {
        title: 'Scripting',
        pages: 3
    },
];

function onRestart() {
    chapterNumber = 0;
    slideNumber = 0;
    navigate();
}

function onPrevChapter() {
    if (chapterNumber > 0) {
        chapterNumber--;
        slideNumber = 0;
        navigate();
    }
}

function onNextChapter() {
    if (chapterNumber < chapters.length - 1) {
        chapterNumber++;
        slideNumber = 0;
        navigate();
    }
}

function onPrevSlide() {
    if (slideNumber == 0) {
        if (chapterNumber !== 0) {
            chapterNumber--;
            slideNumber = chapters[chapterNumber].pages - 1;
        }
    } else {
        slideNumber--;
    }
    navigate();
}

function onNextSlide() {
    if (chapterNumber < chapters.length - 1 && slideNumber >= chapters[chapterNumber].pages -1) {
        chapterNumber++;
        slideNumber = 0;
        navigate();
    } else if (slideNumber < chapters[chapterNumber].pages - 1) {
        slideNumber++;
        navigate();
    }
    
}

function navigate() {
    console.log('nav x=' + slideNumber + ' y=' + chapterNumber)
    window.scrollTo(slideNumber * window.innerWidth, chapterNumber * (window.innerHeight - PRESENTATION_OFFSET));

    var chapterTitleControl = document.getElementById('chapter-title');
    chapterTitleControl.textContent = chapters[chapterNumber].title;

    var slideNumberControl = document.getElementById('slide-number');
    slideNumberControl.textContent = slideNumber + 1;

    var slideMaxNumberControl = document.getElementById('slide-max-numbers');
    slideMaxNumberControl.textContent = chapters[chapterNumber].pages;
}