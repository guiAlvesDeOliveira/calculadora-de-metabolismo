import calcularAguaService from "../service/calcularAguaService.js";

class AguaController{
    static calcularAgua = (req, res) => {
        res.json(
            calcularAguaService(req.body)
        )
    }
}

export default AguaController