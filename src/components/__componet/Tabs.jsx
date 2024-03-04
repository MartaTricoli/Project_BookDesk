import React, { useState } from 'react';
import Torta from './torta';
import BarChart from './AnnualReads';
import { DevAtWork } from './DevAtWork';

const Tabs = () => {
  const [openTab, setOpenTab] = useState(null);

  const toggleTab = (tabId) => {
    setOpenTab((prevTab) => (prevTab === tabId ? null : tabId));
  };

  return (
    <div className="mb-6">
      <ul id='upTabs' className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 justify-center">
        <li role="presentation" className={`flex-grow basis-0 text-center ${openTab === 'tabs-home02' ? 'bg-gray-200' : ''}`}>
          <button
            onClick={() => toggleTab('tabs-home02')}
            className="my-2 flex block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent mx-auto"
          >
            Le mie letture
          </button>
        </li>
        <li role="presentation" className={`flex-grow basis-0 text-center ${openTab === 'tabs-profile02' ? 'bg-gray-200' : ''}`}>
          <button
            onClick={() => toggleTab('tabs-profile02')}
            className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-400 dark:hover:bg-transparent"
          >
            Le mie letture ne gli anni
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
          <Torta />
        )}
        {openTab === 'tabs-profile02' && (
          <div className="transition-opacity duration-150 ease-linear opacity-100" id="tabs-profile02">
            <BarChart />
          </div>
        )}
        {openTab === 'tabs-messages02' && (
          <div className="transition-opacity duration-150 ease-linear opacity-100" id="tabs-messages02">
            <DevAtWork />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
