import React from 'react';
import Logo from '../assets/logo.svg';
import homeIcon from '../assets/home-icon.svg';
import searchIcon from '../assets/search-icon.svg';
import watchListIcon from '../assets/watchlist-icon.svg';
import orignalIcon from '../assets/original-icon.svg';
import moviesIcon from '../assets/movie-icon.svg';
import seriesIcon from '../assets/series-icon.svg';

const NavBar = (props) => {

    const Links = [
        {
            id: 1,
            link: 'Home',
            img: homeIcon
        },
        {
            id: 2,
            link: 'Search',
            img: searchIcon
        },
        {
            id: 3,
            link: 'Watchlist',
            img: watchListIcon
        },
        {
            id: 4,
            link: 'Orignals',
            img: orignalIcon
        },
        {
            id: 5,
            link: 'Movies',
            img: moviesIcon
        },
        {
            id: 6,
            link: 'Series',
            img: seriesIcon
        },

    ]


    return (
        <div className="z-10 fixed flex justify-between tracking-[5px] items-center top-0
        right-0 left-0 h-[250px] bg-[#090b13] pl-[200px] pr-[200px] font-medium">
            <div className="flex flex-row items-center flex-nowrap ">
                <img className="h-full w-[350px] mt-[4px] max-h-[870px] block"
                     src={Logo} alt=""/>
                <div className="flex flex-row relative items-center flex-nowrap ml-[20px]
            text-6xl sm:hidden lg:flex md:hidden  ">

                    {Links.map(({id, img, link}) => (
                        <a href={link} key={id} className="flex flex-row items-center justify-center
                        flex-nowrap  mt-10 ">
                            <div className="flex flex-row items-center justify-center
                             ml-[150px] hover:scale-105 duration-200">
                                <img className="max-h-[110px]  "
                                     src={img} alt=""/>
                                <span className="mt-5 p-9  uppercase rounded-lg  hover:border-b-8
                            hover:border-b-gray-200  ease-[cubic-bezier(0.95,0.05,0.795,0.035)]  ">
                                {link}
                            </span>
                            </div>
                        </a>))}
                </div>
            </div>
            <div className="" >
                <button className="flex items-center flex-nowrap
            text-6xl tracking-[5px] lg:flex md:hidden mt-8 p-9 uppercase
             border-8 border-[#f9f9f9] rounded-[18px] hover:bg-white hover:text-black duration-300   ">
                    Login
                </button>
            </div>

        </div>
    );
};

export default NavBar;