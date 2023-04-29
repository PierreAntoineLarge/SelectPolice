// == Import
import Title from 'src/components/App/Title'
import Submit from 'src/components/App/Submit'
import Personnalizer from 'src/components/App/Personnalizer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Title/>
      <Personnalizer/>
      <Submit/>
    </div>
  );
}

// == Export
export default App;
