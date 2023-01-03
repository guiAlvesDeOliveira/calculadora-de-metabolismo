import calcularGeralService from "../service/calcularGeralService.js";

class GeralController{
    static calculoGeral = (req, res) => {
        res.json(
            calcularGeralService(req.body)
        )
    }
}

export default GeralController