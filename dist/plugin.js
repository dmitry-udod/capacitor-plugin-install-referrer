var capacitorInstallReferrer = (function (exports, core) {
    'use strict';

    const InstallReferrer = core.registerPlugin('InstallReferrer', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.InstallReferrerWeb()),
    });

    class InstallReferrerWeb extends core.WebPlugin {
        getReferrerDetails() {
            return Promise.resolve({});
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        InstallReferrerWeb: InstallReferrerWeb
    });

    exports.InstallReferrer = InstallReferrer;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
