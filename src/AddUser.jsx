function AddUser({setUser}){
    return(
        <div>
            <h1>Add User</h1>
            <input type="text" placeholder="Enter name" 
            onChange={(e)=>setUser(e.target.value)}
            />
            <hr />
        </div>
    )
}

export default AddUser;