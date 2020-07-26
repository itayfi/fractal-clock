import React from 'react';

function defaultValueGetter(event) {
	return event.target.value;
}

export default function Input({onChange, label, valueGetter = defaultValueGetter, ...props}) {
	const onChangeCallback = React.useCallback(e => onChange(valueGetter(e)), [onChange, valueGetter]);

	return <label>
		{label}
		<input onChange={onChangeCallback} {...props} />
	</label>;
}
