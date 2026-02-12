import { useCharacter } from "./useCharacter";
import { act, renderHook } from "@testing-library/react";

describe("Character Component", () => {
  it("as default a character should have a health (1000), level (1) and be alive", () => {
    const { result } = renderHook(() => useCharacter());

    expect(result.current.character.health).toBe(1000);
    expect(result.current.character.level).toBe(1);
    expect(result.current.character.isAlive).toBe(true);
  });

  it("should subtract the health when the character is attacked", () => {
    const { result } = renderHook(() => useCharacter());
    act(() => {
      result.current.attackThisCharacter();
    });

    expect(result.current.character.health).toBe(950);
  });

  it("should subtract the correct amount of health when the character is attacked", () => {
    const { result } = renderHook(() => useCharacter());
    act(() => {
      result.current.attackThisCharacter(300);
    });

    expect(result.current.character.health).toBe(700);
  });

  it("should die when the health is 0", () => {
    const { result } = renderHook(() => useCharacter());
    act(() => {
      result.current.attackThisCharacter(1000);
    });

    expect(result.current.character.isAlive).toBe(false);
  });

  it("should add health when the character is healed", () => {
    const { result } = renderHook(() => useCharacter());

    act(() => {
      result.current.attackThisCharacter(200);
    });

    act(() => {
      result.current.healThisCharacter(200);
    });

    expect(result.current.character.health).toBe(1000);
  });

  it("should not be able to heal above 1000", () => {
    const { result } = renderHook(() => useCharacter());

    act(() => {
      result.current.healThisCharacter(200);
    });

    expect(result.current.character.health).toBe(1000);
  });

  it("should not be able to heal below 0", () => {
    const { result } = renderHook(() => useCharacter());

    act(() => {
      result.current.attackThisCharacter(1400);
    });

    act(() => {
      result.current.healThisCharacter(200);
    });

    expect(result.current.character.health).toBe(0);
  });
});
