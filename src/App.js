import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LatestInsights from './pages/latestInsights/LatestInsights';
import Report from './pages/report/Report';
import Header from './components/Header';
import Footer from './components/Footer';
const App=()=>{
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<LatestInsights/>}/>
        <Route path='/report/:id' element={<Report/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
