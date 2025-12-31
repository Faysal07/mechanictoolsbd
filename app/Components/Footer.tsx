// Footer Logo Link Here
import FooterLogo from "../../public/images/Logo.png";

export default function Footer() {
    return(
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <div className="container md:max-w-[1370px] m-auto">
                    <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-6">
                        <aside className="md:col-span-2">
                            <img src={FooterLogo} alt="" />
                            <p className="sm:inline-block">Your trusted marketplace for quality products. Shop with confidence and enjoy seamless shopping experience with us.</p>
                            <form>
                                <h6 className="footer-title">Newsletter</h6>
                                <fieldset className="w-100">
                                <div className="join">
                                    <input type="text" placeholder="Enter your email address" className="input md:w-[330px] input-bordered join-item" />
                                    <button className="btn btn-primary join-item">Subscribe</button>
                                </div>
                                </fieldset>
                            </form>
                            <ul>
                                <li><a href="#"><i className="fa-solid fa-phone"></i> 01559026149 </a></li>
                                <li><a href="#"><i className="fa-solid fa-envelope"></i> mechanictoolsbd@gmail.com</a></li>
                                <li><a href="#"><i className="fa-solid fa-location-dot"></i> Dhaka, Bangladesh</a></li>
                            </ul>
                        </aside>
                        <nav className="sm:block">
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover block">Branding</a>
                            <a className="link link-hover block">Design</a>
                            <a className="link link-hover block">Marketing</a>
                            <a className="link link-hover block">Advertisement</a>
                        </nav>
                        <nav className="sm:block">
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover block">About us</a>
                            <a className="link link-hover block">Contact</a>
                            <a className="link link-hover block">Jobs</a>
                            <a className="link link-hover block">Press kit</a>
                        </nav>
                        <nav className="sm:block">
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover block">Terms of use</a>
                            <a className="link link-hover block">Privacy policy</a>
                            <a className="link link-hover block">Cookie policy</a>
                        </nav>
                    </div>
                </div>
            </footer>
            {/* Font Awasome Link */}
            <script src="https://kit.fontawesome.com/9f5f48c4c7.js"></script>
        </div>
    );
}