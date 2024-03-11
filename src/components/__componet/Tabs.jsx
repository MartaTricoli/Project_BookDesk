import React, { useState } from 'react';
import { DevAtWork } from './DevAtWork';
import PersonalQuotes from './PersonalQuotes';

import notebook from "../../assets/LandingPage/landingbg-light.jpg"

const Tabs = () => {
  const [openTab, setOpenTab] = useState(null);

  const toggleTab = (tabId) => {
    setOpenTab((prevTab) => (prevTab === tabId ? null : tabId));
  };

  return (
    <div className="mb-6">
      <ul id='upTabs' className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 justify-center">
        <li role="presentation" className={`flex-grow basis-0 text-center ${openTab === 'tabs-home02' ? 'bg-gray-200 dark:bg-new_dark_blue' : ''}`}>
          <button
            onClick={() => toggleTab('tabs-home02')}
            className="my-2 flex block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-black dark:text-white hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent mx-auto"
          >
            Le mie citazioni preferite
          </button>
        </li>
        <li role="presentation" className={`flex-grow basis-0 text-center ${openTab === 'tabs-profile02' ? 'bg-gray-200 dark:bg-new_dark_blue' : ''}`}>
          <button
            onClick={() => toggleTab('tabs-profile02')}
            className="my-2 flex block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-black dark:text-white hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent mx-auto"
          >
            i miei appunti
          </button>
        </li>
        <li role="presentation" className={`flex-grow basis-0 text-center ${openTab === 'tabs-messages02' ? 'bg-gray-200 dark:bg-new_dark_blue' : ''}`}>
          <button
            onClick={() => toggleTab('tabs-messages02')}
            className="my-2 flex block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-black dark:text-white hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent mx-auto"
          >
            Messages
          </button>
        </li>
      </ul>

      <div id='openedTabs' className='flex justify-center'>
        {openTab === 'tabs-home02' && (
          <div className="container mx-auto p-4 flex justify-center h-auto relative bg-center"
            style={{ backgroundImage: `url(${notebook}) `}}
          >
        <div className='flex justify-center' id="tabs-profile02">
            <DevAtWork />
          </div>

          </div>
        )}
        {openTab === 'tabs-profile02' && (
          <div className='flex justify-center' id="tabs-profile02">
            <DevAtWork />
          </div>
        )}
        {openTab === 'tabs-messages02' && (
          <div className='flex justify-center' id="tabs-messages02">
            <DevAtWork />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
