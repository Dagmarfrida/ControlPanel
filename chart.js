//Chart on dashboard page, from chartjs.org

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const data = {
    labels: labels, 
    datasets: [{
      label: 'Housing Association', 
      backgroundColor: 'rgb(68, 84, 106)',
      borderColor: 'rgb(68, 84, 106)',
      data: [0, 6, 9, 12, 15, 18, 21, 23, 27, 30, 33, 36, 39]
    },{
        label: 'Dormitories',
        backgroundColor: 'rgb(253, 205, 51)',
        borderColor: 'rgb(253, 205, 51)',
        data:[0, 4, 6, 8, 12, 14, 16, 18, 20, 22, 24,26,28]  

    },{
        label: 'All Users',
        
        backgroundColor: 'rgb(51, 205, 121',
        borderColor: 'rgb(51, 205, 121',
        data:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]  

    }]
    
  };

  const config = {
    type: 'line',
    data,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 16
                    }
                }
            }
        }
    
    } 
  };

  // === include 'setup' then 'config' above ===

  var weusers = new Chart(
    document.getElementById('weusers__chart'),
    config
  );
