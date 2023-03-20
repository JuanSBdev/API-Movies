const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '51ba63a738mshc342e294c358014p14553bjsn60bec33c628c',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman', options)
	.then(response => response.json())
	.then(data => {
		let peliApi = data.d;
		peliApi.map( elemen  => {
			const title = elemen.l;
			const img = elemen.i ? elemen.i.imageUrl : '';
			const imgURL = img ? img : ''; 
			const cast = elemen.s ? elemen.s : '';
			let card = `
			<div>
				<h2> ${title} </h2>
				<img src='${img} '> </img>
				<p> ${cast} </p>
			</div>
			`
			console.log(cast);
			document.getElementById('container').innerHTML += card;
		})
	})
	.catch(err => console.error(err));