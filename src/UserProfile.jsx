import style from './css/userprofile.module.css'

function UserProfile(){
    return(
        <>
        {/* <h1 className={style.heading} >User Profile</h1> */}
        <div className={style.card}>
            IMAGE
            <div className={style.textWrap} >
                <h4>Apoorv</h4>
                <p>Software developer</p>
            </div>
        </div>
        </>
    )
}

export default UserProfile;