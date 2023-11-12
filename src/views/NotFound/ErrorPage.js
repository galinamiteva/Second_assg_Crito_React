import {useNavigate} from 'react-router-dom';
import Button from '../../componens/Generics/Button';


const ErrorPage = () => {

  const navigate = useNavigate();



  return (
    <section className='container'>

      <div>
          <h2>
            404 Page Not Found
          </h2>
          <i className="fa-solid fa-ban"></i>
      </div>
      <Button onClick = {()=> navigate(-1)}
      text = 'Go back' url='/Home' theme = 'yellow' />

    </section>
  )
}

export default ErrorPage