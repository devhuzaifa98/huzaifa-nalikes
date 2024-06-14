import Image from "next/image";
import { Factions } from "../utils/factions";
import classNames from "classnames";

const Footer = ({
  selectedCard,
  onSelectionChange,
}: {
  selectedCard: number;
  onSelectionChange: (arg0: number) => void;
}) => {
  return (
    <div className="relative flex overflow-x-scroll overflow-y-hidden pt-10 no-scrollbar min-h-48 pb-10">
      {Factions.map((faction, index) => (
        <div
          key={index}
          onClick={() => onSelectionChange(index)}
          className={classNames(
            "relative border-2 border-secondary-950 min-w-[250px]",
            {
              "hover:scale-110 hover:z-50 transition duration-200":
                selectedCard !== index,
              "scale-110 z-50 bg-secondary-200": selectedCard === index,
            }
          )}
        >
          <div
            className={classNames(
              `text-white hover:brightness-100 transition-transform duration-300 transform h-full`,
              {
                "bg-primary-950": selectedCard !== index,
                "bg-secondary-950": selectedCard === index,
              }
            )}
          >
            <div className="p-8 pb-0 text-xs space-y-1">
              <h6
                className={classNames({
                  "opacity-[.5]": selectedCard !== index,
                  "opacity-[.8]": selectedCard === index,
                })}
              >
                {faction.title}
              </h6>
              <p
                className={classNames({
                  "opacity-[.2]": selectedCard !== index,
                  "opacity-[.5]": selectedCard === index,
                })}
              >
                {faction.description}
              </p>
            </div>
            <div className="flex justify-center mb-5">
              <Image
                src={`/logos/${index + 1}.svg`}
                className={classNames({
                  "brightness-0 invert": selectedCard !== index,
                })}
                alt="test"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
