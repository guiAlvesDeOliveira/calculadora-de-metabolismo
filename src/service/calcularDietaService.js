function calcularDietaService(infos){
    switch (infos.objetivo.toUpperCase()){
        case "PERDER":
            infos.calorias = infos.calorias - (0.18 * infos.calorias)
            break;
        case "GANHAR":
            infos.calorias = infos.calorias + (0.1 * infos.calorias)
    }

    var gordura = (infos.calorias * 0.2) / 9;

    var gorduraCal = infos.calorias * 0.2;

    var proteina = 1.6 * infos.peso;

    var proteinaCal = proteina * 4;

    var carboidratos = (infos.calorias - proteinaCal - gorduraCal) / 4;

    var res = {"Gordura": gordura, "Carboidratos": carboidratos, "Proteina": proteina}

    return res;
}

export default calcularDietaService;