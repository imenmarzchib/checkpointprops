import logo from './logo.svg';
import './App.css';
import Profile from "./profil/Profile"
function App() {
  
   const nom="Imen Marzougui";
   const bio="the best mother";
   const profession= "student in gomycode";
   const img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7W2uECGUAGP7gaESWz3cvJAbg-sSvihsIaw&usqp=CAU" ;
  return (
    <div className="App"  style={{
     
      height: "300 px",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: 'auto',
      backgroundImage: 'url(https://image.shutterstock.com/image-photo/heart-bokeh-background-260nw-573582736.jpg)'
    }}>
<Profile nom={nom}
 bio={bio} 
 profession={profession}
 img={img}/>
    </div>
  );
}

export default App;
