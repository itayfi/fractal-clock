import React from 'react';

import Input from './Input.js';

function valueAsNumber(event) {
	return event.target.valueAsNumber;
}

export default function RangeInput({...props}) {
	return <Input type="range" valueGetter={valueAsNumber} title={props.value} {...props} />
};
