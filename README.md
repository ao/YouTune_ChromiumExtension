# YouTune - Transform YouTube into an Audio-Focused Platform

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Available-brightgreen)](https://chromewebstore.google.com/detail/youtune/jdkpldbjebmobimbadioblaopknlbokn)
[![Version](https://img.shields.io/badge/version-15.6.3-blue)](https://chromewebstore.google.com/detail/youtune/jdkpldbjebmobimbadioblaopknlbokn)
[![Manifest](https://img.shields.io/badge/manifest-v3-orange)](manifest.json)

Transform YouTube into a distraction-free audio platform! YouTune hides videos, thumbnails, and visual clutter while preserving full audio functionality, perfect for music listening, podcasts, and educational content.

## 🎵 Perfect For

- **Music Listening**: Enjoy YouTube music without video distractions
- **Podcasts & Education**: Focus on audio content without visual clutter  
- **Bandwidth Saving**: Reduce data usage by blocking unwanted video/image content
- **Productivity**: Minimize distractions while studying or working
- **Accessibility**: Create a cleaner, more focused viewing experience

## ✨ Key Features

### Core Functionality
- **Hide/Show Videos**: Toggle video visibility with one click
- **Block Thumbnails**: Remove video preview images across YouTube
- **Hide Avatars**: Remove channel profile pictures and user avatars
- **Visual Clutter Removal**: Clean up YouTube and YouTube Music interfaces
- **Ad Skipper**: Automatically skip YouTube advertisements

### Advanced Controls
- **Quick Access Buttons**: Instant control buttons in YouTube's interface
- **Per-Tab Settings**: Different configurations for each browser tab
- **Per-Page Settings**: Temporary settings that reset when navigating
- **Keyboard Shortcuts**: Use `Ctrl+M` (or `Cmd+M` on Mac) to toggle extension
- **Google Search Integration**: Hide video thumbnails in Google search results

### Customization Options
- **Separate Platform Settings**: Individual controls for YouTube, YouTube Music, and embedded videos
- **Progress Bar Control**: Always-visible progress bars when videos are hidden
- **Control Buttons**: Keep video controls visible even when video is hidden
- **Live Video Quality**: Automatically set live videos to 144p for bandwidth saving
- **Theme Options**: Multiple visual themes for the hidden video interface

## 🚀 Installation

### From Chrome Web Store (Recommended)
1. Visit the [YouTune Chrome Web Store page](https://chromewebstore.google.com/detail/youtune/jdkpldbjebmobimbadioblaopknlbokn)
2. Click "Add to Chrome"
3. Confirm the installation
4. The YouTune icon will appear in your browser toolbar

### Manual Installation (Development)
1. Clone this repository:
   ```bash
   git clone https://github.com/ao/YouTune_ChromiumExtension.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory
5. The extension will be loaded and ready to use

## 🎮 How to Use

### Basic Usage
1. **Click the YouTune icon** in your browser toolbar to open the popup
2. **Toggle the main switch** to enable/disable the extension
3. **Customize settings** for YouTube, YouTube Music, and embedded videos
4. **Use quick access buttons** that appear on YouTube pages for instant control

### Keyboard Shortcuts
- `Ctrl+M` (Windows/Linux) or `Cmd+M` (Mac): Toggle extension for current tab

### Advanced Configuration
1. **Right-click the extension icon** and select "Options"
2. **Configure detailed settings** for each platform
3. **Set up quick access buttons** and advanced features
4. **Customize themes** and visual preferences

## ⚙️ Configuration Options

### Platform-Specific Settings
- **YouTube**: Full control over videos, thumbnails, avatars, ads, and other images
- **YouTube Music**: Specialized settings for the music platform
- **Embedded Videos**: Control extension behavior on third-party sites
- **Google Search**: Hide video thumbnails in search results

### Advanced Features
- **Progress Bar**: Always visible progress bar when videos are hidden
- **Control Buttons**: Keep playback controls visible
- **Live Video Quality**: Auto-set live streams to 144p
- **Continue Watching Prompt**: Disable YouTube's pause prompts
- **Extension Logo**: Show/hide YouTune branding on videos

## 🔒 Privacy & Security

YouTune is designed with privacy as a core principle:

- **No Data Collection**: Zero user data is collected or transmitted
- **Local Storage Only**: All settings stored locally in your browser
- **No External Servers**: Extension operates entirely offline after installation
- **No Tracking**: No analytics, telemetry, or user behavior monitoring
- **Open Source**: Transparent code available for review

### Permissions Explained
- **declarativeNetRequest**: Blocks video/image requests to hide visual content
- **tabs**: Manages per-tab settings and extension icon states  
- **storage**: Stores your preferences locally in the browser
- **unlimitedStorage**: Handles extensive configuration options
- **Host permissions**: Modifies YouTube and Google pages locally

## 🛠️ Development

### Project Structure
```
youtune-chromium-extension/
├── manifest.json              # Extension manifest (v3)
├── src/
│   ├── background/            # Service worker
│   ├── content/               # Content scripts
│   ├── popup/                 # Extension popup
│   └── options/               # Options page
├── styles/                    # CSS files
├── assets/                    # Icons and images
├── _locales/                  # Internationalization
└── config/                    # Configuration files
```

### Building and Testing
1. Make your changes to the source files
2. Test in Chrome by loading the unpacked extension
3. Verify functionality across YouTube, YouTube Music, and Google Search
4. Check console for any errors or warnings

### Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📋 Browser Compatibility

- **Chrome**: Fully supported (Manifest v3)
- **Chromium-based browsers**: Compatible (Edge, Brave, Opera, etc.)
- **Minimum Chrome version**: 88+

## 🐛 Troubleshooting

### Common Issues

**Extension not working on YouTube**
- Refresh the YouTube page after enabling the extension
- Check if the extension is enabled for the current tab
- Verify permissions are granted in Chrome settings

**Settings not saving**
- Ensure Chrome has sufficient storage permissions
- Try disabling and re-enabling the extension
- Check Chrome's extension management page

**Quick access buttons not appearing**
- Enable "Quick access buttons" in the options page
- Refresh the YouTube page
- Check if other extensions are conflicting

### Getting Help
1. Check the [Chrome Web Store reviews](https://chromewebstore.google.com/detail/youtune/jdkpldbjebmobimbadioblaopknlbokn) for similar issues
2. Review the extension options page for configuration help
3. Disable other YouTube-related extensions to check for conflicts

## 📈 Version History

- **v15.6.3** (Current): Latest stable release with Manifest v3 support
- **First Release**: May 2, 2024

## 🙏 Acknowledgments

- Thanks to all users who have provided feedback and suggestions
- Special thanks to the Chrome extension development community
- Inspired by the need for distraction-free content consumption

## 🔗 Links

- **[Chrome Web Store](https://chromewebstore.google.com/detail/youtune/jdkpldbjebmobimbadioblaopknlbokn)** - Install YouTune
- **[Privacy Policy](PRIVACY_PRACTICES.md)** - Detailed privacy information

---

**Transform your YouTube experience today - focus on the content that matters most!** 🎵

[Install from Chrome Web Store](https://chromewebstore.google.com/detail/youtune/jdkpldbjebmobimbadioblaopknlbokn)