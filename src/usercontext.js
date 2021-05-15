

import React, {useState} from "react"; // importing react and useState from react
let UserContext = React.createContext();

export default UserContext;

//Provides data to all its childern

export const UserProvider= ({children}) => {
  let [userList, setuserList] = useState([]) // creating useState for the userlist
   
    return <UserContext.Provider value={{userList, setuserList}} > 
{children}
</UserContext.Provider>

}