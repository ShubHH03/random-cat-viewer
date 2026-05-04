import { useState, useEffect } from 'react';

function App() {
	const [image, setImage] = useState();

	const fetchData = async () => {
		try {
			const response = await fetch(
				'https://api.freeapi.app/api/v1/public/cats/cat/random',
			);
			const data = await response.json();
			const catImage = data.data.image;
			setImage(catImage);
		} catch (error) {
			console.log(`Error fetching data`, error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<h1>Random Cat Viewer</h1>
			<img src={image} alt="cat" height="400px" width="400px" />
			<button onClick={fetchData}>New Cat</button>
		</>
	);
}

export default App;
