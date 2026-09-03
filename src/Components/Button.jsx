export const Button = ({ text, className = "", onClick }) => {
    const Component = onClick ? "button" : "span";
    return ( 
        <Component
            onClick={onClick}
            className={`inline-flex items-center justify-center px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-all duration-300 backdrop-blur bg-white/10 shadow whitespace-nowrap ${className}`}
        >
           {text}
        </Component>
     );
};