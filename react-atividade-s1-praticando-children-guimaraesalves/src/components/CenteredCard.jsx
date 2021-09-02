import "./styles.css";

function CenteredCard(props) {
  return (
    <div className="FatherClass">
      <span className="ChildreClass">{props.children}</span>
    </div>
  );
}

export default CenteredCard;
