import "./styles.css";

function CenteredCard(props) {
  return (
    <div>
      <div className="FatherClass">
        <span className="ChildreClass">
          <h3>Biscoito: {props.nome}</h3>
          <p>Valor energético: {props.vlrEner}</p>
          <p>Carboidratos: {props.carb}</p>
          <p>Proteínas: {props.prot}</p>
          <p>Fibra alimentar: {props.fibras}</p>
          <p>Sódio: {props.sodio}</p>
        </span>
      </div>
    </div>
  );
}

export default CenteredCard;
