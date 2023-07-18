document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

       const name = form.elements["nome"].value;
       const email = form.elements["email"].value;
       const message = form.elements["mensagem"].value;

       //console.log("Nome: ", name, ", E-mail: ", email, "Mensagem: ", message);
        const result = `${name} / ${email} / ${message}`;

        alert(result);
        
        console.log("Sumited!!!");


    });

   // console.log(form);

});