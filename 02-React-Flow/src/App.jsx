import Chai from './chai.jsx';

function App() {

  return (
<div>
  <h1>Flow of React| Rohit </h1>
  <h2> Today's learning</h2>
  <p>In this tutorial by Chai aur Code YouTube channel we understood the FLOW of REACT JS</p>
<p>starts from main.jsx whixh renders all html code into root id of index.html folder</p>
<p>Also app.jsx renders component into main.jsx which contains html and js code</p>

<h2>Chai Component Loading...</h2>
<Chai/>

<p>Vite follows some set of rules : You can not return component with lowercase *First alphabate should be in Uppercase</p>
<p>One component only able to return only one element</p>

<h3>Key points : </h3>
<ol>
  <li>Function name's first letter should be capital</li>
  <li>Components file must have .jsx extension</li>
  <li>Components name's first letter should be capital(Optional) </li>
</ol>
</div>


  )
}

export default App
