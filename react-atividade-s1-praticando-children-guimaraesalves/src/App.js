import "./App.css";

import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <div classNames="App-header">
        <h1>🍪 Tabela Nutricional dos Biscoitos 🍪</h1>
        <CenteredCard>
          <h1>Maizena</h1>
          <p>Valor energético: 19,40kcal</p>
          <p>Carboidratos: 3,14g</p>
          <p>Proteínas: 0,29g</p>
          <p>Fibra alimentar: 0,16g </p>
          <p>Sódio: 20,97mg </p>
        </CenteredCard>

        <CenteredCard>
          <h1>Cream Cracker</h1>
          <p>Valor energético: 125Kcal</p>
          <p>Carboidratos: 21g</p>
          <p>Proteínas: 2,50g</p>
          <p>Fibra alimentar: 0,17g </p>
          <p>Sódio: 35,00mg </p>
        </CenteredCard>

        <CenteredCard>
          <h1>Polvilho</h1>
          <p>Valor energético: 8,88Kcal</p>
          <p>Carboidratos: 1,68g</p>
          <p>Proteínas: 0,06g</p>
          <p>Fibra alimentar: 0,00g</p>
          <p>Sódio: 0,00g</p>
        </CenteredCard>
      </div>
    </div>
  );
}

export default App;
