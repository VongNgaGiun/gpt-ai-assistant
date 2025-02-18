import { COMMAND_DEPLOY } from '../../constants/command.js';
import { deploy } from '../../services/vercel.js';
import Event from '../models/event.js';

/**
 * @param {Event} event
 * @returns {Event}
 */
const deployCommand = (event) => (
  event.input === COMMAND_DEPLOY && (async () => {
    await deploy();
    event.sendText('deploying');
    return event;
  })()
);

export {
  deployCommand,
};

export default null;
