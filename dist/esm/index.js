import { registerPlugin } from '@capacitor/core';
const InstallReferrer = registerPlugin('InstallReferrer', {
    web: () => import('./web').then(m => new m.InstallReferrerWeb()),
});
export * from './definitions';
export { InstallReferrer };
//# sourceMappingURL=index.js.map