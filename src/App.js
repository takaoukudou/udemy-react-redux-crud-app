import React, { Component } from "react";

// function App() {
//   const greeting = 'Hi!!';
//   const dom = <h1 className="foo">{greeting}</h1>;
//   const input = (
//     <input
//       type="text"
//       onChange={() => {
//         console.log('I am clixked.');
//       }}
//     />
//   );
//   const label = <label htmlFor="bar">bar</label>;
//   return (
//     <React.Fragment>
//       {input}
//       {label}
//     </React.Fragment>
//   );
// }

const App = () => {
	const profiles = [
		{ name: "Taro", age: 10 },
		{ name: "Hanako", age: 5 },
		{ name: "NoName" },
	];
	return (
		<div>
			{profiles.map((profile, index) => {
				return <User name={profile.name} age={profile.age} key={index} />;
			})}
		</div>
	);
};

const User = (props) => {
	return (
		<div>
			I am {props.name}! and {props.age} years old
		</div>
	);
};

User.defaultProps = {
	age: 1,
};

export default App;
