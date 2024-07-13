import { Box, HStack, VStack } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import logo from "../public/img/LOGO.png"
import "../main.css";
 
function App() {
  function handlePrint() {
    window.print()
}
  return (
    <Box minH="100vh" bg="rgb(0,20,30)" color="gray.500" px={6} py={8}>
      <img className="logo" src={logo} alt="" />
      <CodeEditor />
        <button className="print-btn" onClick={handlePrint} style={{
          color: 'white',
          border: '1px solid green',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '48vw',
          marginTop: '5px',
          transition: '0.5s ease'
        }}>print the page . . . . .</button>
    
    </Box>
  );
}

export default App;
