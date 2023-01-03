import express from "express";
import metabolismo from "./metabolismoRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: 'Calculadora de Metabolismo'})
    })

    app.use(
        express.json(),
        metabolismo
    )

}

export default routes