import React, { useState, useEffect } from 'react';
// import Tab from './Tab';
import { getAllTabsInCurrentWindow, closeTabs as closeChromeTabs } from './TabsAPI';
import TabManager from './Managers/TabManager';
import TabList from './TabList';

function App() {
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        getAllTabsInCurrentWindow().then(tabsInWindow => setTabs(tabsInWindow));
    }, []);

    function closeTabs() {
        const selectedTabs = TabManager.getSelection();
        console.log(`closed ${selectedTabs}`);
        closeChromeTabs(selectedTabs);
        setTabs(tabs.filter(tab => !selectedTabs.includes(tab.id)));
        TabManager.clearSelection();
    }

    return (
        <React.Fragment>
            <button type="button" className="close-tabs-button" onClick={closeTabs}>Close Tabs</button>
            <TabList tabs={tabs} />
        </React.Fragment>
    );
}

App.propTypes = {
};

export default App;
