import React, { useState } from 'react';

const Tabs = ({ items }) => {
	const [ selected, setSelected ] = useState(0);

	return (
		<div>
			<ul className="headers">
				{items.map((item, i) => (
					<li key={i} onClick={ () => setSelected(i) } className={ selected === i ? 'active' : '' }>
						{ item.label }
					</li>
				))}
			</ul>
    <div>
        <p>{ items[selected].content }</p>
    </div>
		</div>
	);
};

export default Tabs;
