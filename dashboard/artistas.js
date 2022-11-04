window.onload = function () {

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
            // legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Iron Maiden" },
                { y: 266455,  label: "Racionais" },
                { y: 169709,  label: "Turma do pagode" }
            ]
        }]
    });
    chart.render();
    

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
            // showInLegend: true, 
            legendMarkerColor: "grey",
            // legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Phantom of the opera" },
                { y: 266455,  label: "Vida loka parte 2" },
                { y: 169709,  label: "To ficando atoladinha" },
                { y: 169709,  label: "Do fundo da grota" },
                { y: 169709,  label: "The evil that men do" },
                { y: 169709,  label: "Nego Drama" },
                { y: 169709,  label: "Olha onda" },
                { y: 169709,  label: "Bad obssession" },
                { y: 169709,  label: "Helena" },
                { y: 169709,  label: "Acorda pedrinho" }
            ]
        }]
    });
    chart2.render();



    }