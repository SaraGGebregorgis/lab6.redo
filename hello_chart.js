let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {//how we create a chart here is where you put the info of you want it to be
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'Either', 'Neither'], //name that will be displayed
        datasets: [{
            label: 'Number of votes',
            data: [18, 14, 7, 10], // the amount or the value that will be displayes
            backgroundColor: ['red', 'blue', 'green', 'yellow'] //the colors
        } ] // double check everything as it will be kinda confusing becasue of the brackets
    },
    options: {
        scales: {
            yAxes: [ { //about  how the y axes is going to be 
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})