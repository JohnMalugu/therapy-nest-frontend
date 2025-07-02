interface CardProps{
    title: string;
    description: string
    path: string
}

export const LongCard = ({title,description,path}: CardProps) =>{
    return(
        

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <a href="#">
        <img className="w-34 h-34 m-3 rounded-full shadow-lg mx-auto" src={path} alt="" />
    </a>
    <div className="p-4">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </div>
</div>

    );
}