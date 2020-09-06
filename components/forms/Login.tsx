export const LoginForm = () => {
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='button-group'>
          <div id='btn'></div>
          <button className='toggle-btn' type='button'>
            Log In
          </button>
          <button className='toggle-btn' type='button'>
            Register
          </button>
        </div>
        <div className='social-images'>
          <img src='/forms/fb.png' alt='fb' />
          <img src='/forms/gp.png' alt='gp' />
          <img src='/forms/tw.png' alt='tw' />
        </div>
      </div>
      <style>{`
        .container {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/forms/banner.jpg);
          background-position: center;
          background-size: cover;
          position: absolute;
        }
        .form-container {
          width: 380px;
          height: 480px;
          position: relative;
          margin: 6% auto;
          background: white;
          padding: 5px;
        }

        .button-group {
          width: 225px;
          margin: 35px auto;
          box-shadow: 0 0 20px 9px #ff61241f;
          border-radius: 30px;
          position: relative;
        } 

        .toggle-btn {
          padding: 10px 30px;
          cursor: pointer;
          background: trasparent;
          border: 0;
          outline: none;
          position: relative;
        }

        #btn {
          position: absolute;
          top:0;
          left:0;
          width: 110px;
          height: 100%;
          background: linear-gradient(to right, #ff105f, #ffad06);
          border-radius: 30px;
          transition: 0.5s;
        }

        .social-images {
          margin: 30px auto;
          text-align: center;
          display: flex;
          justify-content: center
        }

        .social-images  img {
          width: 30px;
          margin: 0 12px;
          box-shadow: 0 0 20px 0 #7f7f7f3d;
          cursor: pointer;
          border-radius: 50%;
        }

    `}</style>
    </div>
  );
};
