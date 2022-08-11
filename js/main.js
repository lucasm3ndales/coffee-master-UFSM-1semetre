
function validateform() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let end =  document.getElementById("end").value;
    let phone = document.getElementById("phone").value;
    let coffee = document.getElementById("coffee").value;
    let qtd = document.getElementById("qtd").value;

    if (name == "" || email == "" || end == "" || phone == "" || coffee == "" || qtd == "") {
        alert("Preencha todos os campos");
        console.log('erro comum');
    } else {
        alert("Pedido enviado com sucesso!!!");
        console.log('enviado');
    }
}

function pricecoffee() {
    let coffee = document.getElementById("coffee").value;
    let qtd = document.getElementById("qtd").value;
    
    if(coffee == 'colombia') {
        let price = qtd * 36.50;
        return document.getElementById("total").innerHTML = `Total: R$ ${price}`;
    }else if(coffee == 'verona') {
        let price = qtd * 25.00;
        return document.getElementById("total").innerHTML = `Total: R$ ${price}`;
    }else if(coffee == 'espresso') {
        let price = qtd * 16.00;
        return document.getElementById("total").innerHTML = `Total: R$ ${price}`;
    }else if(coffee == 'ethiopia') {
        let price = qtd * 27.40;
        return document.getElementById("total").innerHTML= `Total: R$ ${price}`;
    }else if(coffee == 'pikeplace') {
        let price = qtd * 20.00;
        return document.getElementById("total").innerHTML = `Total: R$ ${price}`;
    }else if(coffee == 'sumatra') {
        let price = qtd * 32.75;
        return document.getElementById("total").innerHTML= `Total: R$ ${price}`;
    }
}
