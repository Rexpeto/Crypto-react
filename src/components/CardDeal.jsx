import { card } from "../assets";
import styles, {layout} from '../style';
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} max-w-[600px]`}>Encuentre una mejor oferta de tarjeta <br className="sm:block hidden"/> en unos sencillos pasos.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quisquam impedit quod iure doloremque facere fuga. At blanditiis autem hic maxime commodi quae quam illum ipsum dolorum, eum rerum sapiente!</p>

            <Button styles="mt-10"/>
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="Card" className="w-[100%] h-[100%]" />
        </div>
    </section>
);

export default CardDeal;
