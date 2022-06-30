import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        name={"Doe, Jane"}
        startAge={45}
        hair={"Black"}
      />
      <Person
        name={"Smith, John"}
        startAge={88}
        hair={"Brown"}
      />
    </div>
  );
}

export default App;
