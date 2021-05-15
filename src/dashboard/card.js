import {useContext} from "react";
import UserContext from "../usercontext";
import UserCreate from "../usercreate"; 
import ProductContext from "../productcontext";
export default function Card(props) {


    return <>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                               {props.dashboarddata.name}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{props.dashboarddata.value}</div>
                           
                    </div>
                        <div class="col-auto">
                            <i class={props.dashboarddata.icon}></i>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </>
}