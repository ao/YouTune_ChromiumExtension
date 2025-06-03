let sitesIDs = ["youtube", "youtube_music", "embedded", "google_search"];

// Helper function to get message with fallback
function getMessage(key) {
  const fallbackMessages = {
    "youtube": "YouTube",
    "youtube_music": "YouTube Music",
    "embedded": "Other sites",
    "google_search_full": "Google search"
  };
  
  if (typeof chrome !== 'undefined' && chrome.i18n && chrome.i18n.getMessage) {
    return chrome.i18n.getMessage(key) || fallbackMessages[key] || key;
  }
  
  return fallbackMessages[key] || key;
}

let sitesInfo = {
  "youtube": {
    "name": getMessage("youtube"),
    "options": ["video", "thumbnails", "avatars", "adblocker", "other_images"]
  },
  "youtube_music": {
    "name": getMessage("youtube_music"),
    "options": ["video", "thumbnails", "avatars", "adblocker", "other_images"]
  },
  "embedded": {
    "name": getMessage("embedded"),
    "options": ["video", "thumbnails", "avatars", "adblocker"]
  },
  "google_search": {
    "name": getMessage("google_search_full"),
    "options": []
  }
};

init();

function init() {
  initializeI18n();
  addTemplates();
  initializeListeners();
  initializeOptions();
}

function initializeI18n() {
  // Fallback translations for when chrome.i18n is not available
  const fallbackMessages = {
    "enabledByDefault": "Enabled by default",
    "enabledByDefault_text": "When you open a new tab the extension will be enabled by default",
    "videoPlayer": "Video player",
    "hideLogo": "Remove extension's logo from videos",
    "hideLogo_text": "Remove YouTune logo that it is added on the videos",
    "showVideoThumbnail": "Show video thumbnail in video player",
    "showVideoThumbnail_text": "Display the video thumbnail in the video player when the video is hidden",
    "continueWatchingPrompt_title": "Continue watching prompt",
    "continueWatchingPrompt_option": "Disable continue watching prompt",
    "continueWatchingPrompt_text": "Disable the 'Video Paused. Continue Watching?' prompt when the option Video is enabled",
    "advanced_options": "Advanced options",
    "progress_bar_title": "Always visible progress bar & control buttons",
    "progress_bar": "Always visible progress bar",
    "progress_bar_text": "The progress bar will always be visible on YouTube videos (not emebedded) when the option Video is enabled for YouTube",
    "control_buttons": "Always visible control buttons",
    "control_buttons_text": "Control buttons (play, volume etc) will be always visible along with progress bar",
    "tempOptionTitle": "Popup* options",
    "controlFromPopup": "Control the extension from the popup",
    "controlFromPopupDescription": "Allow enabling/disabling the extension from the popup (and the shortcuts)",
    "tempOption": "Configuration for one page",
    "tempOptionDescription": "Enable/Disable the extension for only one page from the popup",
    "optionsMenuOption": "Change of options for current tab (and page)",
    "optionsMenuOptionDescription": "Enable/Disable the options of YouTube, YouTube Music, and Other Sites for the current tab (and page) from the popup",
    "popupExplanation": "*the window that appears when you click the extension's icon",
    "quickAccessButtons": "Quick access buttons",
    "quickAccessButtonsVideo": "Video quick access button",
    "quickAccessButtonsVideoDescription": "Adds a button on YouTube video toolbar from which you can hide/show the video (these settings will only apply to the current page)",
    "quickAccessButtonsImages": "Images quick access button",
    "quickAccessButtonsImagesDescription": "Adds a button on YouTube topbar, from which you can hide/show the images of the page (these settings will only apply to the current page)",
    "liveVideoTitle": "Live videos",
    "live_144": "Live video quality to 144p",
    "live_144_text": "Set automatically the quality of live videos to 144p when the option Video is enabled on YouTube",
    "youtube": "YouTube",
    "youtubeDescription": "Enable or disable the extension and the corresponding options for YouTube",
    "youtube_music": "YouTube Music",
    "youtube_musicDescription": "Enable or disable the extension and the corresponding options for YouTube Music",
    "embedded": "Other sites",
    "embeddedDescription": "Enable or disable the extension and the corresponding options for YouTube videos embedded in sites",
    "google_search_full": "Google search",
    "google_searchDescription": "Hides various images in Google search such as the video thumbnails",
    "video": "Video",
    "videoDescription": "Hides the video",
    "thumbnails": "Thumbnails",
    "thumbnailsDescription": "Hides the video thumbnails",
    "avatars": "Avatars",
    "avatarsDescription": "Hides the images of channel/user avatars",
    "other_images": "Other images",
    "other_imagesDescription": "Hides various other images (channel art etc)",
    "adblocker": "Ad Skipper",
    "adblockerDescription": "Skips the YouTube ads",
    "options": "Options",
    "about": "About",
    "contact": "Contact"
  };

  // Initialize internationalization by replacing data-i18n attributes with translated text
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const messageKey = element.getAttribute('data-i18n');
    let message = '';
    
    // Try to get message from chrome.i18n first, then fallback to our translations
    if (typeof chrome !== 'undefined' && chrome.i18n && chrome.i18n.getMessage) {
      message = chrome.i18n.getMessage(messageKey);
    }
    
    if (!message && fallbackMessages[messageKey]) {
      message = fallbackMessages[messageKey];
    }
    
    if (message) {
      if (element.innerHTML.includes('<')) {
        // If element contains HTML, preserve it and only replace text content
        element.innerHTML = element.innerHTML.replace(/^[^<]*/, message);
      } else {
        element.textContent = message;
      }
    }
  });
}

function addTemplates() {
  let code = sitesIDs.map(id => {
    return getSiteHTML(id, sitesInfo[id])
  }).join("");
  let childNodes = new DOMParser().parseFromString(code, "text/html").body.childNodes;
  childNodes.forEach(node => {
    document.querySelector("#addOptions").append(node);
  });
  
  // Initialize i18n for the newly added elements using the same fallback approach
  const fallbackMessages = {
    "youtube": "YouTube",
    "youtubeDescription": "Enable or disable the extension and the corresponding options for YouTube",
    "youtube_music": "YouTube Music",
    "youtube_musicDescription": "Enable or disable the extension and the corresponding options for YouTube Music",
    "embedded": "Other sites",
    "embeddedDescription": "Enable or disable the extension and the corresponding options for YouTube videos embedded in sites",
    "google_search_full": "Google search",
    "google_searchDescription": "Hides various images in Google search such as the video thumbnails",
    "video": "Video",
    "videoDescription": "Hides the video",
    "thumbnails": "Thumbnails",
    "thumbnailsDescription": "Hides the video thumbnails",
    "avatars": "Avatars",
    "avatarsDescription": "Hides the images of channel/user avatars",
    "other_images": "Other images",
    "other_imagesDescription": "Hides various other images (channel art etc)",
    "adblocker": "Ad Skipper",
    "adblockerDescription": "Skips the YouTube ads"
  };

  document.querySelectorAll('#addOptions [data-i18n]').forEach(element => {
    const messageKey = element.getAttribute('data-i18n');
    let message = '';
    
    // Try to get message from chrome.i18n first, then fallback to our translations
    if (typeof chrome !== 'undefined' && chrome.i18n && chrome.i18n.getMessage) {
      message = chrome.i18n.getMessage(messageKey);
    }
    
    if (!message && fallbackMessages[messageKey]) {
      message = fallbackMessages[messageKey];
    }
    
    if (message) {
      if (element.innerHTML.includes('<')) {
        // If element contains HTML, preserve it and only replace text content
        element.innerHTML = element.innerHTML.replace(/^[^<]*/, message);
      } else {
        element.textContent = message;
      }
    }
  });
}

function getSiteHTML(id, item) {
  return `
  <div class="pageBody" id="${id}">
    <div class="settings setbord optionsGroupTitle">
      <div class="descr_toggle">
        <div class="settingsText">
          <div class="settingsHead"><span data-i18n="${id}"></span></div>
          <div class="settingsDescription" data-i18n="${id}Description"></div>
        </div>
        <div class="toggleButton">
          <label class="switch">
            <input type="checkbox" name="${id}" class="groupCheckboxes">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="optionsContainer">
    ${item.options.map(option => {
    return `
          <div class="settings setbord">
            <div class="descr_toggle">
              <ul class="settingsTextIcon">
                <li class="settingsText">
                  <div class="settingsHead"><span data-i18n="${option}"></span></div>
                  <div class="settingsDescription" data-i18n="${option}Description"></div>
                </li>
              </ul>
              <div class="toggleButton">
                <label class="switch">
                  <input type="checkbox" name="${id + "_" + option}" class="optionsCheckboxes">
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        `;
  }).join("")
    }
    </div>
  </div>`
}

function initializeListeners() {
  document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    let isGroupCheckbox = checkbox.classList.contains("groupCheckboxes");
    let optionName = checkbox.name;

    checkbox.addEventListener("change", function () {
      detectChange(isGroupCheckbox, optionName, this.checked);
    });
  });
}

function initializeOptions() {
  // Check if chrome.storage is available
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(null, storedValues => {
      let checkboxes = document.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach(checkbox => {
        checkbox.checked = storedValues[checkbox.name];
        checkbox.dispatchEvent(new Event("change"));
      });
    });
  } else {
    // Fallback: use localStorage or default values
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox => {
      try {
        const stored = localStorage.getItem(checkbox.name);
        checkbox.checked = stored === 'true';
      } catch (e) {
        // If localStorage is not available, use default values
        checkbox.checked = false;
      }
      checkbox.dispatchEvent(new Event("change"));
    });
  }
}

function detectChange(isGroupCheckbox, optionName, checked) {
  if (isGroupCheckbox) groupCheckboxChange(optionName, checked);
  
  // Check if chrome.storage is available
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(null, storedValues => {
      if (storedValues[optionName] != undefined) {
        let newValues = {};
        newValues[optionName] = checked;
        if (!checked) {
          switch (optionName) {
            case "popup_current_page":
              newValues["sspages"] = [];
              break;
            case "quick_access_buttons_images":
              newValues.qapages = removeQAPagesRecords(storedValues.qapages, "images");
              break;
            case "quick_access_buttons_video":
              newValues.qapages = removeQAPagesRecords(storedValues.qapages, "video");
              break;
            default:
              break;
          }
        }
        chrome.storage.local.set(newValues);
      }
    });
  } else {
    // Fallback: use localStorage
    try {
      localStorage.setItem(optionName, checked.toString());
    } catch (e) {
      // If localStorage is not available, just continue without storing
      console.log('Storage not available, settings will not persist');
    }
  }
}

function removeQAPagesRecords(qapages, field) {
  for (const key in qapages) {
    delete qapages[key][field];
    if (Object.keys(qapages[key]).length === 0) delete qapages[key];
  }
  return qapages;
}

function groupCheckboxChange(optionName, checked) {
  let optionsContainer = document.querySelector("#" + optionName + " .optionsContainer");
  if (checked) optionsContainer.classList.add("visibleOptions");
  else optionsContainer.classList.remove("visibleOptions");
}