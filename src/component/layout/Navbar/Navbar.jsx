import styles from "./Navbar.module.css";
import logo from "../../../assets/Button container.png";
function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className={styles["nav-info"]}>
                        <div className={styles.logo}>
                            <img src={logo} />
                        </div>
                        <div className={styles["side-bar"]}>
                            <ul className={styles.links}>
                                <li>Home</li>
                                <li>Find Job</li>
                                <li>About Us</li>
                                <li>Contact</li>
                            </ul>
                            <div className={`${styles.actions} d-flex flex-column`}>
                                <button className={styles.login}>login</button>
                                <button className={styles.signUp}>signUp</button>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}
export default Navbar;