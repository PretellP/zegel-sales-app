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
				<h1 className="mi_formulario__title">Formulario de Ventas</h1>
			</div>

			<b>
				<u>
					Ventas
				</u>
			</b>
			<br />

			<hr />

			<div className="mi_formulario__body">

				<div className="mi_formulario__form">

					<div>
						<label className="mi_formulario__label">
							Código:
						</label>
						<div className="mi_formulario__input-icon">
							<i className="fa fa-user mi_formulario__icon" aria-hidden="true" />
							<input
								id="code"
								name="code"
								value={name}
								onChange={changeName}
								className="mi_formulario__input"
							></input>
							<br />
							{numberError == 1 && (
								<label className="mi_formulario__error">
									El código solo se puede incluir letras
								</label>
							)}
							{numberError == 2 && (
								<label className="mi_formulario__error">
									El código minimo es 3 caracteres
								</label>
							)}
							{numberError == 3 && (
								<label className="mi_formulario__error">
									El código maximo es 10 caracteres
								</label>
							)}
						</div>
					</div>

					<div>
						<label htmlFor="invoyce_type_select">
							Comprobante:
						</label>
						<div>
							<select name="invoice_type" id="invoyce_type_select">
								<option value="1">FACTURA</option>
								<option value="2">BOLETA</option>
							</select>
						</div>
					</div>

					<div>
						<label htmlFor="input_client">Cliente:</label>
						<div>
							<input type="text" name='client' id='input_client' />
						</div>
					</div>

					<div>
						<label htmlFor="input_date">
							Fecha:
						</label>
						<div>
							<input type="date" />
						</div>
					</div>

					<div>
						<label htmlFor="input_igv">
							IGV:
						</label>
						<div>
							<input type="number" step="0.1" />
						</div>
					</div>

				</div>

				<hr />

				<div>

					<div>
						<label htmlFor="article_select">
							Artículo:
						</label>
						<div>
							<select name="article" id="article_select">
								<option value="014">SOPA DE PASTA</option>
								<option value="977">AVENA</option>
								<option value="056">FRIJOL</option>
								<option value="076">ARROZ</option>
								<option value="065">GELATINA</option>
								<option value="051">ATÚN</option>
								<option value="057">SHAMPOO</option>
							</select>
						</div>
					</div>

					<div>
						<label htmlFor="">
							Cantidad:
						</label>
						<div>
							<input type="number" step="1" name='quantity' min="1" />
						</div>
					</div>

					<div>
						<label htmlFor="input_buy_price">
							Precio de compra
						</label>
						<div>
							<input type="number" id="input_buy_price" name="buy_price" step="0.1" min="0" />
						</div>
					</div>

					<div>
						<label htmlFor="">
							Precio de venta
						</label>
						<div>
							<input type="number" name='sell_price' step="0.1" min="0" />
						</div>
					</div>

					<div>
						<label htmlFor="input_discount">
							Descuento
						</label>
						<div>
							<input type="number" name='discount' id='input_discount' step="0.1" min="0" />
						</div>
					</div>

					<div>
						<label htmlFor="input_expiration_date">
							Fecha de vencimiento:
						</label>
						<div>
							<input type="date" name="expiration_date" id="input_expiration_date" />
						</div>
					</div>

				</div>

			</div>

			<hr />

			<div>

			</div>

			<br />

			<button disabled={numberError > 0} onClick={saveClick} className="mi_formulario__button">
				Guardar
			</button>


			<div className="mi_formulario__footer">
				<div className="mi_formulario__group">
					<span className="mi_formulario__label">
						{/* Este es mi primer formulario con CSS */}
					</span>
				</div>
			</div>
		</div>
	)

}

export default App;
