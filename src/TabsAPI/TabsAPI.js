export const getAllTabsInWindow = windowId => (
    new Promise((resolve, reject) => {
        try {
            chrome.tabs.getAllInWindow(windowId, (tabs) => {
                const tabsWithIntegerIds = tabs.map(tab => Object.assign(tab,
                    { id: Number(tab.id) }));
                resolve(tabsWithIntegerIds);
            });
        } catch (err) {
            reject(err);
        }
    })
);

export const getAllTabsInCurrentWindow = () => (
    getAllTabsInWindow(chrome.windows.WINDOW_ID_CURRENT)
);

export const closeTabs = (tabIds) => {
    chrome.tabs.remove(tabIds);
};

export const getFavIcon = 2;
