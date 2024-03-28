import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

// eslint-disable-next-line react/prop-types
const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [mensagemDeErro, setMensagemDeErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Usuário não encontrado")
            }
            return res.json();
        })
        // .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);
        })
        .catch((e) => {
            setEstaCarregando(false);
            setMensagemDeErro(true);
            console.error("Erro ao carregar: ",e.message)
        })
    }, [nomeUsuario])

    return (
        <div className="container"> 
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ) : mensagemDeErro ? (
            <p className={styles.mensagemErro}>Erro ao carregar repositórios. Por favor verifique o nome do usuário.</p>
        ) : (
        <ul className={styles.list}>
            {/* {repos.map(repositorio => ( */}
                {repos.map(({ id, name, language, html_url }) => (
                <>
                <li className={styles.listItem} key={id}>
                    <div className={styles.itemName}>
                    <b>Nome:</b> 
                    {name}
                    </div>
                    <div className={styles.itemLanguage}>
                    <b>Linguagem:</b> 
                    {language}
                    </div>
                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                </li>
                </>
            ))}
        </ul>
        )}
        </div>
    )
}

export default ReposList;