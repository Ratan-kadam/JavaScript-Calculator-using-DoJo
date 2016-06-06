define([
    'dojo/on',
    'dojo/dom',
    'demo/myModule',
    'dijit/form/Button'
], function(on, dom, myModule, Button) {
    // private variables
    var operand1 = 0;
    var operand2 = 0;
    var currentSign = null;
    var result = 0;
    var str = '';
    var setOperand1Zero = false; // is set to true when the explicit operand2 is 0 and multiplied to operand 1
    var FromEqual = false;
    var operationCount = 0;

    // private functions
    var outerBox = dom.byId("cal00"); // catching the outerbox

    function displayResult(res) {
        dom.byId("display").value = res;
        // alert("added result to display:" +  res );
    }

    function equalPressedCheck() {
        if (FromEqual == true) {
            operand1 = parseFloat(dom.byId("display").value);
        }
        FromEqual = false;
    }

    var handle = dojo.connect(outerBox, "onclick", function(event) {

        if (event.target.id == "cal0") {
            equalPressedCheck();
            str = str + '0';
            displayResult(str);

        }

        if (event.target.id == "cal1") {
            str = str + '1';
            equalPressedCheck();
            displayResult(str);
        }

        if (event.target.id == "cal2") {
            equalPressedCheck();
            str = str + '2';
            displayResult(str);
        }

        if (event.target.id == "cal3") {
            equalPressedCheck();
            str = str + '3';
            displayResult(str);
        }

        if (event.target.id == "cal4") {
            equalPressedCheck();
            str = str + '4';
            displayResult(str);
        }

        if (event.target.id == "cal5") {
            equalPressedCheck();
            str = str + '5';
            displayResult(str);
        }

        if (event.target.id == "cal6") {
            equalPressedCheck();
            str = str + '6';
            displayResult(str);
        }

        if (event.target.id == "cal7") {
            equalPressedCheck();
            str = str + '7';
            displayResult(str);
        }

        if (event.target.id == "cal8") {
            equalPressedCheck();
            str = str + '8';
            displayResult(str);
        }

        if (event.target.id == "cal9") {
            equalPressedCheck();
            str = str + '9';
            displayResult(str);

        }


        ///
        if (event.target.id == "equal") {
            if (FromEqual) {

                // igoring multiple click ..
            } else {

                FromEqual = true;
                operand2 = parseFloat(str);
                if (currentSign == 'plus') {
                    operand1 = operand1 + operand2;
                    displayResult(operand1);
                }

                if (currentSign == 'minus') {
                    operand1 = operand1 - operand2;
                    displayResult(operand1);

                }

                if (currentSign == 'multiply') {

                    operand1 = operand1 * operand2;
                    displayResult(operand1);

                }
                console.log("****currentSign:");
                console.log(currentSign);

                if (currentSign == 'divide') {
                    //   alert("divide");
                    operand1 = operand1 / operand2;
                    displayResult(operand1);

                }
            }




        }
        // plus operation
        if (event.target.id == "plus") {
            operationCount = operationCount + 1;
            if (FromEqual) {
                operand1 = parseFloat(dom.byId("display").value);
                str = '0';
                currentSign = 'plus';
                // displayResult(str);
            } else if (currentSign == 'minus') {
                operand2 = parseFloat(str);
                operand1 = operand1 - operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 0;
                currentSign = 'plus';

            } else if (currentSign == 'multiply') {
                operand2 = parseFloat(str);
                operand1 = operand1 * operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 0;
                currentSign = 'plus';

            } else if (currentSign == 'divide') {
                operand2 = parseFloat(str);
                operand1 = operand1 / operand2;
                console.log(operand1);
                displayResult(operand1);
                str = '0';
                operand2 = 0;
                currentSign = 'plus';

            } else {

                operand2 = parseFloat(str);
                operand1 = operand1 + operand2;
                console.log(operand1);
                displayResult(operand1);
                str = '0';
                operand2 = 0;
                currentSign = 'plus';
            }


        }

        // minus operation
        if (event.target.id == "minus") {
            operationCount = operationCount + 1;
            if (FromEqual) {
                operand1 = parseFloat(dom.byId("display").value);
                str = '0'; // preparing for next operand 
                currentSign = 'minus';

            } else if (currentSign == 'plus') {
                operand2 = parseFloat(str);
                operand1 = operand1 + operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 0;
                currentSign = 'minus';

            } else if (currentSign == 'multiply') {
                operand2 = parseFloat(str);
                operand1 = operand1 * operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 0;
                currentSign = 'minus';

            } else if (currentSign == 'divide') {
                operand2 = parseFloat(str);
                operand1 = operand1 / operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 0;
                currentSign = 'minus';

            } else {
                operand2 = parseFloat(str);
                operand1 = operand1 - operand2;
                console.log(operand1);
                displayResult(operand1);
                str = '0';
                operand2 = 0;
            }

            currentSign = 'minus'; // setting the current sign
        }

        // multiply operation 
        if (event.target.id == "multiply") {
            if (FromEqual) {
                operand1 = parseFloat(dom.byId("display").value);
                str = '0';
                currentSign = 'multiply';
                // displayResult(str);
            } else if (currentSign == 'minus') {
                operand2 = parseFloat(str);
                operand1 = operand1 - operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 1;
                currentSign = 'multiply';

            } else if (currentSign == 'plus') {
                operand2 = parseFloat(str);
                operand1 = operand1 + operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 1;
                currentSign = 'multiply';

            } else if (currentSign == 'divide') {
                operand2 = parseFloat(str);
                operand1 = operand1 / operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 1;
                currentSign = 'multiply';

            } else {

                if (operationCount == 0) { // first operation multiply case
                    operand1 = 1; // as to avoid zero condition
                    operationCount = 1;
                }
                operand2 = parseFloat(str);

                operand1 = operand1 * operand2;
                console.log(operand1);
                displayResult(operand1);
                str = '0';
                operand2 = 1;
                currentSign = 'multiply';
            }


        }

        // divide operaition

        if (event.target.id == "divide") {
            if (FromEqual) {
                operand1 = parseFloat(dom.byId("display").value);
                str = '0';
                currentSign = 'divide';
                // displayResult(str);
            } else if (currentSign == 'minus') {
                operand2 = parseFloat(str);
                operand1 = operand1 - operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 1;
                currentSign = 'divide';

            } else if (currentSign == 'plus') {
                operand2 = parseFloat(str);
                operand1 = operand1 + operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 1;
                currentSign = 'divide';

            } else if (currentSign == 'multiply') {
                operand2 = parseFloat(str);
                operand1 = operand1 * operand2;
                console.log(operand1);

                displayResult(operand1);
                str = '0';
                operand2 = 1;
                currentSign = 'divide';

            } else {

                if (operationCount == 0) { // first operation divide  case
                    operand1 = parseFloat(str);
                    operand2 = 0; // as to avoid zero condition
                    operationCount = 1;
                    str = '0';
                    currentSign = "divide";
                    displayResult(operand1);

                } else {

                    operand2 = parseFloat(str);
                    operand1 = operand1 / operand2;
                    console.log(operand1);
                    displayResult(operand1);
                    str = '0';
                    operand2 = 0;
                    currentSign = 'divide';

                }

            }


        }

        // button clear 
        if (event.target.id == "clear") {
            // alert("clear pushed"); 
            operand1 = 0;
            operand2 = 0;
            currentSign = null;
            result = 0;
            operationCount = 0;
            str = '0';
            displayResult(str);
        }


        // negative 

        if (event.target.id == "neg") {
            // alert("clear pushed"); 
            str = dom.byId('display').value;
            if (str.indexOf('-') == 0) {
                str = str.split('-')[1];
                alert(str)
            } else {
                str = '-' + str; // adding minus to first location 
            }
            displayResult(str);

        }
        /////
        if (event.target.id == "dot") {
            // alert("clear pushed"); 
            str = dom.byId('display').value;
            if (str.indexOf('.') > -1) {
                //ignore.. already dot present
            } else {
                str = str + '.'; // adding dot
            }
            displayResult(str1);

        }

        if (event.target.id == "backspace") {
            str = dom.byId('display').value;
            str = str.substring(0, str.length - 1);
            displayResult(str);
        }
        //  });
    });




    //  alert("button regestration completed");  
    var oldText = {};
    // alert("calling module sample");
    // myModule.sample('kadam');

    // This returned object becomes the defined value of this module
    return {}

});