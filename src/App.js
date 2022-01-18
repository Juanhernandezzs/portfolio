import './App.css';
import Contents from './components/Contents/Contents';
import ArrowUp from './components/ArrowUp/ArrowUp'
import LanguageProvider from './LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Contents />
        <ArrowUp />
      </LanguageProvider>
    </div>
  );
}

export default App;
