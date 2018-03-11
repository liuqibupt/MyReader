$(document).ready(ReadyFunc);
function ReadyFunc(){
$("p.chapter1").click(Chapter1);
$("p.chapter2").click(Chapter2);
$("p.chapter3").click(Chapter3);
$("p.chapter4").click(Chapter4);
$("p.chapter5").click(Chapter5);
$("p.chapter6").click(Chapter6);
$("p.chapter7").click(Chapter7);
$("p.chapter8").click(Chapter8);
$("p.chapter9").click(Chapter9);
$("p.chapter10").click(Chapter10);
$("p.chapter11").click(Chapter11);
$("p.chapter12").click(Chapter12);
$("p.chapter13").click(Chapter13);
$("p.chapter14").click(Chapter14);
$("div.color1").click(Color1Click);
$("div.color2").click(Color2Click);
$("div.color3").click(Color3Click);
$("div.color4").click(Color4Click);
$("div.color5").click(Color5Click);
$("div.color6").click(Color6Click);
$("div.small").click(SmallClick);
$("div.normal").click(NormalClick);
$("div.big").click(BigClick);
$("p.NextChapter_1").click(Chapter2);
$("p.NextChapter_2").click(Chapter3);
$("p.NextChapter_3").click(Chapter4);
$("p.NextChapter_4").click(Chapter5);
$("p.NextChapter_5").click(Chapter6);
$("p.NextChapter_6").click(Chapter7);
$("p.NextChapter_7").click(Chapter8);
$("p.NextChapter_8").click(Chapter9);
$("p.NextChapter_9").click(Chapter10);
$("p.NextChapter_10").click(Chapter11);
$("p.NextChapter_11").click(Chapter12);
$("p.NextChapter_12").click(Chapter13);
$("p.NextChapter_13").click(Chapter14);
$("p.LastChapter_2").click(Chapter1);
$("p.LastChapter_3").click(Chapter2);
$("p.LastChapter_4").click(Chapter3);
$("p.LastChapter_5").click(Chapter4);
$("p.LastChapter_6").click(Chapter5);
$("p.LastChapter_7").click(Chapter6);
$("p.LastChapter_8").click(Chapter7);
$("p.LastChapter_9").click(Chapter8);
$("p.LastChapter_10").click(Chapter9);
$("p.LastChapter_11").click(Chapter10);
$("p.LastChapter_12").click(Chapter11);
$("p.LastChapter_13").click(Chapter12);
$("p.LastChapter_14").click(Chapter13);
}
function Color1Click(){
	$("div.chapter").css("background-color","#F0F0F0");
	$("div.color1").css("box-shadow", "2px 2px 2px #666633");
	$("div.color1").siblings().css("box-shadow", "0px 0px 0px #666633");
}
function Color2Click(){
	$("div.chapter").css("background-color","#cccc99");
	$("div.color2").css("box-shadow", "2px 2px 2px #666633");
	$("div.color2").siblings().css("box-shadow", "0px 0px 0px #666633");
}
function Color3Click(){
	$("div.chapter").css("background-color","#ffcccc");
	$("div.color3").css("box-shadow", "2px 2px 2px #666633");
	$("div.color3").siblings().css("box-shadow", "0px 0px 0px #666633");
}
function Color4Click(){
	$("div.chapter").css("background-color","#ccffff");
	$("div.color4").css("box-shadow", "2px 2px 2px #666633");
	$("div.color4").siblings().css("box-shadow", "0px 0px 0px #666633");
}
function Color5Click(){
	$("div.chapter").css("background-color","#ccccff");
	$("div.color5").css("box-shadow", "2px 2px 2px #666633");
	$("div.color5").siblings().css("box-shadow", "0px 0px 0px #666633");
}
function Color6Click(){
	$("div.chapter").css("background-color","#ffffcc");
	$("div.color6").css("box-shadow", "2px 2px 2px #666633");
	$("div.color6").siblings().css("box-shadow", "0px 0px 0px #666633");
}
function SmallClick(){
	$("div.small").css("box-shadow", "2px 2px 2px #666633");
	$("div.small").siblings().css("box-shadow", "0px 0px 0px #666633");
	$("p.chapter_content").css("font-size","1.2em");
}
function NormalClick(){
	$("div.normal").css("box-shadow", "2px 2px 2px #666633");
	$("div.normal").siblings().css("box-shadow", "0px 0px 0px #666633");
	$("p.chapter_content").css("font-size","1.5em");
}
function BigClick(){
	$("div.big").css("box-shadow", "2px 2px 2px #666633");
	$("div.big").siblings().css("box-shadow", "0px 0px 0px #666633");
	$("p.chapter_content").css("font-size","1.7em");
}

function Chapter1(){
	$("p.chapter1").removeClass("list");
	$("p.chapter1").addClass("NavFocus");
	$("p.chapter1").siblings().addClass("list");
	$("p.chapter1").siblings().removeClass("NavFocus");
	$("div.chapter1").show();
    $("div.chapter1").siblings().hide();
}
function Chapter2(){
	$("p.chapter2").removeClass("list");
	$("p.chapter2").addClass("NavFocus");
	$("p.chapter2").siblings().addClass("list");
	$("p.chapter2").siblings().removeClass("NavFocus");
	$("div.chapter2").show();
    $("div.chapter2").siblings().hide();
}
function Chapter3(){
	$("p.chapter3").removeClass("list");
	$("p.chapter3").addClass("NavFocus");
	$("p.chapter3").siblings().addClass("list");
	$("p.chapter3").siblings().removeClass("NavFocus");
	$("div.chapter3").show();
    $("div.chapter3").siblings().hide();
}
function Chapter4(){
	$("p.chapter4").removeClass("list");
	$("p.chapter4").addClass("NavFocus");
	$("p.chapter4").siblings().addClass("list");
	$("p.chapter4").siblings().removeClass("NavFocus");
	$("div.chapter4").show();
    $("div.chapter4").siblings().hide();
}
function Chapter5(){
	$("p.chapter5").removeClass("list");
	$("p.chapter5").addClass("NavFocus");
	$("p.chapter5").siblings().addClass("list");
	$("p.chapter5").siblings().removeClass("NavFocus");
	$("div.chapter5").show();
    $("div.chapter5").siblings().hide();
}
function Chapter6(){
	$("p.chapter6").removeClass("list");
	$("p.chapter6").addClass("NavFocus");
	$("p.chapter6").siblings().addClass("list");
	$("p.chapter6").siblings().removeClass("NavFocus");
	$("div.chapter6").show();
    $("div.chapter6").siblings().hide();
}
function Chapter7(){
	$("p.chapter7").removeClass("list");
	$("p.chapter7").addClass("NavFocus");
	$("p.chapter7").siblings().addClass("list");
	$("p.chapter7").siblings().removeClass("NavFocus");
	$("div.chapter7").show();
    $("div.chapter7").siblings().hide();
}
function Chapter8(){
	$("p.chapter8").removeClass("list");
	$("p.chapter8").addClass("NavFocus");
	$("p.chapter8").siblings().addClass("list");
	$("p.chapter8").siblings().removeClass("NavFocus");
	$("div.chapter8").show();
    $("div.chapter8").siblings().hide();
}
function Chapter9(){
	$("p.chapter9").removeClass("list");
	$("p.chapter9").addClass("NavFocus");
	$("p.chapter9").siblings().addClass("list");
	$("p.chapter9").siblings().removeClass("NavFocus");
	$("div.chapter9").show();
    $("div.chapter9").siblings().hide();
}
function Chapter10(){
	$("p.chapter10").removeClass("list");
	$("p.chapter10").addClass("NavFocus");
	$("p.chapter10").siblings().addClass("list");
	$("p.chapter10").siblings().removeClass("NavFocus");
	$("div.chapter10").show();
    $("div.chapter10").siblings().hide();
}
function Chapter11(){
	$("p.chapter11").removeClass("list");
	$("p.chapter11").addClass("NavFocus");
	$("p.chapter11").siblings().addClass("list");
	$("p.chapter11").siblings().removeClass("NavFocus");
	$("div.chapter11").show();
    $("div.chapter11").siblings().hide();
}
function Chapter12(){
	$("p.chapter12").removeClass("list");
	$("p.chapter12").addClass("NavFocus");
	$("p.chapter12").siblings().addClass("list");
	$("p.chapter12").siblings().removeClass("NavFocus");
	$("div.chapter12").show();
    $("div.chapter12").siblings().hide();
}
function Chapter13(){
	$("p.chapter13").removeClass("list");
	$("p.chapter13").addClass("NavFocus");
	$("p.chapter13").siblings().addClass("list");
	$("p.chapter13").siblings().removeClass("NavFocus");
	$("div.chapter13").show();
    $("div.chapter13").siblings().hide();
}
function Chapter14(){
	$("p.chapter14").removeClass("list");
	$("p.chapter14").addClass("NavFocus");
	$("p.chapter14").siblings().addClass("list");
	$("p.chapter14").siblings().removeClass("NavFocus");
	$("div.chapter14").show();
    $("div.chapter14").siblings().hide();
}
