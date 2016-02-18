var main = function () {
"use strict";
$(".comment-input button").on("click", function (event) {
var $new_comment = $("<p>"),

comment_text = $(".comment-input input").val();
$new_comment.text(comment_text);
$(".comments").append($new_comment);
});
};
$(document).ready(main);

//the following is the authors code to fix the bug
//It does not work. Typed it in, then copy/pasted
//it still does not work. In fact, it causes
//the page to no longer output input text:
/*
var main = function () {
"use strict";
$(".comment-input button").on("click", function (event) {
var $new_comment;
if ($(".comment-input input").val() !== "") {
$new_comment = $("<p>").text($(".comment-input input").val());
$(".comments").append($new_comment);
}
});
$(document).ready(main);
*/