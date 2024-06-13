"use client";

import Footer from "./components/Footer";
import Body from "./components/Body";
import { useState } from "react";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  return (
    <main className="min-h-screen bg-custom-gradient font-oxanium flex flex-col">
      <Body selectedCard={selectedCard} />
      <Footer
        selectedCard={selectedCard}
        onSelectionChange={(value) => setSelectedCard(value)}
      />
    </main>
  );
}
