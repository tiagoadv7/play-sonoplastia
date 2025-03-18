const Button = ({ children, ...props }) => (
    <button
        role="button"
        {...props}
        className={`${props.className || ""} px-4 py-2.5 font-medium text-sm text-center duration-150 ml-3`}
    >
        {children}
    </button>
)
export default Button