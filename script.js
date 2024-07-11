document.getElementById("buttonDescrição").onclick = function () {
  let descrição = document.getElementById("descriçãoFixa");

  if (descrição.className === "d-none" || descrição.className === "") {
    descrição.className = "d-block";
  } else {
    descrição.className = "d-none";
  }
};

document.getElementById("concluidoFixa").onclick = function () {
  let tarefaFixa = document.getElementById("tarefaFixa");

  if (
    tarefaFixa.className ===
      "h-25 w-100 d-flex justify-content-around align-items-center bg-primary bg-opacity-50 rounded" ||
    tarefaFixa.className === ""
  ) {
    tarefaFixa.className =
      "h-25 w-100 d-flex justify-content-around align-items-center bg-success bg-opacity-50 rounded";
  } else {
    tarefaFixa.className =
      "h-25 w-100 d-flex justify-content-around align-items-center bg-primary bg-opacity-50 rounded";
  }
};

document.getElementById("adicionarTarefaFlexivel").onclick = function () {
  let tarefa = document.getElementById("tarefa");
  let newSection = document.createElement("section");
  let newP = document.createElement("p");
  let newButtonConcluidoFlexivel = document.createElement("button");
  let newButtonPendenteFlexivel = document.createElement("button");
  let newDiv = document.createElement("div");
  let newTextareaFlexivel = document.createElement("textarea");
  let newIFlexivel = document.createElement("i");
  let newIFlexivelConcluido = document.createElement("i");
  let newIFlexivelPendente = document.createElement("i");

  newButtonPendenteFlexivel.appendChild(newIFlexivelPendente);
  newButtonConcluidoFlexivel.appendChild(newIFlexivelConcluido);
  newDiv.appendChild(newTextareaFlexivel);
  newSection.appendChild(newP);
  newSection.appendChild(newDiv);
  newSection.appendChild(newButtonConcluidoFlexivel);
  newSection.appendChild(newButtonPendenteFlexivel);
  newSection.appendChild(newIFlexivel);
  tarefa.appendChild(newSection);

  newSection.className = "h-25 w-100 d-flex justify-content-around align-items-center bg-body-secondary rounded";
  newP.textContent = "Nome da tarefa";
  newP.style.width = "100px";
  newButtonConcluidoFlexivel.className = "btn btn-success rounded-circle";
  newButtonPendenteFlexivel.className = "btn btn-secondary rounded-circle";
  newTextareaFlexivel.className = "d-none";
  newIFlexivel.className = "fa-solid fa-arrow-down-wide-short";
  newIFlexivelConcluido.className = "fa-solid fa-check";
  newButtonPendenteFlexivel.className = "fa-solid fa-triangle-exclamation";

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
    let currentColor = window.getComputedStyle(newSection).backgroundColor;

    if (
      currentColor === "rgb(248, 228, 75)" ||
      currentColor === "rgba(0, 0, 0, 0)"
    ) {
      newSection.style.backgroundColor = "#89E186";
      setTimeout(function () {
        newSection.remove();
      }, 1000);
    }
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
