const flashcards = document.getElementsByClassName("section_flashcards")[0]
const questao = document.getElementById("questao");
const resposta = document.getElementById("resposta");
let verificadorArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// var retorno = (questao.value == "" || resposta.value == "") ? "Preencha os campos corretamente!" : `Questão : ${questao.value}\nResposta : ${resposta.value}`
// alert(retorno)

verificadorArray.forEach(exibidorModal)

function exibidorModal(text){
    var div = document.createElement("div")
    var tit_div = document.createElement("div")
    var p_questao = document.createElement("p")
    var corpo_div = document.createElement("div")
    var p_resposta = document.createElement("p")

    div.className = "flashcard";
    tit_div.className = "b_flashcard";
    p_questao.innerHTML = text.Minha_Pergunta;
    p_questao.className = "pergunta_flashcard";
    corpo_div.className = "corpo_flashcard";
    p_resposta.innerHTML = text.Minha_Resposta;
    p_resposta.className = "respos_flashcard";

    tit_div.appendChild(p_questao)
    corpo_div.appendChild(p_resposta)
    div.appendChild(tit_div)
    div.appendChild(corpo_div)
  

    div.addEventListener("click", function() {
        if(p_resposta.style.opacity == "0"){
            p_resposta.style.opacity = "1"
        }else{
            p_resposta.style.opacity = "0"
        }
    });

    flashcards.appendChild(div)
}


function criarCard(){
    var flashcard_info = {
        'Minha_Pergunta' : questao.value,
        'Minha_Resposta' : resposta.value
    }

    verificadorArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(verificadorArray));
    exibidorModal(verificadorArray[verificadorArray.length - 1])
    questao.value = '';
    resposta.value = '';
}


function deletarCards(){
    localStorage.clear();
    flashcards.innerHTML = ''
    verificadorArray = [];
}
