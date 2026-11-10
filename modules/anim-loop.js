import { observeSize } from '../js/ui.js';

/**
 * Start a redraw loop that is tied to the lifetime of a module.
 * Returns a handle whose destroy() stops the animation frame and
 * disconnects the ResizeObserver created by observeSize().
 */
export function startAnimLoop(host, draw) {
  let raf = 0;
  let destroyed = false;
  const unobserve = observeSize(host, draw);

  function frame() {
    if (destroyed) return;
    draw();
    if (destroyed) return;
    raf = requestAnimationFrame(frame);
  }

  raf = requestAnimationFrame(frame);

  function destroy() {
    if (destroyed) return;
    destroyed = true;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    unobserve();
  }
  // The app accepts either a dispose function or an object with destroy().
  destroy.destroy = destroy;
  return destroy;
}
