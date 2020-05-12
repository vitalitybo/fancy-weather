import './styles/styles.scss';
import 'normalize-css';
import { Skycons } from './modules/skycons';

const skycons = new Skycons({ color: 'pink' });
const icon1 = document.getElementById('icon1');
const tomorrow = document.getElementById('tomorrow');
const afterOneDay = document.getElementById('afterOneDay');
const afterTwoDays = document.getElementById('afterTwoDays');

skycons.add(icon1, 'rain');
skycons.add(tomorrow, 'snow');
skycons.add(afterOneDay, 'rain');
skycons.add(afterTwoDays, 'partly-cloudy-day');

skycons.play();
