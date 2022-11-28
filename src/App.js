import "./App.css";
import Card from "./Components/Card";
import CardImage from "./Components/CardImage";

function App() {
  return (
    <>
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the
          bulk of the card's content."
        buttonText="Go somewhare"
      />
      <br />
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the
          bulk of the card's content."
        buttonText="Go somewhare"
      >
        <CardImage alt="Card" image="card.png" />
      </Card>
    </>
  );
}

export default App;
