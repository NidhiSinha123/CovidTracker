import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { GlobalDataSummary } from 'src/app/model/global-data';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed =0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  globalData:GlobalDataSummary[];
  pieChart:GoogleChartInterface={
    chartType:'PieChart'
  }
  columnChart:GoogleChartInterface={
    chartType:'ColumnChart'
  }

  constructor(private dataService:DataServiceService) { }
 
  
  ngOnInit(): void {
  this.dataService.getGlobalData()
      .subscribe(
        {
          next: (result) => {
            console.log(result);
            this.globalData = result;
            result.forEach(cs => {
              if (!Number.isNaN(cs.confirmed)) {
                this.totalActive += cs.active
                this.totalConfirmed += cs.confirmed
                this.totalDeaths += cs.deaths
                this.totalRecovered += cs.active
              }

            })
            this.initChart();
            console.log("active cases of covid",this.totalActive)

            
          }, 
      
          }
        
      )

        }
        initChart()
        {
          let datatable=[];
          datatable.push(["Country","Cases"])
          this.globalData.forEach(cs=>
            {
              if(cs.confirmed>500000)
              datatable.push([cs.country,cs.confirmed])
            })
          this.pieChart= {
            chartType: 'PieChart',
            dataTable: datatable,
            //firstRowIsData: true,
            options: {height:500},
          };
          this.columnChart= {
            chartType: 'ColumnChart',
            dataTable: datatable,
            //firstRowIsData: true,
            options: {height:500},
          };
        }
        
        
        
      }
