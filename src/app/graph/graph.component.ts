import { Component, OnInit } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  options: {};
  data: {};

  constructor() { }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        useInteractiveGuideline: true,
        height: 250,
        width: 550,
        transitionDuration: 350,
        showLegend: false,
        margin: {
          top: 80,
          right: 80,
          bottom: 40,
          left: 100
        },
        x: (d) => { return d.label; },
        y: (d) => { return d.value; },
        //xScale: d3.time.scale(),
        xAxis: {
          axisLabel: 'month',
          
        },
        yAxis: {
          axisLabel: 'Gross volume',
          tickFormat: (d) => {
              if (d == null) {
                  return 0;
              }11
              return d3.format('.02f')(d);
          },
          axisLabelDistance: 0
        }
      }
    }
 
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
          {
            "label" : "D" ,
            "value" : -19.807804682612
          } ,
          {
            "label" : "E" ,
            "value" : 24.807804682612
          } ,
          {
            "label" : "F" ,
            "value" : 12.807804682612
          } ,

        ]
      }
    ];
  }

}
