import calcularGeralService from "../service/calcularGeralService.js";

describe('Calculo geral de dieta', () => {
    it('Deve retornar o calculo do metabolismo e dieta', () => {
        const infos = {
            "objetivo": "perder",
            "peso": 74.8,
            "sexo": "M",
            "estatura": 173,
            "idade": 22,
            "atividade": 3
        }

        const esperado = {
            "Gordura": 51.022222222222226,
            "Carboidratos": 339.52,
            "Proteina": 119.68,
            "Metabolismo Basal": 2800,
            "Água": 2618
        }

        const retorno = calcularGeralService(infos)

        expect(retorno).toEqual(esperado)
    })
})
