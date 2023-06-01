import './style.css';

import {Card} from '../../components/Card';

export default function home(){
    return(
        <>
         <h1 className="container">Lista de Presença.</h1>
         <input type="text" placeholder="Digite o nome..." />
         <button type="button">Adicionar</button>
        
        
        <Card/>
        <Card/>
        </>
    )
}