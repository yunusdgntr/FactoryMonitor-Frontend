import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css'],
  standalone: true,
  imports: [NgxChartsModule],
})
export class MachineComponent implements OnChanges {
  @Input() machineValue: number;

  view: number[] = [400, 400];
  data: { name: string; value: number }[] = [];

  colorScheme = {
    domain: ['#5AA454'],
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes.machineValue) {
      this.renderChart(changes.machineValue.currentValue);
    }
  }

  renderChart(machineValue: number) {
    this.data = [
      {
        name: 'machine',
        value: machineValue || 0,
      },
    ];
  }
}
