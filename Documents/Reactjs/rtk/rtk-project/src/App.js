import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import Cart from './component/Cart';
import AppLayout from './component/AppLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<AppLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
