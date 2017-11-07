/**
 * Created by ale on 13/10/17.
 */
$(document).ready(function (){
    $('.card').on("click","a,img", function (e) {
        var imageSrc = $(this).parents(".card").find("img").attr("src");
        $(".js-download").attr("href", imageSrc);
        $(".js-modal-image").attr("src", imageSrc);
        $("#modalPicture").modal();




    });




});