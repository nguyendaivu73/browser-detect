import { detect } from 'detect-browser';
import publicIp from 'public-ip';

/**
 * Helpers
 */
export const capitalizeFirstLetter = (string) => {
  const firstLetter = string.charAt(0).toUpperCase();
  const theReset = string.slice(1);

  return `${firstLetter}${theReset}`;
};

/**
 * Main app
 */
class App {
  constructor() {
    this.browserInformationDisplay = document.querySelector('.browser__information');
    this.otherInformationDisplay = document.querySelector('.others__information');
    this.informationList = document.querySelector('.information__list');
  }

  start() {
    const { name, version, os } = detect();
    publicIp.v4().then((ip) => {
      this.browserInformationDisplay.innerHTML = `Your are browsing on ${capitalizeFirstLetter(name)}!`;
      this.otherInformationDisplay.innerHTML = 'Some other informations:'
      const dataList = `
        <li><b>Version:</b> ${version}</li>
        <li><b>OS:</b> ${os}</li>
        <li><b>IP address:</b> ${ip}</li>
      `
      this.informationList.innerHTML = dataList;
    });
  }
}

/**
 * Initial and start app
 */
const app = new App();
app.start();