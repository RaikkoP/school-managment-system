interface buttonProps {
    children: JSX.Element | string;
}

const Button = ({children}:buttonProps) => {
    return(
        <button className="text-xl p-8 mr-6 mb-12">
            {children}
        </button>
    )
}

export default Button;