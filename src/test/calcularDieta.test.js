import calcularDietaService from "../service/calcularDietaService.js";

describe('Teste de calculo de macros', () => {
    test('Deve retornar a dieta de macros', () => {
        const esperado = {
            "Gordura": 51.022222222222226,
            "Carboidratos": 339.52,
            "Proteina": 119.68
        }

        const infos = {
            "objetivo": "perder",
            "calorias": 2800,
            "peso": 74.8
        }

        const retorno = calcularDietaService(infos)

        expect(retorno).toEqual(esperado)
    })
})
