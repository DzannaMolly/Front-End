function Calculator(){

    this.renderAll = function () {

        var mainContainer = document.getElementById("main-container");
        mainContainer.classList.add("mainContainer")

        mainContainer.appendChild(this.renderDisplay());
        mainContainer.appendChild(this.renderKeys());

    }


    this.renderDisplay = function () {
        var display = document.createElement("input");
        display.classList.add("boxInput");
        display.attributes.type = "text";

        return display;
    }

    this.renderKeys = function () {
        var br1 = document.createElement("br");
        var br2 = document.createElement("br");
        var br3 = document.createElement("br");
        var br4 = document.createElement("br");

        var keys = document.createElement("div");
        keys.classList.add("keys");

        var one = document.createElement("button");
        one.innerHTML = "1";

        var two = document.createElement("button");
        two.innerHTML = "2";

        var three = document.createElement("button");
        three.innerHTML = "3";

        var four = document.createElement("button");
        four.innerHTML = "4";

        var five = document.createElement("button");
        five.innerHTML = "5";

        var six = document.createElement("button");
        six.innerHTML = "6";

        var seven = document.createElement("button");
        seven.innerHTML = "7";

        var eight = document.createElement("button");
        eight.innerHTML = "8";

        var nine = document.createElement("button");
        nine.innerHTML = "9";

        var zero = document.createElement("button");
        zero.innerHTML = "0";

        var plus = document.createElement("button");
        plus.innerHTML = "+";

        var minus = document.createElement("button");
        minus.innerHTML = "-";

        var divide = document.createElement("button");
        divide.innerHTML = "/";

        var multiply = document.createElement("button");
        multiply.innerHTML = "*";

        var clear = document.createElement("button");
        clear.innerHTML = "C";

        var equal = document.createElement("button");
        equal.classList.add("equals");
        equal.innerHTML = "=";

        keys.appendChild(one);
        keys.appendChild(two);
        keys.appendChild(three);
        keys.appendChild(br1);
        keys.appendChild(four);
        keys.appendChild(five);
        keys.appendChild(six);
        keys.appendChild(br2);
        keys.appendChild(seven);
        keys.appendChild(eight);
        keys.appendChild(nine);
        keys.appendChild(br3);
        keys.appendChild(zero);
        keys.appendChild(plus);
        keys.appendChild(minus);
        keys.appendChild(br4);
        keys.appendChild(divide);
        keys.appendChild(multiply);
        keys.appendChild(clear);
        keys.appendChild(equal);

        return keys;
    }
}