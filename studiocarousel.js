const slider1 = document.querySelector(".items1");
		const slides1 = document.querySelectorAll(".item1");
		const button1 = document.querySelectorAll(".button1");

		let current1 = 0;
		let prev1 = 22;
		let next1 = 1;

		for (let i = 0; i < button1.length; i++) {
			button1[i].addEventListener("click", () => i == 0 ? gotoPrev1() : gotoNext1());
		}

		const gotoPrev1 = () => current1 > 0 ? gotoNum1(current1 - 1) : gotoNum1(slides1.length - 1);

		const gotoNext1 = () => current1 < 22 ? gotoNum1(current1 + 1) : gotoNum1(0);

		const gotoNum1 = number1 => {
			current1 = number1;
			prev1 = current1 - 1;
			next1 = current1 + 1;

			for (let i = 0; i < slides1.length; i++) {
				slides1[i].classList.remove("active1");
				slides1[i].classList.remove("prev1");
				slides1[i].classList.remove("next1");
			}

			if (next1 == 23) {
				next1 = 0;
			}

			if (prev1 == -1) {
				prev1 = 22;
			}

			slides1[current1].classList.add("active1");
			slides1[prev1].classList.add("prev1");
			slides1[next1].classList.add("next1");
		}