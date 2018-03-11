$(document).ready(ReadyFunc);
function ReadyFunc(){
$("p.category_novel").click(NovelHomeClick);
$("p.category_litera").click(LiteraHomeClick);
$("p.feihu").click(FeihuClick);
$("p.feihu_logo").click(FeihuClick);
$("p.xueshan").click(XueshanClick);
$("p.xueshan_logo").click(XueshanClick);
$("p.liancheng").click(LianchengClick);
$("p.liancheng_logo").click(LianchengClick);
$("p.tianlong").click(TianlongClick);
$("p.tianlong_logo").click(TianlongClick);
$("p.shediao").click(ShediaoClick);
$("p.shediao_logo").click(ShediaoClick);
$("p.baima").click(BaimaClick);
$("p.baima_logo").click(BaimaClick);
$("p.luding").click(LudingClick);
$("p.xiaoao").click(XiaoaoClick);
$("p.shujian").click(ShujianClick);
$("p.shendiao").click(ShendiaoClick);
$("p.xiake").click(XiakeClick);
$("p.yitian").click(YitianClick);
$("p.bixue").click(BixueClick);
$("p.yuanyang").click(YuanyangClick);
}
function NovelHomeClick(){
	location="../novel/IndexNovel.html";
}
function LiteraHomeClick(){
	location="../litera/IndexLitera.html";
}
function FeihuClick(){
	$("div.main").hide();
	$("p.feihu").removeClass("list");
	$("p.feihu").addClass("NavFocus");
    $("p.feihu").siblings().addClass("list");
    $("p.feihu").siblings().removeClass("NavFocus");
	$("div.feihu_index").show();
    $("div.feihu_index").siblings().hide();

}
function XueshanClick(){
    $("div.main").hide();
	$("p.xueshan").removeClass("list");
	$("p.xueshan").addClass("NavFocus");
    $("p.xueshan").siblings().addClass("list");
    $("p.xueshan").siblings().removeClass("NavFocus");
	$("div.xueshan_index").show();
    $("div.xueshan_index").siblings().hide();
}
function LianchengClick(){
    $("div.main").hide();
	$("p.liancheng").removeClass("list");
	$("p.liancheng").addClass("NavFocus");
    $("p.liancheng").siblings().addClass("list");
    $("p.liancheng").siblings().removeClass("NavFocus");
	$("div.liancheng_index").show();
    $("div.liancheng_index").siblings().hide();
}
function TianlongClick(){
    $("div.main").hide();
	$("p.tianlong").removeClass("list");
	$("p.tianlong").addClass("NavFocus");
    $("p.tianlong").siblings().addClass("list");
    $("p.tianlong").siblings().removeClass("NavFocus");
	$("div.tianlong_index").show();
    $("div.tianlong_index").siblings().hide();
}
function ShediaoClick(){
    $("div.main").hide();
	$("p.shediao").removeClass("list");
	$("p.shediao").addClass("NavFocus");
    $("p.shediao").siblings().addClass("list");
    $("p.shediao").siblings().removeClass("NavFocus");
	$("div.shediao_index").show();
    $("div.shediao_index").siblings().hide();
}
function BaimaClick(){
    $("div.main").hide();
	$("p.baima").removeClass("list");
	$("p.baima").addClass("NavFocus");
    $("p.baima").siblings().addClass("list");
    $("p.baima").siblings().removeClass("NavFocus");
	$("div.baima_index").show();
    $("div.baima_index").siblings().hide();
}
function LudingClick(){
    $("div.main").hide();
	$("p.luding").removeClass("list");
	$("p.luding").addClass("NavFocus");
    $("p.luding").siblings().addClass("list");
    $("p.luding").siblings().removeClass("NavFocus");
	$("div.luding_index").show();
    $("div.luding_index").siblings().hide();
}
function XiaoaoClick(){
    $("div.main").hide();
	$("p.xiaoao").removeClass("list");
	$("p.xiaoao").addClass("NavFocus");
    $("p.xiaoao").siblings().addClass("list");
    $("p.xiaoao").siblings().removeClass("NavFocus");
	$("div.xiaoao_index").show();
    $("div.xiaoao_index").siblings().hide();
}
function ShujianClick(){
    $("div.main").hide();
	$("p.shujian").removeClass("list");
	$("p.shujian").addClass("NavFocus");
    $("p.shujian").siblings().addClass("list");
    $("p.shujian").siblings().removeClass("NavFocus");
	$("div.shujian_index").show();
    $("div.shujian_index").siblings().hide();
}
function ShendiaoClick(){
    $("div.main").hide();
	$("p.shendiao").removeClass("list");
	$("p.shendiao").addClass("NavFocus");
    $("p.shendiao").siblings().addClass("list");
    $("p.shendiao").siblings().removeClass("NavFocus");
	$("div.shendiao_index").show();
    $("div.shendiao_index").siblings().hide();
}
function XiakeClick(){
    $("div.main").hide();
	$("p.xiake").removeClass("list");
	$("p.xiake").addClass("NavFocus");
    $("p.xiake").siblings().addClass("list");
    $("p.xiake").siblings().removeClass("NavFocus");
	$("div.xiake_index").show();
    $("div.xiake_index").siblings().hide();
}
function YitianClick(){
    $("div.main").hide();
	$("p.yitian").removeClass("list");
	$("p.yitian").addClass("NavFocus");
    $("p.yitian").siblings().addClass("list");
    $("p.yitian").siblings().removeClass("NavFocus");
	$("div.yitian_index").show();
    $("div.yitian_index").siblings().hide();
}
function BixueClick(){
    $("div.main").hide();
	$("p.bixue").removeClass("list");
	$("p.bixue").addClass("NavFocus");
    $("p.bixue").siblings().addClass("list");
    $("p.bixue").siblings().removeClass("NavFocus");
	$("div.bixue_index").show();
    $("div.bixue_index").siblings().hide();
}
function YuanyangClick(){
    $("div.main").hide();
	$("p.yuanyang").removeClass("list");
	$("p.yuanyang").addClass("NavFocus");
    $("p.yuanyang").siblings().addClass("list");
    $("p.yuanyang").siblings().removeClass("NavFocus");
	$("div.yuanyang_index").show();
    $("div.yuanyang_index").siblings().hide();
}