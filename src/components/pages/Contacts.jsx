import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Iframe from './Iframe';

function Contacts() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [state, handleSubmit] = useForm('mlekbegj');

  if (state.succeeded) {
    return <p>Obrigada pela tua mensagem, vamos responder o mais rápido possível!</p>;
  }

  return (
    <div className='contact-form'>
      <Iframe />
      <form onSubmit={handleSubmit}>
        <h1>Contata-nos!</h1>
        <p>Aqui podes enviar-nos uma mensagem.</p>
        <label htmlFor='firstName'>Primeiro Nome:</label>
        <input type='text' id='firstName' name='firstName' value={formData.firstName} onChange={handleChange} />
        <label htmlFor='lastName'>Último Nome:</label>
        <input type='text' id='lastName' name='lastName' value={formData.lastName} onChange={handleChange} />
        <label htmlFor='email'>E-mail:</label>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label htmlFor='phone'>Telemóvel:</label>
        <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange} />
        <label htmlFor='message'>Mensagem:</label>
        <textarea id='message' name='message' value={formData.message} onChange={handleChange} />
        <ValidationError prefix='Message' field='message' errors={state.errors} />
        <button type='submit' disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contacts;
