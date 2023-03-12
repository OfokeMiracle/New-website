var get = document.querySelector("#textarea");

var fontSize = document.querySelector(".fontSize");

var darkMode = document.querySelector(".darkMode");

var whiteMode = document.querySelector(".whiteMode");

var body = document.querySelector("body");

var boldText = document.querySelector(".boldText");

var fontSize = document.querySelector(".fontSize")

var fontFamily = document.querySelector(".fontFamily")

var text = document.querySelector(".text")

var sub = document.querySelector(".submit")

        get.addEventListener('keyup', function (event) {
            output = event.target.value;

            sub.addEventListener('click', function () {
                get.innerText = output.innerText
            })
        })





        darkMode.addEventListener('click', function () {
            body.style.backgroundColor = "black";
            body.style.color = "white";
            get.style.backgroundColor = "#ccc"
            get.style.color = "white" ;
        })

        boldText.addEventListener('click',function(){
          get.style.textDecoration = "underline"
        })



        whiteMode.addEventListener('click', function () {
            body.style.backgroundColor = "white";
            body.style.color = "black"
            get.style.backgroundColor = "white"
            get.style.color = "black"
        })




        fontSize.addEventListener('keyup', function (event) {
            get.style.fontSize = event.target.value + "px";
        })

        fontFamily.addEventListener('keyup', function (event) {
            get.style.fontFamily = event.target.value;
        })
