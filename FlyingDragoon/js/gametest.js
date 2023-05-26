var bgDis = 0;//bg的移动距离
var sw = 1400;
var sh = 568;
var space = 70 ;  //创建障碍物的间隔
var count = 0;  //障碍物的计数
var count1 = 0;
var isDown = true;//判断是否向下飞
var speed = 0;//控制龙骑的速度
var score = 0;
var bestscore = 0;
var lv=0;
var pro = document.querySelector('#pro');
var pro2 = document.querySelector('#pro2')
var jiange=50

/* settimeout是延时器，只执行一次，setinterval是定时器，每隔一段时间执行一次 */

function start() {
    timer = setInterval(function(){
         bgMove();
         pipeMove();
         birdMove();
         check();
    },30)
}
//开始游戏被点击
var btn = document.querySelectorAll('.but');
btn[0].addEventListener('click',function() {
    var start1 = document.querySelector('#start');
    var bird = document.querySelector('#bird');
    start1.style.display = 'none';
    bird.style.display = 'block';
    start();
})
btn[1].addEventListener('click',function() {
    again();
})

function bgMove() {
    var bg = document.querySelector('.contain');
    bgDis -= 2;
    bg.style.backgroundPosition = `${bgDis}px 0`;
}
function pipeMove() {
    //1.创建障碍物
    createPipe();
    //2.障碍物移动
    var ul = document.querySelector('ul');
    var li = document.querySelectorAll('li');
    li.forEach(function(value,index,arr){
        arr[index].style.left = arr[index].offsetLeft-15+'px';
        if(arr[index].offsetLeft<=-62) 
        {
            ul.removeChild(arr[index]);//障碍物看不见了 移除障碍物 减少内存占用
        }

        if(arr[index].offsetLeft+arr[index].offsetWidth<20) //如果障碍物左边到边界的距离和宽度的和小于20像素 根据标志位判断是否给分
        {
            if(arr[index].getAttribute("able") == 0) {//加分判断 加分前，标志位为0 加分后，标志位为1
                score++;pro.value+=3;
                pro2.value=pro2.value+lv+1;
                if(pro.value>=pro.max){
                    pro.value-=pro.max;
                    pro.max+=10;
                    lv+=1;
                    document.querySelector('#level').innerHTML=lv;
                }
                arr[index].setAttribute("able",'1');
            }
            setScore();
        }
    })
}
function setScore() {
    var scorex = document.querySelector('#score');
    scorex.innerHTML = score;
}
function createPipe() {
    count ++;
    if (count != space) {
        return ;
    }
    count = 0;
    space=Math.floor((Math.random()*100)+jiange);
    if(score>10&&score<=20)jiange=40;
    else if(score>20&&score<=30)jiange=35;
    else if(score>30&&score<=40)jiange=30;
    else if(score>40)jiange=20;
    var pipeheight = rand(50,400);
    var ul = document.querySelector('ul');
    var str = `<li class="top" able="0" style="height:${pipeheight+'px'};left:${sw+'px'}"><div></div></li><li class="bottom" style="height:${sh-pipeheight-120+'px'};left:${sw+'px'}"><div></div></li>`;
    ul.insertAdjacentHTML('beforeend',str);
}
function birdMove() {//龙骑的移动函数
    var bird = document.querySelector('#bird');
    if(bird.offsetTop<0||bird.offsetTop>sh-30) {//检测到碰撞 清空定时器 游戏结束
        clearInterval(timer);

        gameOver();
        return;
    }
    if(isDown) {
        speed += 0.4;
        speed = speed > 8 ? 8 : speed;
    }
    else{
        speed += 0.7;
        if(speed>=0) {
            speed = 0;
            isDown = true;
            bird.className = 'birddown';
        }
    }
    var bird = document.querySelector('#bird');
    bird.style.top = bird.offsetTop +speed + 'px';
}
var contain = document.querySelector('.contain');
contain.addEventListener('click',function() {
    isDown = false;
    speed = -6;
    var bird = document.querySelector('#bird');
    bird.className = 'birdup';
})
contain.touchstart = function(e) {
    e.preventDefault();
    isDown = false;
    speed = -8;
    var bird = document.querySelector('#bird');
    bird.className = 'birdup';
}
function again() {

    bgDis = 0;//bg的移动距离
    count = 0;  //障碍物的计数
    isDown = true;//判断是否向下飞
    speed = 0;//控制龙骑的速度
    score = 0;//初始化score
    setScore();
    var ul = document.querySelector('ul');
    ul.innerHTML = '';//清空障碍物
    var bird = document.querySelector('#bird');
    bird.style.top = 100+'px';
    var start1 = document.querySelector('#start');
    var bird = document.querySelector('#bird');
    var end = document.querySelector('#end');
    start1.style.display = 'block';
    bird.style.display = 'none';
    end.style.display = 'none';
}
function check() {
    var bird = document.querySelector('#bird');
    var li = document.querySelectorAll('li');
    li.forEach(function(value,index,arr){
        if(isCrash(arr[index],bird)){
            clearInterval(timer);
            gameOver();
            return;
        }
    })
}
function gameOver() {
    var end = document.querySelector('#end');
    end.style.display = 'block';
    var scorex = document.querySelector('.score');
    scorex.innerHTML = score;
    pro2.value=0;
    if (bestscore/1 < score) {
        bestscore = score;
    document.querySelector('.best').innerHTML=bestscore;
    }
    }

//随机函数
function rand(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}
function isCrash(a,b) {
    var l1 = a.offsetLeft;
    var t1 = a.offsetTop;
    var r1 = l1 + a.offsetWidth;
    var b1 = t1 + a.offsetHeight;
    var l2 = b.offsetLeft;
    var t2 = b.offsetTop;
    var r2 = l2 + b.offsetWidth;
    var b2 = t2 + b.offsetHeight;
    if (r2<l1 || b2<t1 || r1<l2 || b1<t2) {
        // 不碰撞
        return false;
    } else {
        // 碰撞
        return true;
    }
}

window.onload = function(){
    setInterval("toggleSound()",1000);
}

function toggleSound() {
       var music = document.getElementById("vd");//获取ID  
           
       if (music.paused) { //判读是否播放  
           music.paused=false;
           music.play();
       }    
}

