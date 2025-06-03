# YouTune Chrome Extension - Privacy Practices Documentation

## Single Purpose Description

YouTune transforms YouTube into an audio-focused platform by hiding videos and visual distractions, creating a distraction-free music and content listening experience. The extension allows users to selectively hide video content, thumbnails, avatars, and other visual elements while maintaining full audio functionality.

## Permission Justifications

### 1. declarativeNetRequest Permission

**Purpose**: Block specific network requests to hide visual content (videos, images, thumbnails) while preserving audio functionality.

**Justification**: 
- Blocks video streams from `*.googlevideo.com` when users enable video hiding
- Blocks image requests from YouTube image servers (`i9.ytimg.com`, `i1.ytimg.com`, `yt3.ggpht.com`, etc.) when users hide thumbnails/avatars
- Allows selective content filtering based on user preferences
- Essential for the extension's core functionality of creating an audio-focused YouTube experience
- No data is collected or transmitted - only blocks unwanted content requests

### 2. Host Permissions (YouTube and Google domains)

**Purpose**: Inject content scripts and styles to modify the visual appearance of YouTube and Google Search pages.

**Justification**:
- YouTube domains (`*.youtube.com`, `*.youtube-nocookie.com`, `music.youtube.com`): Required to hide video players, thumbnails, avatars, and other visual elements
- Google Search domains (extensive list of international Google domains): Required to hide video thumbnails in search results when the Google Search option is enabled
- Content scripts modify page appearance locally without sending data externally
- Necessary for the extension's primary function of visual content filtering

### 3. storage Permission

**Purpose**: Store user preferences and extension settings locally in the browser.

**Justification**:
- Saves user configuration options (which visual elements to hide/show)
- Stores per-tab and per-page temporary settings
- Maintains extension state across browser sessions
- All data is stored locally - no data is transmitted to external servers
- Essential for preserving user customization and preferences

### 4. unlimitedStorage Permission

**Purpose**: Store extensive user preferences without storage quota limitations.

**Justification**:
- Required due to the large number of configuration options (YouTube, YouTube Music, embedded videos, Google Search, etc.)
- Stores settings for multiple domains and per-tab/per-page configurations
- Prevents data loss due to storage quota limitations
- All storage remains local to the user's browser

### 5. tabs Permission

**Purpose**: Manage extension functionality on a per-tab basis and update extension icon states.

**Justification**:
- Enables per-tab configuration (users can enable/disable extension for specific tabs)
- Updates extension icon to reflect current tab's extension status
- Manages tab-specific settings and temporary page configurations
- Required for keyboard shortcuts (Ctrl+M) to toggle extension on current tab
- No browsing data is collected or transmitted

## Data Usage and Privacy Compliance

### Data Collection
- **No user data is collected or transmitted externally**
- All user preferences and settings are stored locally in the browser using Chrome's storage API
- No analytics, tracking, or telemetry is implemented
- No network requests are made to external servers for data collection

### Data Storage
- User preferences are stored locally using Chrome's `chrome.storage.local` API
- Settings include: enabled/disabled state, visual element preferences, per-tab configurations
- Data never leaves the user's device
- Users can clear all extension data through Chrome's extension management interface

### Remote Code
- **No remote code is executed**
- All extension code is packaged within the extension bundle
- No external scripts are loaded or executed
- All functionality is self-contained within the extension package

### Third-Party Services
- No third-party services are used for data collection or analytics
- No external APIs are called for functionality
- Extension operates entirely offline after installation

## Compliance with Developer Program Policies

This extension complies with Chrome Web Store Developer Program Policies:

1. **Single Purpose**: Clearly focused on transforming YouTube into an audio-focused platform
2. **User Benefit**: Provides distraction-free content consumption and bandwidth savings
3. **Privacy**: No data collection, all processing is local
4. **Transparency**: Open about functionality and permissions usage
5. **User Control**: Users have full control over which visual elements to hide/show

## User Rights and Control

Users maintain full control over:
- Which visual elements to hide or show
- Per-tab and per-page settings
- Extension enable/disable state
- All stored preferences and settings
- Complete data removal through Chrome's extension management

## Contact Information

For privacy-related questions or concerns, users can contact the developer through the Chrome Web Store listing or the extension's support channels.

---

**Last Updated**: December 2024
**Extension Version**: 15.6.3