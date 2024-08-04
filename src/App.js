import {Provider} from 'react-redux';
import './App.css';
import Body from './componets/Body';
import Head from './componets/Head';
import store from './utils/store';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import WatchPage from './componets/WatchPage';
import Maincontainer from './componets/Maincontainer';




const appRouter = createBrowserRouter([{
         path:"/",
         element:<Body/>,
         children:[
          {
          path:"/",
          element:<Maincontainer/>
          },
          {
            path:"/watch",
            element:<WatchPage/>
          },
         ],
},
])


function App() {
  return (
      <Provider store={store}>
      <div>
      <Head/>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
