import React from 'react';
import LoginImg from '../assets/login-background.jpg';
import CTA from '../assets/cta-logo-one.svg';
import CTALogo from '../assets/cta-logo-two.png';

const Login = (props) => {
    return (
        <div className="select-none overflow-hidden flex flex-col text-center h-[100vh] z-0">
            <div className=" flex flex-col justify-center items-center pt-[80px] pr-[40px]
            text-white text-[50px] mb-[10vw] w-[100%] h-[100%]
             relative min-h-[100vh] box-border">
                <img className="absolute h-[100%] w-[100%]  m-0 z-0"
                     src={LoginImg} alt="Not_Found"
                />
                <div className=" absolute z-10 mb-[2vw] max-w-[3500px] flex-wrap flex flex-col
                 justify-center mt-0 text-center items-center mr-auto ml-auto
                 ease-out transition-opacity duration-200 w-[100%]">
                    <img className="z-1 max-w-full mb-[12px] min-h-[200px] block "
                         src={CTA} alt="Not_Found"/>

                    <a className="w-full mt-[10px]">
                        <button className="font-semibold w-full max-w-full ml-0
                    bg-[#0063e5] text-[#f9f9f9] tracking-[1.5px] text-[80px] pb-[50px] pt-[50px] pr-0 rounded-lg
                    hover:bg-[#0483ee] duration-200"
                        >GET ALL THERE
                        </button>
                    </a>
                    <div className="mt-[60px]">
                        <p className="hsla(0, 0%, 95.3%, 1) text-[65px] m-[0 0 24px 0] tracking-[0.5px]">
                            Get Premier Access to Raya and The Last
                            Dragon for An additional fee with a Disney+
                            subscription. As of 08/24/25, the price of
                            Disney+ and The Disney Bundle will increase by $1
                        </p>
                    </div>
                    <div className="mt-[50px] max-w-full w-[2900px] h-[155px] inline-block ">
                        <img className="w-full h-full"
                            src={CTALogo} alt="" />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;