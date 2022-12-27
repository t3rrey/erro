import { FC, ReactNode } from "react";

export interface CustomContainerProps {
  children: ReactNode;
}

const CustomContainer: FC<CustomContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
};

export default CustomContainer;
