import React from "react";





function FormComponent() {
    const [userData, setUserData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        comfirmPassword: "",

    })

    

    

    function handleChange(event) {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
        })
    }

 
    return (
        
        <div style={{marginTop: "100px"}}>
           
            
            <div >
                <label>First Name : </label>
                <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} />
            </div><br></br>
            <div>
                <label>Last Name : </label>
                <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
            </div><br></br>
            <div>
                <label>Email : </label>
                <input type="text" name="email" value={userData.email} onChange={handleChange}/>
            </div><br></br>
            <div>
                <label>Password : </label>
                <input name="password" type="password" value={userData.password} onChange={handleChange}/>
            </div><br></br>
            <div>
                <label>Password Confirm : </label>
                <input name="comfirmpassword" type="password" value={userData.comfirmpassword} onChange={handleChange}/>
            </div><br></br><br></br>


            <div>
            <h3>Your Form Date</h3>
            <h4>Frist Name :{userData.firstName}</h4>
            <h4>Last Name : {userData.lastName}</h4>
            <h4>Email : {userData.email}</h4>
            <h4>Password : Password</h4>
            <h4>Comfirm Password : Password</h4>
            </div>

            
        </div>
    )
}

export default FormComponent;