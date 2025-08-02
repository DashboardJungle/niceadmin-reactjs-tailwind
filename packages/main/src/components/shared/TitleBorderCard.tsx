
import { CustomizerContext } from "src/context/CustomizerContext";
import { Card } from "flowbite-react";
import { useContext } from "react";
import React from "react";

interface TitleCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;

}

const TitleCard: React.FC<TitleCardProps> = ({ children, className, title }) => {
  const { isCardShadow, isBorderRadius } =
    useContext(CustomizerContext);
  return (
    <Card
      className={`card ${className} ${isCardShadow
        ? "dark:shadow-dark-md shadow-md p-0"
        : "shadow-none border border-ld p-0"
        } `}
      style={{
        borderRadius: `${isBorderRadius}px`,
      }}
    >
      <div className="border-b border-ld px-6 py-4">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="pt-4 p-6">{children}</div>
    </Card>
  );
};

export default TitleCard;
