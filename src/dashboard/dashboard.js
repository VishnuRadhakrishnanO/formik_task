import Card from "./card";

let dashboarddetails = 
[
{
name: "EARNINGS (MONTHLY)",
value: "$40000",
icon:"h5 mb-0 font-weight-bold text-gray-800",

},
{
    name: "EARNINGS (ANNUAL)",
    value:"$215,000",
    icon:"fas fa-dollar-sign fa-2x text-gray-300",
    
    },
    
    {
        name: "TASKS",
        value: "50%",
        icon:"fas fa-clipboard-list fa-2x text-gray-300",
        },

        {
            name: "PENDING REQUESTS",
            value: "18",
            icon:"fas fa-comments fa-2x text-gray-300",
            },
]


export default function Dashboard() {
    return <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <div class="row">
       {
            dashboarddetails.map((pd) =>{
                return <Card dashboarddata={pd}></Card>
            })
       }
        </div>
    </>
}