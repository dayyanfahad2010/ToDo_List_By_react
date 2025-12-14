import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoutes = () => {
    const loggedin =localStorage.getItem("loggedin");
    return loggedin?<Navigate to={"/h"}/> :<Navigate to={"/signin"}/> ;


}

export default ProtectedRoutes