import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {

  const [name, setName] = useState("")
  const [numberError, setNumberError] = useState(0)

  const changeName = (e) => {
    const value = e.target.value;
    console.log(value)
    const minValue = value.length > 3
    const maxValue = value.length < 10
    const onliLet = /^[a-zA-Z\s]*$/g.test(value)

    console.log("Min: ", minValue)
    console.log("Max: ", maxValue)
    console.log("onlite: ", onliLet)

    if (onliLet == false) {
      setNumberError(1)
    }
    else if (!minValue) {
      setNumberError(2)
    }
    else {
      setNumberError(3)
    }

    if (onliLet == true && minValue && maxValue) {
      setNumberError(0)
    }
    setName(value)
  }

  const saveClick = () => {
    console.log("Este es mi estado local: ", name)
  }

  return (

    <div className="mi_formulario__container">
      <div className="mi_formulario__header">
        <h1 className="mi_formulario__title">Mi formulario</h1>
      </div>

      <div className="mi_formulario__body">
        <div className="mi_formulario__form">
          <label className="mi_formulario__label">Nombre: </label>
          <div className="mi_formulario__input-icon">
            <i className="fa fa-user mi_formulario__icon" aria-hidden="true" />
            <input
              id="nombre"
              name="nombre"
              value={name}
              onChange={changeName}
              className="mi_formulario__input"
            ></input>

            {numberError == 1 && (
              <label className="mi_formulario__error">
                El nombre solo se puede incluir letras
              </label>
            )}

            {numberError == 2 && (
              <label className="mi_formulario__error">
                El nombre minimo es 3 caracteres
              </label>
            )}

            {numberError == 3 && (
              <label className="mi_formulario__error">
                El nombre maximo es 10 caracteres
              </label>
            )}

          </div>

          <button disabled={numberError > 0} onClick={saveClick} className="mi_formulario__button">
            Guardar
          </button>

        </div>

      </div>

      <div className="mi_formulario__footer">
        <div className="mi_formulario__group">
          <span className="mi_formulario__label">
            Este es mi primer formulario con CSS
          </span>
        </div>
      </div>
    </div>
  )

}

export default App;
