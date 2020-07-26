import React from 'react';

export default function Checkbox({value, onChange, label, ...props}) {
    const onChangeCallback = React.useCallback(e => onChange(e.target.checked), [onChange]);

    return <label>
        <input checked={value} onChange={onChangeCallback} type="checkbox" {...props} />
        {label}
    </label>;
}