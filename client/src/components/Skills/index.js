import './styles.scss'
function Skills (){
    return (
        <main className="main">
            <div className="skills">
                <div className='skill'>
                    <h3 className='skill-title'>Dévelopement front-end</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React-Redux</li>
                    </ul>
                </div>

                <div className='skill'>
                    <h3 className='skill-title'>Dévelopement back-end</h3>
                    <ul>
                        <li>Node-js</li>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>Express</li>
                        <li>Flask</li>
                    </ul>
                </div>

                <div className='skill'>
                    <h3 className='skill-title'>Compétences SQL</h3>
                    <ul>
                        <li>PostgreSQL</li>
                        <li>ORM: Sequelize</li>
                        <li>MYSQL</li>
                    </ul>
                </div>

                <div className='skill'>
                    <h3 className='skill-title'>Autre compétences</h3>
                    <ul>
                        <li>Production : PM2</li>
                        <li>Versioning: GIT et GitHub</li>
                        <li>Vagrant</li>
                        <li>UI / UX Design : figma</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Skills;