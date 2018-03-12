$(document).ready(ReadyFunc);
function ReadyFunc(){
$("p.category_novel").click(NovelHomeClick);
$("p.category_litera").click(LiteraHomeClick);
$("p.muse").click(MuseClick);
$("p.muse_logo").click(MuseClick);
$("p.xinyue").click(XinyueClick);
$("p.xinyue_logo").click(XinyueClick);
$("p.yueshi").click(YueshiClick);
$("p.yueshi_logo").click(YueshiClick);
$("p.poxiao").click(PoxiaoClick);
$("p.poxiao_logo").click(PoxiaoClick);
$("p.wuye").click(WuyeClick);
$("p.wuye_logo").click(WuyeClick);
}
function NovelHomeClick(){
	location="../novel/IndexNovel.html";
}
function LiteraHomeClick(){
	location="../litera/IndexLitera.html";
}
function MuseClick(){
	$("div.main").hide();
	$("p.muse").removeClass("list");
	$("p.muse").addClass("NavFocus");
    $("p.muse").siblings().addClass("list");
    $("p.muse").siblings().removeClass("NavFocus");
	$("div.muse_index").show();
    $("div.muse_index").siblings().hide();

}
function XinyueClick(){
    $("div.main").hide();
	$("p.xinyue").removeClass("list");
	$("p.xinyue").addClass("NavFocus");
    $("p.xinyue").siblings().addClass("list");
    $("p.xinyue").siblings().removeClass("NavFocus");
	$("div.xinyue_index").show();
    $("div.xinyue_index").siblings().hide();
}
function YueshiClick(){
    $("div.main").hide();
	$("p.yueshi").removeClass("list");
	$("p.yueshi").addClass("NavFocus");
    $("p.yueshi").siblings().addClass("list");
    $("p.yueshi").siblings().removeClass("NavFocus");
	$("div.yueshi_index").show();
    $("div.yueshi_index").siblings().hide();
}
function PoxiaoClick(){
    $("div.main").hide();
	$("p.poxiao").removeClass("list");
	$("p.poxiao").addClass("NavFocus");
    $("p.poxiao").siblings().addClass("list");
    $("p.poxiao").siblings().removeClass("NavFocus");
	$("div.poxiao_index").show();
    $("div.poxiao_index").siblings().hide();
}
function WuyeClick(){
    $("div.main").hide();
	$("p.wuye").removeClass("list");
	$("p.wuye").addClass("NavFocus");
    $("p.wuye").siblings().addClass("list");
    $("p.wuye").siblings().removeClass("NavFocus");
	$("div.wuye_index").show();
    $("div.wuye_index").siblings().hide();
}
