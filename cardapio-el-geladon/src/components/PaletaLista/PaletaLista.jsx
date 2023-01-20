
import PaletaListaitem from "components/PaletaListaitem/PaletaListaitem";
import React, { useState } from "react";
import { paletas } from "mocks/paletas.js";
import "./PaletaLista.css";




function PaletaLista() {

    const [paletaSelecionada, setPaletaSelecionada] = useState({});

    const adicionarItem = (paletaIndex) => {
        const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1 }
        setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
    }

    const removerItem = (paletaIndex) => {
        const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1 }
        setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
    }

    return (
        <div className="PaletaLista">

            {paletas.map((paleta, index) => (
               <PaletaListaitem 
               paleta = {paleta}
               quantidadeSelecionada = {paletaSelecionada[index]}
               index = {index}
               onAdd = {index => adicionarItem(index)}
               onRemove = {index => removerItem(index)}
               key={`PaletaListaItem-${index}`}/>
            ))}
        </div>
    );
}

export default PaletaLista;