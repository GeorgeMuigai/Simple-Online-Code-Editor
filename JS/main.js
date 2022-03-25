var livebtn = document.querySelector(".live");
var check = document.getElementById('checked');
var dark = document.querySelector('.btn-dark');
var light = document.querySelector('.btn-light');
var run = document.querySelector('.btn-run');
var bar = document.querySelector('.bar');
var editor = document.querySelector('.editor');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var iframe = document.querySelector('.iframe');

window.addEventListener('load', ()=>{
    editor.textContent = "<h2>Hello, Welcome To My Code Editor </h2>" + 
    "<p>Click on run to run the code</p>";
});

light.addEventListener('click', ()=>{
    //console.log("Light clicked");
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
    right.style.border = "1px solid #333"
    left.style.border = "1px solid #333"
});

dark.addEventListener('click', ()=>{
    //console.log("dark clicked");
    document.body.style.background = "#272822";
    document.body.style.color = "#fff";
    left.style.border = "1px solid #fff";
    right.style.border = "1px solid #fff";
});

run.addEventListener('click', ()=>{
    //console.log("run clicked");
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});



// live code
livebtn.addEventListener('click', ()=>{
    //console.log(check.checked);
    if(check.checked == true)
    {
        check.checked = false;
    }else{
        check.checked = true;
        editor.addEventListener('keyup', () =>{
            const html = editor.textContent;
            iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
        });
    }
});