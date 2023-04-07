import React, { ReactNode, forwardRef, Ref } from "react";

export const DogSpinner: React.FC = () => <h1>Loading</h1>;

interface DogContainerProps {
  children: ReactNode;
}

export const DogContainer = forwardRef<HTMLDivElement, DogContainerProps>(
  ({ children }, ref) => (
    <div ref={ref} className="m-auto relative w-96 h-80">
      {children}
    </div>
  )
);

const Loader: React.FC = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
