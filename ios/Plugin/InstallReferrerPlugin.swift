import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(InstallReferrerPlugin)
public class InstallReferrerPlugin: CAPPlugin {
    private let implementation = InstallReferrer()

    @objc func getReferrerDetails(_ call: CAPPluginCall) {
        call.resolve([:])
    }

}
