const labels = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
];

const data =  {
    labels:labels,
    datasets: [{
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: "5" ,
        data: [20,35,52,31,25,40,30] 
    }]
};


//tooltip
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
