const NEW_POSITION = 'NEW_POSITION';

export function newPosition(position) {
  return {
    type: NEW_POSITION,
    position
  };
}
