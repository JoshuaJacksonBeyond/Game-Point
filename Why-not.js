for(let i = 0; i < 16; i++) {
    $('#black').append('<div class="box"></div>') 
}
$('.box').on('click', function() {
    $(this).toggleClass('Bye');
});