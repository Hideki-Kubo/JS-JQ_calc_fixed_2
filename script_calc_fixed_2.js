$(document).ready(function(){
    $(".button-container div").click(function() {
        let currentFormula = $("#calcResult").text();
        /*let decimalRegexp = /^0\.[1-9]+/g;   ///// 0.から始まる小数を表す正規表現 /////
        let begin0Regexp = /^0+[1-9]+/g;      ///// 0から始まる数字を表す正規表現 /////
        let middle0Regexp = /[/*+-]0+[1-9]+/g; ///// 式の途中に登場する0から始まる数字 ///// */
  //      if (begin0Regexp.test(currentFormula) || middle0Regexp.test(currentFormula)) { ///// 0から始まる数字を入力して計算  
        if (!/[/*+-][0-9]/.test(String(currentFormula))) { ///// 1つめの数字を入力中
            $("#calcResult").text(String(currentFormula).replace(/^0+(?=[1-9])/g, "")); ///// 直後に0以外の数字が存在する0の羅列を消す
        } else { //// 2つめの数字を入力中
            $("#calcResult").text(String(currentFormula).replace(/(?<=[/*+-])0+(?=[1-9])/g, "")); ///// 演算記号と0以外の数字に挟まれた0を消す   
        }
//////////////////// 最大文字数の指定(14文字) //////////////////////
        if (String($("#calcResult").text()).length >= 14) {
            $("#calcResult").text(String($("#calcResult").text()).slice(0, 13));
        }
    
    });

//////////////////////// 数字を入力する処理 //////////////////////////

    $("#buttonNum0").click(function() {
        let clickedNum0 = $("#buttonNum0").text();
        $("#calcResult").append(clickedNum0);
    });
    $("#buttonNum00").click(function() {
        let clickedNum00 = $("#buttonNum00").text();
        $("#calcResult").append(clickedNum00);
    });
    $("#buttonNumDot").click(function() {
        let clickedNumDot = $("#buttonNumDot").text();
        if ($("#calcResult").text()) { // 入力欄が空の場合は記号を入力できない
            if (String($("#calcResult").text()).match(/[./*+-]$/g)) { ///// 直前の文字が記号の場合
                $("#calcResult").text(String($("#calcResult").text()).slice(0, -1)); ///// 最後の文字を削除
                $("#calcResult").append(clickedNumDot);
            } else {
                $("#calcResult").append(clickedNumDot);
            }
        }
    });
    $("#buttonNum1").click(function() {
        let clickedNum1 = $("#buttonNum1").text();
        $("#calcResult").append(clickedNum1);
    });
    $("#buttonNum2").click(function() {
        let clickedNum2 = $("#buttonNum2").text();
        $("#calcResult").append(clickedNum2);
    });
    $("#buttonNum3").click(function() {
        let clickedNum3 = $("#buttonNum3").text();
        $("#calcResult").append(clickedNum3);
    });
    $("#buttonNum4").click(function() {
        let clickedNum4 = $("#buttonNum4").text();
        $("#calcResult").append(clickedNum4);
    });
    $("#buttonNum5").click(function() {
        let clickedNum5 = $("#buttonNum5").text();
        $("#calcResult").append(clickedNum5);
    });
    $("#buttonNum6").click(function() {
        let clickedNum6 = $("#buttonNum6").text();
        $("#calcResult").append(clickedNum6);
    });
    $("#buttonNum7").click(function() {
        let clickedNum7 = $("#buttonNum7").text();
        $("#calcResult").append(clickedNum7);
    });
    $("#buttonNum8").click(function() {
        let clickedNum8 = $("#buttonNum8").text();
        $("#calcResult").append(clickedNum8);
    });
    $("#buttonNum9").click(function() {
        let clickedNum9 = $("#buttonNum9").text();
        $("#calcResult").append(clickedNum9);
    });
    $("#buttonSymPlus").click(function() {
        let clickedSymPlus = $("#buttonSymPlus").text();
        if ($("#calcResult").text()) { // 入力欄が空の場合は記号を入力できない
            if (String($("#calcResult").text()).match(/[./*+-]$/g)) { ///// 直前の文字が記号の場合
                $("#calcResult").text(String($("#calcResult").text()).slice(0, -1)); ///// 最後の文字を削除
                $("#calcResult").append(clickedSymPlus);
            } else {
                $("#calcResult").append(clickedSymPlus);
            }
        }
    });
    $("#buttonSymMinus").click(function() {
        let clickedSymMinus = $("#buttonSymMinus").text();
        if ($("#calcResult").text()) { // 入力欄が空の場合は記号を入力できない
            if (String($("#calcResult").text()).match(/[./*+-]$/g)) { ///// 直前の文字が記号の場合
                $("#calcResult").text(String($("#calcResult").text()).slice(0, -1)); ///// 最後の文字を削除
                $("#calcResult").append(clickedSymMinus);
            } else {
                $("#calcResult").append(clickedSymMinus);
            }
        }
    });
    $("#buttonSymMultiply").click(function() {
        if ($("#calcResult").text()) { // 入力欄が空の場合は記号を入力できない
            if (String($("#calcResult").text()).match(/[./*+-]$/g)) { ///// 直前の文字が記号の場合
                $("#calcResult").text(String($("#calcResult").text()).slice(0, -1)); ///// 最後の文字を削除
                $("#calcResult").append("*");
            } else {
                $("#calcResult").append("*");
            }
        }
    });
    $("#buttonSymProduct").click(function() {
        if ($("#calcResult").text()) { // 入力欄が空の場合は記号を入力できない
            if (String($("#calcResult").text()).match(/[./*+-]$/g)) { ///// 直前の文字が記号の場合
                $("#calcResult").text(String($("#calcResult").text()).slice(0, -1)); ///// 最後の文字を削除
                $("#calcResult").append("/");
            } else {
                $("#calcResult").append("/");
            }
        }
    });
/////////////////////// AC, +/-ボタンの処理 ///////////////////////
    $("#buttonAC").click(function() {
        $("#calcResult").text(""); 
    });
    $("#buttonPlusMinus").click(function() {
        let currentNumber = Number($("#calcResult").text());
        reverseNumber = currentNumber * -1; // -1をかけて符号を反転させる
        $("#calcResult").text(reverseNumber);
    });
/////////////////////// 計算の処理 ///////////////////////
    $("#buttonSymEqual").click(function() {
        let currentFormula = $("#calcResult").text();
        let decimalRegexp = /^0\.[1-9]+/g;   ///// 0.から始まる小数を表す正規表現 /////
        let begin0Regexp = /^0+[1-9]+/g;      ///// 0から始まる数字を表す正規表現 /////
    
        if (!decimalRegexp.test(String(currentFormula)) && begin0Regexp.test(String(currentFormula))) {  ////// 0.から始まる少数でなく、かつ0から始まる小数の場合 ////////
            let currentFormulaNo0 = String(currentFormula).replace(/0+/, "");
            let finalResult = new Function("return " + currentFormulaNo0)();
            $("#calcResult").text(finalResult);
        } else {
            let finalResult = new Function("return " + currentFormula)(); // 入力された式を関数として実行
            $("#calcResult").text(finalResult);    
        }
    });
});