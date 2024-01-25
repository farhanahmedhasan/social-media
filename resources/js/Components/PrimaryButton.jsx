export default function PrimaryButton({className = '', disabled, children, ...props}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center py-2 bg-gray-800 border border-transparent rounded text-white tracking-widest hover:bg-gray-700 focus:bg-gray-700  active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
