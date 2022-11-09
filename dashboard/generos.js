anychart.onDocumentReady(function() {
    var stateKey = 'spotify_auth_state';

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const access_token = urlParams.get('access_token')

    fetch('https://api.spotify.com/v1/me/top/tracks', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + access_token
        }
    })
    .then( (response) => {
        console.log('Deu erro ao pegar os artistas mais ouvidos')
    })
    .then((data) => {
        // pega o gênero a música mais ouvida pelo queridão e joga no estilo
        let genero = data.items[0].album.artists[0].genres[0]
        document.getElementById('estilo').innerHTML = genero

        // Rankeia os estilos mais ouvidos pelo queridão
        let topGenero = {}
        let aTopGeneros = []
        let nValue = 40
        data.forEach((item)=>{
            topGenero.x = item.items[0].album.artists[0].genres[0]
            topGenero.value = nValue - 10
            aTopGeneros.push(topGenero)
        })
    
        // create the chart
        var chart = anychart.pie();
        
        // set the chart title
        chart.title("Gêneros mais ouvidos:");
        
        // add the data
        chart.data(aTopGeneros);
        chart.background().fill("#99e599");
    
        // display the chart in the container
        chart.container('generos');
        chart.draw();
    
    });

});
