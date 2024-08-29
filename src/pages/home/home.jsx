import React from 'react';
import { useNavigate, } from 'react-router-dom';
import { Section1 } from './components/section1';
import { Section2 } from './components/section2';


export const HomePage = ({  student }) => {
    const goTo = useNavigate()
    const nom = "sara chafik idrissi"




    return (
        <>
            {/* method 1 */}
            {/* <button onClick={() => { goTo(`about/${nom}`) }} className='px-8 py-2 bg-purple-500 rounded-full text-white'>Go To About</button>
            <Section1 student={props.student} setStudent={props.setStudent} /> */}

            {/* method 2  */}
            {/* <h1>Hello {student}</h1>
            <Section2 jkhdgfjhygsdv={student} /> */}
        </>

    );
};

