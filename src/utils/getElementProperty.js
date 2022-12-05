export function getBegin(firework) {
  return Number(firework.getAttribute("begin"));
}

export function getColour(firework) {
  return Number(firework.getAttribute("colour"));
}

export function getCoordinates(element) {
  return {
    x: Number(element.getAttribute("x")),
    y: Number(element.getAttribute("y")),
  };
}

export function getDuration(firework) {
  return Number(firework.getAttribute("duration"));
}

export function getPosition(firework) {
  const PositionTag = firework.getElementsByTagName("Position")[0];

  return getCoordinates(PositionTag);
}

export function getVelocity(firework) {
  const VelocityTag = firework.getElementsByTagName("Velocity")[0];

  return getCoordinates(VelocityTag);
}

export function getType(firework) {
  return firework.getAttribute("type");
}
