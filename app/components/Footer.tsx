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
    <div className="relative flex overflow-x-scroll overflow-y-hidden pt-10 no-scrollbar min-h-h-48">
      {Factions.map((faction, index) => (
        <div
          key={index}
          onClick={() => onSelectionChange(index)}
          className={classNames(
            "relative border-2 border-secondary-200 min-w-[300px]",
            {
              "hover:scale-110 hover:z-50": selectedCard !== index,
              "scale-110 z-50": selectedCard === index,
            }
          )}
        >
          <div
            className={`bg-primary-100 text-white hover:brightness-100 transition-transform duration-300 transform h-full`}
          >
            <div className="p-10 pr-5 pb-0">
              <h6 className="text-sm text-secondary">{faction.title}</h6>
              <p className="text-textSecondary text-sm">
                {faction.description}
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={`/logos/${index + 1}.svg`}
                className="stroke-cyan-500"
                alt="test"
                width={75}
                height={75}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
