import React from 'react';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Products Manager</h1>
      <ProductList />
    </div>
  );
}

export default App;