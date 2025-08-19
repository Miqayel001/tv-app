import './App.css'
import Menu from './components/Menu/Menu';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Menu />
      <div className="app-content">
        <HomePage />
      </div>
    </div>
  );
};

export default App;

