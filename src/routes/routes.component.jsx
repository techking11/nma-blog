import { Route, Routes } from 'react-router-dom';
import Hero from '../components/hero/hero.component';
import Navigation from '../components/navigation/navigation.component';
import Signin from '../components/signin/signin.component';

const Home = () => (
  <div className="bg-white">
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Hero />} />
        <Route path='signin' element={<Signin />} />
      </Route>
    </Routes>
  </div>
)

export default Home;