import React, { useEffect, useState } from 'react'
const Useeffectapi = () => {
    const [state, setstate] = useState(true);
    const [userdata, setuserdata] = useState([]);
    const getUsers = async () => {
        try {
            setstate(false);
            const response = await fetch('https://api.github.com/users');
            const result = await response.json();
            setuserdata(result);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUsers();
    }, []);
    if(state){
        return <h1>Loading...</h1>
    }
    return (
        <>
            <h2 className="text-center">List of Github Users</h2>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {
                        userdata.map((value) => {
                            return (
                                <div className="col-5 mt-5" key={value.id}>
                                    <div className="card flex-row justify-content-between">
                                        <div className="profile-picture float-left">
                                            <img src={value.avatar_url} alt="" />
                                        </div>
                                        <div className="user-details float-right px-5 py-3">
                                            <h2 className="name">{value.login}</h2>
                                            <p className="destination"></p>
                                            <div className="social-details d-flex bg-light px-5 py-2 rounded">
                                                <div >
                                                    <p>Articles</p>
                                                    <h2><em>34</em></h2>
                                                </div>
                                                <div className="px-5">
                                                    <p>Followers</p>
                                                    <h2><em>23</em></h2>
                                                </div>
                                                <div>
                                                    <p>Rating</p>
                                                    <h2><em>3.4</em></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Useeffectapi;
