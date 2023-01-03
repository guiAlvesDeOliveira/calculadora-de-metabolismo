import calcularMetabolismoService from "../service/calcularMetabolismoService.js";

describe('Teste de calculo de metabolismo basal', () => {
    test('Deve retornar o metabolismo basal', () => {
        const esperado = {
            "metabolismoBasal": 2800
        }

        const infos = {
            "sexo": "M",
            "peso": 74.8,
            "estatura": 173,
            "idade": 22,
            "atividade": 3
        }

        const retorno = calcularMetabolismoService(infos)

        expect(retorno).toEqual(esperado)
    })

})
