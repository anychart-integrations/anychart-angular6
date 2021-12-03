import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class DemoDataProviderService {
  /*
   Parent-children communicate via a service is used.
   https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
  */

  // Observable string stream
  private dataSetChangeSource = new Subject<string>();

  // Observable string stream
  dataSetChanged$ = this.dataSetChangeSource.asObservable();

  private data_: Array<Object>;

  public getData() {
    return fetch('https://cdn.anychart.com/samples/gantt-live-editing/resource-chart-editing/data.json');
  }
}
