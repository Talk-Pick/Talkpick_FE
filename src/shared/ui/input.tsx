interface InputProps {
    placeholder?: string;
    className?: string;
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, className, onClick, onChange }: InputProps) => {
    return (
        <span className={`flex flex-row items-center justify-between bg-gray-100 rounded-md h-9 px-2 ${className}`}>
            <input
                type="text"
                placeholder={placeholder}
                className="text-center w-full"
                onChange={onChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onClick?.();
                    }
                }}
            />
            <img src="/images/icons/search.svg" alt="검색" onClick={onClick} />
        </span>
    );
};

export default Input;