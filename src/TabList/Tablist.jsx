import React from 'react';
import PropTypes from 'prop-types';
import './Tablist.css';
import TabManager from '../Managers/TabManager';

const appIcon = require('../../assets/icon.png');

function TabList({ tabs }) {
    function toggleTab(tabId) {
        return () => {
            TabManager.toggleSelection(tabId);
        };
    }

    return (
        <ul className="tab-list">
            {tabs.map(({ id, title, favIconUrl }) => (
                <li className="tab-list-item" key={id}>
                    <label className="tab-label" htmlFor={`tab-checkbox-${id}`} id={`tab-${id}`}>
                        <img className="tab-fav-icon" src={favIconUrl || appIcon} alt="" />
                        <input type="checkbox" id={`tab-checkbox-${id}`} onChange={toggleTab(id)} />
                        {title}
                    </label>
                </li>
            ))}
        </ul>
    );
}

TabList.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        favIconUrl: PropTypes.string,
    })).isRequired,
};

export default TabList;
