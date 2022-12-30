import {useState} from "react";
import styles from '../style';
import {discount, robot} from '../assets';
import GetStarted from './GetStarted';


const Hero = () => (
    <section id="home" className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white">20% </span>
                    Descuento de un {" "}
                    <span className="text-white">1 Mes</span>
                    {" "} por cuenta
                </p>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                    La siguiente <br className="sm:block hidden"/> {' '}
                    <span className="text-gradient">Generación</span> {' '}
                </h1>

                <div className="ss:flex hidden md:mr-4 mr-0">
                    <GetStarted/>
                </div>
            </div>

            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Método de pago</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Nuestro equipo de expertos utiliza una metodología para identificar las tarjetas de crédito que mejor se adaptan a sus necesidades. examinamos tasas de porcentaje anual y tarifas anuales.</p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={robot} alt="robot" className="w-[100%] h-[100%] relative z-[5]" />

            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
        </div>

        <div className={`${styles.flexCenter} ss:hidden`}></div>

    </section>
);

export default Hero;
