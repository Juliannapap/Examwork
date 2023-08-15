$(document).ready(function(){
    $("#galeria").click(function(){
        var i = 1
        $(".active").attr("src","images/IMG_"+i+".jpg")
        $(".szamlalo").text(i+"/"+db)
        $(".lebego").css("display","block")
        $(".black_overlay").css("display","block")
    })
    $(".bezar").click(function(){
        $(".lebego").css("display","none")
        $(".black_overlay").css("display","none")
    })
    var i = 1;
    var db = 4;
    
    $(".next").click(function(){
        if (i<db) {
            i += 1;
            $(".active").attr("src","images/IMG_"+i+".jpg")
            $(".szamlalo").text(i+"/"+db)
        }
    })
    
    $(".prev").click(function(){
        if (i>1) {
            i -= 1;
            $(".active").attr("src","images/IMG_"+i+".jpg")
            $(".szamlalo").text(i+"/"+db)
        }
    })
  

    $('.tablebook').click(function(){

   
   $('.elrejt').css('display','inline-block') 
})

$ ('.send').click(function(){
    $('elrejt').css('display','none')
    
})

$(document).ready(function() {
    $(".send").click(function() {
      alert("Kollégáink hamarosan visszaigazolják asztalfoglalását a megadott elérhetőségek egyikén.");
    })

    $(document).ready(function() {
        $('.back-to-top').click(function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: 0 }, 'smooth');
        });
      });



})
})
