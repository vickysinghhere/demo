import logo from './logo.svg';
import './App.css';

function Header(){
  return(<h1> THis is my Header</h1>)
}

function Footer(){
  return(<h1> THis is my Footer</h1>)
}


function Content(){
  return(<h1> THis is my Content</h1>)
}

function Main(){
  return(<div>
      This is my first main page
      <Header/>
      <Content/>
      <Footer/>
  </div>)
}
export default Main;
