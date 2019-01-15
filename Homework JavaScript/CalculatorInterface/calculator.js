function Calculator(){

    this.renderAll = function () {

        // var mainContainer = document.getElementById("main-container");
        // mainContainer.classList.add("mainContainer")

        // mainContainer.appendChild(this.renderDisplay());
        this.renderDisplay().appendTo('#main-container');
        // mainContainer.appendChild(this.renderKeys());
        this.renderKeys().appendTo('#main-container');
        $('#main-container').addClass('main-container');
    }




    this.renderDisplay = function () {
        // var display = document.createElement("input");
        // display.classList.add("boxInput");
        // display.attributes.type = "text";
        return $('<input>').addClass('boxInput').attr('type','text')

    }

    this.renderKeys = function () {
        // var br1 = document.createElement("br");
        // var br2 = document.createElement("br");
        // var br3 = document.createElement("br");
        // var br4 = document.createElement("br");

        // var keys = document.createElement("div");
        // keys.classList.add("keys");
        var keys = $('<div>').addClass('keys');
        // var one = document.createElement("button");
        // one.innerHTML = "1";
        $('<button>').html('1').appendTo(keys);

        // var two = document.createElement("button");
        // two.innerHTML = "2";
        $('<button>').html('2').appendTo(keys);

        // var three = document.createElement("button");
        // three.innerHTML = "3";
        $('<button>').html('3').appendTo(keys);
        
        // var four = document.createElement("button");
        // four.innerHTML = "4";
        $('<button>').html('4').appendTo(keys);

        // var five = document.createElement("button");
        // five.innerHTML = "5";
        $('<button>').html('5').appendTo(keys);

        // var six = document.createElement("button");
        // six.innerHTML = "6";
        $('<button>').html('6').appendTo(keys);

        // var seven = document.createElement("button");
        // seven.innerHTML = "7";
        $('<button>').html('7').appendTo(keys);

        // var eight = document.createElement("button");
        // eight.innerHTML = "8";
        $('<button>').html('8').appendTo(keys);

        // var nine = document.createElement("button");
        // nine.innerHTML = "9";
        $('<button>').html('9').appendTo(keys);

        // var zero = document.createElement("button");
        // zero.innerHTML = "0";
        $('<button>').html('0').appendTo(keys);

        // var plus = document.createElement("button");
        // plus.innerHTML = "+";
        $('<button>').html('+').appendTo(keys);

        // var minus = document.createElement("button");
        // minus.innerHTML = "-";
        $('<button>').html('-').appendTo(keys);

        // var divide = document.createElement("button");
        // divide.innerHTML = "/";
        $('<button>').html('/').appendTo(keys);

        // var multiply = document.createElement("button");
        // multiply.innerHTML = "*";
        $('<button>').html('*').appendTo(keys);

        // var clear = document.createElement("button");
        // clear.innerHTML = "C";
        $('<button>').html('C').appendTo(keys);

        // var equal = document.createElement("button");
        // equal.classList.add("equals");
        // equal.innerHTML = "=";
        $('<button>').addClass('equals').html('=').appendTo(keys);

        // keys.appendChild(one);
        // keys.appendChild(two);
        // keys.appendChild(three);
        // keys.appendChild(br1);
        // keys.appendChild(four);
        // keys.appendChild(five);
        // keys.appendChild(six);
        // keys.appendChild(br2);
        // keys.appendChild(seven);
        // keys.appendChild(eight);
        // keys.appendChild(nine);
        // keys.appendChild(br3);
        // keys.appendChild(zero);
        // keys.appendChild(plus);
        // keys.appendChild(minus);
        // keys.appendChild(br4);
        // keys.appendChild(divide);
        // keys.appendChild(multiply);
        // keys.appendChild(clear);
        // keys.appendChild(equal);

        return keys;
    }
}

//103 linii kod//

