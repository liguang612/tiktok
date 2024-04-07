import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout ? route.layout : route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return <Route
              element={
                <Layout>
                  <Page />
                </Layout>}
              key={index}
              path={route.path} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
