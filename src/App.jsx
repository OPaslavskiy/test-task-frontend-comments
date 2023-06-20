import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import "./App.css";
import { getComments } from "./services/getComments";

function App() {
  getComments();
  return (
    <>
      <GlobalStyle />
      <Layout>
        <div>123</div>
      </Layout>
    </>
  );
}

export default App;
