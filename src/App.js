import { StorageProvider } from "./StorageContext";
import Edit from './components/edit/edit';
import Content from './components/content/content';
import './App.css';

function App() {
  return (
    <div className="app">
      <StorageProvider>
        <Edit></Edit>
        <Content></Content>
      </StorageProvider>
    </div>
  );
}

export default App;
