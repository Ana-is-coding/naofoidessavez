import { cadastrarVilao } from '../../src/api/vilao.'

import './cadastrarVilao.scss';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { cadastrarFilme } from '../../src/api/vilao';

export default function Cadastrar() {

  
    
    const [nome, setNome] = useState('');
    const [maldade, setMaldade] = useState
    const [temPoder, settemPoder] = useState
  


    async function salvarVilao() {
        try {
        const cadastrarVilao = await cadastrarVilao(nome, maldade, temPoder)

            if (id == 0) {
                const cadastrarVilao = await cadastrarVilao(nome, maldade, ds_temPoder)
                
            alert('anime cadastrado!')
            }

            else {
            alert(err.message);
            }

        }
        catch (err) {
            if (err.response)
            toast.error(err.response.data.erro);

            else
            toast.error(err.message)
        }
    }
}


return(
    <main className="pagina-cadastrar">
        <div className='bordinha'>
            <div className="titulo">
                <h3>CADASTRO:</h3>
            </div>
            <div className="container2">
                <div className="form1">
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                </div>

                <div className="mudar">

                    <div classNmae="form3">
                        <label>Maldade</label>
                        <input type="text" value={maldade} onChange={e => setMaldade(e.target.value)} />
                    </div>

                </div>

                <div className="form2">
                    <label>Poder</label>
                    <textarea value={ds_temPoder} onChange={e => settemPoder(e.target.value)} />
                </div>
                </div>

                      <div className="botões">
                      <div className="buttons1">
                            <button href="/pagina-2"><a>VOLTAR</a></button>
                        </div>
                        <div className="buttons">
                            <button><a onClick={salvarVilao}> id === 0 ? 'CADASTRAR' </a></button>
                        </div>
                    </div>
        
            </div>

    </main>
);



