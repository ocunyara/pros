import React from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  title: string
}

const Button: React.FC<ButtonProps> = ({ href, onClick, children, className, title }) => {
  if (href) {
    return (
      <a href={href} className={`btn font-bold px-10 py-4 text-text rounded bg-primary ${className}`} >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`rounded-md font-bold transform py-4 px-5 items-center bg-gold text-white ${className}`} title={title}>
      {children}
    </button>
  );
};

export default Button;
