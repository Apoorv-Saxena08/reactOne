function User({displayName,name}){

    return(
        <>
        <button onClick={()=>displayName(name)} >Display User</button>
        </>
    )
}

export default User;