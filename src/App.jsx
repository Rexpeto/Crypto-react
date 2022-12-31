import styles from "./style";

import {
    NavBar,
    Clientes,
    Factura,
    Estadistica,
    CTA,
    CardDeal,
    Hero,
    Negocios,
    Testimonios,
    Footer,
} from "./components";

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>
            //* Hero
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            //* All
            <div
                className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Estadistica/>
                    <Negocios/>
                    <Factura/>
                    <CardDeal/>
                    <Testimonios/>
                    <Clientes/>
                    <CTA/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default App;
