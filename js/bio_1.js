// $(function() {
//     $(".hot_con li").mouseenter(function() {
//         var index = $(this).index();
//         console.log(index)
//         $('.ol_top').find("ol").eq(index).show().sibings().hide();


//     })
// })
$(function() {
    $(".hot_con li").hover(function() {
        console.log("kk")
        $(this).find(".ol_div").css("display", "block")
    }, function() {
        $(this).find(".ol_div").css("display", "none")
    })
    $(".nav_tit a").first().addClass("on")
    $(".nav_tit a").hover(function() {
        $(this).addClass("on").siblings().removeClass("on");
    })
})