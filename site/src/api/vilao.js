import axios from 'axios';

export async function cadastrarFilme(nome, maldade, ds_temPoder){
    const resposta = await api.post('/vilão',{
        nome: nome,
       maldade: maldade,
       ds_temPoder: ds_temPoder
    })
    return resposta.data;
}

export async function mostrarViloes (){ 
    const resposta = await api.get('/cadastro'); 
    return resposta.data; 

}