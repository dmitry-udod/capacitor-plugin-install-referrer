# @dudod/capacitor-plugin-install-referrer

Copy of **togetherprice/capacitor-plugin-install-referrer**

Original plugin: https://www.npmjs.com/package/@togetherprice/capacitor-plugin-install-referrer

Plugin to retrieve and use the Google play
[install referrer](https://developer.android.com/google/play/installreferrer)

## Install

```bash
npm install @dudod/capacitor-plugin-install-referrer
npx cap sync
```

### Android

Register the plugin by adding it to you MainActivity's onCreate:

```java
import com.togetherprice.capacitor.installreferrer.InstallReferrerPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(InstallReferrerPlugin.class);
  }
}
```

## API

<docgen-index>

* [`getReferrerDetails()`](#getreferrerdetails)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getReferrerDetails()

```typescript
getReferrerDetails() => any
```

Return the `install referrer` passed to the store when installing the app, if any.

Usage:
```
import { InstallReferrer } from '@dudod/capacitor-plugin-install-referrer';

const referrer = await InstallReferrer.getReferrerDetails();

```

**Returns:** <code>ReferrerDetails</code>

--------------------


### Interfaces


#### ReferrerDetails

| Prop                            | Type                 | Description                                                               |
| ------------------------------- | -------------------- | ------------------------------------------------------------------------- |
| **`referrerUrl`**               | <code>string</code>  | The install referrer passed to the store when installing the app, if any. |
| **`referrerClickTime`**         | <code>number</code>  | The install referrer click time.                                          |
| **`appInstallTime`**            | <code>number</code>  | The app install time.                                                     |
| **`instantExperienceLaunched`** | <code>boolean</code> | If the instant experience was launched.                                   |

</docgen-api>

## Test

Add a referrer parameter to any URLs that will be linking directly to Google Play Store and set the value of that parameter to a string that describe the source, as in this example:

```text
https://play.google.com/store/apps/details?id=com.example.application
&referrer=utm_source%3Dgoogle
%26utm_medium%3Dcpc
%26utm_term%3Drunning%252Bshoes
%26utm_content%3Dlogolink
%26utm_campaign%3Dspring_sale
```

Install the app from the store if the app is release, install the app locally if not.
