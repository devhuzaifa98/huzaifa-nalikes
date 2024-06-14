import path from "path";
import { useEffect, useState } from "react";
import { cropImageInSegments } from "../utils/images";

const Body = ({ selectedCard }: { selectedCard: number }) => {
  const [segments, setSegments] = useState<string[][]>();
  const [factionImageSegments, setFactionImageSegments] =
    useState<string[][]>();

  useEffect(() => {
    const loadSegments = async () => {
      const cover_image = path.resolve(
        `/main-images/${selectedCard + 1}-cover.png`
      );
      const faction_image = path.resolve(
        `/main-images/${selectedCard + 1}-in.png`
      );
      const cover_segments = await cropImageInSegments(cover_image, true);
      const image_segments = await cropImageInSegments(faction_image, false);
      setFactionImageSegments(image_segments);
      setSegments(cover_segments);
    };
    loadSegments();
  }, [selectedCard]);

  return (
    <div className="text-white pt-16 w-2/3 flex mx-auto">
      <div className="w-2/5 mr-5">
        <h1 className="text-transparent text-5xl opacity-[.6] text-stroke mb-3">
          CHOOSE YOUR
        </h1>
        <h1 className="text-7xl font-semibold text-glow mb-7">FACTION</h1>
        <p className="opacity-[.6] leading-7 text-lg mb-8">
          Agents will be customizable, allowing you to select from among the
          various factions in the game - will you fight for a global police
          force seeking to enact a new brand of justice? Or will you battle
          alongside a secret network of deviants and outcasts?
          <br />
          <br />
          Once you acquire your agent, the choice is yours. Pledging your
          allegiance is no small decision - as your agent accrues Loyalty Points
          over time, your choices truly matter.
        </p>
        <button className="button-custom bg-gray-200 text-gray-800 px-6 text-md py-1">
          UTILITY
        </button>
      </div>
      <div className="w-3/5 faction-image space-y-4">
        {segments?.map((segment, i) => (
          <div className="relative" key={i}>
            <img
              key={i + "faction_image"}
              src={factionImageSegments?.[i]?.[0] || ""}
              alt={`faction_image_segment_${i}`}
            />
            <div
              className="flex justify-stretch items-stretch absolute left-0 top-0 gap-0 w-full h-full"
              key={i}
            >
              {segment.map((side, j) => (
                <img
                  className='w-full'
                  style={{ transitionDelay: `${100 + i * 100}ms` }}
                  key={`segment_${i}_${j}`}
                  src={side}
                  alt={`segment_${i}_${j}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
