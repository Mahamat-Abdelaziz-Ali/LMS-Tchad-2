

function NotFoundPage(){
    return (
        const data = await checkAuthService();

        if(data.success) {
           setAuth({
        authenticate : true,
        user : data.data.user,
    })
    setLoading(false)
}
         else {
            setAuth({
        authenticate : false,
        user : null,
    });
    setLoading(false)
        }
    );
}

export default NotFoundPage
