class TabManager {
    constructor() {
        /** @type {number[]} */
        this.selectedTabs = [];
    }

    getSelection() {
        return this.selectedTabs;
    }

    clearSelection() {
        this.selectedTabs = [];
    }

    removeFromSelection(tabId) {
        this.selectedTabs = this.selectedTabs.filter(selectedTabId => selectedTabId !== tabId);
    }

    addToSelection(tabId) {
        this.selectedTabs = [...this.selectedTabs, tabId];
    }

    /**
     * Toggle the selection of a tab
     * @param {number} tabId
     */
    toggleSelection(tabId) {
        if (this.selectedTabs.includes(tabId)) {
            this.removeFromSelection(tabId);
        } else {
            this.addToSelection(tabId);
        }
    }
}

export default new TabManager();
