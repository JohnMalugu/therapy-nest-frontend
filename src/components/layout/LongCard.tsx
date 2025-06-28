interface CardProps{
    title: string;
    description: string
    path: string
}

export const LongCard = ({title,description,path}: CardProps) =>{
    return(
        <div className="bg-white px-6 rounded-lg shadow-xl hover:shadow-lg transition-shadow duration-300 min-w-[280px] w-full sm:max-w-sm">
            <img src={path}/>
            <h3 className="text-l font-semibold mb-2 hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 line-clamp-4">
                {description}
            </p>
        </div>
    );
}