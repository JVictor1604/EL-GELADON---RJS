import './PaletaListaitem.css'



function PaletaListaitem({ paleta, quantidadeSelecionada, index, onRemove, onAdd }) {

    const badgeCounter = (canRender, index) =>
        Boolean(canRender) && (<span className="PaletaListaItem__badge"> {quantidadeSelecionada || 0} </span>);

    const removeButton = (canRender, index) =>
        Boolean(canRender) && (<button className="Acoes__remover" onClick={() => onRemove(index)}>remover</button>);

    return (<div className="PaletaListaItem">
        {badgeCounter(quantidadeSelecionada, index)}
        <div>
            <div className="PaletaListaItem__titulo">
                {paleta.titulo}
            </div>
            <div className="PaletaListaItem__preco">{`R$ ${paleta.preco.toFixed(2)}`};</div>
            <div className="PaletaListaItem__descricao">

                {paleta.descricao}
            </div>
            <div className="PaletaListaItem__acoes Acoes">

                <button className={`Acoes__adicionar ${!quantidadeSelecionada && "Acoes__adicionar--preencher"}`} onClick={() => onAdd(index)}
                >adicionar</button>

                {removeButton(quantidadeSelecionada, index)}

            </div>
        </div>
        <img
            className="PaletaListaItem__foto"
            src={paleta.foto}
            alt={`Paleta de ${paleta.sabor}`}
        />
    </div>);
}

export default PaletaListaitem