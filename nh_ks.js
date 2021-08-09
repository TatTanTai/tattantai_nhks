function init() {
    var images = document.getElementsByTagName('img');
    for(var i=0; i < images.length; i++) 
        images[i].addEventListener('click', function() {
            showImage(this);
            console.log(images.length);
        });
}

function showImage(img) {
    var im = document.getElementById('imgModalid');
    im.src = img.src;
    $('#myImageModal').modal();
}

function showAlbum(album) {
    var albums = document.querySelectorAll('div.albums > div');
    for(var i = 0; i < albums.length; i++) 
        albums[i].style.display = 'none';
    var next_album = document.getElementById(album);
    next_album.style.display = 'block';
}

function booking() {
    var book1 = document.getElementById('booking1').value;
    var book2 = document.getElementById('booking2').value;
    var book3 = document.getElementById('booking3').value;
    var book4 = document.getElementById('booking4').value;
    var book5 = document.getElementById('booking5').value;
    var book6 = document.getElementById('booking6').value;
    do{
        if(book1 === "" || book2 === "" || book3 === "" || book4 === "" || book5 === "" || book6 === "") {
            alert('Đặt thất bại');
            break;
        }else{
            alert('Đặt thành công');
            break;
        }
    }while(book1 === "" || book2 === "" || book3 === "" || book4 === "" || book5 === "" || book6 === "");
}