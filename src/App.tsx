import { useState } from 'react';
import './App.css';

const assetData = {
  'us-stocks': [
    { id: 1, name: 'Apple', quantity: 10, price: 150 },
    { id: 2, name: 'Google', quantity: 5, price: 2800 },
  ],
  'korean-stocks': [
    { id: 1, name: 'Samsung Electronics', quantity: 100, price: 70000 },
    { id: 2, name: 'SK Hynix', quantity: 50, price: 120000 },
  ],
  'crypto': [
    { id: 1, name: 'Bitcoin', quantity: 2, price: 60000 },
    { id: 2, name: 'Ethereum', quantity: 10, price: 4000 },
  ],
  'indices': [
    { id: 1, name: 'S&P 500', quantity: 0, price: 4500 },
    { id: 2, name: 'KOSPI', quantity: 0, price: 3000 },
  ],
  'currencies': [
    { id: 1, name: 'USD/KRW', quantity: 0, price: 1300 },
    { id: 2, name: 'EUR/USD', quantity: 0, price: 1.18 },
  ],
};

function App() {
  const [category, setCategory] = useState('us-stocks');

  const renderAssets = () => {
    const assets = assetData[category as keyof typeof assetData];
    return (
      <table>
        <thead>
          <tr>
            <th>자산</th>
            <th>수량</th>
            <th>가격</th>
            <th>총액</th>
          </tr>
        </thead>
        <tbody>
          {assets.map(asset => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.quantity || 'N/A'}</td>
              <td>${asset.price.toLocaleString()}</td>
              <td>${(asset.quantity * asset.price).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>자산 관리</h1>
      </header>

      <nav className="app-nav">
        <button onClick={() => setCategory('us-stocks')}>미국 주식</button>
        <button onClick={() => setCategory('korean-stocks')}>국내 주식</button>
        <button onClick={() => setCategory('crypto')}>암호화폐</button>
        <button onClick={() => setCategory('indices')}>지수</button>
        <button onClick={() => setCategory('currencies')}>화폐</button>
      </nav>

      <main className="app-main">
        <div className="asset-list">
          {renderAssets()}
        </div>
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2025 Gemini Asset Management</p>
      </footer>

    </div>
  );
}

export default App;
