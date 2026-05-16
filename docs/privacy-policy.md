# Privacy Policy for Pocket Guardian

**Last updated: May 15, 2026**  
**Version:** 2.0

**Developer:** Pocket Guardian  
**Contact:** pocketguardian.app@gmail.com  
**Application:** Pocket Guardian — Device Security Monitor  
**Package:** com.pocketguardian.app

---

## 1. Introduction

This Privacy Policy explains how Pocket Guardian ("we", "our", "the app", or "the developer") collects, uses, stores, and protects information when you use our mobile application available on Google Play.

By installing and using Pocket Guardian, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy. If you do not agree with any part of this policy, you must not install or use the application.

We are committed to protecting your privacy and complying with applicable data protection laws, including the **General Data Protection Regulation (GDPR)** for users in the European Economic Area, the **California Consumer Privacy Act (CCPA)** for California residents, and other applicable regional privacy laws.

---

## 2. Intended Use and Lawful Use Obligation

Pocket Guardian is designed **exclusively** for the purpose of monitoring your **own personal device** against unauthorized access. Typical lawful use cases include:

- Detecting unauthorized access attempts to your own smartphone
- Identifying who picked up your device without your permission
- Monitoring your own device while left unattended at a café, hotel, or office
- Detecting SIM card tampering or unauthorized SIM swaps
- Logging charger disconnection events at public charging stations
- Verifying who successfully unlocked the device and when
- Auditing access to the Pocket Guardian application itself

**You must read this section carefully before using the application.**

By installing and using Pocket Guardian, you represent, warrant, and agree that:

1. You are the **legal owner** of the device on which the application is installed, or you have been explicitly authorized by the owner to install and operate monitoring software on that device.
2. You will use Pocket Guardian **only in compliance with all applicable laws** of your country, state, or region, including but not limited to laws governing surveillance, privacy, wiretapping, recording of individuals, and data protection.
3. You will **not** use Pocket Guardian to monitor any person without their explicit informed consent where such consent is required by law.
4. You understand that laws regarding device monitoring, photography, and surveillance vary significantly by jurisdiction and it is **your sole responsibility** to ensure your use of this application complies with applicable local law.

**The developer assumes no liability whatsoever for any unlawful, improper, or unauthorized use of this application.** Any consequences — civil, criminal, or otherwise — arising from misuse of Pocket Guardian are the sole responsibility of the user.

---

## 3. What Data We Collect

### 3.1 Photos and Images

When a security event occurs, the app may capture a photo using your device's camera, subject to your settings. Security events that may trigger photo capture include:

- Incorrect PIN, pattern, or password entry on the lock screen
- Screen wake while the device is locked (power button pressed or raise-to-wake)
- Successful screen unlock
- Charger connected or disconnected
- Wired headset connected or disconnected
- SIM card state changes (removal, insertion, lock, carrier change)
- Device pickup detected by the hardware motion sensor
- Incorrect PIN entered inside the Pocket Guardian app
- Successful login to the Pocket Guardian app

**Camera selection:** You may choose between the front camera (default, to capture a face portrait) and the rear camera (to capture the surrounding environment). This setting is configured globally in Settings → Camera.

**Photo quality:** You may choose one of three quality modes — Eco (smallest file size), Standard (balanced), or High (maximum detail). All modes produce local JPEG files; quality affects file size and upload speed only.

**Photo overlays:** You may optionally enable the following information to be burned onto each photo at capture time:
- Date and time (bottom-right corner)
- Device manufacturer and model name (bottom-left corner)
- Android device ID — a unique 64-bit identifier assigned to your device installation (bottom-left corner)

These overlays are rendered locally on your device and are not transmitted separately. The Android ID overlay may qualify as personal data under applicable privacy law; it is disabled by default and only burned into photos if you explicitly enable it.

**Storage:**
- Photos are stored **locally on your device only**, in the app's private sandbox storage (`/data/data/com.pocketguardian.app/files/captures/`)
- Photos are **not accessible to other applications** (Android sandboxing)
- Photos are **not transmitted to any external server** unless you explicitly enable Google Drive sync in Settings
- You may configure a maximum number of stored events; the oldest entries (and their associated photos) are automatically deleted when the limit is exceeded
- You may disable all photo capture entirely in Settings

### 3.2 Event Logs

The app records security events on your device. Each log entry includes: timestamp, event type, event text, camera used (if a photo was taken), and a reference to the associated photo file (if any). Logged event types include:

| Event Type | Description |
|-----------|-------------|
| Successful unlock | Device unlocked with correct PIN, pattern, fingerprint, or Face ID |
| Wrong PIN on lock screen | Incorrect PIN, pattern, or password entered on the system lock screen |
| Screen wake while locked | Screen turned on while device was locked, without PIN entry |
| Charger connected | USB cable or wireless charger plugged in |
| Charger disconnected | USB cable or wireless charger unplugged |
| Headset connected | Wired headset or earphones connected via 3.5mm jack or USB-C |
| Headset disconnected | Wired headset or earphones disconnected |
| SIM card change | SIM card removed, inserted, locked, or carrier changed |
| Device picked up | Hardware motion sensor detected the device was moved after being stationary |
| App login – success | Correct PIN entered inside the Pocket Guardian app |
| App login – wrong PIN | Incorrect PIN entered inside the Pocket Guardian app |

> **Note on motion sensor:** The device pickup trigger uses the Android `TYPE_SIGNIFICANT_MOTION` hardware sensor. This sensor does not require any special permission and processes all data entirely on the device's co-processor. No sensor data is transmitted off the device. This feature is **disabled by default** because the sensor cannot distinguish between "device picked up" and "device moving in a pocket", which may generate false positives during walking or running.

All event logs are stored **locally on your device** as a JSON file and are not transmitted to any server.

**Event log filtering:** The app provides in-app tools to filter the event log by event type and by date range. This filtering occurs entirely on-device and does not involve any network communication.

**Statistics:** The app includes a local statistics screen showing event counts, bar charts by day, hourly activity breakdown, and a peak-hour indicator. All statistical computations are performed on-device using only locally stored event log data.

### 3.3 Device Information (Diagnostic Data)

For the sole purpose of identifying and fixing technical errors, the app uses Firebase Crashlytics to collect anonymous diagnostic information in the event of a crash, including:

- Device manufacturer and model
- Android OS version
- Application version
- Anonymous crash identifiers and stack traces

This data does **not** include photos, event log content, your PIN, your Android ID, or any personally identifiable information. See Section 5.1 for details.

Crashlytics collection is **disabled in debug builds** and enabled only in production (release) builds.

### 3.4 Google Account (Optional)

If you choose to enable Google Drive synchronization (an optional Premium feature), the app requests access to your Google account using the **drive.file** OAuth 2.0 scope. This scope grants access **only to files that Pocket Guardian itself creates** — the app has no ability to read, modify, or delete any other files in your Google Drive. Your credentials are handled entirely by Google's Sign-In SDK and are never stored by us.

### 3.5 App Alias (Notification Appearance)

The app allows you to configure a custom display name ("alias") that replaces "Pocket Guardian" in the system notification shade and on the app's own login screen. This name is stored locally in SharedPreferences on your device and is never transmitted to any server or third party.

---

### 3.6 Premium Features

Pocket Guardian offers three optional Premium features that require a one-time in-app purchase via Google Play. No subscription, no recurring charges.

**Alarm mode:** When enabled, any detected security event triggers the device ringtone at maximum volume. The alarm continues until you open Pocket Guardian and log in. All alarm state is managed locally on your device; no data related to alarm events is transmitted externally.

**Active schedule:** Restricts monitoring to specific days of the week and a time window you define. Outside the active window all events are silently ignored. Schedule configuration is stored locally in SharedPreferences and never transmitted to any server.

**Google Drive backup:** Automatically uploads photos and the event log to your personal Google Drive after each event. See Section 3.4 and Section 5.2 for details. Drive sync is disabled by default and requires your explicit opt-in.

The purchase is processed entirely by Google Play Billing. All three features are permanently unlocked after a single purchase and are automatically restored if you reinstall the app. The developer does not store, process, or have access to any payment information. See Section 5.3.


## 4. How We Use Your Data

| Data | Purpose | Location |
|------|---------|----------|
| Photos | Security documentation on your device | Your device only |
| Event logs | Security monitoring history | Your device only |
| Photo overlays (date/time, model) | User-configured metadata burned into photos | Your device only |
| Android ID overlay (if enabled) | Device identification burned into photos | Your device only |
| Statistics | On-device security pattern analysis | Your device only |
| App alias | Custom notification appearance | Your device only |
| Device / crash info | App stability and bug fixes | Firebase Crashlytics |
| Google account token | Drive sync if you enable it | Google's servers |
| Alarm state | Audible deterrent on any event (Premium) | Your device only |
| Schedule configuration | Restrict monitoring hours and days (Premium) | Your device only |

We do **not** use your data for advertising, profiling, analytics, or any commercial purpose beyond operating the features of the app. We do **not** sell, rent, or share your personal data with any third party for commercial purposes.

---

## 5. Third-Party Services

### 5.1 Firebase Crashlytics (Google LLC)

We use Firebase Crashlytics solely to receive anonymous crash reports that help us fix bugs and improve stability. Crashlytics does not receive your photos, event logs, PIN, Android ID overlay data, or any content generated or stored by the app.

Firebase Privacy Policy: https://firebase.google.com/support/privacy  
Google Privacy Policy: https://policies.google.com/privacy

### 5.2 Google Drive API (Optional)

If you enable Drive sync, your photos and event logs are uploaded directly to **your personal Google Drive account** using Google's official API. This data goes to your own Drive storage — not to our servers. We act only as a technical intermediary facilitating your own backup.

Files are stored in: `My Drive / Pocket Guardian / photos /`  
The event log is saved as `events_log.json` in the Pocket Guardian folder.

### 5.3 Google Play Billing

Premium features are purchased through Google Play's standard billing system. All payment processing is handled entirely by Google. We do not collect, process, or store any payment card information or financial data.

---

## 6. Data Security

### 6.1 Local Storage Security

All locally stored data resides in Android's private application sandbox (`/data/data/com.pocketguardian.app/`), which is:

- Inaccessible to other applications without device root access
- Automatically deleted upon app uninstallation
- Protected by Android's file system permissions

### 6.2 PIN Security

Your access PIN is never stored in plain text. It is protected using **PBKDF2-HMAC-SHA1** with 10,000 iterations and a 16-byte cryptographically random salt (generated using `SecureRandom`). Only the resulting hash and salt are stored in SharedPreferences. This means that even in the event of unauthorized access to your device's storage, your PIN cannot be recovered or reversed.

The same PBKDF2 mechanism is applied to your secret recovery answer.

### 6.3 Brute-Force Lockout

Pocket Guardian implements an escalating lockout mechanism to prevent brute-force PIN guessing. After a configurable number of failed attempts, the app enforces an increasing delay before the next attempt is accepted. The lockout state is stored locally on the device.

### 6.4 Data in Transit

All data transmitted to Google's servers (Drive, Crashlytics) uses industry-standard **TLS (HTTPS) encryption**. We do not operate any proprietary servers — no data is transmitted to infrastructure controlled by the developer.

### 6.6 Background Service and Watchdog

Pocket Guardian runs a persistent foreground service (`EventService`) to ensure security events are never missed. To guarantee continuity, the app employs a dual-layer watchdog mechanism:

- **AlarmManager heartbeat:** Fires every 5 minutes to verify the service is still running. If a stale heartbeat is detected, the service is automatically restarted.
- **BootReceiver:** Automatically restarts the monitoring service after device reboot, provided protection is enabled.

Both mechanisms operate entirely locally. No network communication is involved. The watchdog is suspended when protection is manually disabled by the user.

On Xiaomi HyperOS, Samsung One UI, and other devices with aggressive battery management, additional user configuration may be required (battery optimisation exemption and AutoStart). The app guides users through this during first-launch onboarding.


### 6.5 No Developer Access

The developer has **no technical ability** to access your photos, event logs, PIN, or any other content. All data is stored either locally on your device or in your own Google Drive account. We do not operate any backend server, database, or cloud storage that receives your personal content.

---

## 7. Data Retention

| Data Type | Retention Period |
|-----------|-----------------|
| Photos and event logs | Until you delete them, reach the configured event limit, or uninstall the app |
| Google Drive data | Until you delete from your Google Drive |
| Firebase crash reports | 90 days (Firebase standard policy) |
| App settings and alias | Until you change them or uninstall the app |
| Alarm and schedule configuration | Until you change them or uninstall the app |

---

## 8. Your Rights and Data Deletion

### 8.1 Delete All Local Data

To permanently delete all photos and event logs from your device:

1. Open Pocket Guardian
2. Go to **Settings**
3. Scroll to **Danger Zone**
4. Tap **"Remove All Data"**

This action is **irreversible** and immediately deletes all local content.

### 8.2 Delete Individual Events

Individual events and their photos can be deleted directly from the event log: long-press any entry to enter selection mode, then tap the delete icon.

### 8.3 Configure Storage Limit

You may configure a maximum number of stored events under **Settings → Storage**. When the limit is reached, the oldest entries (and their associated photos) are deleted automatically. Setting the limit to `0` means unlimited storage.

### 8.4 Delete Google Drive Data

1. Visit https://drive.google.com
2. Locate the **Pocket Guardian** folder
3. Delete it

### 8.5 Revoke Google Account Access

1. Visit https://myaccount.google.com/permissions
2. Find Pocket Guardian
3. Click "Remove Access"

### 8.6 Request Deletion of Crash Report Data

To request deletion of any diagnostic data held by Firebase Crashlytics on our behalf, contact us at **pocketguardian.app@gmail.com**. We will make reasonable efforts to process your request within 30 days.

### 8.7 Disable Camera Capture

All photo capture can be disabled independently per event type in Settings without deleting other data. You may also disable capture globally by turning off the camera permission for the app in Android system settings.

### 8.8 Disable Motion Sensor

The device pickup (motion sensor) trigger can be disabled independently in **Settings → Events & Photos → Log device pickup**. This feature is disabled by default.

---

### 8.9 Disable Alarm Mode

Alarm mode can be disabled at any time in **Settings → Security → Alarm Mode**. This is a Premium feature that requires a prior purchase to enable.

### 8.10 Disable Active Schedule

The active schedule can be disabled or modified at any time in **Settings → Security → Active schedule**. When disabled, monitoring is active at all times (subject to the protection toggle).


## 9. GDPR — European Economic Area Users

If you are located in the EEA, Switzerland, or the United Kingdom, the following applies:

**Legal bases for processing:**

| Processing Activity | Legal Basis |
|--------------------|-------------|
| Local security monitoring (event log, photos) | Legitimate interest (Art. 6(1)(f)) — you monitor your own device |
| Motion sensor detection | Legitimate interest (Art. 6(1)(f)) — you monitor your own device |
| Android ID photo overlay (if enabled) | Consent (Art. 6(1)(a)) — requires your explicit opt-in in Settings |
| Crash diagnostics | Legitimate interest (Art. 6(1)(f)) — improving app safety |
| Google Drive sync | Consent (Art. 6(1)(a)) — requires your explicit opt-in |
| Premium features | Contract performance (Art. 6(1)(b)) |

**Your rights under GDPR:**

- **Right of access** (Art. 15): request a copy of your data
- **Right to rectification** (Art. 16): correct inaccurate data
- **Right to erasure** (Art. 17): request deletion of your data
- **Right to restriction** (Art. 18): limit how we process your data
- **Right to portability** (Art. 20): receive your data in a portable format
- **Right to object** (Art. 21): object to processing based on legitimate interest
- **Right to withdraw consent**: at any time, without affecting prior processing

To exercise any GDPR right, contact us at **pocketguardian.app@gmail.com** with the subject line "GDPR Request". We will make reasonable efforts to respond within **30 days**. If you are unsatisfied with our response, you have the right to lodge a complaint with your national supervisory authority.

---

## 10. CCPA — California Residents

If you are a California resident, you have the following rights under the California Consumer Privacy Act:

- **Right to Know**: what personal information we collect, use, and disclose
- **Right to Delete**: request deletion of your personal information
- **Right to Opt-Out of Sale**: we do **not** sell personal information — this right is not applicable
- **Right to Non-Discrimination**: we will never discriminate against you for exercising your privacy rights

We do not sell, share for cross-context behavioral advertising, or otherwise commercially exploit your personal information.

To submit a CCPA request, contact us at **pocketguardian.app@gmail.com** with the subject line "CCPA Request".

---

## 11. Children's Privacy

Pocket Guardian is intended for users **18 years of age and older** and is not directed at children. We do not knowingly collect personal information from:

- Children under 13 (United States — COPPA)
- Children under 16 (European Economic Area — GDPR)
- Minors as defined under applicable local law

If you believe we have inadvertently collected information from a minor, please contact us immediately at **pocketguardian.app@gmail.com**. We will promptly investigate and delete any such information.

---

## 12. Device Permissions

The following Android permissions are requested by Pocket Guardian:

| Permission | Reason |
|-----------|--------|
| `CAMERA` | Capture photos at security events. Can be disabled per event type in Settings. |
| `RECEIVE_BOOT_COMPLETED` | Resume monitoring automatically after device reboot |
| `FOREGROUND_SERVICE` | Maintain the monitoring service in the background |
| `FOREGROUND_SERVICE_CAMERA` | Required on Android 14+ to use the camera from a foreground service |
| `FOREGROUND_SERVICE_SPECIAL_USE` | Required on Android 14+ for a 24/7 security guard foreground service that does not fit standard foreground service types |
| `SYSTEM_ALERT_WINDOW` | Required on certain devices (e.g. Xiaomi HyperOS) to display the camera preview surface while the screen is locked, enabling lock screen photo capture |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Prevent aggressive battery management from stopping the monitoring service |
| `POST_NOTIFICATIONS` | Display a persistent status notification indicating the service is active |
| `READ_PHONE_STATE` | Detect SIM card state changes (removal, insertion, lock, carrier change). Optional — SIM monitoring is silently disabled if this permission is not granted. |
| `USE_FULL_SCREEN_INTENT` | Display the lock screen camera capture window as a full-screen intent on Android 14+ |
| `WAKE_LOCK` | Briefly wake the CPU to process security events and capture photos when the screen is off |
| `REQUEST_DELETE_PACKAGES` | Used in the in-app uninstall flow (Settings → Danger Zone → Remove App) |
| `INTERNET` | Required for Google Drive sync and Firebase Crashlytics. No data is sent unless you explicitly enable Drive sync. |

> **No undeclared permissions are used.** The motion sensor (`TYPE_SIGNIFICANT_MOTION`) is accessed via the standard `SensorManager` API which requires no runtime permission. All permissions are used exclusively for the security monitoring features described in this policy.

---

## 13. Disclaimer of Warranties

**Pocket Guardian is provided "as is" and "as available" without warranty of any kind, express or implied**, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, reliability, or non-infringement.

The developer does not warrant that:

- The application will function without interruption or error
- Every security event will be detected and captured
- The motion sensor will detect every instance of device pickup (sensor sensitivity and behavior vary by device manufacturer and firmware)
- The alarm will sound in all circumstances (depends on device volume settings, Do Not Disturb mode, and media stream availability)
- The active schedule will fire with millisecond precision (subject to Android AlarmManager behavior and battery optimisation settings)
- The application will be compatible with all devices or Android versions
- Data stored by the application will never be lost
- Background service continuity is guaranteed on all devices (some manufacturers aggressively restrict background processes)

---

## 14. Limitation of Liability

**To the fullest extent permitted by applicable law, the developer shall not be liable for any:**

- Direct, indirect, incidental, special, or consequential damages
- Loss of data, missed security events, or device malfunction
- Damages arising from unauthorized access to your device or data despite use of the application
- Legal consequences arising from your use of the application in violation of applicable law

In jurisdictions that do not allow the exclusion or limitation of liability, our liability is limited to the maximum extent permitted by law.

---

## 15. Changes to This Policy

We reserve the right to update this Privacy Policy at any time. When we make material changes, we will:

- Update the **"Last updated"** date at the top of this document
- Display an in-app notice on your next launch

Your continued use of Pocket Guardian after any changes constitutes your acceptance of the revised policy. We encourage you to review this policy periodically. The current version is always available at:  
https://github.com/pocketguardian/pocketguardian/blob/main/docs/privacy-policy.md

---

## 16. Governing Law

This Privacy Policy and any disputes arising from it shall be governed by and construed in accordance with applicable law. Nothing in this policy limits your statutory rights under the consumer protection or data protection laws of your country of residence.

---

## 17. Contact

For any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data:

**Email:** pocketguardian.app@gmail.com

Please include one of the following subject lines as appropriate:

| Subject Line | Use For |
|-------------|---------|
| `Privacy Question` | General privacy inquiries |
| `GDPR Request` | EEA / UK data subject rights requests |
| `CCPA Request` | California privacy rights requests |
| `Data Deletion Request` | Request deletion of your data |

We will make reasonable efforts to respond within **30 days**.

---

*© 2026 Pocket Guardian. All rights reserved.*
