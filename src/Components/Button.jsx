export const Button = ({text,className}) => {
    return ( 
        <button className={` ${className} rounded-full p-1 transition-all duration-300 w-20 backdrop-blur bg-white/10 shadow`}>
           {text}
        </button>
     );
}