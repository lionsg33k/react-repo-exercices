import React, { useEffect } from 'react';
import { Mycontext, UseAppContext } from '../../context';
import axios from 'axios';

export const CountriesPage = () => {

    const { countries } = UseAppContext()


    useEffect(() => {

        const getWeatherData = async () => {

            
            // * method 1
            // let response = await fetch(`https://restcountries.com/v3.1/all`)
            // let data = await response.json()
            // console.log(data);

            // * method 2 using axios

            const response = await axios.get(`https://restcountries.com/v3.1/all`)
            let data = await response.data
            console.log(data);
            
        }

        getWeatherData()
    }, [])



    return (
        <div className='flex  items-center justify-between flex-wrap gap-5'>
            {
                countries.map((e, i) =>
                    <div className="w-[25%] flex flex-col  h-40 gap-y-5 items-center justify-center">

                        <h1>{e.name.common}</h1>
                        <img width={100} src={e.flags.png} alt="" />
                    </div>

                )
            }

        </div>
    );
};

