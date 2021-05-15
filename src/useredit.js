import { useContext,useEffect, useState } from 'react';
import UserContext from './usercontext';
import UserList from './userlist';
export default function UserEdit(props) {
    let UserData = useContext(UserContext)
    let [firstName, setfirstName] = useState("")
    let [lastName, setlastName] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")


let UserSubmit =async (e) => {
    alert("User details are Upadted")
    e.preventDefault()
    UserData.setuserList([...UserData.userList,

    {
        firstName,
        lastName,
        email,
        password
    }])

    await fetch(`https://5ff9537617386d0017b51c4a.mockapi.io/test/users/${props.match.params.id}`,{

    method :"PUT",
    body : JSON.stringify({
        firstName,
        lastName,
        email,
        password
    
    }),
    headers : {
        "Content-type" : "application/json"
    }
    })

}

useEffect(async(e)=>{
    let users= await fetch(`https://5ff9537617386d0017b51c4a.mockapi.io/test/users/${props.match.params.id}`)
    let userDatas = await users.json();
    console.log(userDatas)

    alert("Please Upadate all the fields again with the required changes."
    
    
    )
    
    },[]
    
    
    )


    return <>

        <h1>User Edit {props.match.params.id}</h1>
        <div className="container">
            

            <form onSubmit={UserSubmit}>
                
                <div className="row">
                    <div className="col-lg-6">
                        <label>First Name</label>
                        <input className="form-control" value={UserList.firstName} onChange={(e) => setfirstName(e.target.value)}></input>
                    </div>

                    <div className="col-lg-6">
                        <label>Last Name</label>
                        <input className="form-control" value={lastName} onChange={(e) => setlastName(e.target.value)}></input>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <label>Email</label>
                        <input className="form-control" value={email} onChange={(e) => setemail(e.target.value)} ></input>
                    </div>

                    <div className="col-lg-6">
                        <label>Password</label>
                        <input className="form-control" value={password} onChange={(e) => setpassword(e.target.value)}></input>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <input className="btn btn-primary" type="submit" value="Submit"></input>
                    </div>
                    
                </div>
            </form>
        </div>

    </>
}