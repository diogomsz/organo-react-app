import './Banner.css';

const Banner = () => {
    // JSX -> Como o React trabalha com a parte visual (parece HTML mas não é)
    // Como se fosse JS puro manipulando o DOM

    // Quando formos setar classes em React, usamos o className em vez de class
    return (
        <> 
            <header className="banner">
                <img src="/imagens/banner.png" alt="O banner principal da pági;na do Organo"/>
            </header>
        </>
    );
}

export default Banner;
