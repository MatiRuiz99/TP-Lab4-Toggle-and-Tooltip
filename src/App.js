import React from "react";
import { withToggle, ToggleRenderProps } from "./components/ToggleComponent";
import { withTooltip, TooltipRenderProps } from "./components/TooltipComponent";

// Componente que muestra un mensaje cuando se hace clic en él (Toggle)
const ClickableMessage = ({ isToggled, toggle }) => (
  <div onClick={toggle} style={{ cursor: "pointer" }}>
    {isToggled ? "Contendio toggle HOC" : "Clic para mostrar mensaje HOC"}
  </div>
);

// Componente que muestra un mensaje cuando el cursor está sobre él (Tooltip)
const HoverableMessage = () => (
  <div>Pasa el cursor sobre este mensaje para ver el tooltip.</div>
);

const App = () => {
  // Toggle con HOC
  const ToggleWithHOC = withToggle(ClickableMessage);

  // Tooltip con HOC
  const TooltipWithHOC = withTooltip(
    HoverableMessage,
    "Contenido de hover HOC"
  );

  return (
    <div>
      <h1>Composición de Componentes</h1>

      {/* Toggle con HOC */}
      <h2>Toggle con HOC</h2>
      <ToggleWithHOC />

      {/* Toggle con Render Props */}
      <h2>Toggle con Render Props</h2>
      <ToggleRenderProps>
        {({ isToggled, toggle }) => (
          <div onClick={toggle} style={{ cursor: "pointer" }}>
            {isToggled
              ? "Contendio toggle Render Props"
              : "Clic para mostrar mensaje Render Props"}
          </div>
        )}
      </ToggleRenderProps>

      {/* Tooltip con HOC */}
      <h2>Tooltip con HOC</h2>
      <TooltipWithHOC />

      {/* Tooltip con Render Props */}
      <h2>Tooltip con Render Props</h2>
      <TooltipRenderProps
        renderTooltip={(isHovered) =>
          isHovered && <div>Contenido hover Render Props</div>
        }
      >
        <HoverableMessage />
      </TooltipRenderProps>
    </div>
  );
};

export default App;
