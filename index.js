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
		console.log(data)
	  let peliApi = data.d;
	  peliApi = peliApi.filter(elemen => elemen.i && elemen.i.imageUrl); // Filtrar elementos sin imagen (evitamos que renderize)
	  peliApi.map(elemen => {
		const title = elemen.l;
		const img = elemen.i.imageUrl;
		const cast = elemen.s ? elemen.s : '';
		let card = `
		<div class="card" ">
		<img src="${img} " class="card-img-top" alt="...">
		<div class="card-body">
		  <h5 class="card-title">${title}</h5>
		  <p class="card-text">${cast} </p>
		  <a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	  </div>
		`;
		console.log(cast);
		document.getElementById('container').innerHTML += card;
	  })
	})
	.catch(err => console.error(err));
  