   $(function() {
       console.log("k")

       $("#navbar_con_item a").mouseover(function() {

           $(this).addClass("on").siblings().removeClass("on")

       })
   })