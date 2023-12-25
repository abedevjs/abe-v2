import Container from "./ui/Container";
import Tab from "./ui/Tab";

function App() {
  return (
    <div className=" h-screen flex items-center justify-center lg:h-auto lg:py-8">
      <Container>
        <Tab />
      </Container>
    </div>
  );
}

export default App;
