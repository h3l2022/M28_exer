import styles from './Perfil.module.css';

const Perfil = ({ endereco, nome }) => {
        return (
        <header className={styles.header}>
            <img className={styles.avatar} src={endereco} />
                <h1 className={styles.name} >
                {nome}
                </h1>
        </header>
    )
}

export default Perfil;