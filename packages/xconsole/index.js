import XConsoleApp from './lib/index';
import './ui/index.less';

import xconsoleInfo from './xconsole.json';

window.g_xconsole = xconsoleInfo;

export * from './sdk/index';

export default XConsoleApp;
