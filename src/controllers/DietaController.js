import calcularDietaService from "../service/calcularDietaService.js";

class DietaController{
    static calcularMacros = (req, res) =>{
        res.json(
            calcularDietaService(req.body)
        )
    }
}

export default DietaController