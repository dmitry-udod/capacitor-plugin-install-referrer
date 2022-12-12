export interface ReferrerDetails {
    /**
     * The install referrer passed to the store when installing the app, if any.
     */
    referrerUrl?: string;
    /**
     * The install referrer click time.
     */
    referrerClickTime?: number;
    /**
     * The app install time.
     */
    appInstallTime?: number;
    /**
     * If the instant experience was launched.
     */
    instantExperienceLaunched?: boolean;
}
export interface InstallReferrerPlugin {
    /**
     * Return the `install referrer` passed to the store when installing the app, if any.
     *
     * Usage:
     * ```
     * import { InstallReferrer } from '@togetherprice/capacitor-plugin-install-referrer';
     *
     * InstallReferrer
     *  .getReferrer()
     *  .then(({ value }) => console.log(`The referrer is {value}`))
     * ```
     */
    getReferrerDetails(): Promise<ReferrerDetails>;
}
