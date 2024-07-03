var names=new Array();
names[0]="Yaakov";
names[1]="Jasmin";
names[2]="Jefery";
names[3]="Nour";
names[4]="Lara";
names[5]="Dora";
names[6]="Maram";
names[7]="Ahmed";
names[8]="Mae";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}