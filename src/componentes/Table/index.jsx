import './style.css'
function Table() {
    
    return (

        <table>
            {/* <!-- Primeira linha da tabela --> */}
            <thead>
            <tr>
                <th>HTML</th>
                <th>CSS</th>
                <th>JavaScript</th>
            </tr>
            </thead>
            {/* <!-- Segunda linha da tabela --> */}
            <tbody>
            <tr>
                <td>
                    <i className="fa-brands fa-html5" style={{color: "#fa7000"}} />
                </td>
                <td>
                    <i className="fa-brands fa-css3-alt" style= {{color: "#025cf7"}} />
                </td>
                <td>
                    <i className="fa-brands fa-js" style={{color: "#b2b51c"}} />
                </td>
            </tr>
            {/* <!-- Terceira linha de tabela --> */}
            <tr>
                <td>Contruindo seu site</td>
                <td>Estilizando seu site</td>
                <td>Criando funcionalidades incríveis</td>
            </tr>
            </tbody>
        </table>

    )
}

export default Table