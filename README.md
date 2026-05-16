# Pocket Guardian

**Silent device security monitor for Android.**

Pocket Guardian silently captures a photo every time someone touches your phone without permission. Wrong PIN, SIM swapped, charger unplugged, device picked up — every event logged with a photo. No sound. No flash. The intruder never knows.

[![Get it on Google Play](https://img.shields.io/badge/Google%20Play-Download-00e5a0?style=flat-square&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.pocketguardian.app)
[![Android](https://img.shields.io/badge/Android-8.0%2B-3ddc84?style=flat-square&logo=android&logoColor=white)](https://play.google.com/store/apps/details?id=com.pocketguardian.app)

---

## 📱 App

| | |
|---|---|
| **Package** | `com.pocketguardian.app` |
| **Platform** | Android 8.0+ |
| **Download** | [Google Play](https://play.google.com/store/apps/details?id=com.pocketguardian.app) |
| **Contact** | pocketguardian.app@gmail.com |
| **Privacy Policy** | [docs/privacy-policy.md](docs/privacy-policy.md) |

---

## ✨ Photo triggers (11 total)

Each trigger has an independent log switch and photo switch — log without photo, or shoot without logging.

| # | Trigger | Description |
|---|---------|-------------|
| ① | Wrong PIN on lock screen | Silent selfie on incorrect PIN, pattern, or password. Requires Device Admin. |
| ② | SIM card removed / inserted | Photo on any SIM card state change |
| ③ | SIM carrier changed | Detects SIM swap attacks before you notice |
| ④ | Phone picked up while locked | Photo before any PIN is entered |
| ⑤ | Device pickup (motion sensor) | Hardware `TYPE_SIGNIFICANT_MOTION` sensor — no permission required |
| ⑥ | Charger disconnected | Photo when unplugged from outlet or power bank |
| ⑦ | Successful unlock | Records who opened the phone and exactly when |
| ⑧ | Charger connected | Silent photo on connection |
| ⑨ | Headset connected / disconnected | Photo on 3.5mm or USB-C headset state change |
| ⑩ | Wrong PIN inside app | Catches anyone probing Pocket Guardian itself |
| ⑪ | Successful app login | Full audit trail of security app access |

---

## 🔑 Key features

- **Device Administrator** — intercepts wrong PINs directly on the Android lock screen via `DeviceAdminReceiver`. Works even when fingerprint or Face ID is active
- **SIM swap detection** — catches the #1 phone theft technique
- **Watchdog 24/7** — AlarmManager heartbeat every 5 minutes. Survives forced kills, Doze mode, battery optimization, and reboots. Tested on Xiaomi HyperOS
- **Silent selfie** — camera fires in under one second, no sound, no flash, no notification
- **Choose your camera** — front camera for intruder portrait, rear for surroundings
- **Photo quality modes** — Eco (40% JPEG) / Standard (75%) / High (95%)
- **Photo overlays** — date/time, device model, Android ID burned onto each photo at capture time
- **Filter by type and date** — isolate any event type or time range in the event log
- **Statistics screen** — bar charts by day, hourly activity breakdown, peak hour indicator
- **PBKDF2 PIN protection** — PBKDF2-HMAC-SHA1, 10 000 iterations, 16-byte random salt. Never stored in plain text
- **Secret recovery question** — regain access without factory reset or data loss
- **Escalating lockout** — brute-force protection with increasing delays after failed attempts
- **App alias** — rename the app in the notification shade and login screen to any system-looking name

### Premium features (one-time purchase, no subscription)

| Feature | Description |
|---------|-------------|
| 🔔 Alarm mode | Full-volume ringtone on any event. Stops only when you open the app |
| 🕐 Active schedule | Monitoring only during selected hours and days of the week |
| ☁ Google Drive backup | Photos and log synced after each event. Data safe even if phone is lost, stolen, or wiped |

---

## 🛠 Technical details

| | |
|---|---|
| **Min SDK** | 26 (Android 8.0) |
| **Target SDK** | 35 (Android 15) |
| **Language** | Java |
| **Camera** | CameraX + Camera2 API |
| **Background** | Foreground Service (`specialUse`) + AlarmManager watchdog |
| **Crash reporting** | Firebase Crashlytics (anonymous, disabled in debug builds) |
| **Billing** | Google Play Billing Library |
| **Drive sync** | Google Sign-In (`drive.file` scope only) |

### Permissions used

| Permission | Reason |
|-----------|--------|
| `CAMERA` | Capture photos at security events |
| `FOREGROUND_SERVICE` + `FOREGROUND_SERVICE_CAMERA` + `FOREGROUND_SERVICE_SPECIAL_USE` | Background monitoring service |
| `RECEIVE_BOOT_COMPLETED` | Resume monitoring after reboot |
| `READ_PHONE_STATE` | Detect SIM card state changes |
| `SYSTEM_ALERT_WINDOW` | Camera preview while screen is locked (required on Xiaomi HyperOS) |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | Prevent OS from killing the monitoring service |
| `POST_NOTIFICATIONS` | Persistent foreground service notification |
| `USE_FULL_SCREEN_INTENT` | Lock screen camera window on Android 14+ |
| `WAKE_LOCK` | Briefly wake CPU to process events |
| `INTERNET` | Firebase Crashlytics + optional Google Drive sync |

> The motion sensor (`TYPE_SIGNIFICANT_MOTION`) requires **no runtime permission** — accessed via standard `SensorManager` API.

---

## 🔒 Privacy

- All photos and event logs stored **locally on your device only**, in Android's private app sandbox
- **Nothing transmitted to any developer server** — no backend, no database, no cloud storage operated by the developer
- Optional Google Drive backup uses `drive.file` scope — can only read/write files Pocket Guardian itself created
- Firebase Crashlytics receives only anonymous crash data — no photos, no logs, no PIN
- Android ID photo overlay is **disabled by default** and only burns onto photos if explicitly enabled
- **No ads. No tracking. No account required.**

Full privacy policy: [docs/privacy-policy.md](docs/privacy-policy.md)

---

## 📋 Compatibility

Android 8.0+. Tested on Xiaomi HyperOS, Samsung One UI, Google Pixel, OnePlus OxygenOS, OPPO ColorOS, Motorola, Sony Xperia.

---

## 📬 Contact

**Email:** pocketguardian.app@gmail.com

---

*© 2026 Pocket Guardian. All rights reserved.*