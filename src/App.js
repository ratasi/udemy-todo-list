import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import InputTask from './components/InputTask/InputTask';

function App() {
  return (
    <>
      <Container>
        <Header />
        <InputTask />
      </Container>
    </>
  );
}

export default App;
