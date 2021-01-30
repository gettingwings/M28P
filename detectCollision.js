
function detectCollision(stone, mango){

    var stonePos = stone.body.position;
    var mangoPos = mango.body.position;

    var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
    // stone.r  radius of stone, mango.r radius of mango 
    if(distance <= stone.r + mango.r){
        Matter.Body.setStatic(mango.body, false);
        Matter.Body.rotate(stone.body,0,{x:stonePos.x ,y:stonePos.y})
    }
}