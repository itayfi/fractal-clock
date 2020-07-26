import React from 'react';

import {useSettings} from './SettingsContext.js';
import drawClockFractal from './drawClockFractal.js';

export default function Clock() {
    const {raw: settings} = useSettings();
    const canvas = React.useRef();

    React.useEffect(() => {
        let animationId;

        function nextFrame(timestamp) {
            drawClockFractal(timestamp, canvas.current, settings);
            animationId = requestAnimationFrame(nextFrame);
        }
        nextFrame();

        return () => cancelAnimationFrame(animationId);
    }, [settings]);

    return <div className="clock-container">
        <canvas width="666" height="666" ref={canvas} />
    </div>;
}