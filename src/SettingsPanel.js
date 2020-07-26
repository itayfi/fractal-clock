import React from 'react';

import './SettingsPanel.css';

import {useSettings} from './SettingsContext';
import Checkbox from './components/Checkbox.js';
import Input from './components/Input.js';
import RangeInput from './components/RangeInput.js';
import Select from './components/Select.js';

const DROPOFF_OPTIONS = [
    {value: 'exponential', title: 'Exponential'},
    {value: 'linear', title: 'Linear'},
    {value: 'constant', title: 'Constant'}
];

export default function SettingsPanel() {
    const settings = useSettings();

    return <div className="settings-panel">
        <h3>Fractal Clock</h3>
        <RangeInput min="1" max="15" step="1" label="Max Depth" {...settings.maxDepth} />
        <Checkbox label="Hours" {...settings.hours} />
        <Checkbox label="Minutes" {...settings.minutes} />
        <Checkbox label="Seconds" {...settings.seconds} />
        <Input type="color" label="Color " {...settings.color} />
        <Select label="Dropoff Mode " options={DROPOFF_OPTIONS} {...settings.dropoffMode} />
        {/*<Checkbox label="Show FPS" {...settings.showFps} />*/}
    </div>;
};
