﻿・ｿ//JavaScript縺ｮ繧ｽ繝ｼ繧ｹ縺ｾ縺ｧ縺ｿ縺ｦ繧九↑繧薙※縲ゅｈ縺｣縺ｽ縺ｩ豌励↓蜈･縺｣縺溘・縺ｭ縲・
//縺薙・繧ｹ繧ｯ繝ｪ繝励ヨ縺ｯ豬ｷ螟悶・繧ｵ繧､繝医ｒ譌･譛ｬ隱槭↓莠懷ｸ悟ｭ舌′螟峨∴縺溘・繧医・
//縺・＞繧ｹ繧ｯ繝ｪ繝励ヨ縺・▲縺ｱ縺・≠繧九°繧芽｡後▲縺ｦ縺ｿ縺ｦ縺ｭ縲ゑｼ井ｺ懷ｸ悟ｭ撰ｼ・
//縲縲縲縲縲竊・
//Tic Tac Toe- By Brian (http://scriptasylum.com/bgaudiodr/)
//Modified by Yossi Cohen (yossi@prosite.co.il)
//Featured on Dynamicdrive.com
//Visit http://www.dynamicdrive.com for this script

var image1=new Image(); image1.src="ex.gif";
var image2=new Image(); image2.src="oh.gif";

var level=1, myway, mynextmove;
var tmp, done, iswon, content;
var pcwins=[0,0,0,0];
var playerwins=[0,0,0,0];
var draws=[0,0,0,0]; 
var playerstarts=true;
var moves=new Array();
var game=new Array(9);
var choices=[11,12,13,21,22,23,31,32,33];
var corners=[11,13,31,33];
var ways=new Array();
ways[1]=[0,11,12,13];
ways[2]=[0,21,22,23];
ways[3]=[0,31,32,33];
ways[4]=[0,11,21,31];
ways[5]=[0,12,22,32];
ways[6]=[0,13,23,33];
ways[7]=[0,11,22,33];
ways[8]=[0,13,22,31]; 
var w3c=(document.getElementById)?true:false;
var ns4=(document.layers)?true:false;
var ie4=(document.all && !w3c)?true:false;
var ie5=(document.all && w3c)?true:false;
var ns6=(w3c && navigator.appName.indexOf("Netscape")>=0)?true:false;

function init(){
oktoplay=true;
iswon=false;
done=0;
writetext(4);
moves[11]=0; moves[12]=0; moves[13]=0; moves[21]=0; moves[22]=0; moves[23]=0; moves[31]=0; moves[32]=0; moves[33]=0;
for(i=0;i<=8;i++){
document.images['rc'+choices[i]].src="nothing.gif";
document.images['rc'+choices[i]].alt="";
game[i]=0;
}
if(!playerstarts)pcturn();
}

function writetext(num){
switch(num){
case 1: content='蠑輔″蛻・￠縺｣縺吶・;
break;
case 2: content='(*ﾂｴﾐｴ・)ﾏ・・繧ｿ繧ｯ繧ｽ';
break;
case 3: content='蜍昴※縺ｦ繧医°縺｣縺溘・縲・;
break;
case 4: content='繝ｬ繝吶Ν: '+level+'\n\n蜍昴■:  縺薙・繝ｬ繝吶Ν縺ｮ蜍昴■- '+playerwins[level]+'  (險・ '+(playerwins[0]+playerwins[1]+playerwins[2]+playerwins[3])+')\n雋縺・  縺薙・繝ｬ繝吶Ν縺ｧ雋縺・ '+pcwins[level]+'  (險・ '+(pcwins[0]+pcwins[1]+pcwins[2]+pcwins[3])+')\n蠑募・:  縺薙・繝ｬ繝吶Ν縺ｧ蠑募・- '+draws[level]+'  (險・ '+(draws[0]+draws[1]+draws[2]+draws[3])+')';
break;
}

document.scores.scores2.value=content

if(num<4)setTimeout('init(4)',1000);
}

function setlevel(x){
	if (level!=x){
		level=x;
		init();
}}

function setbutton(cellnum){
if (!iswon){ 			
if(moves[cellnum]==0){
document.images['rc'+cellnum].src="ex.gif";
document.images['rc'+cellnum].alt=" X ";
moves[cellnum]=1;
game[done]=cellnum;
done++;
findwinner(true);
}else alert('縺昴％縺ｫ縺ｯ鄂ｮ縺代∪縺帙ｓ繧医・');
}}

function pcstrategy(istowin){
if (level>0){
var str=(istowin)? 2 : 1;
for(n=1;n<=8;n++){
if((moves[ways[n][1]]==str) && (moves[ways[n][2]]==str) && (moves[ways[n][3]]==0)) tmp=ways[n][3];
if((moves[ways[n][1]]==str) && (moves[ways[n][3]]==str) && (moves[ways[n][2]]==0)) tmp=ways[n][2];
if((moves[ways[n][2]]==str) && (moves[ways[n][3]]==str) && (moves[ways[n][1]]==0)) tmp=ways[n][1];
}}}


function selecCorner(which){
if (which=="empty"){
do{
tmp=corners[Math.floor(Math.random()*4)];
}while(moves[tmp]!=0);
}
else
tmp=corners[Math.floor(Math.random()*4)];
}


function pcdontlose(){
if (!playerstarts){
if (done==0){
tmp=choices[2*Math.floor(Math.random()*5)];
if (tmp==22) myway=1;
else myway=2;
}
else if (done==2){
if (myway==1){
if (game[1]==11 || game[1]==13 || game[1]==31 || game[1]==33)
tmp=44-game[1];	
else{
dlta=22-game[1];
op0=22+dlta+(10/dlta);
op1=22+dlta-(10/dlta);
tmp=eval("op"+Math.floor(Math.random()*2));
}}
else if (myway==2){
if (game[1]==22){
tmp=44-game[0];
myway=21;
}
else if (game[1]==11 || game[1]==13 || game[1]==31 || game[1]==33){
selecCorner("empty");
myway=22;
}
else{
tmp=22;
myway=23;
}}}
else if (done==4){
if (myway==22){
for (i=0; i<4 ;i++){            
if (moves[corners[i]]==0){
tmp=corners[i];
}}}
else if (myway==23){
dlta=game[1]-game[0];
op0=44-(game[1]+dlta);
op1=(op0+game[0])/2;
tmp=eval("op"+Math.floor(Math.random()*2));
}
else if (myway==1)
tmp=44+game[2]-(2*game[3]);
}}
else if (level==3){
if (done==1){
if (game[0]==11 || game[0]==13 || game[0]==31 || game[0]==33){
tmp=22;
myway=1;
}
else if (game[0]==22){
selecCorner("any");
myway=2;
}
else{
tmp=22;
myway=3;
}}
else if (done==3){
if (myway==1){
if (game[2]==44-game[0])
tmp=choices[1+(2*Math.floor(Math.random()*4))];
else
tmp=44-game[0]
}
else if (myway==2){
if (game[2]==44-game[1])
selecCorner("empty");
}
else if (myway==3){
if (game[2]==11 || game[2]==13 || game[2]==31 || game[2]==33)
tmp=44-game[2];
if (game[2]==44-game[0]){
dlta=22-game[2];
tmp=22+(10/dlta);
mynextmove=tmp+dlta;
}
else{
dlta=22-game[0];
op0=game[0]+(10/dlta);	
op1=game[0]-(10/dlta);	
op2=game[2]+dlta;	
tmp=eval("op"+Math.floor(Math.random()*3));
}}}
else if (done==5 && myway==3){
tmp=mynextmove;
}}}


function findwinner(isplayer){
me=(isplayer)? 1 : 2;
for(n=1;n<=8;n++){
if( (moves[ways[n][1]]==me) && (moves[ways[n][2]]==me) && (moves[ways[n][3]]==me) ){
iswon=true;
break;
}}
if(iswon){
if(isplayer){
playerwins[level]++;
playerstarts=true;
writetext(3);
}else{
pcwins[level]++;
playerstarts=false;
writetext(2);
}}else{
if(done>8){
draws[level]++;
playerstarts=!playerstarts;
writetext(1);
}else if(isplayer) pcturn();
}}

function pcrandom(){
do{
tmp=choices[Math.floor(Math.random()*9)];
}while(moves[tmp]!=0);
}

function pcturn(){
tmp='00';
pcstrategy(true);
if(tmp=='00')pcstrategy(false);
if(tmp=='00' && level>1)
	pcdontlose();
if(tmp=='00')
	pcrandom();
moves[tmp]=2;
game[done]=tmp;
document.images['rc'+tmp].src="oh.gif";
document.images['rc'+tmp].alt=" O ";
done++;
findwinner(false);
}

window.onload=init;

window.onresize=function(){
  if(ns4)setTimeout('history.go(0)',400);
}