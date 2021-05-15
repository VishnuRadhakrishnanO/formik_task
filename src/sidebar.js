import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sb-admin-2.min.css'

export default function Sidebar(){
    return <>
    
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

           
            <hr class="sidebar-divider my-0"/>

           
            <li class="nav-item active">
                <Link to="/dashboard" class="nav-link" >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

          
            <hr class="sidebar-divider"/>

            
            <div class="sidebar-heading">
                Interface
            </div>

           
            <li class="nav-item">
                <Link to ="/userlist" class="nav-link collapsed" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Users</span>
                </Link> 
            
            </li>

          
            <li class="nav-item">
                <Link to ="/productlist"class="nav-link collapsed"  
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Products</span>
                </Link>
               
            </li>

            <hr class="sidebar-divider"/>

          
            <div class="sidebar-heading">
                Addons
            </div>
           
            <hr class="sidebar-divider d-none d-md-block"/>

           
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        
            <div class="sidebar-card d-none d-lg-flex">
           
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    </>

}