import Header,{Profile} from "./Header"

function Apoorv(){
  const url = "https://imgs.search.brave.com/KlXQhUrtRYQm82JkljRcaWjJWIylJ0stCOhHJ4k0OHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbWFnZS1jb29s/LWVhZ2xlLXdlYXJp/bmctZnVua3ktZ2xh/c3Nlc18xMTUxMTIz/LTY0OTc1LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA"

  function click(){
    alert("Clicked!!!!!!");
  }

  return (
    <>
      <img src={url} alt="photo" className="photo" />

      <ul>
        <li>Invent a new car</li>
        <li>By bye everyone</li>
        <li>How are you??</li>
      </ul>

      <button onClick={click} >Click me</button>
    </>
  )
}

export default Apoorv