window.onscroll = function() {
    var header = document.getElementById('header');
    // var title = document.getElementById('title');
    var gototop = document.getElementById('gototop');
    if(document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
        header.style.position = 'fixed';
        header.style.left = 0;
        header.style.right = 0;
        // header.style.backgroundColor = 'rgb(0,0,0,0.9)';
        header.style.zIndex = 9;
        // title.style.backgroundColor = 'rgb(0,0,0,0)';
        // title.style.opacity = '0.8'
        gototop.style.display = 'block'
    } else{
        header.style.position = 'relative';
        // header.style.backgroundColor = 'rgb(0,0,0)';
        // title.style.backgroundColor = 'rgb(0,0,0)';
        gototop.style.display = 'none';
    }
}

function goToTop() {
    var timeGoTop = setInterval(function() {
        document.documentElement.scrollTop-=20;
        if(document.documentElement.scrollTop <= 0)
            clearInterval(timeGoTop);
    }, -1);
}

// var exchangeTitle = 0;
// exTitle();
// function exTitle() {
//     var e = document.getElementsByClassName('title');
//     for(var i = 0; i < e.length; i++) {
//         e[i].style.display = "none";
//         //console.log(e.length);
//     }
//     exchangeTitle++;
//     if(exchangeTitle > e.length) {
//         exchangeTitle = 1;
//     }
//     e[exchangeTitle-1].style.display = 'block';
//     setTimeout(exTitle,2000);
// }


var plusImges = 0;
showImges();
function showImges() {
    var img = document.getElementsByClassName('img');
    for(var i = 0; i < img.length; i++) {
        img[i].style.display = 'none';
    }
    plusImges++;
    if(plusImges > img.length) {
        plusImges = 1;
    }
    img[plusImges-1].style.display = 'block';
    setTimeout(showImges,3000);
}


var trans = 0;
showAlbum1();
function showAlbum1() {
    var a = document.getElementsByClassName('album1');
    for(var i = 0; i < a.length; i++) {
        a[i].style.display = 'none';
    }
    trans++;
    if(trans > a.length) {
        trans = 1;
    }
    a[trans-1].style.display = 'block';
    setTimeout(showAlbum1,3000);
}
showAlbum2();
function showAlbum2() {
    var a = document.getElementsByClassName('album2');
    for(var i = 0; i < a.length; i++) {
        a[i].style.display = 'none';
    }
    trans++;
    if(trans > a.length) {
        trans = 1;
    }
    a[trans-1].style.display = 'block';
    setTimeout(showAlbum2,3000);
}
showAlbum3();
function showAlbum3() {
    var a = document.getElementsByClassName('album3');
    for(var i = 0; i < a.length; i++) {
        a[i].style.display = 'none';
    }
    trans++;
    if(trans > a.length) {
        trans = 1;
    }
    a[trans-1].style.display = 'block';
    setTimeout(showAlbum3,3000);
}


// function init() {
//     var images = document.getElementsByTagName('img');
//     for(var i=0; i < images.length; i++) 
//         images[i].addEventListener('click', function() {
//             showImage(this);
//         });
// }

// function showImage(img) {
//     var im = document.getElementById('imgModalid');
//     im.src = img.src;
//     $('#myImageModal').modal();
// }