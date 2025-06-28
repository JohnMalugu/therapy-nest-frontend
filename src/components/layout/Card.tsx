interface CardProps {
    title: string;
    description: string
    path: string
}

export const Card = ({ title, description,path }: CardProps) => {
    return (
        <div className="bg-white px-3 rounded-lg shadow-xl hover:shadow-lg transition-shadow duration-300 min-w-[280px] w-full sm:max-w-sm">
            <img src={path} alt=""className="w-full h-48 object-cover rounded-sm" />
            <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 text-base line-clamp-3">
                {description}
            </p>
        </div>
    );
}