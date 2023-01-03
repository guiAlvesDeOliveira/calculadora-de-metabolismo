import calcularMetabolismoService from "../service/calcularMetabolismoService.js";

class MetabolismoController {
    static calcularMetabolismo = (req, res) => {
        res.json(
            calcularMetabolismoService(req.body)
        )
    }

}

export default MetabolismoController;

