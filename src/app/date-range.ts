import * as moment from 'moment';

export class DateRange {
  startMonth: number;
  startDay: number;
  startYear: number;
  endMonth: number;
  endDay: number;
  endYear: number;

  constructor(year: number) {
    this.startYear = year;
    this.endYear = year;
  }

  public startMoment(): moment.Moment {
    return moment([this.startYear, this.startMonth - 1, this.startDay]);
  }

  public endMoment(): moment.Moment {
    return moment([this.endYear, this.endMonth - 1, this.endDay]);
  }

  public durationInDays(): number {
    return this.endMoment().diff(this.startMoment(), 'days') + 1;
  }
}
