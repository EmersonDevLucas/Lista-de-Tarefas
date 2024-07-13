function articleData() {
  let data = new Date();
  let articleHora = document.getElementById("hora");

  let hora = data.getHours();
  let minutos = data.getMinutes();

  articleHora.innerText = `${hora < 10 ? "0" + hora : hora}:${
    minutos < 10 ? "0" + minutos : minutos
  }`;
}

window.onload = () => {
  articleData();
  setInterval(articleData, 1000);
};

document.getElementById("adicionarTarefaFixa").onclick = function () {
  let main = document.getElementById("main");
  let tarefa = document.createElement("article");
  let tarefaFixa = document.createElement("section");
  let tituloFixa = document.createElement("p");
  let buttonConcluidoFixa = document.createElement("button");
  let buttonAdicionarTarefaFlexivel = document.createElement("button");
  let buttonDescricaoFixa = document.createElement("button");
  let newDivModalFixa = document.createElement("div");
  let newDivModalDialogFixa = document.createElement("div");
  let newDivModalContentFixa = document.createElement("div");
  let newDivModalHeaderFixa = document.createElement("div");
  let newH1Fixa = document.createElement("h1");
  let newButtonFecharFixa = document.createElement("button");
  let newDivModalBodyFixa = document.createElement("div");
  let newTextareaFixa = document.createElement("textarea");
  let iButtonConcluido = document.createElement("i");
  let iButtonAdicionarFlexivel = document.createElement("i");

  main.appendChild(tarefa);
  tarefa.appendChild(tarefaFixa);
  tarefaFixa.appendChild(tituloFixa);
  tarefaFixa.appendChild(buttonConcluidoFixa);
  buttonConcluidoFixa.appendChild(iButtonConcluido);
  buttonAdicionarTarefaFlexivel.appendChild(iButtonAdicionarFlexivel);
  tarefaFixa.appendChild(buttonAdicionarTarefaFlexivel);
  tarefaFixa.appendChild(buttonDescricaoFixa);
  tarefaFixa.appendChild(newDivModalFixa);
  newDivModalFixa.appendChild(newDivModalDialogFixa);
  newDivModalDialogFixa.appendChild(newDivModalContentFixa);
  newDivModalContentFixa.appendChild(newDivModalHeaderFixa);
  newDivModalHeaderFixa.appendChild(newH1Fixa);
  newDivModalHeaderFixa.appendChild(newButtonFecharFixa);
  newDivModalContentFixa.appendChild(newDivModalBodyFixa);
  newDivModalBodyFixa.appendChild(newTextareaFixa);

  tarefa.className =
    "card h-100 w-auto d-flex-column bg-body-tertiary rounded overflow-auto";
  tarefaFixa.className =
    "card-header h-25 w-100 d-flex gap-3 justify-content-around align-items-center bg-primary bg-opacity-50 rounded";
  tituloFixa.className = "card-title";
  tituloFixa.innerHTML = "Nova Tarefa";
  buttonConcluidoFixa.className = "btn btn-success rounded-circle";
  buttonAdicionarTarefaFlexivel.className = "btn btn-secondary rounded-circle";
  buttonDescricaoFixa.className = "btn btn-primary";
  newDivModalFixa.className = "modal d-none";
  newDivModalDialogFixa.className = "modal-dialog modal-sm";
  newDivModalContentFixa.className = "modal-content";
  newDivModalHeaderFixa.className = "modal-header justify-content-around";
  newH1Fixa.className = "modal-title fs-5";
  newH1Fixa.innerHTML = "Descrição";
  newButtonFecharFixa.className = "btn-close";
  newDivModalBodyFixa.className = "modal-body";
  newTextareaFixa.className = "w-100 card bg-body-tertiary";
  iButtonAdicionarFlexivel.className = "fa-solid fa-plus";
  iButtonConcluido.className = "fa-solid fa-check";

  tituloFixa.onclick = function () {
    let pFixa = this;
    let text = pFixa.textContent;

  let inputFixa = document.createElement("input");
  inputFixa.type = "text";
  inputFixa.value = text;
  inputFixa.style.width = pFixa.offsetWidth + "px";

  pFixa.replaceWith(inputFixa);
  inputFixa.focus();

  inputFixa.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let newText = inputFixa.value;
      pFixa.textContent = newText;

      inputFixa.replaceWith(p);
    }
  });

  inputFixa.onblur = function () {
    let newText = inputFixa.value;
    pFixa.textContent = newText;

    inputFixa.replaceWith(pFixa);
  };
};

  buttonDescricaoFixa.onclick = function () {
    let descrição = newDivModalFixa;
    let buttonFechar = newButtonFecharFixa;

    if (descrição.className === "modal d-none" || descrição.className === "") {
      descrição.className = "modal d-block";
    }

    buttonFechar.onclick = function () {
      if (descrição.className === "modal d-block") {
        descrição.className = "modal d-none";
      }
    };
  };

  buttonConcluidoFixa.onclick = function () {
  
    if (
      tarefaFixa.className ===
        "card-header h-25 w-100 d-flex gap-3 justify-content-around align-items-center bg-primary bg-opacity-50 rounded" ||
      tarefaFixa.className === ""
    ) {
      tarefaFixa.className =
        "card-header h-25 w-100 d-flex gap-3 justify-content-around align-items-center bg-success bg-opacity-50 rounded";
    } else {
      tarefaFixa.className =
        "card-header h-25 w-100 d-flex gap-3 justify-content-around align-items-center bg-primary bg-opacity-50 rounded";
    }
  };

    buttonAdicionarTarefaFlexivel.onclick = function () {
    let newSection = document.createElement("section");
    let newP = document.createElement("p");
    let newButtonConcluidoFlexivel = document.createElement("button");
    let newButtonPendenteFlexivel = document.createElement("button");
    let newDivModal = document.createElement("div");
    let newDivModalDialog = document.createElement("div");
    let newDivModalContent = document.createElement("div");
    let newDivModalHeader = document.createElement("div");
    let newH1 = document.createElement("h1");
    let newButtonFechar = document.createElement("button");
    let newDivModalBody = document.createElement("div");
    let newTextareaFlexivel = document.createElement("textarea");
    let newIFlexivel = document.createElement("button");
    let newIFlexivelConcluido = document.createElement("i");
    let newIFlexivelPendente = document.createElement("i");
  
    newButtonPendenteFlexivel.appendChild(newIFlexivelPendente);
    newButtonConcluidoFlexivel.appendChild(newIFlexivelConcluido);
  
    newDivModal.appendChild(newDivModalDialog);
    newDivModalDialog.appendChild(newDivModalContent);
    newDivModalContent.appendChild(newDivModalHeader);
    newDivModalHeader.appendChild(newH1);
    newDivModalHeader.appendChild(newButtonFechar);
    newDivModalContent.appendChild(newDivModalBody);
    newDivModalBody.appendChild(newTextareaFlexivel);
  
    newSection.appendChild(newP);
    newSection.appendChild(newDivModal);
    newSection.appendChild(newButtonConcluidoFlexivel);
    newSection.appendChild(newButtonPendenteFlexivel);
    newSection.appendChild(newIFlexivel);
  
    tarefa.appendChild(newSection);
  
    newSection.className =
      "card-body border-top h-25 w-100 d-flex justify-content-around align-items-center bg-body-secondary rounded";
    newP.textContent = "Nome da tarefa";
    newP.style.width = "100px";
    newButtonConcluidoFlexivel.className = "btn btn-success rounded-circle";
    newButtonPendenteFlexivel.className = "btn btn-secondary rounded-circle";
    newTextareaFlexivel.className = "w-100 card bg-body-tertiary";
    newIFlexivel.className = "btn btn-primary";
    newIFlexivelConcluido.className = "fa-solid fa-check";
    newIFlexivelPendente.className = "fa-solid fa-triangle-exclamation";
    newDivModal.className = "modal d-none";
    newDivModalDialog.className = "modal-dialog modal-sm";
    newDivModalContent.className = "modal-content";
    newDivModalHeader.className = "modal-header justify-content-around";
    newH1.className = "modal-title fs-5";
    newButtonFechar.className = "btn-close";
    newDivModalBody.className = "modal-body";
    newH1.textContent = "Descrição";
  
    newP.onclick = function () {
      let p = this;
      let text = p.textContent;
  
      let input = document.createElement("input");
      input.type = "text";
      input.value = text;
      input.style.width = p.offsetWidth + "px";
  
      p.replaceWith(input);
      input.focus();
  
      input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          let newText = input.value;
          p.textContent = newText;
  
          input.replaceWith(p);
        }
      });
  
      input.onblur = function () {
        let newText = input.value;
        p.textContent = newText;
  
        input.replaceWith(p);
      };
    };
  
    newButtonConcluidoFlexivel.onclick = function () {
      let tarefaFlexivel = newSection;
  
      if (
        tarefaFlexivel.className ===
          "card-body border-top h-25 w-100 d-flex justify-content-around align-items-center bg-body-secondary rounded" ||
        tarefaFlexivel.className === ""
      ) {
        tarefaFlexivel.className =
          "card-body border-top h-25 w-100 d-flex justify-content-around align-items-center bg-success bg-opacity-50 rounded";
        setInterval(function () {
          tarefaFlexivel.className = "d-none";
        }, 1000);
      }
    };
  
    newButtonPendenteFlexivel.onclick = function () {
      let tarefaFlexivel = newSection;
  
      if (
        tarefaFlexivel.className ===
          "card-body border-top h-25 w-100 d-flex justify-content-around align-items-center bg-body-secondary rounded" ||
        tarefaFlexivel.className === ""
      ) {
        tarefaFlexivel.className =
          "card-body border-top h-25 w-100 d-flex justify-content-around align-items-center bg-warning bg-opacity-50 rounded";
      } else {
        tarefaFlexivel.className =
          "card-body border-top h-25 w-100 d-flex justify-content-around align-items-center bg-body-secondary rounded";
      }
    };
  
    newIFlexivel.onclick = function () {
      let descriçãoFlexivel = newDivModal;
      let buttonFecharFlexivel = newButtonFechar;
  
      if (
        descriçãoFlexivel.className === "modal d-none" ||
        descriçãoFlexivel.className === ""
      ) {
        descriçãoFlexivel.className = "modal d-block";
      }
  
      buttonFecharFlexivel.onclick = function () {
        if (descriçãoFlexivel.className === "modal d-block") {
          descriçãoFlexivel.className = "modal d-none";
        }
      };
    };
  };
  

};


