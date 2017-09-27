/**
 * bubbles.js
 *
 * @version 1.0
 * @author snmoney#gmail.com
 
 * 需要添加，以下样式到CSS中
 * .pop_flag {
    position: absolute;
    width:32px;
    height:32px;
    z-index: 999;
    pointer-events: none;
    display: none;
    }
 */
 
//config
var pop_distance = "50%"; // 支持 xx% 或 xx 整数值两种，%参照点击目标的 offset.top 
var pop_duration = 1000;//冒泡持续时间，单位ms 越大飘得越慢 
var pop_flags = ["ico_flag.png","ico_heart.png","ico_heart2.png","ico_baloon.png","ico_baloon2.png","ico_star.png","ico_star2.png","ico_star3.png"]; //随机的冒出的  
 
//

function bubbles(obj){
    var imgTop = $(obj).offset().top - 32;
    var imgLeft = $(obj).offset().left + Math.floor(Math.random()*$(obj).width());
    var popFlag = $('<img>', {'class': 'pop_flag'});    
    //$(popFlag).attr("src","ico_flag.png");
    $(popFlag).attr("src",pop_flags[Math.floor(Math.random()*pop_flags.length)]);
    $(popFlag).css({"-webkit-transform":"rotate("+(Math.floor(Math.random()*180)-90)+"deg)",
                    "left":imgLeft+"px",
                    "top":imgTop+"px"
                    });//-webkit-transform: rotate(90deg);
    $("body").append(popFlag);                    
    $(popFlag).show('fast',function(){
        if(pop_distance.indexOf('%')>0){
            $(this).animate({"top":(imgTop*parseInt(pop_distance)/100)+"px","opacity":'hide'},pop_duration,"swing",function(){$(this).remove();});    
        }else{
            $(this).animate({"top":(imgTop-parseInt(pop_distance))+"px","opacity":'hide'},pop_duration,"swing",function(){$(this).remove();});
        }
        
    });    
}

