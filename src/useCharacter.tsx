import { useState } from "react";

type CharacterBio = {
  health: number;
  level: number;
  isAlive: boolean;
};

type UseCharacter = {
    character: CharacterBio;
    attackThisCharacter: (damage?: number) => void;
}

export const useCharacter = (): UseCharacter => {
  const [health, setHealth] = useState(1000);
  const [level, setLevel] = useState(1);
  const [isAlive, setIsAlive] = useState(true);

  const attackThisCharacter = (damage: number = 50) => {
    setHealth((prevHealth) => prevHealth - damage);
  };

  return {
    character: {
      health,
      level,
      isAlive,
    },
    attackThisCharacter
  };
};

