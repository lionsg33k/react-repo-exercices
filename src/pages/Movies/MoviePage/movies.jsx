import React, { useContext, useState } from 'react';
import { Airplane } from '../../../assets/icons/Airplane';
import { Images } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../../../context';


export const MoviesPage = ({ movies }) => {

    const { MoviesJson } = useContext(Mycontext)

    const navigate = useNavigate()

    const [filtredMovies, setFiltredMovies] = useState(MoviesJson)

    const handleSearchMovies = (text) => {
        const newTab = [...MoviesJson]
        let result = newTab.filter(e => e.title.toLowerCase().includes(text.toLowerCase()))
        text ? setFiltredMovies(result) : setFiltredMovies(MoviesJson)
    }



    return (
        <div>
            {/* heros */}
            <div className="h-screen heroSection  justify-center">
                <div className="w-full h-full absolute bg-gradient-to-b from-black/75 to-black/80"></div>
                <div className="py-6 flex items-center justify-between px-[5vw]  absolute top-0 w-full">
                    <h1 className="text-red-600 text-4xl font-semibold">GeekFlix</h1>
                    <a className='border border-white text-white px-12 py-2 rounded' href="https://www.instagram.com/forkanimahdi">Follow Us</a>
                </div>
                <div className="w-full h-full absolute flex items-center justify-center top-0 ">
                    <div className="text-white w-1/2">
                        <h1 className='text-6xl font-bold text-center'>Unlimited Exercices , Projects , and more</h1>
                        <h1 className='text-xl mt-5 text-center'>Starts at 0 MAD . Cancel is impossible.</h1>
                        <h1 className='text-xl mt-10 font-light text-center'>Ready ? Enter your email to create or restart your membership.</h1>
                        <div className="mt-8 flex justify-between">
                            <input type="text" placeholder='Your Email' className='px-6 w-[65%] py-4 rounded bg-transparent border border-gray-300' />
                            <button className='bg-red-700 w-[30%] rounded'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* movies */}
            <div className="bg-black  py-[5vh]">

                <div className="p-8 flex justify-end">
                    <input onChange={(e) => { handleSearchMovies(e.target.value) }} type="text" placeholder='search...' className='p-3 bg-transparent border border-white rounded text-white w-1/4' />
                </div>


                <div className="flex p-8 items-center justify-start  gap-x-[6vw] gap-y-10 flex-wrap">

                    {
                        filtredMovies.map((e, i) =>

                            <div onClick={() => { navigate(`/movie/${e.id}`) }} className="w-1/5 cursor-pointer ">
                                <img height={500} className='w-full object-cover h-[50vh]' src={Images[e.poster]} alt="" />
                                <div className="p-5 flex flex-col gap-y-3 ">
                                    <h1 className='text-white font-semibold text-xl'>{e.title}</h1>
                                    <h1 className='text-white/80 truncate' title={e.description}>{e.description}</h1>
                                    <div className="flex items-center gap-x-2  text-red-500 font-semibold">

                                        {
                                            e.type.map((ele, idx) =>
                                                <h3>{ele}</h3>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>


                        )
                    }

                </div>



            </div>
        </div>
    );
};


function name(params) {

}


name("kjgsjgvjdfg")