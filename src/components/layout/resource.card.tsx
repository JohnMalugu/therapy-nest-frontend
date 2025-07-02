interface ResourceCardProps {
    title: string;
    description: string;
    link: string
}

export const ResourceCard = ({ title, description, link }: ResourceCardProps) => {
    return (
        <div>
            <div>
                <h3 className="text-lg font-bold text-gray-800">
                    {title}
                </h3>
                <p className="mt-2 text-gray-500">
                    {description}
                </p>
                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-primary decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-primary dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                    {link}
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}