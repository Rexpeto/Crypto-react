import { apple, bill, google } from "../assets";
import styles, {layout} from '../style';

const Factura = () => (
    <section className={`${layout.sectionReverse}`} id="product">
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="Facturación" className="w-[100%] h-[100%] relative z-[5]" />

            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
            <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Controle fácilmente <br className="sm:block hidden"/> su facturación y reembolso.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem id atque odit sed blanditiis dolorem eligendi velit, excepturi vel molestias ex praesentium nisi corrupti nam beatae quae iste doloremque.
            </p>

            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img src={google} alt="Google Play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                <img src={apple} alt="Apple Store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
            </div>
        </div>

    </section>
)

export default Factura;
