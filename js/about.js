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
	
	


	//

	
	var txt = 0;
    var hab=0;
    var cont = 0;

    var i = 0;
    var lag = $(window).width();
	
	$(".contact").animate({
			left: "+=800px",
			right: "-=800px"
			},1000,"easeOutQuad");

    if(lag<1020){
		
		$(".contact").animate({
			right: "+=1600px",
			left: "-=1600px"
			},1000,"easeOutQuad");

		$(".txt").animate({
			right: "0px"
		},1000,"easeOutQuad");
		txt=1;

		$(window).scroll(function(event) {
			var top_of_element = $(".hab").offset().top;
			var bottom_of_element = $(".hab").offset().top + $(".hab").outerHeight();
			var bottom_of_screen = $(window).scrollTop() + $(window).height();
			var top_of_screen = $(window).scrollTop();
		
			if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
				if(hab==0){
					$(".hab").animate({
						left: "0px"
					},1000,"easeOutQuad");
					hab=1;
				}
			}
			else {
				if(hab==1){
					$(".hab").animate({
						left: "600px"
					},1000,"easeOutQuad");
					hab=0;
				}
				// The element is not visible, do something else
			}

			$(window).scroll(function(event) {
				var top_of_element = $(".contact").offset().top;
				var bottom_of_element = $(".contact").offset().top + $(".contact").outerHeight();
				var bottom_of_screen = $(window).scrollTop() + $(window).height();
				var top_of_screen = $(window).scrollTop();
			
				if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
					if(cont==0){
						$(".contact").animate({
							right: "-=800px",
							left: "+=800px"
						},1000,"easeOutQuad");
						cont=1;
					}
				}
				else {
					if(cont==1){
						$(".contact").animate({
							right: "+=800px",
							left: "-=800px"
						},1000,"easeOutQuad");
						cont=0;
					}
					// The element is not visible, do something else
				}


			});


		});
    }else {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();

            if(scroll > 550 && cont==0){
				$(".contact").animate({
					left: "-=800px",
					right: "+=800px"
				},1000,"easeOutQuad");
                cont=1;
            }

            if(scroll > 80 && txt==0 && hab==0){
				$(".txt").animate({
					right: "0px"
				},1000,"easeOutQuad");
                txt=1;
                $(".hab").animate({
					left: "0px"
				},1000,"easeOutQuad");
				hab=1;
            }
            
            if(scroll < 450 && cont==1){
				$(".contact").animate({
					left: "+=800px",
					right: "-=800px"
				},1000,"easeOutQuad");
                cont=0;
            }

            if(scroll < 40 && txt==1 && hab == 1){
				$(".txt").animate({
					right: "600px"
				},1000,"easeOutQuad");
                txt=0;
                $(".hab").animate({
					left: "600px"
				},1000,"easeOutQuad");
                hab=0;
            }
			
        });
}

    $("#mail").click(function(){


		$('#readmoremail').readmore();
		alert();
		/*

        if($("#formula").css('opacity')== 0){
            $("#formula").animate({
                opacity: 1
            },400);
        }else{
            $("#formula").animate({
                opacity: 0
            },400);
		}
		*/
        
    });

}