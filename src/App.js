import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

const App = () => {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
    </div>
  );
}

export default App;
