import { WebPlugin } from '@capacitor/core';
import type { InstallReferrerPlugin, ReferrerDetails } from './definitions';
export declare class InstallReferrerWeb extends WebPlugin implements InstallReferrerPlugin {
    getReferrerDetails(): Promise<ReferrerDetails>;
}
