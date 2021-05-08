//definition de toutes les variables
var colorsList = ["red","blue","yellow","green"];
var boatColors = "";
var lettres = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9};
var lettresList = ["A","B","C","D","E","F","G","H","I","J"]
var numBateau = 2;
var number_id = 0;
var letter_id = "";
var rotation = 1;
var testColor = 0;
var btnValue = {
	"A0":false,"A1":false,"A2":false,"A3":false,"A4":false,"A5":false,"A6":false,"A7":false,"A8":false,"A9":false,
	"B0":false,"B1":false,"B2":false,"B3":false,"B4":false,"B5":false,"B6":false,"B7":false,"B8":false,"B9":false,
	"C0":false,"C1":false,"C2":false,"C3":false,"C4":false,"C5":false,"C6":false,"C7":false,"C8":false,"C9":false,
	"D0":false,"D1":false,"D2":false,"D3":false,"D4":false,"D5":false,"D6":false,"D7":false,"D8":false,"D9":false,
	"E0":false,"E1":false,"E2":false,"E3":false,"E4":false,"E5":false,"E6":false,"E7":false,"E8":false,"E9":false,
	"F0":false,"F1":false,"F2":false,"F3":false,"F4":false,"F5":false,"F6":false,"F7":false,"F8":false,"F9":false,
	"G0":false,"G1":false,"G2":false,"G3":false,"G4":false,"G5":false,"G6":false,"G7":false,"G8":false,"G9":false,
	"H0":false,"H1":false,"H2":false,"H3":false,"H4":false,"H5":false,"H6":false,"H7":false,"H8":false,"H9":false,
	"I0":false,"I1":false,"I2":false,"I3":false,"I4":false,"I5":false,"I6":false,"I7":false,"I8":false,"I9":false,
	"J0":false,"J1":false,"J2":false,"J3":false,"J4":false,"J5":false,"J6":false,"J7":false,"J8":false,"J9":false
}
//fonctions de placement des bateaux

$(".btn").click(function(){
	if (rotation == 0) { //Code executé en position verticale
		letter_id = this.id[0];	
		number_id = parseInt(this.id[1]);
		if (lettres[letter_id] + 1 - numBateau >= 0) {
			for (i=lettres[letter_id];i>(lettres[letter_id]-numBateau);i--) {
				if(btnValue[lettresList[i]+number_id] == true) {
					testColor = 1;
				};
			};
			if (testColor == 0) {
				for (i=lettres[letter_id];i>(lettres[letter_id]-numBateau);i--) {
					$("#"+lettresList[i]+number_id).css("background",boatColors);
					btnValue[lettresList[i]+number_id] = true;
				};
			} else {alert("Vous ne pouvez pas poser votre bateau ici");testColor=0};
		} else {
			alert("Vous ne pouvez pas poser votre bateau ici");
		};
	} else if (rotation == 1) { //Code executé en position horizontale
		letter_id = this.id[0];
		number_id = parseInt(this.id[1]);
		if (number_id + 1 - numBateau >= 0) {
			for (i=number_id;i>(number_id-numBateau);i--) {
				$("#"+letter_id+i).css("background",boatColors);
			};
		} else {alert("Vous ne pouvez pas poser votre bateau ici");}
	};
});

//fonction de changement de bateau

$(".btn_bateau").click(function(){
	numBateau=parseInt(this.id[0]);
	alert(numBateau);
	boatColors=colorsList[parseInt(this.id[1])];
});

//fonction de rotation de bateau

$(".btn_rotation").click(function() {
	if (rotation==1) {rotation=0;$(".btn_rotation").html("vertical");} else if (rotation==0) {rotation=1;$(".btn_rotation").html("horizontal");};

});


