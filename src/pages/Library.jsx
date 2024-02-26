import React, { useState } from 'react';

const Tabs = () => {
  const [openTab, setOpenTab] = useState(null);

  const toggleTab = (tabId) => {
    setOpenTab((prevTab) => (prevTab === tabId ? null : tabId));
  };

  return (
    <div className="mb-6">
      <ul id='upTabs' className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0">
        <li role="presentation" className={`flex-grow basis-0 text-center ${openTab === 'tabs-home02' ? 'bg-gray-200' : ''}`}>
          <button
            onClick={() => toggleTab('tabs-home02')}
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent"
          >
            Home
          </button>
        </li>
        <li role="presentation" className={`flex-grow basis-0 text-center ${openTab === 'tabs-profile02' ? 'bg-gray-200' : ''}`}>
          <button
            onClick={() => toggleTab('tabs-profile02')}
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent"
          >
            Profile
          </button>
        </li>
        <li role="presentation" className={`flex-grow basis-0 text-center ${openTab === 'tabs-messages02' ? 'bg-gray-200' : ''}`}>
          <button
            onClick={() => toggleTab('tabs-messages02')}
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent"
          >
            Messages
          </button>
        </li>
      </ul>

      <div id='openedTabs' className='flex justify-center'>
        {openTab === 'tabs-home02' && (
          <div className="transition-opacity duration-150 ease-linear opacity-100" id="tabs-home02">
            Tab 1 content
          </div>
        )}
        {openTab === 'tabs-profile02' && (
          <div className="transition-opacity duration-150 ease-linear opacity-100" id="tabs-profile02">
            Tab 2 content
          </div>
        )}
        {openTab === 'tabs-messages02' && (
          <div className="transition-opacity duration-150 ease-linear opacity-100" id="tabs-messages02">
            Tab 3 content
            Tab 3 content
            Tab 3 content
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
