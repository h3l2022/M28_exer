import { useState, useEffect } from "react"
 
import styles from './Formulario.module.css';

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o estado mudou");
    });

    const alteraNome = (evento) => {
     //   setNome(evento.target.value);
        setNome(estadoAnterior => {
          //  setNome(evento.target.value);
            return evento.target.value;
        })
    }

const renderizaResultado = () => {
    const soma = altura + peso;
    const media = soma /2;

   
    if (media >= 150) {
        return (
            <p>Olá {nome}, você não está na média recomendada</p>
        )
    } else {
        return (
            <p>Olá {nome}, Você está na média recomendada</p>
        )
    }
        
}

    return (
        <form>
        <div className={styles.altura}> 
        <input className={styles.botao}  type="text" placeholder="Seu nome" onChange={alteraNome} />
        <input className={styles.botao}type="number" placeholder="altura" onChange={({ target}) => setAltura(parseInt(target.value))} />
        <input className={styles.botao}type="number" placeholder="peso" onChange={evento => setPeso(parseInt(evento.target.value))} />
        <ul>
            {[1,2,3,4,5].map(item => (
    <li key={item}></li>
))}
        </ul>
   {renderizaResultado()}
   </div>
    </form>
    )
}


export default Formulario