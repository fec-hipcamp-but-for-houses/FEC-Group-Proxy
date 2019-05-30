import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Modules/FEC-Airbnb-Reviews/client/src/components/App.jsx';
import Booking from './Modules/FEC-Airbnb-Booking/client/src/components/App.jsx';
import Calender from './Modules/FEC-Airbnb-Calendar/client/src/components/App.jsx';
import Photos from './Modules/FEC-Airbnb-Photo-Gallery/client/src/components/App.jsx';

ReactDOM.render(<Photos />, document.getElementById('photos'));
ReactDOM.render(<Booking />, document.getElementById('root'));
ReactDOM.render(<Calender />, document.getElementById('calander'));
ReactDOM.render(<Reviews />, document.getElementById('review'));
