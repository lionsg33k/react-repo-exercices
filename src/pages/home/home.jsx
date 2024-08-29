import React, { useContext } from 'react';
import { useNavigate, } from 'react-router-dom';
import { Section1 } from './components/section1';
import { Section2 } from './components/section2';
import { Mycontext } from '../../context';


export const HomePage = ({ student }) => {
    const goTo = useNavigate()
    // const nom = "sara chafik idrissi"

    // * method 1
    // const [nom, age] = useContext(Mycontext)

    // *method  2

    const { nom } = useContext(Mycontext)

    return (
        <>

            {/* <h1>hello {nom}</h1> */}


            <h1>hello {nom}</h1>


        </>

    );
};

