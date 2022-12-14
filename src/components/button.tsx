import React, { PropsWithChildren } from 'react';

interface MyButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: React.ReactNode;
}

const Button: React.FC<PropsWithChildren<MyButtonProps>> = ({
  children,
  className,
  icon,
  type,
  ...props
}) => {
  return (
    <button
      type='button'
      className={`bg-gradient-to-r from-primary-light to-primary-dark hover:from-primary-dark hover:to-primary-light text-white  font-semibold px-6 py-3 rounded-md mr-6 ${className}`}
      {...props}>
      {icon && undefined}
      {children}
    </button>
  );
};

export default Button;
