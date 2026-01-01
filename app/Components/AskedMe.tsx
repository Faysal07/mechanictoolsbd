export default function AskedMe() {
    return(
        <div className="md:py-[80px]">
            <div className="container  md:max-w-[1370px] m-auto">
                <div className="grid grid-cols-1 text-center">
                    <h2 className="text-[60px] text-[#111827] font-bold">What is <span className="text-[#4fa44b]">Mechanic Tools BD?</span></h2>
                    <p className="text-[20px] md:pb-[15px]">Everything you need to know about Bangladesh's trusted e-marketplace</p>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
                    <div className="sm:hidden md:block"></div>
                    <div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title font-semibold">How do I create an account?</div>
                            <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                        </div>
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                            <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">How do I update my profile information?</div>
                            <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}