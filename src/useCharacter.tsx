import { useEffect, useState } from "react";

type CharacterBio = {
  health: number;
  level: number;
  isAlive: boolean;
};

type UseCharacter = {
  character: CharacterBio;
  attackThisCharacter: (damage?: number) => void;
  healThisCharacter: (healPoints?: number) => void;
};

export const useCharacter = (): UseCharacter => {
  const [health, setHealth] = useState(1000);
  const [level, setLevel] = useState(1);
  const [isAlive, setIsAlive] = useState(true);

  const attackThisCharacter = (damage: number = 50) => {
    setHealth((prevHealth) => prevHealth - damage);
  };

  const healThisCharacter = (healPoints: number = 50) => {
    if (health + healPoints <= 1000) {
      setHealth((prevHealth) => prevHealth + healPoints);
    }
  };

  useEffect(() => {
    if (health <= 0 && isAlive) {
      setIsAlive(false);
    }
  }, [health, isAlive]);

  return {
    character: {
      health,
      level,
      isAlive,
    },
    attackThisCharacter,
    healThisCharacter,
  };
};
