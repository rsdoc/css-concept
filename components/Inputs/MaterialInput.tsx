import React from 'react';

export const MaterialInput = () => {
  return (
    <div className='container'>
      <h1 style={{ margin: '2rem' }}>Material Input With Animation</h1>
      <form className='form'>
        <div className='form-control-input'>
          <input type='text' name='email' autoComplete='off' required />
          <label htmlFor='email' className='label-name'>
            <span className='content-name'>Name</span>
          </label>
        </div>
      </form>
      <style>{`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 60vh;
          }
          .form {
              width: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
          }
          .form-control-input {
            background-color: blue;
            width: 100%;
            height: 50px;
            position: relative;
            overflow: hidden;
          }
          .form-control-input input {
              width: 100%;
              height: 100%;
              color: #595f6e;
              padding-top: 20px;
              outline: none;
          }
          .form-control-input label {
              position: absolute;
              bottom: 0px;
              left: 0%;
              width: 100%;
              height: 100%;
              pointer-events: none;
              border-bottom: 1px solid black;
          }
          .form-control-input label::after {
              content: '';
              position: absolute;
              left: 0;
              bottom: -1px;
              width: 100%;
              height: 100%;
              border-bottom: 3px solid #5fa8d3;
              transform: translateX(-100%);
              transition: transform 0.5s ease;
          }
          .content-name {
              position: absolute;
              bottom: 5px;
              left: 0;
              transition:  all 0.3s ease;
          }
          .form-control-input input:focus + label span, .form-control-input input:valid + label span{
              transform: translateY(-120%);
              font-size: 14px;
              color: #5fa8d3;
          }
          .form-control-input input:valid + label::after, .form-control-input input:valid + label::after {
              transform: translateX(0%);
          }
     `}</style>
    </div>
  );
};
