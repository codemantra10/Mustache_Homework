noseX="";
noseY="";
function preload(){
loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
canvas=createCanvas(400,400);
canvas.position(550,100);
video=createCapture(VIDEO);
video.hide();
console.log(ml5.version);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function draw(){
image(video,0,0,400,400);
}
function snapshot(){
save("mustache_image");
}
function modelLoaded(){
console.log("Model is ready and working")
}
function gotPoses(results){
if (results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log(noseX+""+noseY)
}
}