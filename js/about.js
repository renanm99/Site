function loadPage() {
    $('body').animate({
        scrollTop : 0
    },0.1);
	
    var landimages = ["./img/road.jpg", "./img/rocha.jpg", "./img/ponte.jpeg"];
    var focusimage = Math.floor((Math.random() * 3));
    var image = landimages[focusimage];
    $("#lands").attr("src", image);
    focusimage++;

    $("#landsa").ready(function ae() {

        setTimeout(function () {

            $("#lands").animate({
                opacity: 0
            }, 500, "easeInQuad", function () {

                if (focusimage > 2) {
                    focusimage = 0;
                }

                var image = landimages[focusimage];
                focusimage++;


                $("#lands").attr("src", image);
                $("#lands").animate({
                    opacity: 1
                }, 500, "easeInQuad", function () {
                    ae();
                });
            });

        }, 6000);
    });

    $("#haha").animate({
        marginTop: '-=1000px'
    }, 1200, "easeOutQuad");
    var $elem = $(haha);

    $("#mail").click(function(){
        if($("#formula").css('opacity')== 0){
            $("#formula").animate({
                opacity: 1
            },400);
        }else{
            $("#formula").animate({
                opacity: 0
            },400);
        }
        
    });

}