var btnFile=document.querySelector('.file');
var filename=document.querySelector('.filename');
var foldername=document.querySelector('.foldername');
var btnFolder=document.querySelector('.folder');
var change=0;
btnFile.addEventListener('click',()=>{
    if(change==0){
        filename.style.display='none';
        foldername.style.display='none';
        change=1
    }else{
        filename.style.display='block';
        foldername.style.display='none';
        change=0
    }
})
btnFolder.addEventListener('click',()=>{
    if(change==0){
        filename.style.display='none';
        foldername.style.display='none';
        change=1
    }else{
        filename.style.display='none';
        foldername.style.display='block';
        change=0
    }
})