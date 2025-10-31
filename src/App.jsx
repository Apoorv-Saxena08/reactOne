import styled from "styled-components";
function App(){

  //name in capital letter of tag constant
  const Heading1 = styled.h1`
  color:red;
  border:1px solid green
 
  `

  return (
  <div >
      <h1>Styled component</h1>
      <Heading1>Hello duniya</Heading1>
      <Heading1>Kseee hooo</Heading1>
  </div>

  );
}

export default App;
