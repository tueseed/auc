function number_format(number, decimals, dec_point, thousands_sep) 
{
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function(n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
      };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function bar(sts)  
{
   var status = [];
   var num = [];
   var bar_color = [];
   var hover_bar_color = [];
   var i =0;
   while(sts[i])
   {
        status.push(sts[i].status);
        num.push(sts[i].num);
        if(sts[i].status == "CLSD")
        {
            bar_color.push('#1cc88a');
            hover_bar_color.push('#13865c');
        }
        if(sts[i].status == "REL ")
        {
            bar_color.push('#e74a3b');
            hover_bar_color.push('#881b11');
        }
        if(sts[i].status == "TECO")
        {
            bar_color.push('#f6c23e');
            hover_bar_color.push('#926b07');
        }
        i++;
   }
   var ctx = document.getElementById("myBarChart");
   var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                    labels: status,
                    datasets: [
                                {
                                    label: "หมายเลขงาน",
                                    backgroundColor: bar_color,
                                    hoverBackgroundColor: hover_bar_color,
                                    borderColor: "#4e73df",
                                    data: num,
                                }
                            ],
                    },
            options: {
                        title:{
                                display:true,
                                text:'จำนวน wbs แยกตามสถานะงาน'
                              },
                        maintainAspectRatio: false,
                        layout: {
                                    padding: {
                                                left: 10,
                                                right: 25,
                                                top: 25,
                                                bottom: 0
                                            }
                                },
                        scales: {
                                    xAxes: [
                                            {
                                                time: {
                                                        unit: 'month'
                                                    },
                                                gridLines: {
                                                    display: false,
                                                    drawBorder: false
                                                    },
                                                ticks: {
                                                            maxTicksLimit: 6
                                                        },
                                                maxBarThickness: 25,
                                            }
                                           ],
                                    yAxes: [
                                            {
                                                ticks: {
                                                            min: 0,
                                                            max: 200,
                                                            maxTicksLimit: 5,
                                                            padding: 10,
                                                            // Include a dollar sign in the ticks
                                                            callback: function(value, index, values) 
                                                            {
                                                                return number_format(value);
                                                            }
                                                        },
                                                gridLines: {
                                                                color: "rgb(234, 236, 244)",
                                                                zeroLineColor: "rgb(234, 236, 244)",
                                                                drawBorder: false,
                                                                borderDash: [2],
                                                                zeroLineBorderDash: [2]
                                                            }
                                            }
                                        ],
                                },
                        legend: {
                                    display: false
                                },
                        tooltips: {
                                    titleMarginBottom: 10,
                                    titleFontColor: '#6e707e',
                                    titleFontSize: 14,
                                    backgroundColor: "rgb(255,255,255)",
                                    bodyFontColor: "#858796",
                                    borderColor: '#dddfeb',
                                    borderWidth: 1,
                                    xPadding: 15,
                                    yPadding: 15,
                                    displayColors: false,
                                    caretPadding: 10,
                                    callbacks: {
                                    label: function(tooltipItem, chart) {
                                                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                                                return 'จำนวน ' + number_format(tooltipItem.yLabel) + ' WBS';
                                            }
                                    }   
                                },
                    }
           });
  }
  
  function pie(sts)
  {
   var stat = [];
   var dat = [];
   var pie_color = [];
   var hover_pie_color = [];
   var j = 0;
   while(sts[j])
   {
    stat.push(sts[j].status);
    dat.push(sts[j].total_act_sts);
    if(sts[j].status == "CLSD")
    {
     pie_color.push('#1cc88a');
     hover_pie_color.push('#13865c');
    }
    if(sts[j].status == "REL ")
    {
     pie_color.push('#e74a3b');
     hover_pie_color.push('#881b11');
    }
    if(sts[j].status == "TECO")
    {
     pie_color.push('#f6c23e');
     hover_pie_color.push('#926b07');
    }
    j++;
   }
   var ctx = document.getElementById("myPieChart");
   var myPieChart = new Chart(ctx, {
   type: 'doughnut',
   data: {
     labels: stat,
     datasets: [{
        data: dat,
        backgroundColor: pie_color,
        hoverBackgroundColor: hover_pie_color,
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
   options: {
      title:{
        display:true,
        text:'มูลค่างานแยกตามสถานะงาน'
       },
      maintainAspectRatio: false,
      tooltips: {
         backgroundColor: "rgb(255,255,255)",
         bodyFontColor: "#858796",
         borderColor: '#dddfeb',
         borderWidth: 1,
         xPadding: 15,
         yPadding: 15,
         displayColors: false,
         caretPadding: 10,
         },
      legend: {
         display: true
        },
      cutoutPercentage: 0,
     },
    });
  }
  function main()
  {
   
   $.ajax({
     url: 'api/main_data.php',
     method: 'POST',
     async: true,
     cache: false,
     processData: false,
     contentType: false,
     success: function(response) {
        var obj = JSON.parse(response);
        var numcase1 = document.getElementById("numcase1");
        var numcase2 = document.getElementById("numcase2");
        var numcase3 = document.getElementById("numcase3");
        numcase1.innerHTML = "จำนวน " + obj.numcase1 + " งาน"; 
        numcase2.innerHTML = "จำนวน " + obj.numcase2 + " งาน";
        numcase3.innerHTML = "จำนวน " + obj.numcase3 + " งาน"; 
        pie(obj.sts);
        bar(obj.sts);
                      }    
     });
  }

$(document).ready(function(){main();});