interface CardProps{
    title: string;
    description: string
    path: string
}

export const LongCard = ({ title, description, path }: CardProps) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <a href="#">
        <img
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 m-4 rounded-full shadow-lg mx-auto"
          src={path}
          alt=""
        />
      </a>
      <div className="px-4 pb-4">
        <a href="#">
          <h5 className="mb-2 text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400 hidden sm:block">
          {description}
        </p>
      </div>
    </div>
  );
};
