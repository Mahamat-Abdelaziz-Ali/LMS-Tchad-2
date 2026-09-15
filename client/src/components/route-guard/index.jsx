const { Fragment } = require("react");
const { useLocation, Navigate } = require("react-router-dom");


function RouterGuard({authenticated, user, elament}){

    const location = useLocation();

    console.log(authenticated, user)

    if(!authenticated && !location.pathname.includes("/auth")) {
        return <Navigate  to = '/auth'/>
    }

    if(authenticated && user?.role !== "admin"

        && (location.pathname.includes("instructor") || location.pathname.includes("/auth"))){

            return <Navigate  to = '/home'/>
        }

        if(authenticated && user.role === "instructor" && !location.pathname.includes("instructor")) {
            return <Navigate  to = '/instructor'/>
        }

        return <Fragment>{elament}</Fragment>
}

export default RouterGuard;
