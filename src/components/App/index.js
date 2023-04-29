// == Import
import Title from 'src/components/App/Title'
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Title/>
      <div className='Personnalizer'>Personnalizer</div>
      <div className='Submit'>Submit button</div>
    </div>
  );
}

// == Export
export default App;
