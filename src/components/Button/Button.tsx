import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Override of native button type attribute (e.g. 'button', 'submit', ...)
   */
  type?: 'button' | 'submit';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * The icon to be displayed left of the label
   */
  icon?: IconDefinition;
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const getModeClasses = (isPrimary: boolean) => {
  return isPrimary
    ? 'bg-slate-950 text-white hover:bg-white hover:text-slate-950'
    : 'hover:bg-slate-950 hover:text-white';
};

const getSizeClasses = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 'px-4 py-2.5';
    case 'large':
      return 'px-6 py-3';
    default:
      return 'px-5 py-2.5';
  }
};

const BASE_BUTTON_CLASSES =
  'border-2 border-slate-950 rounded-full shadow-sm leading-none inline-block text-sm';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  type = 'button',
  size = 'medium',
  backgroundColor,
  label,
  icon,
  ...props
}: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClasses = getModeClasses(primary);
    const sizeClasses = getSizeClasses(size);
    return [modeClasses, sizeClasses].join(' ');
  }, [primary, size]);

  return (
    <button
      type={type}
      className={`${BASE_BUTTON_CLASSES} ${computedClasses} whitespace-nowrap`}
      style={{ backgroundColor }}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} className="me-1" />}
      {label}
    </button>
  );
};
