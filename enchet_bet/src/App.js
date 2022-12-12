
import './App.css';
import Login from './authentication/Login';
import Mine_login from './authentication/Mine_login';
import M_register from './authentication/M_register';
import Header from './component/Header';
import Hero from './component/homePage/Hero';
import HomePageProductCard from './component/homePage/HomePageProductCard';
import Service from './component/homePage/Service';
import PostCheck from './component/PostCheck';


function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <M_register></M_register> */}
      {/* <Mine_login></Mine_login> */}

      {/* <PostCheck /> */}
      {/* <Header /> */}

      {/* <Hero></Hero> */}
      
      {/* <Service></Service> */}

      <HomePageProductCard />
      
      
     
    </div>
  );
}

export default App;
