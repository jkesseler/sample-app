import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import dates from './date-utils';
import './Scheduler.css'; // External styelsheet
import styles from './Scheduler.module.css';
import events from './scheduler-events'; // Stub

// eslint-disable-next-line react/prefer-stateless-function
class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewModel: {
        events,
      },
    };
  }

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    const { viewModel } = this.state;
    const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
    // eslint-disable-next-line new-cap
    return (
      <div className={styles.scheduler}>
        <BigCalendar
          events={viewModel.events}
          views={allViews}
          step={60}
          showMultiDayTimes
          max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
          defaultDate={new Date(2015, 3, 1)}
          localizer={localizer}
        />
      </div>
    );
  }
}

export default Scheduler;
