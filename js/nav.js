
//make transitions ease in and out instead of jump

function navChanger() {
    if (window.matchMedia("(min-width: 1700px)").matches) { // If media query matches
        manipulateNavXL()
				console.log('xl screen')
    } else if (window.matchMedia("(max-width: 1699px)").matches) {
        manipulateNavReg()
				console.log('regular screen')
    }
}

	let manipulateNavReg = function () {
  const navLogo = document.getElementById("logoHide");
	const navMotto = document.getElementById('mottoHide');
	const downloadDrop = document.getElementById('downloadDropdown');
	if (this.scrollY < 150) {
	   	downloadDrop.style.opacity = 0;
		  navLogo.style.opacity = 0;
			navLogo.style.padding = "0 0px 0px 0px";
			navMotto.style.padding = "0 0 0 0"
	} else if (this.scrollY > 150 && this.scrollY < 259) {
			downloadDrop.style.opacity = 0;
			navMotto.style.opacity = 0;
			navMotto.style.padding = "0 0px 0px 0px";
			navLogo.style.opacity = 1;
			console.log("logo added to nav");
		} else if (this.scrollY > 260 && this.scrollY < 580) {
				downloadDrop.style.opacity = 0;
				navLogo.style.opacity = 1;
				navMotto.style.opacity = 1;
				navMotto.style.padding = "0 60px 0px 90px";
				console.log("motto added");
	} else if (this.scrollY > 580 && this.scrollY < 1100) {
		  downloadDrop.style.opacity = 1;
			navLogo.style.opacity = 1;
			navMotto.style.opacity = 1;
    	navMotto.style.padding = "0 90px 0px 90px";
			console.log("dropdown added");
		} else if (this.scrollY > 1100) {
				downloadDrop.style.opacity = 1;
				navLogo.style.opacity = 1;
				navMotto.style.opacity = 1;
				navLogo.style.padding = "0 10px 0 0";
				navMotto.style.padding = "0 110px 0px 160px";
				console.log("centered logo");
	} else {
			 downloadDrop.style.opacity = 0;
			 navLogo.style.opacity = 0;
			 navMotto.style.opacity = 0;
			 console.log('logo hidden');
  }
}



	let manipulateNavXL = function () {
  const navLogo = document.getElementById("logoHide");
	const navMotto = document.getElementById('mottoHide');
	const downloadDrop = document.getElementById('downloadDropdown');
	if (this.scrollY > 210 && this.scrollY != 0 && this.scrollY < 289) {
			downloadDrop.style.opacity = 0;
			navLogo.style.opacity = 1;
		 	console.log("xl logo added to nav");
			navLogo.style.padding = "0 0px 0px 0px";
			navMotto.style.padding = "0 0 0 0"
	} else if (this.scrollY > 290 && this.scrollY < 639) {
			downloadDrop.style.opacity = 0;
			navMotto.style.opacity = 1;
			navMotto.style.padding = "0 100px 0px 0px";
			navLogo.style.padding = "0 30px 0 0";
			navLogo.style.opacity = 1;
			console.log("xl motto added to nav");
	} else if (this.scrollY > 640 && this.scrollY < 1199) {
			downloadDrop.style.opacity = 1;
    	navMotto.style.padding = "0 160px 0px 100px";
			navLogo.style.opacity = 1;
			navMotto.style.opacity = 1;
			console.log("xl dropdown added");
	} else if (this.scrollY > 1200) {
		downloadDrop.style.opacity = 1;
		navMotto.style.padding = "0 260px 0px 100px";
		navLogo.style.padding = "0 180px 0 0";
		navLogo.style.opacity = 1;
		navMotto.style.opacity = 1;
	} else {
		 	downloadDrop.style.opacity = 0;
			 navLogo.style.opacity = 0;
			 navMotto.style.opacity = 0;
			 console.log('xl logo hidden');
  }
}

window.addEventListener("scroll", navChanger, false);
