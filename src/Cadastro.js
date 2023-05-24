import React from 'react';
import './Cadastro.css'

function Cadastro() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='nome'><strong>Nome: </strong></label>
            <input type='text' placeholder='Digite seu nome' className='form-control rounded-0'/>
          </div>

          <div className='mb-3'>
          <label htmlFor='email'><strong>Email: </strong></label>
            <input type='email' placeholder='Digite seu email' className='form-control rounded-0'/>
          </div>

          <div className='mb-3'>
          <label htmlFor='telefone'><strong>Telefone: </strong></label>
            <input type='text' placeholder='Digite seu telefone' className='form-control rounded-0'/>
          </div>

          <div className='mb-3'>
          <label htmlFor='cpf'><strong>CPF: </strong></label>
            <input type='text' placeholder='Digite seu cpf' className='form-control rounded-0'/>
          </div>

          <div className='mb-3'>
          <label htmlFor='dt_nascimento'><strong>Data de Nascimento: </strong></label>
            <input type='date' placeholder='Digite seu dt_nascimento' className='form-control rounded-0'/>
          </div>

          <button className='btn btn-success w-100 rounded-0'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;