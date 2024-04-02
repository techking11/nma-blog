const Button = ({ children, color, margins, ...otherProps }) => (
  <button
    className={`flex w-full justify-center rounded-md bg-${color}-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-${color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-500 ${margins}`} {...otherProps}
  >
    {children}
  </button>
)

export default Button;