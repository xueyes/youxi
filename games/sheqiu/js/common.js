windowWidth=0,windowHeight=0,windowWidthScale=1,windowHeightScale=1;skySize={width:640,height:28800,acWidth:640,acHeight:28800};var startObj=null;var gameObj=null;var gameEndObj=null;var weixinUser=null;var tapEvent="touchstart click";var gameType="";var couponsData=[];$(function(){if(getQueryString("gametype")){gameType=getQueryString("gametype");}
windowInit();document.body.addEventListener('touchmove',function(e){e.stopPropagation();e.preventDefault();});filesLoad();_smq.push(['custom','�Ŷ�������','��Ϸҳ��','��ʼ����',,1]);if(getQueryString("id")){$("#selecttype").hide();}
$("#selecttype>.t2,#selecttype>.t3").bind(tapEvent,function(e){if($(this).hasClass("t2")){gameType="click";$(".start .speedup .txt").removeClass("txt-y");_smq.push(['custom','�Ŷ�������','��Ϸҳ��','G�����']);_gaq.push(['_trackEvent','�Ŷ�������','��Ϸҳ��','G�����']);}else{gameType="shake";$(".start .speedup .txt").addClass("txt-y");_smq.push(['custom','�Ŷ�������','��Ϸҳ��','high����']);_gaq.push(['_trackEvent','�Ŷ�������','��Ϸҳ��','high����']);}
$("#selecttype").hide();if(!isLoaded){$(".start .loading").show();}else{showStart();}});var isLoaded=false;function filesLoad(){var loadingTxt=$("#loading .ft");var queue=new createjs.LoadQueue();queue.installPlugin(createjs.Sound);queue.on("complete",handleComplete,this);queue.on("progress",handleProgress,this);queue.loadManifest([{id:"sound",src:"/html5/sheqiu/wxgame/dlss/audio/2.mp3"},{id:"footballshadow",src:"/html5/sheqiu/wxgame/dlss/images/footballshadow.png"},{id:"prose",src:"/html5/sheqiu/wxgame/dlss/images/prose.png"},{id:"shareico",src:"/html5/sheqiu/wxgame/dlss/images/shareico.png"},{id:"football",src:"/html5/sheqiu/wxgame/dlss/images/football1.png"},{id:"startbg",src:"/html5/sheqiu/wxgame/dlss/images/bg.jpg"},{id:"start-txt-1",src:"/html5/sheqiu/wxgame/dlss/images/start-txt-1.png"},{id:"start-txt-2",src:"/html5/sheqiu/wxgame/dlss/images/start-txt-2.png"},{id:"zha",src:"/html5/sheqiu/wxgame/dlss/images/zha.png"},{id:"logo",src:"/html5/sheqiu/wxgame/dlss/images/logo.png"},{id:"img",src:"/html5/sheqiu/wxgame/dlss/images/img.png"},{id:"halo-1",src:"/html5/sheqiu/wxgame/dlss/images/halo-1.png"},{id:"halo-2",src:"/html5/sheqiu/wxgame/dlss/images/halo-2.png"},{id:"halo-3",src:"/html5/sheqiu/wxgame/dlss/images/halo-3.png"},{id:"halo-4",src:"/html5/sheqiu/wxgame/dlss/images/halo-4.png"},{id:"hand",src:"/html5/sheqiu/wxgame/dlss/images/hand.png"},{id:"speed-nbg",src:"/html5/sheqiu/wxgame/dlss/images/nbg.png"},{id:"speed-nhand",src:"/html5/sheqiu/wxgame/dlss/images/nhand.png"},{id:"speed-ntxt",src:"/html5/sheqiu/wxgame/dlss/images/ntxt.png"},{id:"flightbg",src:"/html5/sheqiu/wxgame/dlss/images/bg2.jpg"},{id:"cjb",src:"/html5/sheqiu/wxgame/dlss/images/1.png"},{id:"gaming-football",src:"/html5/sheqiu/wxgame/dlss/images/football.png"},{id:"gaming-huo",src:"/html5/sheqiu/wxgame/dlss/images/huo.png"},{id:"gaming-superman",src:"/html5/sheqiu/wxgame/dlss/images/superman.png"},{id:"gaming-tao",src:"/html5/sheqiu/wxgame/dlss/images/tao.png"},{id:"gaming-wate-g",src:"/html5/sheqiu/wxgame/dlss/images/wate-g.png"},{id:"gaming-wate-g-1",src:"/html5/sheqiu/wxgame/dlss/images/wate-g-1.png"},{id:"gaming-wate-g-2",src:"/html5/sheqiu/wxgame/dlss/images/wate-g-2.png"},{id:"gend-b-3",src:"/html5/sheqiu/wxgame/dlss/images/b-3.png"},{id:"gend-c1",src:"/html5/sheqiu/wxgame/dlss/images/c1.png"},{id:"gend-c2",src:"/html5/sheqiu/wxgame/dlss/images/c2.png"},{id:"gend-h",src:"/html5/sheqiu/wxgame/dlss/images/h.png"},{id:"gend-t-0",src:"/html5/sheqiu/wxgame/dlss/images/t-0.png"},{id:"gend-t-1",src:"/html5/sheqiu/wxgame/dlss/images/t-1.png"},{id:"gend-t-2",src:"/html5/sheqiu/wxgame/dlss/images/t-2.png"},{id:"gend-t-3",src:"/html5/sheqiu/wxgame/dlss/images/t-3.png"},{id:"gend-t-s",src:"/html5/sheqiu/wxgame/dlss/images/t-s.png"},{id:"gend-y-1",src:"/html5/sheqiu/wxgame/dlss/images/1-1.png"},{id:"gend-y-2",src:"/html5/sheqiu/wxgame/dlss/images/2-1.png"},{id:"gend-y-3",src:"/html5/sheqiu/wxgame/dlss/images/3-3.png"},{id:"gend-y-4",src:"/html5/sheqiu/wxgame/dlss/images/4.png"},{id:"gend-y-5",src:"/html5/sheqiu/wxgame/dlss/images/5.png"},{id:"gend-y-6",src:"/html5/sheqiu/wxgame/dlss/images/6.png"},{id:"grand-b1",src:"/html5/sheqiu/wxgame/dlss/images/b1.png"},{id:"grand-b2",src:"/html5/sheqiu/wxgame/dlss/images/b2.png"},{id:"grand-line",src:"/html5/sheqiu/wxgame/dlss/images/line.png"},{id:"grand-listshadow",src:"/html5/sheqiu/wxgame/dlss/images/listshadow.png"},{id:"grand-title",src:"/html5/sheqiu/wxgame/dlss/images/title.png"}]);function handleComplete(){if(isLoaded){return;}
isLoaded=true;$(".gaming .sky").css({width:skySize.acWidth,height:skySize.acHeight,backgroundImage:"url("+queue.getResult("flightbg").src+")"});loadingTxt.text("100%");startObj=start();gameObj=game();gameEndObj=gend();gameRandObj=grand();$(".start .loading").hide();if(gameType!=""||getQueryString("id")){showStart();}
_smq.push(['custom','�Ŷ�������','��Ϸҳ��','�������',,1]);}
function handleProgress(a,b,c){loadingTxt.text((parseInt(a.currentTarget._numItemsLoaded/a.currentTarget._numItems*100,10).toFixed(0))+"%");}}
function showStart(){if(getQueryString("id")){gameRandObj.show({id:getQueryString("id")});if(!document.all){history.pushState(null,null,url);}
else{window.location.href="#12";}}else{startObj.startInit();}}});function start(){var football=$(".start .football");var haloDom=$(".start .halo");var haloNum=1;var haloIsPlay=true;function haloPlay(){haloNum++;if(haloNum>4){haloNum=1;}
setTimeout(function(){haloDom.attr("class","P_layer halo halo-"+haloNum);if(haloIsPlay){haloPlay();}},400);};function startInit(){clickNumSize=0;clickNum=0;haloIsPlay=true;haloNum=1;haloPlay();clickNumStatus=false;speedupProsess.width(0);$(".start .box .logo,.start .box .logo-amazon").show();$(".start .halo,.start .football,.start .tip,.start .hand").fadeIn(300);football.unbind(tapEvent).one(tapEvent,function(e){audioobj.play();autioIsPlay();haloNum=0;haloDom.attr("class","P_layer halo");football.unbind(tapEvent);_smq.push(['custom','�Ŷ�������','��Ϸҳ��','��ʼ']);_gaq.push(['_trackEvent','�Ŷ�������','��Ϸҳ��','��ʼ']);});gameObj.gameInit();}
var SHAKE_THRESHOLD=600;var last_update=0;var x,y,z,last_x,last_y,last_z;function deviceMotionHandler(eventData){var acceleration=eventData.accelerationIncludingGravity;var curTime=new Date().getTime();if((curTime-last_update)>100){var diffTime=curTime-last_update;last_update=curTime;x=acceleration.x;y=acceleration.y;z=acceleration.z;var speed=Math.abs(x+y+z-last_x-last_y-last_z)/diffTime*10000;if(speed>SHAKE_THRESHOLD){if(clickNum<clickNumCount){clickNum++;}
haloNum++;if(haloNum>4){haloNum=1;}
clickNumSize=clickNum/clickNumCount*400;speedupProsess.width(clickNumSize+"%");haloDom.attr("class","P_layer halo halo-"+haloNum);}
last_x=x;last_y=y;last_z=z;}}
function startReplay(){footballEventCount=0;$(".start").show();football.css({left:"50%",bottom:19,marginLeft:-91,width:183,height:186,transition:"none"});$(".start .speedup,.start .speedup .txt-s div").hide();$(".start .cbox .tip,.start .cbox .hand,.start .cbox .halo,.start .cbox .football").hide();$("#selecttype").show();}
var footballEventCount=0;$(".start .football").get(0).addEventListener('webkitTransitionEnd',function(e){footballEventCount++;if(footballEventCount==4){$(".start").hide();$(".start .football,.start .box .logo,.start .box .logo-amazon").hide();gameObj.gameStart(clickNumSize);}});function startPlay(){footballEventCount=0;var footballBottom=($(window).height()-$(".footballtarget").position().top*windowWidthScale)/windowWidthScale;football.css({bottom:footballBottom,marginLeft:0,width:0,height:0,transition:"all 1s"});}
function startReady(){haloIsPlay=false;$(".start .hand,.start .tip").hide();$(".start .speedup").show();countdownNum=5;countdownToStart(0);}
var countdownNum=5;function countdownToStart(a){if(a==0){a++;setTimeout(function(){$(".start .speedup .txt-s .ready").show();setTimeout(function(){countdownToStart(1);},1000);},500);}else if(a==1){$(".start .speedup .txt-s .ready").hide();$(".start .speedup .txt-s .go").show();setTimeout(function(){countdownToStart(2);},1000);}else if(a==2){$(".start .speedup .txt-s .go").hide();$(".start .speedup .txt-s .num").show();countdownToStart();if(gameType=="click"){football.unbind(tapEvent).bind(tapEvent,function(e){if(clickNum<clickNumCount){clickNum++;}
haloNum++;if(haloNum>4){haloNum=1;}
clickNumSize=clickNum/clickNumCount*400;speedupProsess.width(clickNumSize+"%");haloDom.attr("class","P_layer halo halo-"+haloNum);});}else{window.addEventListener('devicemotion',deviceMotionHandler,false);}}else{if(countdownNum<0){if(gameType=="click"){football.unbind(tapEvent);}else{window.removeEventListener('devicemotion',deviceMotionHandler,false);}
$(".start .halo").hide();$(".start .speedup").fadeOut(500);startPlay();}else{$(".start .speedup .txt-s>.num").text(countdownNum);setTimeout(function(){countdownToStart();},1000);countdownNum--;}}}
var clickNumSize=0;var clickNumCount=200;var clickNum=0;var clickNumStatus=false;var speedupProsess=$(".start .speedup .prosess1 .b span");var audioobj=$("audio").get(0);function autioIsPlay(){footballClickStatus=true;if(audioobj.currentTime>0){startReady();}else{setTimeout(function(){autioIsPlay();},50);}}
var footballClickStatus=false;return{football:football,startInit:startInit,startPlay:startPlay,startReplay:startReplay}}
function game(){var sky=$(".gaming .sky");var highSize=0;function gameInit(){sky.removeClass("sky-go-0").css({transform:"translate(0,-"+(skySize.acHeight-windowHeight)+"px)"});}
function gameReplay(){$(".gaming").removeClass("gamingshow");$(".gaming .football .txt,.gaming .football .shock,.gaming .football .shock-1,.gaming .football .shock-2,.gaming .football .ball-1,.gaming .football .ball-2,.gaming .football .ball-3").hide();$(".gaming .superman").removeClass("supermanshow");$(".gaming .football").show().css({transform:"translate(0,"+windowHeight+"px)"});$(".gaming .football .ball").removeClass("ball-end");$(".gaming .footballflightnum").removeClass("footballflightnum-end");timing.text(0);highSize=0;timingNum=0;gameInit();}
function gameStart(prosessSize){$(".gaming").addClass("gamingshow");$(".gaming .football").show().css({transform:"translate(0,"+(windowHeight*0.3/windowWidthScale)+"px)"});$(".gaming .football .ball").show();haloNum=1;haloIsPlay=true;gameGo(prosessSize);}
function gameGo(prosessSize){$(".gaming .pagelock,.gaming .pagelock .speedup").hide();$(".gaming .superman").addClass("supermanshow");var pscale=prosessSize/100;pscale=pscale>1?1:pscale;highSize=(29000*pscale+randomBetween1(0,999,true)).toFixed(0);highSize=randomBetween1(highSize*0.8,highSize,true);var high=skySize.acHeight/2-skySize.acHeight/2*pscale;$(".gaming .footballflightnum,.gaming .football .shock").show();sky.addClass("sky-go-0");setTimeout(function(){sky.css({transform:"translate(0,-"+high+"px)"});},50);timingStep=parseInt(highSize/9/20);timingIsPlay=true;timingPlay();setTimeout(function(){$(".gaming .football .shock").hide();$(".gaming .football .shock-1").show();setTimeout(function(){$(".gaming .football .shock-1").hide();$(".gaming .football .shock-2").show();},3000);},3000);}
sky.get(0).addEventListener('webkitTransitionEnd',function(){$(".gaming .football").css({transform:"scaleX(0.9) translate(0,"+(windowHeight*0.1/windowWidthScale)+"px)"});$(".gaming .football .ball").addClass("ball-end");$(".gaming .footballflightnum").addClass("footballflightnum-end");timingIsPlay=false;timing.text(highSize);setTimeout(function(){gameEndObj.show(highSize);$(".gaming .footballflightnum").hide();$(".gaming .football,.gaming .football .ball").hide();dp_submitScore(highSize);},2500);});var timing=$(".gaming .footballflightnum .num");var timingIsPlay=false;var timingNum=0;var timingStep=0;function timingPlay(){setTimeout(function(){if(timingIsPlay){timing.text(timingNum);timingNum+=timingStep;timingPlay();}else{timing.text(highSize);}},50);}
function randomBetween1(c,a,d){d=d?d:false;var b=c+(Math.random()*(a+2-c));b=Math.min(b,a);return d?parseInt(b,10):b};return{gameInit:gameInit,gameStart:gameStart,gameReplay:gameReplay}}
function getCoupons(distance){}
var coupons=null;function gend(){var gend=$(".gend");var football=$(".gend .football");var yuan=$(".gend .yuan");var xh=$(".gend .xh");var t1=$(".gend .t1");var t2=$(".gend .t2");var t3=$(".gend .t3");var b1=$(".gend .b1");var b2=$(".gend .b2");var b3=$(".gend .b3");var c1=$(".gend .c1");var c2=$(".gend .c2");yuan.get(0).addEventListener("webkitAnimationEnd",function(e){t1.show();xh.show();setTimeout(function(){t2.show();},200);setTimeout(function(){t3.show();},400);});function gendClose(){gend.hide();xh.hide();football.hide();t1.hide();t2.hide();t3.hide();}
c1.bind(tapEvent,function(e){if(coupons){_smq.push(['custom','�Ŷ�������','����',(gameType=="click"?'G�����':'high����')+'-��Ϸ����-�Ż�ȯ'+coupons.level]);_gaq.push(['_trackEvent','�Ŷ�������','����',(gameType=="click"?'G�����':'high����')+'-��Ϸ����-�Ż�ȯ'+coupons.level]);window.location.href=coupons.url;}
e.preventDefault();});b3.bind(tapEvent,function(e){startObj.startReplay();gameObj.gameReplay();gameEndObj.gendClose();_smq.push(['custom','�Ŷ�������','��Ϸҳ��','����һ��']);_gaq.push(['_trackEvent','�Ŷ�������','��Ϸҳ��','����һ��']);});var distanceKM=0;function show(distance){setTimeout(function(){football.fadeIn(300);},1000);distanceKM=distance;t2.find("b").text(distance+"km");gend.show();}
return{show:show,gendClose:gendClose}}
function grand(){var rand=$(".rand");var rb1=$(".rand .b1");var rb2=$(".rand .b2");rb1.bind(tapEvent,function(e){startObj.startReplay();gameObj.gameReplay();rand.hide();_smq.push(['custom','�Ŷ�������','���а�','����һ��']);_gaq.push(['_trackEvent','�Ŷ�������','���а�','����һ��']);});function show(data){rand.show();showData(data);}
function showData(data){}
function hide(){rand.show();}
return{show:show,hide:hide}}
$(window).resize(windowInit);function windowInit(){windowWidth=$(window).width();windowHeight=$(window).height();if(windowWidth>windowHeight){$(".sceentip").show().css({lineHeight:windowHeight+"px"});}else{$(".sceentip").hide();}
windowWidthScale=windowWidth/640;windowHeightScale=windowHeight/960;skySize.acWidth=windowWidth;skySize.acHeight=skySize.height*windowWidthScale;$(".zoom").css("zoom",windowWidthScale);$(".zoomh").css("zoom",windowHeightScale);$(".weixinbox>img").css({marginLeft:windowHeight/2*-1});}
var browser={versions:function(){var u=navigator.userAgent,app=navigator.appVersion;return{trident:u.indexOf('Trident')>-1,presto:u.indexOf('Presto')>-1,webKit:u.indexOf('AppleWebKit')>-1,gecko:u.indexOf('Gecko')>-1&&u.indexOf('KHTML')==-1,mobile:!!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/),ios:!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:u.indexOf('Android')>-1||u.indexOf('Linux')>-1,iPhone:u.indexOf('iPhone')>-1||u.indexOf('Mac')>-1,iPad:u.indexOf('iPad')>-1,webApp:u.indexOf('Safari')==-1};}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()}
function is_weixn(){var ua=navigator.userAgent.toLowerCase();if(ua.match(/MicroMessenger/i)=="micromessenger"){return true;}else{return false;}}
function randomBetween(c,a,d){d=d?d:false;var b=c+(Math.random()*(a+2-c));b=Math.min(b,a);return d?parseInt(b,10):b};function getQueryString(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");var r=window.location.search.substr(1).match(reg);if(r!=null)return unescape(r[2]);return null;}
function showMsg(txt){var html=$('<div class="noweixinopen"><div class="box"><h3>��ʾ��</h3><p>'+txt+'</p><div class="btns"><a href="#" class="btn">��֪����</a></div></div></div>').appendTo("body");html.find(".box").css({top:(windowHeight-html.find(".box").outerHeight())/2}).find(".btns>.btn").click(function(e){html.remove();e.preventDefault();});}
function isPC(){var userAgentInfo=navigator.userAgent;var Agents=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");var flag=true;for(var v=0;v<Agents.length;v++){if(userAgentInfo.indexOf(Agents[v])>0){flag=false;break;}}
return flag;}