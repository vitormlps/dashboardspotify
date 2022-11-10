window.onload = function () {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const access_token = urlParams.get('access_token')

    // Pega o nome do miliante
    fetch('https://api.spotify.com/v1/me', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + access_token,
        }
    }
    )
    .then( async (response) => {
        const user_data = await response.json()
        var oResponse = await response

        document.getElementById('nome').innerHTML = user_data.display_name
        console.log(response)
    });

    // Pega os dados dos gráficos de torres
    fetch('https://api.spotify.com/v1/me/top/artists', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + access_token,
        }
    })
    .then( async (response) => {
        response.json().then((data) => {
        
            let aDataPoints = []
           
            let count = 40
            data.items.forEach((artist) =>{
                count -= 10
                oDataPoint = { 
                    y:     count, 
                    label: artist.name 
                }

                if (count > 0) {
                    aDataPoints.push(oDataPoint)
                }else{
                    return
                }
            })
            
            var chart = new CanvasJS.Chart("artistas", {
                animationEnabled: true,
                theme: "dark2", // "light1", "light2", "dark1", "dark2"
                title:{
                    text: "Top 3 artistas mais ouvidos"
                },
                axisY: {
                    title: ""
                },
                data: [{        
                    type: "column",  
                    showInLegend: true, 
                    legendMarkerColor: "grey",
                    dataPoints: aDataPoints
                }]
            });
            chart.render();
        
        }).catch((err) => {
            console.log(err);
        }) 
    });

    fetch('https://api.spotify.com/v1/me/top/tracks', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + access_token,
        }
    })
    .then( async (response) => {

        response.json().then((data) => {

            let aDataPoints = []
    
            if (!data) {
                return
            }

            let count = 100
            data.items.forEach((track) =>{
                count -= 10
                oDataPoint = { 
                        y:     count, 
                        label: track.name 
                    }

                if (count > 0) {
                    aDataPoints.push(oDataPoint)
                }
            })
            
            var chart2 = new CanvasJS.Chart("musicas", {
                animationEnabled: true,
                theme: "dark1", // "light1", "light2", "dark1", "dark2"
                title:{
                    text: "Top 10 músicas mais ouvidas"
                },
                axisY: {
                    title: ""
                },
                data: [{        
                    type: "column",  
                    legendMarkerColor: "grey",
                    dataPoints: aDataPoints
                }]
            });
            chart2.render();

        }).catch((err) => {
            console.log(err);
        }) 

    });
}