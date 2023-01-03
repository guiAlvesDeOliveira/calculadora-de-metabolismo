import calcularAguaService from "../service/calcularAguaService.js";

describe('Calculo de agua diária',  () => {
    it('Deve retornar o valor de agua a ser ingerida por dia', ()  => {
        const infos = {
            "peso": 75
        }
        const esperado = 2625

        const retorno = calcularAguaService(infos)

        expect(retorno).toEqual(esperado)
     })
 })