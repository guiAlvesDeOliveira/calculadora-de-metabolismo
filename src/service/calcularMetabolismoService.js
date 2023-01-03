function CalcularMetabolismoService(pessoa) {
    var atividade;
    switch (pessoa.atividade) {
        case 1:
            atividade = 1.2;
            break;
        case 2:
            atividade = 1.375;
            break;
        case 3:
            atividade = 1.55;
            break;
        case 4:
            atividade = 1.725;
            break;
        case 5:
            atividade = 1.9;
            break;
    }

    if (pessoa.sexo == 'F') {
        var metabolismo = calcularMetabolismoFeminino(pessoa, atividade);
        return {"metabolismoBasal": metabolismo};
    } else if (pessoa.sexo == 'M') {
        var metabolismo = calcularMetabolismoMasculino(pessoa, atividade);
        return {"metabolismoBasal": metabolismo};
    }
}

function calcularMetabolismoFeminino(pessoa, atividade) {
    var resposta = atividade * (665 + (9.6 * pessoa.peso) + (1.8 * pessoa.estatura) - (4.7 * pessoa.idade));
    return Math.round(resposta);
}

function calcularMetabolismoMasculino(pessoa, atividade) {
    var resposta = atividade * (66 + (13.7 * pessoa.peso) + (5 * pessoa.estatura) - (6.8 * pessoa.idade));
    return Math.round(resposta);
}

export default CalcularMetabolismoService;

/*
Taxa de atividade:
1- Sedentários (pouco ou nenhum exercício) fator = 1.2
2- Levemente ativo (exercício leve 1 a 3 dias por semana) fator = 1.375
3- Moderadamente ativo (exercício moderado, faz esportes 3 a 5 dias por semana) fator = 1.55
4- Altamente ativo (exercício pesado de 5 a 6 dias por semana) fator = 1.725
5- Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia) fator = 1.9
 */