import classNames from "classnames";

const Button = (props) => {
  const { children, className, isIcon = false, active } = props;
  return (
    <div
      className={classNames({
        [className]: true,
        "shadow-default flex items-center justify-center cursor-pointer hover:bg-gray-600 text-default": true,
        "h-12 w-12 rounded-full bg-input": isIcon,
        "btn-active": active,
      })}
    >
      {children}
    </div>
  );
};

export default Button;
