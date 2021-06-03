var colonne = "";
var colonne_chiffre = 0;
var listLettre = ["A","B","C","D","E","F","G"];
var dicLettre = { "A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6};
var dicValue = {
"#A1":0,"#A2":0,"#A3":0,"#A4":0,"#A5":0,"#A6":0,"#A7":0,
"#B1":0,"#B2":0,"#B3":0,"#B4":0,"#B5":0,"#B6":0,"#B7":0,
"#C1":0,"#C2":0,"#C3":0,"#C4":0,"#C5":0,"#C6":0,"#C7":0,
"#D1":0,"#D2":0,"#D3":0,"#D4":0,"#D5":0,"#D6":0,"#D7":0,
"#E1":0,"#E2":0,"#E3":0,"#E4":0,"#E5":0,"#E6":0,"#E7":0,
"#F1":0,"#F2":0,"#F3":0,"#F4":0,"#F5":0,"#F6":0,"#F7":0,
"#G1":0,"#G2":0,"#G3":0,"#G4":0,"#G5":0,"#G6":0,"#G7":0,
};
var colorList=["red","yellow"];
var color=colorList[0];
var victoire = 0;
var victoirej = 0;
var themeVal = 0;
var choise = 0;

function effacer() {
	$("#inputColor1").val("");
	$("#inputColor2").val("");
}

function choiseColor() {
	if ($("#inputColor1").val() != $("#inputColor2").val() && $("#inputColor1").val() != "white" && $("#inputColor2").val() != "white" && $("#inputColor2").val() != "#000000" && $("#inputColor1").val() != "#000000" && choise == 0) {
		colorList=[$("#inputColor1").val(),$("#inputColor2").val()];
		color=colorList[0];
	}
}

function jeton(id) {
	choise = 1;
	colonne = id[4];
	console.log(dicValue);
	for (i=7;i>=1;i--) {
		if(dicValue["#"+colonne+i] == 0) {
			$("#"+colonne+i).css("background-color",color);
			if ( color==colorList[0]) {
				dicValue["#"+colonne+i] = 1;
				color=colorList[1];
				console.log(dicValue);
			} else if ( color==colorList[1] ) {
				dicValue["#"+colonne+i] = 2;
				color=colorList[0];
				console.log(dicValue);
			}
			break;
		}
	}
	lenCol=0;	
	for (i=1;i<=7;i++) {	//Vérifie si un joueur a gagné en horizontalité
		for (j=0;j<=6;j++) {
			if (victoire == 3) {
				break;
			}
			if (dicValue["#"+listLettre[j]+i]==dicValue["#"+listLettre[j+1]+i] && dicValue["#"+listLettre[j]+i]!=0) {
				victoirej=dicValue["#"+listLettre[j+1]+i];
				victoire++;
				console.log(victoire+"  "+dicValue["#"+listLettre[j]+i]+" "+dicValue["#"+listLettre[j+1]+i]);
			} else {victoire=0;}
		}
	}
	if (victoire == 3) {alert("joueur "+victoirej+" gagne")}
	victoire=0;
	for (i=0;i<=6;i++) {
		for (j=1;j<=7;j++) {
			if (victoire == 3) {
				break;
			}
			if (dicValue["#"+listLettre[i]+j]==dicValue["#"+listLettre[i]+(j-1)] && dicValue["#"+listLettre[i]+(j-1)]!=0) {
				victoirej=dicValue["#"+listLettre[i]+(j-1)];
				victoire++;
			} else {victoire=0;}
		}
	}
	if (victoire==3) {alert("joueur "+victoirej+" gagne")}
	victoire=0;
	for (i=0;i<=6;i++) {
		for (j=1;j<=7;j++) {
			for (k=0;k<=3;k++) {
				if (victoire==3) {
					break;
				}
				if (dicValue["#"+listLettre[i+k]+(j-k)]==dicValue["#"+listLettre[i+k+1]+(j-k-1)] && dicValue["#"+listLettre[i+k+1]+(j-k-1)]!=0 && dicValue["#"+listLettre[i+k+1]+(j-k-1)]!=undefined) {
					victoirej=dicValue["#"+listLettre[i+k+1]+(j-k-1)];
					victoire++;
				} else {victoire=0;}
			}	
		}
	}
	if (victoire==3) {alert("joueur "+victoirej+" gagne")}
	victoire=0;
	for (i=0;i<=6;i++) {
		for (j=1;j<=7;j++) {
			for(k=0;k<=3;k++) {
				if (victoire==3) {
					break;
				}
				if (dicValue["#"+listLettre[i-k]+(j-k)]==dicValue["#"+listLettre[i-k-1]+(j-k-1)] && dicValue["#"+listLettre[i-k-1]+(j-k-1)]!=0 && dicValue["#"+listLettre[i-k-1]+(j-k-1)]!=undefined) {
					victoirej=dicValue["#"+listLettre[i-k-1]+(j-k-1)];
					victoire++;
				} else {victoire=0;}
			}
		}
	}
	if (victoire==3) {alert("joueur "+victoirej+" gagne")}
	victoire=0;


	/*for (i=0;i<=6;i++) {
		for (j=1;j<=7;j++) {
			for (k=0;k<=4;k++) {
				if (victoire==4) {
					break;
				}
				if (dicValue["#"+listLettre[i]+(j+k)]==dicValue["#"+listLettre[i]+j] && dicValue["#"+listLettre[i]+j]!=0) {
					victoirej=dicValue["#"+listLettre[i]+(j+k)];
					victoire++;
				} else {victoire=0;}
			}
		}
	}	
	if (victoire == 4) {alert("joueur "+victoirej+" gagne");}
	victoire=0;
	for (i=0;i<=6;i++) {
		for (j=1;j<=7;j++) {
			for (k=0;k<=4;k++) {
				if (victoire==4) {
					break;
				}
				if (dicValue["#"+listLettre[i+k]+(j+k)]==dicValue["#"+listLettre[i]+j] && dicValue["#"+listLettre[i]+j]!=0) {
					victoirej=dicValue["#"+listLettre[i+k]+(j+k)];
					victoire++;
				} else {victoire=0;}
			
			}
		}
	}
	if (victoire==4) {alert("joueur "+victoirej+" gagne");}
	victoire=0;
	for (i=0;i<=6;i++) {
		for (j=1;j<=7;j++) {
			for (k=0;k<=4;k++) {
				if (victoire==4) {
					break;
				}
				if (dicValue["#"+listLettre[i+k]+(j-k)]==dicValue["#"+listLettre[i]+j] && dicValue["#"+listLettre[i]+j]!=0) {
					victoirej=dicValue["#"+listLettre[i+k]+(j-k)];
					victoire++;
				} else {victoire=0;}
			
			}
		}
	}
	if (victoire==4) {alert("joueur "+victoirej+" gagne");}
	victoire=0;*/

}

function darkTheme() {
	if (themeVal == 0) {
		$("link").attr("href","style2.css");
		themeVal=1;
	} else {
		$("link").attr("href","style.css");
		themeVal=0;
	}
}
