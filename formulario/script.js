document.getElementById("registration-form")
    .addEventListener("submit", function(event){
        event.preventDefault() //impedir a pagina de recarregar


        //get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        //create a new row with user information
        let tableRow = document.createElement("tr");
        let nameCell = document.createElement("td");
        let emailCell = document.createElement("td");

        nameCell.textContent = name
        emailCell.textContent = email

        tableRow.appendChild(nameCell)
        tableRow.appendChild(emailCell)

        //add a new row in the table
        document.getElementById("registrationTable")
            .getElementsByTagName("tbody")[0].appendChild(tableRow)


            
        //reset forms
        document.getElementById("registration-form").reset()
    })