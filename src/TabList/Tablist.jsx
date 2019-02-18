import React, { useState, useEffect } from 'react';
// import Tab from './Tab';
import { getAllTabsInCurrentWindow, closeTabs as closeChromeTabs } from '../TabsAPI';
import './Tablist.css';

function TabList() {
    const [tabs, setTabs] = useState([]);
    const [selectedTabs, setSelectedTabs] = useState([]);

    useEffect(() => {
        getAllTabsInCurrentWindow().then(tabsInWindow => setTabs(tabsInWindow));
    }, []);

    function toggleTab(tabId) {
        return () => {
            if (selectedTabs.includes(tabId)) {
                setSelectedTabs(selectedTabs.filter(selectedTabId => selectedTabId !== tabId));
            } else {
                setSelectedTabs([
                    ...selectedTabs,
                    tabId,
                ]);
            }
        };
    }

    function closeTabs() {
        console.log(`closed ${selectedTabs}`);
        closeChromeTabs(selectedTabs);
        setTabs(tabs.filter(tab => !selectedTabs.includes(tab.id)));
        setSelectedTabs([]);
    }

    return (
        <React.Fragment>
            <button type="button" className="close-tabs-button" onClick={closeTabs}>Close Tabs</button>
            <ul className="tab-list">
                {tabs.map(({ id, title }) => (
                    <li key={id}>
                        <label className="tab-label" htmlFor={`tab-checkbox-${id}`} id={`tab-${id}`}>
                            <input type="checkbox" id={`tab-checkbox-${id}`} onChange={toggleTab(id)} />
                            {title}
                        </label>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}

TabList.propTypes = {
};

export default TabList;
