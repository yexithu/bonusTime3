function init(){var a=document.querySelector(".ip-slideshow");canvas=document.createElement("canvas"),canvas.width=innerWidth,canvas.height=700,a.appendChild(canvas),context=canvas.getContext("2d"),randomOrder(reOrder,mainNum),createParticles(),showLoop=setInterval("showPic()",1800),createText(word)}function createParticles(){for(var a=0,b=mainNum;b>a;a++){var c,d,e=2*Math.PI*a/b;c=.5*canvas.width+10*Math.cos(e),d=180+10*Math.sin(e);var f=randomBetween(0,12),g=!(f>0||12>f),h=colors[10][Math.floor(Math.random()*colors[10].length)];particles.push({x:c,y:d,hasBorn:g,ease:.04+.06*Math.random(),bornSpeed:.03+.1*Math.random(),alpha:0,maxAlpha:.5+.5*Math.random(),radius:f,maxRadius:12,color:h,angle:0,steps:e})}loop()}function createTextParticles(a){for(var b=0,c=a;c>b;b++){var d=randomBetween(0,12),e=!(d>0||12>d),f="#FFFFFF";text.push({x:.5*canvas.width,y:canvas.height-100,hasBorn:e,ease:.04+.06*Math.random(),bornSpeed:.07+.07*Math.random(),alpha:0,maxAlpha:.4+.7*Math.random(),radius:d,maxRadius:12,color:f,interactive:!1})}}function createTextFrame(a){for(var b,c,d=a/5.236,e=1.618*d,f=0,g=a;g>f;f++)d>f?(b=canvas.width/2-halfX,c=canvas.height/2-halfY+2*f*halfY/d):d+e>f?(c=canvas.height/2+halfY,b=canvas.width/2-halfX+2*(f-d)*halfX/e):2*d+e>f?(b=canvas.width/2+halfX,c=canvas.height/2-halfY+2*(f-d-e)*halfY/d):(c=canvas.height/2-halfY,b=canvas.width/2-halfX+2*(f-2*d-e)*halfX/e),textReOrder.push(f),nextText[1].push({x:b,y:c,orbit:randomBetween(7,13),angle:0})}function createText(a){context.font="200px Lato, Arial, sans-serif",context.fillStyle="rgb(255, 255, 255)",context.textAlign="center";var b=a.toUpperCase().split("").join(String.fromCharCode(8202));context.fillText(b,.5*canvas.width,canvas.height-50);for(var c=context.getImageData(0,canvas.height-250,canvas.width,250),d=0;d<c.width;d+=8)for(var e=0;e<c.height;e+=4){var f=c.data[e*c.width*4+4*d-1];255===f&&nextText[0].push({x:d,y:e+canvas.height-250,orbit:randomBetween(1,3),angle:0})}clearWord();var g=nextText[0].length;textSeed=g,createTextParticles(g),createTextFrame(g)}function loop(){clear(),update(),render(),setTimeout(loop,1e3/FPS)}function clear(){context.clearRect(0,0,canvas.width,canvas.height)}function clearWord(){context.clearRect(0,canvas.height-250,canvas.width,250)}function updataTransition(){[].forEach.call(particles,function(a,b){switch(currentLayout){case 0:var c=Math.floor(3*b/mainNum),d=b-c*partNum;switch(randomNum[c]){case 0:var e=2*Math.PI*d/partNum;shape.x=.5*canvas.width+85*Math.cos(e),shape.y=.5*canvas.height+140*Math.sin(e);break;case 1:partNum/2>d?(shape.x=.5*canvas.width+1,shape.y=canvas.height/2-140+280*(d/partNum)):(shape.x=.5*canvas.width-1,shape.y=canvas.height/2+140-(d-partNum/2)/partNum*280);break;case 2:if(.435*partNum>d){var f=5*Math.PI/4*d/(.435*partNum);shape.x=.5*canvas.width-85*Math.cos(f),shape.y=.5*canvas.height-60-85*Math.sin(f)}else.78*partNum>d?(shape.x=.5*canvas.width+60-145*(d-.435*partNum)/(.345*partNum),shape.y=.5*canvas.height-5+147*(d-.435*partNum)/(.345*partNum)):(shape.x=.5*canvas.width-85+170*(d-.78*partNum)/(.22*partNum),shape.y=.5*canvas.height+140);break;case 3:if(93*partNum/200>d){var f=5*Math.PI/4*d/(93*partNum/200)-Math.PI/4;shape.x=.5*canvas.width+65*Math.sin(f),shape.y=.5*canvas.height-70-65*Math.cos(f)}else{var f=5*Math.PI/4*(d-93*partNum/200)/(107*partNum/200);shape.x=.5*canvas.width+75*Math.sin(f),shape.y=.5*canvas.height+70-75*Math.cos(f)}break;case 4:76*partNum/200>d?(shape.x=50+.5*canvas.width,shape.y=280*d/(76*partNum/200)+.5*canvas.height-140):127*partNum/200>d?(shape.y=.5*canvas.height+43,shape.x=.5*canvas.width-93+186*(d-76*partNum/200)/(51*partNum/200)):(shape.x=.5*canvas.width+50-143*(d-127*partNum/200)/(73*partNum/200),shape.y=.5*canvas.height-140+187*(d-127*partNum/200)/(73*partNum/200));break;case 5:if(46*partNum/200>d)shape.y=.5*canvas.height-140,shape.x=.5*canvas.width-75+150*d/(46*partNum/200);else if(86*partNum/200>d)shape.x=.5*canvas.width-75,shape.y=.5*canvas.height-140+100*(d-46*partNum/200)/(40*partNum/200);else if(109*partNum/200>d)shape.y=.5*canvas.height-40,shape.x=.5*canvas.width-75+75*(d-86*partNum/200)/(23*partNum/200);else{var f=19*Math.PI/14*(d-109*partNum/200)/(91*partNum/200);shape.x=.5*canvas.width+90*Math.sin(f),shape.y=.5*canvas.height+50-90*Math.cos(f)}break;case 6:if(60*partNum/200>d){var f=Math.PI*d/(60*partNum/200);shape.x=.5*canvas.width+85*Math.cos(f),shape.y=.5*canvas.height-55-85*Math.sin(f)}else if(80*partNum/200>d)shape.x=.5*canvas.width-85,shape.y=.5*canvas.height-55+110*(d-60*partNum/200)/(20*partNum/200);else{var f=2*Math.PI*(d-80*partNum/200)/(120*partNum/200);shape.x=.5*canvas.width+85*Math.sin(f),shape.y=.5*canvas.height+55+85*Math.cos(f)}break;case 7:70*partNum/200>d?(shape.y=.5*canvas.height-140,shape.x=.5*canvas.width-85+170*d/(70*partNum/200)):(shape.x=.5*canvas.width+85-100*(d-70*partNum/200)/(130*partNum/200),shape.y=.5*canvas.height-140+280*(d-70*partNum/200)/(130*partNum/200));break;case 8:if(92*partNum/200>d){var f=2*Math.PI*d/(92*partNum/200);shape.x=.5*canvas.width+65*Math.sin(f),shape.y=.5*canvas.height-75+65*Math.cos(f)}else{var f=2*Math.PI*(d-92*partNum/200)/(108*partNum/200);shape.x=.5*canvas.width+75*Math.sin(f),shape.y=.5*canvas.height+65+75*Math.cos(f)}break;case 9:if(60*partNum/200>d){var f=Math.PI*d/(60*partNum/200);shape.x=.5*canvas.width+85*Math.cos(f),shape.y=.5*canvas.height+55+85*Math.sin(f)}else if(80*partNum/200>d)shape.x=.5*canvas.width+85,shape.y=.5*canvas.height+55-110*(d-60*partNum/200)/(20*partNum/200);else{var f=2*Math.PI*(d-80*partNum/200)/(120*partNum/200);shape.x=.5*canvas.width+85*Math.sin(f),shape.y=.5*canvas.height-55+85*Math.cos(f)}}shape.x+=(c-1)*gap;break;case 1:shape.x=.5*canvas.width+100*-Math.sin(reOrder[b]),shape.y=.5*canvas.height+60*Math.sin(reOrder[b])*Math.cos(reOrder[b]);break;case 2:shape.x=.5*canvas.width+140*Math.sin(a.steps),shape.y=180+140*Math.cos(a.steps);break;case 3:var g,f;g=.5*mainNum-1,f=2*Math.PI*reOrder[b]/g,reOrder[b]<[].slice.call(particles,0,g).length?(shape.x=.5*canvas.width+80*Math.cos(f),shape.y=180+140*Math.sin(f)):(g=.5*particles.length,shape.x=.5*canvas.width+140*Math.cos(f),shape.y=180+80*Math.sin(f));break;case 4:shape.x=.5*canvas.width+90*(1-Math.sin(reOrder[b]))*Math.cos(reOrder[b]),shape.y=320+140*(-Math.sin(reOrder[b])-1);break;case 5:shape.x=.5*canvas.width+90*Math.sin(reOrder[b])*Math.cos(reOrder[b]),shape.y=320+140*(-Math.sin(reOrder[b])-1)}a.x+=.08*(shape.x+5*Math.cos(a.angle)-a.x),a.y+=.08*(shape.y+5*Math.sin(a.angle)-a.y),a.angle+=.08}),[].forEach.call(nextText[isTextOpen],function(a,b){text[textReOrder[b]].x+=.15*(a.x+Math.cos(a.angle+b)*a.orbit-text[textReOrder[b]].x),text[textReOrder[b]].y+=.15*(a.y+Math.sin(a.angle+b)*a.orbit-text[textReOrder[b]].y),a.angle+=.08})}function update(){updataTransition(),[].forEach.call(particles,function(a,b){if(a.alpha+=.05*(a.maxAlpha-a.alpha),a.hasBorn){if(a.radius+=(0-a.radius)*a.bornSpeed,0===Math.round(a.radius)){var c=Math.floor(3*b/mainNum);a.color=0==currentLayout?colors[randomNum[c]][Math.floor(Math.random()*colors[currentLayout].length)]:colors[currentLayout+9][Math.floor(Math.random()*colors[currentLayout].length)],a.hasBorn=!1}}else a.radius+=(a.maxRadius-a.radius)*a.bornSpeed,Math.round(a.radius)===a.maxRadius&&(a.hasBorn=!0)}),[].forEach.call(text,function(a){a.alpha+=.05*(a.maxAlpha-a.alpha),a.hasBorn&&(a.radius+=(0-a.radius)*a.bornSpeed,0===Math.round(a.radius)&&(a.hasBorn=!1)),a.hasBorn||(a.radius+=(a.maxRadius-a.radius)*a.bornSpeed,Math.round(a.radius)===a.maxRadius&&(a.hasBorn=!0))})}function render(){[].forEach.call(particles,function(a){context.save(),context.globalAlpha=a.alpha,context.fillStyle=a.color,context.beginPath(),context.arc(a.x,a.y,a.radius,0,2*Math.PI),context.fill(),context.restore()}),[].forEach.call(text,function(a){context.save(),context.globalAlpha=a.alpha,context.fillStyle="rgb(255, 255, 255)",context.beginPath(),context.arc(a.x,a.y,a.radius,0,2*Math.PI),context.fill(),context.restore()})}function randomBetween(a,b){return Math.floor(Math.random()*(b-a+1)+a)}function randomOrder(a,b){for(var c=0,d=0;b>d;d++)a[d]=d;for(var d=b;d>0;d--){c=randomBetween(0,d);var e=a[c];a[c]=a[d-1],a[d-1]=e}}function max(a,b){return a>b?a:b}function showPic(){0==status&&(currentLayout++,randomOrder(reOrder,mainNum),2>currentLayout&&(currentLayout=3),currentLayout>5&&(currentLayout=2))}function randomNumberArray(){randomNum[0]=randomBetween(0,maxHundredNum),randomNum[1]=randomBetween(0,9),randomNum[1]==randomNum[0]&&(randomNum[1]=randomBetween(0,9)),randomNum[2]=randomBetween(0,9),randomNum[2]==randomNum[1]&&(randomNum[2]=randomBetween(0,9))}var self=window,halfX=450,halfY=250,isTextOpen=0,textReOrder=[],textSeed,mainNum=360,randomNum=[0,0,0],partNum=mainNum/3,gap=250,showLoop,canvas,context,particles=[],reOrder=[],maxHundredNum=6,text=[],nextText=[[],[]],shape={},FPS=60,type=["circle","ovals","drop","ribbon"],currentLayout=3,status=0,word="码戏团",colors=[["#e67e22","#2c3e50"],["#c0392b","#ff7e15"],["#1d75cf","#3a5945"],["#702744","#f98d00"],["#e67e22","#2c3e50"],["#c0392b","#ff7e15"],["#1d75cf","#3a5945"],["#702744","#f98d00"],["#e67e22","#2c3e50"],["#c0392b","#ff7e15"],["#e67e22","#2c3e50"],["#c0392b","#ff7e15"],["#1d75cf","#3a5945"],["#c0392b","#ff7e15"],["#702744","#f98d00"]];window.onload=init,$("body").keydown(function(a){console.log(a.which),32==a.which?0==status?(status++,randomOrder(textReOrder,textSeed),randomOrder(reOrder,mainNum),isTextOpen=1,currentLayout=1,clearInterval(showLoop)):(status=0,randomOrder(textReOrder,textSeed),isTextOpen=0,showPic(),showLoop=setInterval("showPic()",1800)):13==a.which&&(1==status?(randomNumberArray(),currentLayout=0,status=2):2==status&&(status=1,currentLayout=1))});