'use client';

import Image from "next/image";
import { useState } from "react";
import GameScreen from "./components/GameScreen";
import LandingPage from "./components/LandingPage/LandingPage";

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  return hasStarted ? (
    <GameScreen />
  ) : (
    <LandingPage onPlay={() => setHasStarted(true)} />
  );
}
