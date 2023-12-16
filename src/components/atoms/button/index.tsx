import { buttonStyle } from '@project/components/atoms/button/style';
import { stylex } from '@stylexjs/stylex';
import { TButtonVariantUnion } from '@union/variant';
import { type ReactNode } from 'react';

interface ButtonProps {
  variant: TButtonVariantUnion;
  children: ReactNode;
}

const Button = ({ variant, children }: ButtonProps) => {
  return <button {...stylex.props(buttonStyle[variant])}>{children}</button>;
};

export { Button };
