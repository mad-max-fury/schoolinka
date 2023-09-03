import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined | null;
  loading?: boolean;
};

function CButton({
  value,
  children,
  onClick,
  type,
  className,
  ...rest
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={` whitespace-nowrap font-work-sans flex cursor-pointer items-center justify-center gap-3 leading-none text-[clamp(.95rem,_4vw,_1rem)]  transition-all  ${className} `}
      {...rest}
    >
      <span className="my-auto flex items-center w-fit">{value}</span>
      {children && <span className="my-auto flex">{children}</span>}
    </button>
  );
}

export default CButton;
CButton.defaultProps = {
  children: null,
  type: undefined,
};
