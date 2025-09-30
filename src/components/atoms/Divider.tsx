interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({className}) => {
  return (
    <div className={`flex items-center justify-center gap-4 my-10 ${className}`}>
      <span className="text-primary text-xl inline-block transform rotate-230">
        ⏾
      </span>
      <div className="w-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <span className="text-primary text-xl">❍</span>
      <div className="w-10 h-px bgs-gradient-to-r from-transparent via-primary to-transparent"></div>
      <span className="text-primary text-xl inline-block transform rotate-30">
        ⏾
      </span>
    </div>
  );
};
