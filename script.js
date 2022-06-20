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
        backgroundColor : "hsl(10, 79%, 65%)",
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
                title: titleTooltip,

            }    
            
        }
    }
}
};


const myChart = new Chart (
    document.getElementById("myChart"),
    config
    );
