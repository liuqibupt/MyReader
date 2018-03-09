$(document).ready(ReadyFunc);
function ReadyFunc(){
$("p.feihu").click(FeihuClick);
}
function FeihuClick(){
	$("div.main").hide();
	$("p.feihu").css({"backgroundColor":"#999999","color":"white"});
}