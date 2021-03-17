import { Component, VERSION } from "@angular/core";
import { SchedulerEvent } from "@progress/kendo-angular-scheduler";
import { sampleData, displayDate } from "./events-utc";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;
}
