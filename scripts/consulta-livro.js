const meuBotaoSec = document.querySelector('.botao-secundario');
const meuBotaoPri = document.querySelector('.botao-primario');


meuBotaoSec.addEventListener('mouseover', function() {
  
        meuBotaoPri.classList.add('changes');
  
        meuBotaoSec.classList.remove('botao-secundario');

    });


meuBotaoSec.addEventListener('mouseout', function() {

        meuBotaoPri.classList.remove('changes');
        meuBotaoSec.classList.add('botao-secundario');
});