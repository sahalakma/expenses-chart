// ajax Block 

const xmlhttp = new XMLHttpRequest();

xmlhttp.open('GET', "data.json");
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
    if(this.readyState === 4 && this.status == 200){
    const datapoints = JSON.parse(this.responseText);
    console.log(datapoints);

    const labelsweek = datapoints.map(function(index) {
        return index.day;
    });
    const labelsAmount = datapoints.map(function(index) {
        return index.amount;
    });


    const data =  {
        labels: labelsweek,
        datasets: [{
            label: "",
            backgroundColor: "hsl(10, 79%, 65%)",
            hoverBackgroundColor: "hsl(186, 34%, 60%)",
            borderRadius: "5" ,
            data: labelsAmount 
        }]
    };

    const titleTooltip = (tooltipItems) => {
        return  ;
    }
    
    const config = {
    type : "bar",
    data : data,
    options: {
        plugins: {
            tooltip: {
                yAlign: "bottom",
                bodyColor : "#fff",
                bodyFont: {
                    family: "DM sans",
                    size: 14
                },

                callbacks: {
                    title: titleTooltip
                    
                },

                displayColors: false    
                
            }
        },
        scales: {
            x: {
                grid: {
                    display:false
                }
            },
            y: {
                grid:{
                    display:false
                },
                ticks:{
                    display:false
                }
            }
    
        }
    }
    };

    const myChart = new Chart (
        document.getElementById("myChart"),
        config
        );
    }
}
 



