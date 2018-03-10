$(document).ready(ReadyFunc);
function ReadyFunc(){
$("p.feihu").click(FeihuClick);
$("p.feihu_logo").click(FeihuClick);
$("p.xueshan").click(XueshanClick);
$("p.xueshan_logo").click(XueshanClick);
}
function FeihuClick(){
	$("div.main").hide();
	$("p.feihu").css({"backgroundColor":"#999999","color":"white"});
	$("p.xueshan").css({"backgroundColor":"#F0F0F0","color":"black"});
	$("div.feihu_index").css("display","block");
	$("div.xueshan_index").css("display","none");
}
function XueshanClick(){
	$("div.main").hide();
	$("p.xueshan").css({"backgroundColor":"#999999","color":"white"});
	$("p.feihu").css({"backgroundColor":"#F0F0F0","color":"black"});
	$("div.xueshan_index").css("display","block");
	$("div.feihu_index").css("display","none");
}