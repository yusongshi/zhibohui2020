var flag = true; //全屏正在滚动的时候禁止鼠标滚轮创建新滚动事件。
var autowheel = true; //阻止全屏滑动。
var oldindex = 0;
//内部有滚动条的dom，禁止全屏滚动。
$(".pinglunbox").mouseenter(function () {
    autowheel = false;
}).mouseleave(function () {
    autowheel = true;
});
/*************全屏滚动*************/
jQuery(".fullslide").slide({
    titCell: ".fullslide_hd li",
    mainCell: ".fullslide_bd .box",
    mainOnClassName: "on",
    effect: "top",
    trigger: "click",
    easing: "easeInOutQuad",
    delayTime: 500,
    pnLoop: false,
    prevCell: ".fullslide_prev",
    nextCell: ".fullslide_next",
    defaultIndex: 4,
    pageStateCell: '',
    startFun: function (i) {
        flag = false; //全屏正在滚动的时候禁止鼠标滚轮创建新滚动事件。
    },
    endFun: function (i) {
        $(".fullslide .fullslide_bd ul.box li.section").eq(i).addClass("actv").siblings().removeClass("actv");
        switch(oldindex) {
            case 1:
                $(".a2content .leftbox, .a2content .rightbox").hide();
            break;
            case 2:
                $(".a3content .titimg, .a3content .fourimg, .a3content .articlelist").hide();
            break;
            case 3:
                $(".a4content .titimg, .a4content .a4_box .a4_left, .a4content .a4_box .a4_right").hide();
            break;
            case 4:
                $(".a5content .titimg, .a5content .a5_box .a5_left, .a5content .a5_box .threeimg").hide();
                oldindex = i;
            break;
            case 5:
                $(".a6content .titimg, .a6content #wrap3d").hide();
                oldindex = i;
            break;
            case 6:
                $(".a7content .titimg, .a7content .liuyanban").hide();
                oldindex = i;
            break;
        }
        switch(i) {
            case 1: 
                $(".a2content .leftbox").show().addClass("fadeInLeft");
                $(".a2content .rightbox").show().addClass("fadeInRight");
                oldindex = i;
            break;
            case 2:
                $(".a3content .titimg").show().addClass("fadeInDown");
                $(".a3content .fourimg, .a3content .articlelist").show().addClass("fadeInUp");
                oldindex = i;
            break;
            case 3:
                $(".a4content .titimg").show().addClass("fadeInDown");
                $(".a4content .a4_box .a4_left").show().addClass("fadeInLeft");
                $(".a4content .a4_box .a4_right").show().addClass("fadeInRight");
                oldindex = i;
            break;
            case 4:
                $(".a5content .titimg").show().addClass("fadeInDown");
                $(".a5content .a5_box .a5_left").show().addClass("fadeInLeft");
                $(".a5content .a5_box .threeimg").show().addClass("lightSpeedIn");
                oldindex = i;
            break;
            case 5:
                $(".a6content .titimg").show().addClass("fadeInDown");
                $(".a6content #wrap3d").show().addClass("fadeInUp");
                oldindex = i;
            break;
            case 6:
                $(".a7content .titimg").show().addClass("fadeInLeft");
                $(".a7content .liuyanban").show().addClass("fadeInRight");
                oldindex = i;
            break;
        }
        /*if(e == 0){
            $(".fullslide .hd").fadeIn()
        }*/
        flag = true;
    }
});
//鼠标滚轮模拟点击事件
$(".fullslide").mousewheel(function (event, delta) {
    if (delta > 0 && flag && autowheel) {
        $(".fullslide_prev").trigger("click");
    } else if (delta < 0 && flag && autowheel) {
        $(".fullslide_next").trigger("click");
    };
});
/*************全屏滚动-END*************/
/*************1封面*************/
$(".s3").delay(1800).fadeIn(3000);
/*************1封面-END*************/

/**4**/
$(".a4content .a4_box .a4_right div.btn").each(function(index){
    $(this).hover(function(){
        $(this).addClass("on").siblings(".btn").removeClass("on");
        $(".a4content .a4_box .a4_right div.cntt").eq(index).show().siblings(".cntt").hide();
    });
});
/**6**/
$(function () {
    // 初始化 3D旋转 

    var showcase = $("#showcase")

    showcase.Cloud9Carousel({
        yPos: 42,
        yRadius: 48,
        mirrorOptions: {
            gap: 22,
            height: 0.2
        },
        autoPlay: 3000,
        autoPlayDelay: 1500,
        buttonLeft: $(".nav-arrow > .left"),
        buttonRight: $(".nav-arrow > .right"),
        autoPlay: true,
        bringToFront: true,
        onRendered: showcaseUpdated,
        onLoaded: function () {
            showcase.css('visibility', 'visible')
            showcase.css('display', 'none')
            showcase.fadeIn(1500)
            // $('#showcase .cloud9-item').mouseenter(function () {
            // 	if ($(this).hasClass('active')) {
            // 		$(this).addClass('show-code')
            // 	}
            // })
            // $('#showcase .cloud9-item').mouseleave(function () {
            // 	$(this).removeClass('show-code')
            // })
        }
    })

    function showcaseUpdated(showcase) {
        var title = $('#item-title').html(
            $(showcase.nearestItem()).attr('alt')
        )

        var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI)
        title.css('opacity', 0.5 + (0.5 * c))
    }

    // Simulate physical button click effect
    $('.nav-arrow > button').click(function (e) {
        var b = $(e.target).addClass('down')
        setTimeout(function () {
            b.removeClass('down')
        }, 80)
    })

    $(document).keydown(function (e) {
        switch (e.keyCode) {
            /* left arrow */
            case 37:
                $('.nav-arrow > .left').click()
                break

            /* right arrow */
            case 39:
                $('.nav-arrow > .right').click()
        }
    })
});
/**7**/
$(".a7content .liuyanban").mouseenter(function(){
    autowheel = false;
}).mouseleave(function(){
    autowheel = true;
});

/**自动缩小字号**/
function changeSize(doms,fontSize,h){
    var nh=doms.height();
    if(!(nh <= h) && (fontSize >= 12)){
        doms.css("fontSize", fontSize);
        fontSize--;
        changeSize(doms,fontSize,h);
    } else {
        return
    };
};
var getStyle = function(dom, attr){ 
      return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];//ie8使用currentStyle以上使用getComputeStyle，注意如果高度没写，在ie8下获取的高度为auto
};
function ChangeSize(div,fontSize,h){
    var clientHeight = div.clientHeight;
    var paddingTop = Number(getStyle(div,"paddingTop").replace(/\s+|px/gi,""));
    var paddingBottom = Number(getStyle(div,"paddingBottom").replace(/\s+|px/gi,""));
    var height = clientHeight - paddingTop - paddingBottom;

    //getStyle(div,"height")
    var style = div.getAttribute("style");
    if(!(height <= h) && (fontSize >= 12)){
            div.style.fontSize = fontSize + "px"
        fontSize--;
        ChangeSize(div,fontSize,h);
    } else {
        return
    };
};
if (typeof jQuery == 'undefined') { 
    ChangeSize;
} else { 
    changeSize;
}
/**自动缩小字号-END**/
/**a2**/
jQuery(".slideBox_a2").slide({
    titCell: ".hd_a2 li",
    mainCell:".bd_a2 ul",
    effect:"topLoop",
    autoPlay:false
});
/**a2-END**/