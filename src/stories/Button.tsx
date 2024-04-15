import React from "react";

import {
  storybookButton,
  storybookButtonLarge,
  storybookButtonMedium,
  storybookButtonPrimary,
  storybookButtonSecondary,
  storybookButtonSmall,
} from "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const sizeClasses = {
  small: storybookButtonSmall,
  medium: storybookButtonMedium,
  large: storybookButtonLarge,
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
                         primary = false,
                         size = "medium",
                         backgroundColor,
                         label,
                         ...props
                       }: ButtonProps) => {
  const modeClass = primary ? storybookButtonPrimary : storybookButtonSecondary;
  const sizeClass = sizeClasses[size];

  return (
      <button
          type="button"
          className={`${storybookButton} ${modeClass} ${sizeClass}`}
          style={{ backgroundColor }}
          {...props}
      >
        {label}
      </button>
  );
};
