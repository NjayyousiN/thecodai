interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, className = "" }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full p-4 rounded-lg bg-foreground bg-opacity-20 border border-caption text-title placeholder-subtitle focus:outline-none focus:border-caption transition-all duration-300 ${className}`}
  />
);

export default Input;
