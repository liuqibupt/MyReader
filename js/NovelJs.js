$(document).ready(ReadyFunc);
function ReadyFunc(){
$("p.category_first").click(HomeClick);
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
function HomeClick(){
	$("div.main").show();
	$("p.feihu,p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.feihu,p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.feihu_index,div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiaoke_index,div.yitian_index,div.bixue_index,div.yuanyag_index").hide();
}
function FeihuClick(){
	$("div.main").hide();
	$("p.feihu").removeClass("list");
	$("p.feihu").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.feihu_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();

}
function XueshanClick(){
    $("div.main").hide();
	$("p.xueshan").removeClass("list");
	$("p.xueshan").addClass("NavFocus");
    $("p.feihu,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.feihu,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.xueshan_index").show();
    $("div.feihu_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();
}
function LianchengClick(){
    $("div.main").hide();
	$("p.liancheng").removeClass("list");
	$("p.liancheng").addClass("NavFocus");
    $("p.xueshan,p.feihu,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.feihu,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.liancheng_index").show();
    $("div.xueshan_index,div.feihu_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();
}
function TianlongClick(){
	$("div.main").hide();
	$("p.tianlong").removeClass("list");
	$("p.tianlong").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.feihu,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.feihu,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.tianlong_index").show();
    $("div.xueshan_index,div.liancheng_index,div.feihu_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();

}
function ShediaoClick(){
	$("div.main").hide();
	$("p.shediao").removeClass("list");
	$("p.shediao").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.feihu,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.feihu,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.shediao_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.feihu_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();

}
function BaimaClick(){
	$("div.main").hide();
	$("p.baima").removeClass("list");
	$("p.baima").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.feihu,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.feihu,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.baima_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.feihu_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();

}
function LudingClick(){
	$("div.main").hide();
	$("p.luding").removeClass("list");
	$("p.luding").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.feihu,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.feihu,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.luding_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.feihu_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();

}
function XiaoaoClick(){
	$("div.main").hide();
	$("p.xiaoao").removeClass("list");
	$("p.xiaoao").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.feihu,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.feihu,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.xiaoao_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.feihu_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();

}
function ShujianClick(){
	$("div.main").hide();
	$("p.shujian").removeClass("list");
	$("p.shujian").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.feihu,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.feihu,p.shendiao,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.shujian_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.feihu_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();

}
function ShendiaoClick(){
	$("div.main").hide();
	$("p.shendiao").removeClass("list");
	$("p.shendiao").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.feihu,p.xiake,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.feihu,p.xiake,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.shendiao_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.feihu_index,div.xiake_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();

}
function XiakeClick(){
	$("div.main").hide();
	$("p.xiake").removeClass("list");
	$("p.xiake").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.feihu,p.yitian,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.feihu,p.yitian,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.xiake_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.feihu_index,div.yitian_index,div.bixue_index,div.yuanyang_index").hide();

}
function YitianClick(){
	$("div.main").hide();
	$("p.yitian").removeClass("list");
	$("p.yitian").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.feihu,p.bixue,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.feihu,p.bixue,p.yuanyang").removeClass("NavFocus");
	$("div.yitian_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.feihu_index,div.bixue_index,div.yuanyang_index").hide();

}
function BixueClick(){
	$("div.main").hide();
	$("p.bixue").removeClass("list");
	$("p.bixue").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.feihu,p.yuanyang").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.feihu,p.yuanyang").removeClass("NavFocus");
	$("div.bixue_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.feihu_index,div.yuanyang_index").hide();

}
function YuanyangClick(){
	$("div.main").hide();
	$("p.yuanyang").removeClass("list");
	$("p.yuanyang").addClass("NavFocus");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.feihu").addClass("list");
    $("p.xueshan,p.liancheng,p.tianlong,p.shediao,p.baima,p.luding,p.xiaoao,p.shujian,p.shendiao,p.xiake,p.yitian,p.bixue,p.feihu").removeClass("NavFocus");
	$("div.yuanyang_index").show();
    $("div.xueshan_index,div.liancheng_index,div.tianlong_index,div.shediao_index,div.baima_index,div.luding_index,div.xiaoao_index,div.shujian_index,div.shendiao_index,div.xiake_index,div.yitian_index,div.bixue_index,div.feihu_index").hide();

}