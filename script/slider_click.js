let elem = document.getElementsByClassName('slide');

for (let i = 0; i < elem.length; i++) {

	elem[0].onclick= function() {
		elem[0].classList.add("slideractive");
		elem[1].classList.remove("slideractive");
		elem[2].classList.remove("slideractive");

		let x = document.getElementsByClassName('p-promo');
		for (let i=0; i< x.length; i++) {
		x[0].classList.remove("hidden");
		x[1].classList.add("hidden");
		x[2].classList.add("hidden");
		}
	};

	 elem[1].onclick= function() {
		elem[1].classList.add("slideractive");
		elem[0].classList.remove("slideractive");
		elem[2].classList.remove("slideractive");

	 let x = document.getElementsByClassName('p-promo');
		for (let i=0; i< x.length; i++) {
		x[1].classList.remove("hidden");
		x[0].classList.add("hidden");
		x[2].classList.add("hidden");
		}
	};

	 elem[2].onclick= function() {
		elem[2].classList.add("slideractive");
		elem[0].classList.remove("slideractive");
		elem[1].classList.remove("slideractive");

		let x = document.getElementsByClassName('p-promo');
		for (let i=0; i< x.length; i++){
		x[2].classList.remove("hidden");
		x[1].classList.add("hidden");
		x[0].classList.add("hidden");
		}
	  };

  }