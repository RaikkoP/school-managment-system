interface buttonProps {
    children: JSX.Element | string;
}

const Button = ({children}:buttonProps) => {
    return(
        <button className="sm:text-md lg:text-xl text-sm lg:p-7 p-6 lg:mr-6 mr-4 lg:mb-12 mb-8">
            {children}
        </button>
    )
}

export default Button;