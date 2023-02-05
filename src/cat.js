var isClick = 0;
var imgArray = new Array();
var catimg = document.getElementById("catimg");

imgArray[0] = "resource/unclick.png";
imgArray[1] = "resource/click.png";

function delay (sec){

    return new Promise(

        function(resovle){
            setTimeout(resovle, sec * 1000)
        }

    );

}

window.addEventListener(
    
    'click',

    async function myAsyncFunction() {

        catimg.src = imgArray[1];
        await delay(0.1);
        catimg.src = imgArray[0];

    },

    true

)

myAsyncFunction();


