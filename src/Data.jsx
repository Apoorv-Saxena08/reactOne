function Data({props}){
    console.log(props);
    return(
        <div 
        style = {
            {
                border:"1px solid green",
                padding:"10px",
                margin:"10px",
                width:"200px",
                borderRadius:"10px"
            }
        }
        >
            <h3>User Details</h3>
            <h4>{props.id}</h4>
            <h4>{props.name}</h4>
            <h4>{props.age}</h4>
        </div>
    )
}

export default Data;