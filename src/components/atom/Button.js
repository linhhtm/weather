import classNames from "classnames";

const Button = (props) => {
  const { children, isIcon = false } = props;
  return (
    <div
      className={classNames({
        "shadow-default flex items-center justify-center cursor-pointer hover:bg-gray-600": true,
        "h-12 w-12 rounded-full bg-input": isIcon,
      })}
    >
      {children}
    </div>
  );
};

export default Button;
