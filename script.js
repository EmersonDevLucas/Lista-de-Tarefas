document.getElementById("buttonDescrição").onclick = function () {
  let descrição = document.getElementById("descriçãoFixa");
  let labelDescrição = document.getElementsByClassName("descriçãoFixa");

  if (descrição.style.display === "none" || descrição.style.display === "") {
    descrição.style.display = "block";
    labelDescrição.style.display = "block";
  } else {
    descrição.style.display = "none";
    labelDescrição.style.display = "none";
  }
};

document.getElementById("concluidoFixa").onclick = function () {
  let tarefaFixa = document.getElementById("tarefaFixa");

  let currentColor = window.getComputedStyle(tarefaFixa).backgroundColor;

  if (
    currentColor === "rgb(248, 228, 75)" ||
    currentColor === "rgba(0, 0, 0, 0)"
  ) {
    tarefaFixa.style.backgroundColor = "#89E186";
  } else {
    tarefaFixa.style.backgroundColor = "#F8E44B";
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
  let newLabelFlexivel = document.createElement("label");
  let newIFlexivel = document.createElement("i");
  let newIFlexivelConcluido = document.createElement("i");
  let newIFlexivelPendente = document.createElement("i");

  newButtonPendenteFlexivel.appendChild(newIFlexivelPendente);
  newButtonConcluidoFlexivel.appendChild(newIFlexivelConcluido);
  newDiv.appendChild(newLabelFlexivel);
  newDiv.appendChild(newTextareaFlexivel);
  newSection.appendChild(newP);
  newSection.appendChild(newDiv);
  newSection.appendChild(newButtonConcluidoFlexivel);
  newSection.appendChild(newButtonPendenteFlexivel);
  newSection.appendChild(newIFlexivel);
  tarefa.appendChild(newSection);

  newSection.id = "tarefaFlexivel";
  newP.textContent = "Nome da tarefa";
  newP.style.width = "100px";
  newButtonConcluidoFlexivel.id = "concluidoFlexivel";
  newButtonPendenteFlexivel.id = "pendenteFlexivel";
  newTextareaFlexivel.id = "descriçãoFlexivel";
  newLabelFlexivel.className = "descriçãoFlexivel";
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

  articleHora.innerText = `${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}`;
}

window.onload = articleData;
