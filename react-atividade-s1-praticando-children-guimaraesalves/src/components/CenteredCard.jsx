import "./styles.css";

function CenteredCard(children) {
  return (
    <div className="FatherClass">
      <span className="ChildreClass">{children}</span>
    </div>
  );
}

export default CenteredCard;
