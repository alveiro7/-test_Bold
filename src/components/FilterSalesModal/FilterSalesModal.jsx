import React from 'react'
import './FilterSalesModal.scss'

const FilterSalesModal = ({showFilter, setShowFilter}) => {

    return (
        <>

        <button onClick={() => setShowFilter(!showFilter)}  >
            Filtrar
        </button>
        <section id='portal'>
        <div className="tooltiptext">
    <div className="cont_check">
        <input type="checkbox" className="checkbox" id="check1" name="check1" />
        <label htmlFor="check1">Cobro con datafono</label>
    </div>
    <div className="cont_check">
        <input type="checkbox" className="checkbox" id="check2" name="check2" />
        <label htmlFor="check2">Cobro con link de pago</label>
    </div>
    <div className="cont_check">
        <input type="checkbox" className="checkbox" id="check3" name="check3" />
        <label htmlFor="check3">Ver todos</label>
    </div>
    <button className="btn3">Aplicar</button>

</div>
        </section>
        </>
)
}

export default FilterSalesModal