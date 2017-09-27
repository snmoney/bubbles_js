bubbles.js
==========
一个向上冒泡特效的js插件，依赖于jQuery。

安装
-----
1. 把bubbles.js 及几个png图像解压到项目目录
2. 在html中引入bubbles.js(及jquery)
3. 添加 .pop_flag 样式： 
.pop_flag {position: absolute; z-index: 999; pointer-events: none; display: none; width:32px; height:32px;}
4. 在点击的对象(按钮)上绑定点击事件,调用 bubbles(obj)

得到最简单的一个样子像这样（代码）：

    <html>
    <head>    
        <script src="jquery.js"></script>
        <script src="bubbles.js"></script>    
        <style>    
        .pop_flag {position: absolute; z-index: 999; pointer-events: none; display: none; width:32px; height:32px;}
        </style>
    </head>
    <body>
        <div style="margin-top: 300px; text-align: center;">
            <button style="width: 150px;" onclick="bubbles(this)">click</button>
        </div>
    </body>
    </html>

除了onclick外，也可以用另一种方式绑定点击，可以参考demo.html

    <button style="width: 150px;" id="btn2">methor 2 (bind)</button>
    <script>
        $("#btn2").bind('click',function(){bubbles(this)});
    </script>


配置
----
可以根据自己需要设置冒泡的距离、速度、弹出的泡泡的样式，修改 bubbles.js “//config” 部分的内容

    //config
    var pop_distance = "50%"; // 支持 xx% 或 xx 整数值两种，%参照点击目标的 offset.top ，整数为绝对值px
    var pop_duration = 1000;//冒泡持续时间，单位ms 越大飘得越慢 
    var pop_flags = ["ico_flag.png",...]; //可以增减替换自己的泡泡素材数量最少为1个

copyright
----
保留插件头部注释，可自由转载、使用、修改。

have fun :-)
