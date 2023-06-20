import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { CommentsPage } from "./components";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <CommentsPage />
    </Layout>
  );
}

export default App;
