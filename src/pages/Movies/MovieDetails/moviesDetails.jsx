import React from 'react';
import { useParams } from 'react-router-dom';
import { Images } from '../../../constants';

export const MoviesDetails = ({ movies }) => {

    const { id } = useParams()

    const movie = movies.find(e => e.id == id)


    return (
        <div>

            {
                movie &&
                <div className="h-screen  bg-black">

                    <div className="h-[45%] relative ">
                        <img className='w-full h-full object- ' src={Images[movie.bgImg]} alt="" />
                        <div className="w-full h-full bg-gradient-to-b from-black/30  to-black/40 absolute top-0"></div>
                    </div>
                    <div className="p-[8vh] flex flex-col gap-y-6">
                        <div className="flex justify-between">
                            <h1 className='text-white text-5xl font-bold'>{movie.title}</h1>
                            <div className="flex items-center gap-x-10  text-red-500 font-semibold">

                                {
                                    movie.type.map((ele, idx) =>
                                        <h3>{ele}</h3>
                                    )
                                }
                            </div>

                        </div>

                        <p className='text-white/50 text-lg leading-loose'>{movie.description}</p>
                    </div>
                </div>
            }

        </div>
    );
};

