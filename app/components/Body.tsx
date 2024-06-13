import Image from "next/image";
import { useEffect } from "react";

const Body = ({ selectedCard }: { selectedCard: number }) => {
  useEffect(() => {
    const imageContainer = document.getElementById("image");
    const image = `url(/main-images/${selectedCard + 1}-in.png)`;
    if (!imageContainer) return;
    imageContainer.style.backgroundImage = image;
    imageContainer.style.backgroundSize = 'contain'; // Adjusted to 'contain'
    imageContainer.style.backgroundRepeat = 'no-repeat';
    imageContainer.style.backgroundPosition = 'center';
  }, [selectedCard]);

  return (
    <div className="text-white pt-28 flex justify-center grow-1 flex-1">
      <div className="w-1/2 flex flex-row">
        <div className="w-1/2 px-5">
          <div className="space-y-3 mb-7">
            <h1 className="text-transparent text-5xl opacity-[.6] text-stroke">
              CHOOSE YOUR
            </h1>
            <h1 className="text-7xl font-semibold text-glow">FACTION</h1>
          </div>
          <div className="space-y-8 leading-7 text-lg">
            <p className="opacity-[.6]">
              Agents will be customizable, allowing you to select from among the
              various factions in the game - will you fight for a global police
              force seeking to enact a new brand of justice? Or will you battle
              alongside a secret network of deviants and outcasts?
            </p>
            <p className="opacity-[.6]">
              Once you acquire your agent, the choice is yours. Pledging your
              allegiance is no small decision - as your agent accrues Loyalty
              Points over time, your choices truly matter.
            </p>
            <button className="button-custom bg-gray-200 text-gray-800 px-8 py-1">
              UTILITY
            </button>
          </div>
        </div>
        <div id="image" className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default Body;
