import IconButton from "./IconButton";

interface NavigationBarProps {
  isDark: boolean;
  showTitle: boolean;
  showBackButton: boolean;
  showCancelButton: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCancelButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDark,
  onBackButtonClick = () => {},
  onCancelButtonClick = () => {},
  title = "",
  showTitle,
  showBackButton,
  showCancelButton,
}: NavigationBarProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="navigation-title-wrapper flex items-center">
        {showBackButton && (
          <IconButton
            alt=""
            iconPath={`/icons/ic-cancel${isDark ? "-white" : ""}.svg`}
            size="medium"
            onClick={onBackButtonClick}
          />
        )}
        {showTitle && (
          <h2
            className={`text-2xl ${showBackButton && "ml-2"} ${isDark ? "text-white" : "text-primary"}`}
          >
            {title}
          </h2>
        )}
      </div>
      {showCancelButton && (
        <IconButton
          alt=""
          iconPath={`/icons/ic-cancel${isDark ? "-white" : ""}.svg`}
          size="medium"
          onClick={onCancelButtonClick}
        />
      )}
    </div>
  );
}
