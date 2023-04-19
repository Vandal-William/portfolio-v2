import './styles.scss';
function Contact (){
    return (
        <div className="container">

            <div className="card">
                <h3 className='info-project'>Téléphone</h3>
                <span className='info-info'>06.68.77.33.86</span>

            </div>

            <div className="card">
                <h3 className='info-project'>E-mail</h3>
                <span className='info-info'>vandal.william@hotmail.com</span>

            </div>

            <div className="card">
                <h3 className='info-project'>Linkedin</h3>
                <a href='https://www.linkedin.com/in/william-vandal' target='_blanc' className='info-info'>Lien Linkedin</a>
            </div>

            <div className="card">
                <h3 className='info-project'>Github</h3>
                <a href='https://github.com/Vandal-William' target='_blanc' className='info-info'>Lien GitHub</a>

            </div>

            <div className="card">
               <h1 className='info-title'> Contact </h1>

            </div>

        </div>
    )
}

export default Contact;