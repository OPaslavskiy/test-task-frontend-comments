import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import "./App.css";
import { getComments } from "./services/getComments";
import Comments from "./components/Comments";

function App() {
  getComments();
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Comments />
      </Layout>
    </>
  );
}

export default App;
