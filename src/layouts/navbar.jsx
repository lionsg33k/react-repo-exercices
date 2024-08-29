import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate()



    return (
        <div className='py-5  bg-black text-white text-center'>

            {/* <Link to={"/todo"} className=''>ToDo</Link> */}

            <h1 onClick={() => { navigate("/todo") }} >To DO</h1>


        </div>
    );
};

