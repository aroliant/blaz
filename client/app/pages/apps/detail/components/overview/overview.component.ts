import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppService } from 'client/app/services/app.service';

declare var document: any;
declare var Chart: any;
@Component({
  selector: 'app-detail-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnChanges {

  @Input() activeTab;
  @Input() app;
  showTab = false;

  datasetLengthToShow = 8;

  chartColors = [
    'rgb(54, 162, 235)',
    'rgb(75, 192, 192)',
    'rgb(201, 203, 207)',
    'rgb(255, 159, 64)',
    'rgb(153, 102, 255)',
    'rgb(255, 99, 132)',
    'rgb(255, 205, 86)'];

  chartCPU = {
    ctx: null,
    chart: null,
    isFirst: true,
    data: {
      type: 'line',
      steppedLine: false,
      data: {
        labels: [],
        datasets: []
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Time'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Usage'
            }
          }]
        }
      },
    }
  };

  chartRAM = {
    ctx: null,
    chart: null,
    isFirst: true,
    data: {
      type: 'line',
      steppedLine: false,
      data: {
        labels: [],
        datasets: [{
          label: 'ram',
          backgroundColor: this.chartColors[0],
          borderColor: this.chartColors[0],
          fill: false,
          data: [0]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Time'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'MB'
            }
          }]
        }
      },
    }
  };

  chartDisk = {
    ctx: null,
    chart: null,
    isFirst: true,
    data: {
      type: 'line',
      steppedLine: false,
      data: {
        labels: [],
        datasets: [{
          label: 'read',
          backgroundColor: this.chartColors[0],
          borderColor: this.chartColors[0],
          fill: false,
          data: [0]
        }, {
          label: 'write',
          backgroundColor: this.chartColors[1],
          borderColor: this.chartColors[1],
          fill: false,
          data: [0]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Time'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'MB'
            }
          }]
        }
      },
    }
  };

  chartNetwork = {
    ctx: null,
    chart: null,
    isFirst: true,
    data: {
      type: 'line',
      steppedLine: false,
      data: {
        labels: [],
        datasets: [{
          label: 'sent',
          backgroundColor: this.chartColors[0],
          borderColor: this.chartColors[0],
          fill: false,
          data: [0]
        }, {
          label: 'received',
          backgroundColor: this.chartColors[1],
          borderColor: this.chartColors[1],
          fill: false,
          data: [0]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Time'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'MB/s'
            }
          }]
        }
      },
    }
  };



  constructor(private appService: AppService) { }

  ngOnInit() {

    this.chartCPU.ctx = document.getElementById('chart-cpu').getContext('2d');
    this.chartRAM.ctx = document.getElementById('chart-ram').getContext('2d');
    this.chartDisk.ctx = document.getElementById('chart-disk').getContext('2d');
    this.chartNetwork.ctx = document.getElementById('chart-network').getContext('2d');

    this.chartCPU.chart = new Chart(this.chartCPU.ctx, this.chartCPU.data);
    this.chartRAM.chart = new Chart(this.chartRAM.ctx, this.chartRAM.data);
    this.chartDisk.chart = new Chart(this.chartDisk.ctx, this.chartDisk.data);
    this.chartNetwork.chart = new Chart(this.chartNetwork.ctx, this.chartNetwork.data);

    setInterval(() => {
      this.appService.getMetrics('blaz-blaz').subscribe((res: any) => {
        const metrics = res.metrics;
        this.processCPUMetrics(metrics);
        this.processRAMMetrics(metrics);
        this.processDiskMetrics(metrics);
        this.processNetworkMetrics(metrics);

      });
    }, 2500);

  }

  processCPUMetrics(metrics) {
    // cpu
    const cpu = metrics.cpu_stats;

    if (this.chartCPU.isFirst) {

      const datasets = [];

      for (let i = 0; i < cpu.online_cpus; i++) {

        const usage = cpu.cpu_usage.percpu_usage[i] / 1000000;

        datasets.push({
          label: 'cpu' + i,
          backgroundColor: this.chartColors[i],
          borderColor: this.chartColors[i],
          fill: false,
          data: [usage]
        });

      }

      this.chartCPU.data.data.datasets = datasets;
      this.chartCPU.isFirst = false;

    } else {

      for (let i = 0; i < cpu.online_cpus; i++) {

        const usage = cpu.cpu_usage.percpu_usage[i] / 1000;

        this.chartCPU.data.data.datasets[i].data.push(usage);

        if (this.chartCPU.data.data.labels.length >= this.datasetLengthToShow) {
          this.chartCPU.data.data.datasets[i].data.shift();
        }
      }


    }

    if (this.chartCPU.data.data.labels.length >= this.datasetLengthToShow) {
      this.chartCPU.data.data.labels.shift();
    }


    this.chartCPU.data.data.labels.push(new Date().toLocaleTimeString());
    this.chartCPU.chart.update();

  }

  processRAMMetrics(metrics) {

    const ram = metrics.memory_stats;

    const usage = ram.usage / (1024 * 1024 );

    this.chartRAM.data.data.datasets[0].data.push(usage);

    if (this.chartRAM.data.data.labels.length >= this.datasetLengthToShow) {
      this.chartRAM.data.data.labels.shift();
      this.chartRAM.data.data.datasets[0].data.shift();
    }

    this.chartRAM.data.data.labels.push(new Date().toLocaleTimeString());
    this.chartRAM.chart.update();

  }

  processDiskMetrics(metrics) {

    const disk = metrics.blkio_stats.io_service_bytes_recursive;

    const usageRead = disk[0].value / 1000000;
    const usageWrite = disk[1].value / 1000000;

    this.chartDisk.data.data.datasets[0].data.push(usageRead);
    this.chartDisk.data.data.datasets[1].data.push(usageWrite);

    if (this.chartDisk.data.data.labels.length >= this.datasetLengthToShow) {
      this.chartDisk.data.data.labels.shift();
      this.chartDisk.data.data.datasets[0].data.shift();
      this.chartDisk.data.data.datasets[1].data.shift();
    }

    this.chartDisk.data.data.labels.push(new Date().toLocaleTimeString());
    this.chartDisk.chart.update();

  }

  processNetworkMetrics(metrics) {

    const networks = metrics.networks;
    let bytesSent = 0;
    let bytesReceived = 0;

    Object.keys(networks).forEach((key, index) => {

      bytesSent = bytesSent + networks[key].tx_bytes;
      bytesReceived = bytesReceived + networks[key].rx_bytes;

    });

    bytesSent = bytesSent / (8 * 1000 * 1000 * 1000);
    bytesReceived = bytesReceived / (8 * 1000 * 1000 * 1000);

    this.chartNetwork.data.data.datasets[0].data.push(bytesSent);
    this.chartNetwork.data.data.datasets[1].data.push(bytesReceived);

    if (this.chartNetwork.data.data.labels.length >= this.datasetLengthToShow) {
      this.chartNetwork.data.data.labels.shift();
      this.chartNetwork.data.data.datasets[0].data.shift();
      this.chartNetwork.data.data.datasets[1].data.shift();
    }

    this.chartNetwork.data.data.labels.push(new Date().toLocaleTimeString());
    this.chartNetwork.chart.update();

  }

  ngOnChanges() {
    this.showTab = this.activeTab === 'overview' ? true : false;
  }

  getStats() {

  }

}
