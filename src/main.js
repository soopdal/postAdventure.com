
window.onload = setupWebGL;
var gl = null;
var isFullScreen = false;

function setupWebGL() 
{
    setFullscreen();        
    setWebGL();
}

function setWebGL()
{
    var canvas = document.getElementById("canvas");
    try 
    {
        canvas.style.width = '100%';
        canvas.style.height = '100%';

        gl = canvas.getContext("experimental-webgl");
    }
    catch (e) { }

    if(gl)
    {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);      //set the clear color to red
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    else
    {
        alert( "오류: 웹GL을 지원하지 않는 브라우저일 수 있습니다.");
    }
}

function setFullscreen() 
{
    $('#canvas').dblclick(function () { toggleFullScreen(); } );
}

function toggleFullScreen() 
{
    if (isFullScreen) {
        screenfull.exit();
        isFullScreen = false;
    }
    else {
        if (screenfull.enabled) {                               
            screenfull.request();
        }
        isFullScreen = true;
    }
}

