import {feedback} from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonios = () => (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id='client'>
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'></div>
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
            <h1 className={styles.heading2}>Lo que la gente esta <br className='sm:block hidden'/> diciendo  sobre nosotros</h1>

            <div className='w-full md:mt-0 mt-6'>
                <p className={`${styles.paragraph} max-w-[450px]`}>Todo lo que necesitas para aceptar pagos con tarjeta y hacer crecer tu negocio en cualquier parte del planeta.</p>
            </div>
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
            {feedback.map(card => (
                <FeedbackCard card={card} key={card.id}/>
            ))}
        </div>
    </section>
)

export default Testimonios;
