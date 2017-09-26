function loadPage() {
    $('html, body').animate({
        scrollTop : '0px'
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

    var i = 0;
    var lag = $(window).width();

    if(lag<1020){
        $("#haha").animate({
            marginTop: '-=1000px'
        }, 1000, "easeOutQuad");
        var $elem = $(haha);
        i = 1;
        ii();
    }else {
        function NotMobile(){
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(scroll > 80 && i==0){
                $("#haha").animate({
                    marginTop: '-=1000px'
                }, 1000, "easeOutQuad");
                var $elem = $(haha);
                i = 1;
            }
    
            if(scroll < 1 && i==1 && lag>1020){
                $("#haha").animate({
                    marginTop: '+=1000px'
                }, 500, "easeInQuad");
                var $elem = $(haha);
                i = 0;
            }
        });
    }
    NotMobile();
}
    

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