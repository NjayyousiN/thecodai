interface TextAreaProps {
  placeholder: string;
  rows: number;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  rows,
  className = "",
}) => (
  <textarea
    placeholder={placeholder}
    rows={rows}
    className={`w-full p-4 rounded-lg bg-foreground bg-opacity-20 border border-caption text-title placeholder-subtitle focus:outline-none focus:border-caption transition-all duration-300 resize-none ${className}`}
  />
);

export default TextArea;
