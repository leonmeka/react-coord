import { useAnimation } from "@core/hooks/use-animation";

import { CoordinateSystem } from "@core/components/coordinate-system/coordinate-system";
import { Plot } from "@core/components/plot/plot";
import { Grid } from "@core/components/grid/grid";
import { Function } from "@core/components/primitives/function";
import { Controls } from "@core/components/controls/controls";
import { AnimationControls } from "@core/components/controls/animation-controls/animation-controls";
import { Debug } from "@core/components/debug/debug";

export const App = () => {
  const f = (x: number) => x;
  const g = (x: number) => animation.value + Math.sin(x);

  const animation = useAnimation({
    y: f,
    duration: 1_000,
    range: [-2, 2],
  });


  return (
    <div className="dark w-dvw h-dvh">
      <CoordinateSystem>
        <Plot>
          <Grid />

          <Function y={f} />
          <Function y={g} />
        </Plot>

        <Controls >
          <AnimationControls animation={animation} />
        </Controls>

        <Debug />
      </CoordinateSystem>
    </div>
  );
};
