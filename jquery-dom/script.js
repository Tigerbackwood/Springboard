$(function () {
    console.log(`Lets get ready to party with jQuery!`);
})

function main() {
$('article img').addClass('img-center');
$('article p:last-child').remove();
setInterval(function() {
    $('#title').css('font-size', `${Math.floor(Math.random() * 100)}px`)
    },5000);
}
$('ol').append('<li>New List Item</li>');
$('aside').empty();
$('aside').append('<p>Sorry Dawg</p>');
let $red = $('#red').get([0]).value;
let $blue = $('#blue').get([0]).value;
let $green = $('#green').get([0]).value;
$('.col-sm-4').on('change', '#red,#blue, #green', function(evt) {
let $red = $('#red').get([0]).value;
let $blue = $('#blue').get([0]).value;
let $green = $('#green').get([0]).value;
$('body').css('background-color', `rgb(${$red},${$green},${$blue})`);
});
$('article img').on('click', function(e) {
    e.target.remove();
});
main();