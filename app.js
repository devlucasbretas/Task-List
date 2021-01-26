
    let d = new Date()
    let diaMes = d.getUTCDate()
    let day = d.getDay()

    let m = new Date()
    let month = m.getMonth()

    let y = new Date()
    let year = y.getFullYear()

    let diaDisplay = document.getElementById("data")
    let mesDisplay = document.getElementById("mes")

switch (day) {
    case day = 6:
        diaDisplay.innerHTML = `Sáb, ${diaMes} de`
        break;
    case day = 0:
        diaDisplay.innerHTML = `Dom, ${diaMes} de`
        break;
    case day = 1:
        diaDisplay.innerHTML = `Seg, ${diaMes} de`
        break;
    case day = 2:
        diaDisplay.innerHTML = `Ter, ${diaMes} de`
        break;
    case day = 3:
        diaDisplay.innerHTML = `Qua, ${diaMes} de`
        break;
    case day = 4:
        diaDisplay.innerHTML = `Qui, ${diaMes} de`
        break;
    case day = 5:
        diaDisplay.innerHTML = `Sex, ${diaMes} de`
        break;

    default:
        break;
}

// switch que printa o mês 

switch (month) {
    case month = 0:
        mesDisplay.innerHTML = `Jan, ${year}`
        break;
    case month = 1:
        mesDisplay.innerHTML = `Fev, ${year}`
        break;
    case month = 2:
        mesDisplay.innerHTML = `Março, ${year}`
        break;
    case month = 3:
        mesDisplay.innerHTML = `Abril, ${year}`
        break;
    case month = 4:
        mesDisplay.innerHTML = `Maio, ${year}`
        break;
    case month = 5:
        mesDisplay.innerHTML = `Jun, ${year}`
        break;
    case month = 6:
        mesDisplay.innerHTML = `Jul, ${year}`
        break;
    case month = 7:
        mesDisplay.innerHTML = `Ago, ${year}`
        break;
    case month = 8:
        mesDisplay.innerHTML = `Set, ${year}`
        break;
    case month = 9:
        mesDisplay.innerHTML = `Out, ${year}`
        break;
    case month = 10:
        mesDisplay.innerHTML = `Nov, ${year}`
        break;
    case month = 11:
        mesDisplay.innerHTML = `Dez, ${year}`
        break;

    default:
        break;
}



let btnAdd = document.getElementById("add");
let btnDel = document.getElementById("del");

    btnAdd.addEventListener("click", function(){

        let lista = document.getElementsByTagName("ul")[0];
        let itens = lista.children;
        let task  = document.getElementById("taskTxt");
        var novoItem = document.createElement("li");

        if (task.value == "") {
            alert("Por favor digite a tarefa a ser armazenada!")
        }else if (itens.length < 7) {
            novoItem.innerHTML = task.value;
            lista.insertBefore(novoItem, itens[0]);
            task.value ="";
        } else {
            alert("[Erro] Não é possivel adicionar mais do que 7 tarefas!");
            task.value ="";
        };
    
    });

    btnDel.addEventListener("click", function(){
        let lista = document.getElementsByTagName("ul")[0];
        let itens = lista.children;
        let task  = document.getElementById("taskTxt");
        var novoItem = document.createElement("li");

        if (itens.length == 0) {
            alert("Não há itens a serem excluídos")
        } else {
            lista.innerHTML =""
        }
    });
    

