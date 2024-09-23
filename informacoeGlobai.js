const url = 'https://raw.githubusercontent.com/isaeana/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
}