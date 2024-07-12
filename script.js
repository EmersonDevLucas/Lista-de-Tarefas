document.getElementById("buttonDescrição").onclick = function () {
  let descrição = document.getElementById("descriçãoFixa");
  let buttonFechar = document.getElementById("fechar");

  if (descrição.className === "modal d-none" || descrição.className === "") {
    descrição.className = "modal d-block";
  }

  buttonFechar.onclick = function () {
    if (descrição.className === "modal d-block") {
      descrição.className = "modal d-none";
    }
  };
};

document.getElementById("concluidoFixa").onclick = function () {
  let tarefaFixa = document.getElementById("tarefaFixa");

  if (
    tarefaFixa.className ===
      "card-header h-25 w-100 d-flex justify-content-around align-items-center bg-primary bg-opacity-50 rounded" ||
    tarefaFixa.className === ""
  ) {
    tarefaFixa.className =
      "card-header h-25 w-100 d-flex justify-content-around align-items-center bg-success bg-opacity-50 rounded";
  } else {
    tarefaFixa.className =
      "card-header h-25 w-100 d-flex justify-content-around align-items-center bg-primary bg-opacity-50 rounded";
  }
};

document.getElementById("adicionarTarefaFlexivel").onclick = function () {
  let tarefa = document.getElementById("tarefa");
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
  newH1.textContent = 'Descrição'

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

function articleData() {
  let data = new Date();
  let articleHora = document.getElementById("hora");

  let hora = data.getHours();
  let minutos = data.getMinutes();

  articleHora.innerText = `${hora < 10 ? "0" + hora : hora}:${
    minutos < 10 ? "0" + minutos : minutos
  }`;
}

window.onload = articleData;
