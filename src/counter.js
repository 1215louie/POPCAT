let number = 0;
            
document.getElementById('count').innerHTML = number ;

window.addEventListener(

    'click' ,

    function(){

        number++;
        document.getElementById('count').innerHTML = number ;

    }, 

    true
    
);