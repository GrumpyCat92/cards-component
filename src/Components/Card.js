export default function Card({ children, title, text, buttonText }) {
  return (
    <div className="card" style={{ width: "18%" }}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
}
