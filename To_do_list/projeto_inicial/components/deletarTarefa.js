const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    const TarefaCompleta = botaoDeleta.parentElement;

    TarefaCompleta.remove();

    return botaoDeleta;

}

export default BotaoDeleta;