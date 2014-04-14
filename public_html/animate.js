/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var obj, w, goRight;

function setSail()
{
    var pos = parseInt(obj.style.left, 10);
    (goRight) ? pos++ : pos--;
    obj.style.left = pos + "px";
    
    if (pos > (w + 40))
    {
        obj.style.background = "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7le_NA3YWNjFb2p0ipV3bEmeZ1ogyNcy2gM3Br5sMgADMncxddA)";
        goRight = false;
    }    
    if (pos < -140)
    {
        obj.style.background = "url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUJum_hgvwhtDR568j3mBYX7xlpx1E6XdK13ziSSgrhBiKHvyP4g";
        goRight = true; 
       
    }
            
    setTimeout(setSail, 10); 
}

function init()
{
    var preload = new Image();
    preload.src = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7le_NA3YWNjFb2p0ipV3bEmeZ1ogyNcy2gM3Br5sMgADMncxddA";
    
    obj = document.getElementById("boat");
    w = document.body.clientWidth;
    goRight = true;
    
    obj.style.position = "absolute";
    obj.style.left = "-120px";
    
    setSail();
}

document.addEventListener("DOMContentLoaded", init, false);

