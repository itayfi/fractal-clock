import React from 'react';

export default function Select({label, options, value, onChange}) {
    const onChangeHandler = React.useCallback(e => onChange(e.target.value), [onChange]);

    return <label>
        {label}
        <select value={value} onChange={onChangeHandler}>
            {options.map(option => <option value={option.value}>{option.title}</option>)}
        </select>
    </label>;
}