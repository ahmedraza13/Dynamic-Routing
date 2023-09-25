import { Routes, Route } from 'react-router-dom';
import SingleProduct from './pages/Single Products/SingleProduct'
import Header from './Components/Header/Header';
import Container from './Components/ParentComponent/ParentComponent';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Container/>} />
       <Route path="/singleproduct/:productid" element={<SingleProduct/>}/>
      </Routes>
    
    </div>
  );
};

export default App;
