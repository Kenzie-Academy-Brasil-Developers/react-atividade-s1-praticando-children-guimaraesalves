import "./App.css";
import DatesCards from "./components/CenteredCard";
//import CenteredCard from "./components/CenteredCard";

function App() {
  const cookieNames = { a: "Maizena", b: "Cream Cracker", c: "Polvilho" };
  const cookieCalorias = { a: "19,40kcal", b: "125Kcal", c: "8,88Kcal" };
  const cookieCarbo = { a: "3,14g", b: "21g", c: "1,68g" };
  const cookieProt = { a: "0,29g", b: "2,50g", c: "0,06g" };
  const cookieFibras = { a: "0,16g", b: "0,17g", c: "0,00g" };
  const cookieSodio = { a: "20,97mg", b: "35,00mg", c: "0,00g" };

  return (
    <div className="App">
      <div classNames="App-header">
        <h1>🍪 Tabela Nutricional dos Biscoitos 🍪</h1>
        <DatesCards
          nome={cookieNames.a}
          vlrEner={cookieCalorias.a}
          carb={cookieCarbo.a}
          prot={cookieProt.a}
          fibras={cookieFibras.a}
          sodio={cookieSodio.a}
        ></DatesCards>
        <DatesCards
          nome={cookieNames.b}
          vlrEner={cookieCalorias.b}
          carb={cookieCarbo.b}
          prot={cookieProt.b}
          fibras={cookieFibras.b}
          sodio={cookieSodio.b}
        ></DatesCards>
        <DatesCards
          nome={cookieNames.c}
          vlrEner={cookieCalorias.c}
          carb={cookieCarbo.c}
          prot={cookieProt.c}
          fibras={cookieFibras.c}
          sodio={cookieSodio.c}
        ></DatesCards>
      </div>
    </div>
  );
}

export default App;
