import React from 'react';

import axios from 'axios';

import Chart from 'chart.js';

export default class Axios extends React.Component {


  componentDidMount() {
    var dataSource = {
      datasets: [
          {
              data: [],
              backgroundColor: [
                  '#ffcd56',
                  '#ff6384',
                  '#36a2eb',
                  '#fd6b19',
                  '#FF4500',
                  '#FFD700',
                  '#FF6347',
                  '#7CFC00',
                  
                  ],
          }

      ],
      labels: []
      
  };

    axios.get('http://localhost:5000/budget')
    .then(function(res) {
         console.log(res);
         for (var i =0; i<res.data.mybudget.length; i++) {
             dataSource.datasets[0].data[i]=res.data.mybudget[i].budget;
             dataSource.labels[i]=res.data.mybudget[i].title;
          
         }
         const ctx = document.getElementById("myChart");
        new Chart(ctx, {
                type: 'pie',
                data: dataSource
            });
});
    
}
    render() {
      
      return (
         
        <div className = "center">
          <h1>pie chart</h1>
          <p>
          <canvas id="myChart"> </canvas>
          </p>
        </div> 
        
      )
     
    }
   
}




