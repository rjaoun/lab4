//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
/** checkHumbrId Function
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

function checkHumbrId(humberId){
  "use strict";
  let validId = false; // a flag variable

  let checkId = /(n|N)\d{8}/;
  if(humberId ===""){
     validId = false;
   } else if (checkId.test(humberId)){
         validId = true;
    }
    return validId;
}
function test__checkHumbrId(valueIn,expected){
    "use strict";
    let result = checkHumbrId(valueIn);
    let msg = "<strong>Value test: </strong>" + valueIn
            + " <strong> Expected result: </strong> " + expected
            + "<strong> expected: </strong> ";
    if(result){
       msg +="<span style=color:green;font-weight:bold;>" +"===PASSED===" + "</span></br>";
    }else{
       msg +="<span style=color:red;font-weight:bold;>" + "xxxFAILEDxxx" + "</span></br>";
    }
    let msgBox = document.getElementById("data");
    msgBox.innerHTML += msg;
}
//test to pass
test__checkHumbrId("N12345678",true);
//test to fail
test__checkHumbrId("",false);
//bondary testing less numbers
test__checkHumbrId("N1234567",false);
//boundary testing for extra number
test__checkHumbrId("N123456789",false);
//boundary testing for letter instead of numbers
test__checkHumbrId("N1234567V",false);
//boundary testing for first case sensitive letter.
test__checkHumbrId("n01329942",true);
//boundary testing for all numbers
test__checkHumbrId("101329942",false);
//boundary testing for different letter at beginning.
test__checkHumbrId("Z12345678",false);
