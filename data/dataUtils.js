import { switchMap } from "./switchMap.js";
import { breakers } from "./breakers.js";

export function getAllToggles() {
  return switchMap.flatMap((room) =>
    (room.panels || []).flatMap((panel) =>
      (panel.toggles || []).map((toggle) => ({
        room: room.room,
        roomNote: room.note,
        panelLabel: panel.label,
        ...toggle,
      }))
    )
  );
}

export function getAllCircuits() {
  return [...new Set(getAllToggles().map((toggle) => toggle.circuit).filter(Boolean))].sort();
}

export function getMappedCircuits() {
  return [...new Set(
    breakers.flatMap((breaker) => breaker.circuits || [])
  )];
}

export function getUnmappedCircuits() {
  const mapped = new Set(getMappedCircuits());
  return getAllCircuits().filter((circuit) => !mapped.has(circuit));
}

export function getTogglesForCircuit(circuit) {
  return getAllToggles().filter((toggle) => toggle.circuit === circuit);
}

export function getBreakerForCircuit(circuit) {
  if (!circuit) return null;

  return breakers.find((breaker) =>
    (breaker.circuits || []).includes(circuit)
  ) || null;
}

export function getBreakersForSlot(slot) {
  return breakers.filter((breaker) =>
    (breaker.slots || []).includes(slot)
  );
}

export function getCircuitsForBreaker(slot) {
  return getBreakersForSlot(slot).flatMap((breaker) => breaker.circuits || []);
}

export function getTogglesForBreaker(slot) {
  return getCircuitsForBreaker(slot).flatMap((circuit) => getTogglesForCircuit(circuit));
}