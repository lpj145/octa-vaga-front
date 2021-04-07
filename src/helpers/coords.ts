import { isBetweenNumbers } from './math'

export type Coords = { y: number, x: number }

/**
 * @param event
 */
export function mouseOffsetToCoords(event: MouseEvent): Coords {
  return {
    y: event.offsetY,
    x: event.offsetX
  }
}

/**
 * Get center coords of element
 * @param element
 */
export function getMiddleOfElement(element: HTMLElement): Coords {
  return {
    y: Math.ceil(element.offsetHeight / 2),
    x: Math.ceil(element.offsetWidth / 2)
  }
}

/**
 * Apply a virtual area inside middle of element and check if click is middle of.
 * @param element
 * @param coords
 * @param marginPx
 */
export function isMiddleOfElement(element: HTMLElement, coords: Coords, marginPx: number): boolean {
  return ((elementCoords: Coords) => {
    return isBetweenNumbers(elementCoords.x, coords.x - marginPx, coords.x + marginPx)
      && isBetweenNumbers(elementCoords.y, coords.y - marginPx, coords.y + marginPx)
  })(getMiddleOfElement(element))
}
