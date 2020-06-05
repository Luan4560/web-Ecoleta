import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiArrowLeft} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Logo"/>

        <Link to="/">
          <FiArrowLeft/>
          Voltar para home
        </Link>
      </header>
      <form>
        <h1>Cadastro do <br/> ponto de coleta.</h1>



          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
          </fieldset>

        <div className="field">
          <label htmlFor="name">Nome da entidade</label>
          <input 
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div className="field-group">
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="field">
          <label htmlFor="whatsapp">Whatsapp</label>
          <input 
            type="text"
            name="whatsapp"
            id="whatsapp"
          />
        </div>
        </div>

          <fieldset>
            <legend>
              <h2>Endereço</h2>
            </legend>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Ítems de coleta</h2>
            </legend>
          </fieldset>

      </form>
    </div>
  )
}

export default CreatePoint;