let string ="";
let i=0;
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((x)=>{
    x.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '=')
        {
            string= eval(string);
            document.querySelector('input').value= string;
            i=0;
        }
        else if(e.target.innerHTML=='C')
        {
            string= "";
            document.querySelector('input').value= string;
            i++;
        }
        else if(e.target.innerHTML=='DEL')
        {
            string= string.slice(0,-1);
            document.querySelector('input').value= string;
        }
        else
        {
            string= string + e.target.innerHTML;
            document.querySelector('input').value= string;
            i++;
        }
    })
})