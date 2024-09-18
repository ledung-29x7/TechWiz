import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import publicRouter from "./Router/route";

function App() {
  return (
    <Router>
      <Routes>
        {publicRouter.map((router,index)=>{
            let Layout = DefaultLayout;
            if (router.layout) {
              Layout = router.layout;
            }
            const  Pages = router.component;
            return <Route key={index } path={router.path} element = {<Layout><Pages/></Layout>} />
        })}
      </Routes>
    </Router>
  );
}

export default App;
