/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i, imgs, pic;

function rotate()
{
    pic.src = imgs[i];
    (i === (imgs.length - 1)) ? (i=0) : (i++);
    setTimeout(rotate, 3000);
}

function init()
{
    pic = document.getElementById("pic");  
    
    imgs=[
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSckzg5kCQIGPbXZ3ADuFpPI3EucAC-AZsT-rkJgevV96OCRy2L4A",
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSTVdMzJeH3YKLor1-xbymtsBbwHMdWNTlM5q2U9minJVL1Djgz",
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQr9kQWA6DUcAGDbVx9Bp3ockH5V8ZkwpKnuFJrs_kXQY5seplS_g",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7ZvAi1kWOQCuJyq2_4fJ8g7OwgjTrUGTRPbJPVEmA1PIBQgV5Q"];
    
    var preload = new Array();
    
    for (i=0; i < imgs.length; i++)
    {
        preload[i] = new Image();
        preload[i].src = imgs[i];
    }
    
    i = 0;
    rotate();
}

document.addEventListener("DOMContentLoaded", init, false);

