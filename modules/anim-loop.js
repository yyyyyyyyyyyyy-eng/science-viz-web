import { observeSize } from '../js/ui.js';

/**
 * Start a redraw loop that is tied to the lifetime of a module.
 *
 * Pass `update` to run physics on a fixed timestep driven by the elapsed
 * timestamp, instead of once per rendered frame. That keeps the simulation
 * speed independent of the display refresh rate (30/60/120 Hz all agree)
 * while `draw` still runs once per frame.
 *
 * Returns a handle whose destroy() stops the animation frame and
 * disconnects the ResizeObserver created by observeSize().
 *
 * `getRate` lets a simulator scale simulated time (for example a 0.25×/2×
 * speed control) without changing the fixed `step`. A rate of 0 pauses physics
 * but still calls `draw()` once per frame so the canvas stays visible.
 *
 * @param {HTMLElement} host
 * @param {() => void} draw
 * @param {{ step?: number, update?: (dt: number) => void, getRate?: () => number, maxFrame?: number, maxSteps?: number }} [options]
 */
export function startAnimLoop(host, draw, options = {}) {
  const step = Number(options.step) || 0;
  const update = typeof options.update === 'function' ? options.update : null;
  const getRate = typeof options.getRate === 'function' ? options.getRate : null;
  const fixed = step > 0 && update;
  const maxFrame = Number(options.maxFrame) || 0.05;
  const maxSteps = Math.max(1, Number(options.maxSteps) || 8);
  let raf = 0;
  let destroyed = false;
  let last = 0;
  let acc = 0;
  const unobserve = observeSize(host, draw);

  function frame(now) {
    if (destroyed) return;
    if (fixed) {
      if (!last) last = now;
      let dt = (now - last) / 1000;
      last = now;
      if (!(dt > 0)) dt = 0;
      // Clamp long pauses (background tab, breakpoint) so we never run a
      // huge catch-up burst; drop any remaining backlog after maxSteps.
      if (dt > maxFrame) dt = maxFrame;
      let rate = 1;
      if (getRate) {
        try {
          const r = Number(getRate());
          if (Number.isFinite(r) && r >= 0) rate = r;
          else rate = 0;
        } catch (_) {
          rate = 0;
        }
      }
      if (rate > 0) {
        acc += dt * rate;
        let steps = 0;
        while (acc >= step && steps < maxSteps) {
          update(step);
          acc -= step;
          steps += 1;
        }
        if (steps === maxSteps) acc = 0;
      }
    }
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
