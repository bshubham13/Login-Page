		
		<!-- Validation code for LOGIN -->

	let un1="Shubham123";
	let pass1="Shubham12#";

	function ValidateForm() {
		let un2=document.getElementById("un").value;
		let pass2=document.getElementById("pass").value;


		if ((un1==un2)&&(pass1==pass2)) {
			open("HomePageLogin.html");
		}

		else {
			alert("Wrong Credential")
		}
	}

