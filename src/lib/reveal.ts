import type { CSSProperties } from "react";

/**
 * Props à étaler sur un élément pour qu'il apparaisse au défilement.
 * `step` décale l'animation (en pas de 90 ms) pour créer un effet de cascade.
 * Usage : <div {...reveal(1)}>…</div>
 */
export const reveal = (step = 0) => ({
  "data-reveal": "",
  style: { "--reveal-delay": `${step * 90}ms` } as CSSProperties,
});
