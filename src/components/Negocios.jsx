import styles, {layout} from '../style';
import {features} from '../constants';
import Button from './Button';

const FeatureCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
        </div>

        <div className='flex-1 flex flex-col ml-3'>
            <h4 className={`font-poppins text-white font-semibold text-[18px] leading-[23px] mb-1`}>{title}</h4>
            <p className={`font-poppins text-dimWhite font-normal text-[16px] leading-[24px] mb-1`}>{content}</p>
        </div>
    </div>
);

const Negocios = () => (
    <section id='features' className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>Tú haces el negocio, <br className='sm:block hidden' /> nosotros manejamos el dinero.</h2>
            <p className={`${styles.paragraph} max-w-[600px] mt-5`}>Con la tarjeta de crédito adecuada, puede mejorar su vida financiera creando crédito, ganando recompensas y ahorrando dinero. Pero con cientos de tarjetas de crédito en el mercado.</p>

            <Button styles="mt-10"/>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index/>
            ))}
        </div>
    </section>
);

export default Negocios;
