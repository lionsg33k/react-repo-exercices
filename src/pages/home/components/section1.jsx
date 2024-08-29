import React from 'react';

export const Section1 = (props) => {


    const changeName = () => {
        props.setStudent("mehdi")
    }



    return (
        <div>
            <button onClick={changeName} className='bg-black text-white  p-8'>Change name</button>
            <h1>Hello   {props.student}  from section 1</h1>
        </div>
    );
};

