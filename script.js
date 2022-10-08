

function calVal() {

	var per = document.getElementById("per").value;
	var num = document.getElementById("num").value;

	document.getElementById("value1").value = (num ) * (per/ 100);

    document.getElementById("note1").innerHTML = "Note : This value is deducted from the product's value.";
    document.getElementById("note1").style.color=" #8a1717";

}

function calPay() {

	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;

	document.getElementById("value2").value = (num1 ) * ((100 - num2 ) /100);

        document.getElementById("note2").innerHTML = "Note : This is the value you have to pay for this.";
        document.getElementById("note2").style.color=" #8a1717";
}
