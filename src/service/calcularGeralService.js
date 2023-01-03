import calcularMetabolismoService from "./calcularMetabolismoService.js";
import calcularDietaService from "./calcularDietaService.js";
import calcularAguaService from "./calcularAguaService.js";

function calcularGeralService(infos) {
    var pessoa = {
        "sexo": infos.sexo,
        "peso": infos.peso,
        "estatura": infos.estatura,
        "idade": infos.idade,
        "atividade": infos.atividade
    }

    var calorias;
    var macros;
    var agua;

    new Promise(() => {
            agua = calcularAguaService(pessoa)
            calorias = calcularMetabolismoService(pessoa)
            var detalhes = {
                "objetivo": infos.objetivo,
                "calorias": calorias.metabolismoBasal,
                "peso": infos.peso
            }
            macros = calcularDietaService(detalhes)
        }
    )

    var resposta = {
        "Gordura": macros.Gordura,
        "Carboidratos": macros.Carboidratos,
        "Proteina": macros.Proteina,
        "Água": agua,
        "Metabolismo Basal": calorias.metabolismoBasal
    }

    return resposta;
}

export default calcularGeralService;