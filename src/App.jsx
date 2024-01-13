import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Routes from "./routes/Routes";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Routes />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
