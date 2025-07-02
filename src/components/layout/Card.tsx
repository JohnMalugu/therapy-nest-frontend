interface CardProps {
    title: string;
    description: string
    path: string
}

export const Card = ({ title, description, path }: CardProps) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <a href="#">
                <img className="rounded-t-lg p-2" src={path} alt="" />
            </a>
            <div className="p-4">
                <a href="#">
                    <h5 className="mb-2 text-sm md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 hidden sm:block">{description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );
}