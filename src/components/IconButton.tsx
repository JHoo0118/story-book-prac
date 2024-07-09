type IconButtonSize = "small" | "medium" | "large";

interface IconButtonProps {
  alt: string;
  size?: IconButtonSize;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const small = "w-[18px] h-[18px]";
const medium = "w-[23px] h-[23px]";
const large = "w-[42px] h-[42px]";

const buttonSize: Record<IconButtonSize, string> = {
  small,
  medium,
  large,
};

export default function IconButton({
  onClick,
  alt,
  size = "medium",
  iconPath,
}: IconButtonProps) {
  return (
    <button className={buttonSize[size]} type="button" onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}
