import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './sb-admin-2.min.css';
import Sidebar from "./sidebar.js";
import NavbarTop from './navbar';
import Dashboard from './dashboard/dashboard';
import { UserProvider } from "./usercontext"
import {ProductProvider} from "./productcontext";
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";
import UserList from './userlist';
import UserEdit from './useredit';
import UserCreate from './usercreate';
import UserDelete from './userdelete';
import ProductList from './productlist';
import ProductEdit from './productedit';
import ProductCreate from './productcreate';
import ProductDelete from './productdelete';
function App() {
  return (
    
    <Router>
    <div id="wrapper">

      <Sidebar></Sidebar>
    <UserProvider>
      
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavbarTop>
          </NavbarTop>
          <div class="container-fluid">

              <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/userlist" component={UserList} exact={true} />
                <Route path="/useredit/:id" component={UserEdit} exact={true} />
                <Route path="/usercreate" component={UserCreate} exact={true} />
                <Route path="/userdelete/:id" component={UserDelete} exact={true} />
                <ProductProvider>
                <Route path="/productlist" component={ProductList} exact={true} />
                <Route path="/productedit/:id" component={ProductEdit} exact={true} />
                <Route path="/productcreate" component={ProductCreate} exact={true} />
             <Route path="/productdelete/:id" component={ProductDelete} exact={true} />
                </ProductProvider>
              </Switch>
              

          </div>
        </div>
      </div>
     
      </UserProvider>
    </div>
    </Router>
  );
}

export default App;
