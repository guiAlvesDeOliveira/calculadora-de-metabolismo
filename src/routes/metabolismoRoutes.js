import expresss from "express";
import MetabolismoController from "../controllers/metabolismoController.js"
import DietaController from "../controllers/DietaController.js";
import GeralController from "../controllers/GeralController.js";
import AguaController from "../controllers/AguaController.js";

const router = expresss.Router();

router
    .get('/metabolismo', MetabolismoController.calcularMetabolismo)
    .get('/dieta', DietaController.calcularMacros)
    .get('/geral', GeralController.calculoGeral)
    .get('/agua', AguaController.calcularAgua)
export default router;