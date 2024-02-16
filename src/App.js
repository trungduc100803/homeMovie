import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import  { publicRoutes } from '../src/routes/index'
import DefaultLayout from '../src/component/DefaultLayout/DefaultLayout'

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, i) => {

            let Layout = DefaultLayout
            const Page = route.component

            if(route.layout) {
              Layout = route.layout
            }

            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                }
              />
            )
          })}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
