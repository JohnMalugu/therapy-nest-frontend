export const Footer = ()=>{
    return(
        <footer className="py-6">
            <div>
                <div className=" text-gray-400 flex flex-col sm:flex-row justify-center sm:justify-center items-center sm:gap-8 mb-4 pb-4">
                    <a href="#" className="hover:font-bold">Privacy Policy</a>
                    <a href="#" className="hover:font-bold">Terms of Service</a>
                    <a href="#" className="hover:font-bold">Contact Us</a>
                </div>

                <div className="text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Therapy Nest. All rights reserved</p>
                </div>
            </div>

        </footer>
    );
}