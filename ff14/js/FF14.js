
var see = document.getElementById("choukaqu");
var qian123 = document.getElementById("qian");
var num_1=0;
var num_2=0;
var num_3=0;
var num_4=0;
var num_5=0;
var num_6=0;
var num_7=0;
var num_8=0;
var num_9=0;
var num_10=0;
var num_11=0;
var num_12=0;
var num_13=0;
var num_14=0;
var num_15=0;
var num_16=0;
var num=0;
var money=0;
var total=0;
var result = new Array();
//我这里加了一段注释

    function tongji(){
        var numall=num_1+num_2+num_3+num_4+num_5+num_6+num_7+num_8+num_9+num_10+num_11+num_12+num_13+num_14+num_15+num_16
        alert("总共抽卡"+numall+"次，"+"其中抽中了"+num_1+"次幻想药"+"，总共花费了"+total+"金币");
    };
    function zhuanqian(){
        money+=10000;
        qian123.innerHTML="金币："+money;
    }

    function chouka(){
    var n=Math.random()*10000;
    var m=new String();
    num++;
    if(money<200000){
    qian123.innerHTML="金币："+money;
    alert('钱不够')
    return;}
    money=money-200000;
    qian123.innerHTML="金币："+money;
    total+=200000;
    if(n>=0&&n<=100){
        m="幻想药";
        alert("卧槽！居然只抽了"+(result.length+1)+"次就抽中了幻想药！！！");
        num_1++;}
    else if(n>101&&n<=600){
        m="雇员幻想药";
        num_2++;}
    else if(n>601&&n<=1100){
        m="英才雇员冒险录";
        num_3++;}
    else if(n>1101&&n<=1600){
        m="特制无暇白染剂";
        num_4++;}
    else if(n>1601&&n<=2100){
        m="特制煤玉黑染剂";
        num_5++;}
    else if(n>2101&&n<=2150){
        m="黄金陆行鸟的羽毛";
        num_6++;}
    else if(n>2151&&n<=2250){
        m="亚拉戈白金币";
        num_7++;}
    else if(n>2251&&n<=2350){
        m="金碟币金卡";
        num_8++;}
    else if(n>2351&&n<=2400){
        m="金碟币白金卡";
        num_9++;}
    else if(n>2401&&n<=2900){
        m="重生之境";
        num_10++;}
    else if(n>2901&&n<=3400){
        m="军用征兵指南";
        num_11++;}
    else if(n>3401&&n<=3900){
        m="军用生存学指南第三卷";
        num_12++;}
    else if(n>3901&&n<=4400){
        m="军用工程学指南第三卷";
        num_13++;}
    else if(n>4401&&n<=7100){
        m="8型魔晶石";
        num_14++;}
    else if(n>7101&&n<=8800){
        m="9型魔晶石";
        num_15++;}
    else{
        m="10型魔晶石";
        num_16++;}
    result.push(m);
    see.innerHTML=result;

};