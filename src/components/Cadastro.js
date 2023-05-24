import React, {useState} from "react";
import "./cadastro.css";
import { HiRocketLaunch } from "react-icons/hi2";

function Cadastro() {
  const [formValues, setFormValues] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    dt_nascimento: ''
  })
  const [cpfValid, setCpfValid] = useState(true);
  const [telValid, SetTelValid] = useState(true)
  const [dtValid, SetDtValid] = useState(true)

  //Função que atualiza o estado do formulário quando o usuário inserir texto nos campos
  function handleChange(event) {
    const { name, value } = event.target;
    //Atualiza o estado do formulario com o novo valor do campo alterado,
    setFormValues({ ...formValues, [name]: value });

    if (name === "cpf") {
      const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
      setCpfValid(cpfRegex.test(value));
    }

    if(name === "telefone"){
      const telRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
      SetTelValid(telRegex.test(value));

    if(name === "dt_nascimento"){
      const dtRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
      SetDtValid(dtRegex.test(value));
    }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!cpfValid) {
      alert("CPF inválido, por favor digite um CPF válido.");
      return;
    }
    if(!telValid){
      alert("Telefone está inválido, insira um número no formato válido: (XX) XXXXX-XXXX")
    }

    if(!dtValid){
      alert("Data está incorreta, por favor insira o formato de data válido: dd/mm/yyyy")
    }

  }



  return (
    <div className="d-flex justify-content-center align-items-center  vh-100">
      <div className="cont-esquerdo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3534/3534124.png"
          alt="teste"
        />
        
      </div>
      <div className="formulario p-3 rounded-4 w-25">
        <form action="" onSubmit={handleSubmit}>
          <h1 className="title">
            MROCKETZ <HiRocketLaunch />
          </h1>
          <div className="mb-3">
            <label htmlFor="nome">
              <strong>Nome: </strong>
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="form-control rounded-4"
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email: </strong>
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="form-control rounded-4"
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefone">
              <strong>Telefone: </strong>
            </label>
            <input
              type="text"
              placeholder="Digite seu telefone"
              onChange={handleChange}
              className="form-control rounded-4"
              required={true}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpf">
              <strong>CPF: </strong>
            </label>
            <input
              type="text"
              placeholder="Digite seu cpf"
              className="form-control rounded-4"
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dt_nascimento">
              <strong>Data de Nascimento: </strong>
            </label>
            <input
              type="date"
              placeholder="Digite seu dt_nascimento"
              className="form-control rounded-4"
              onChange={handleChange}
              required={true}
            />
          </div>
          <a href="/">Já tem um cadastro?</a>
          <button className="btn btn-success w-100 rounded-4">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
