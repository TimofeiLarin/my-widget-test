import React from 'react';

interface Props {
  name: string;
}

const SvgSelector = ({ name }: Props) => {
  switch (name) {
    case 'logo':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M10 3H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM9 9H5V5h4v4zM3 20a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1H4a1 1 0 00-1 1v6zm2-5h4v4H5v-4zm15 6a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h6zm-5-6h4v4h-4v-4zm2.707-12.707a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414l4 4a.997.997 0 001.414 0l4-4a1 1 0 000-1.414l-4-4zM17 9.586L14.414 7 17 4.414 19.586 7 17 9.586z"
            clip-rule="evenodd"
          />
        </svg>
      );
    case 'pencil':
      return (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48px"
          height="48px"
          viewBox="0 0 485.219 485.22"
        >
          <g>
            <path
              d="M467.476,146.438l-21.445,21.455L317.35,39.23l21.445-21.457c23.689-23.692,62.104-23.692,85.795,0l42.886,42.897
              C491.133,84.349,491.133,122.748,467.476,146.438z M167.233,403.748c-5.922,5.922-5.922,15.513,0,21.436
              c5.925,5.955,15.521,5.955,21.443,0L424.59,189.335l-21.469-21.457L167.233,403.748z M60,296.54c-5.925,5.927-5.925,15.514,0,21.44
              c5.922,5.923,15.518,5.923,21.443,0L317.35,82.113L295.914,60.67L60,296.54z M338.767,103.54L102.881,339.421
              c-11.845,11.822-11.815,31.041,0,42.886c11.85,11.846,31.038,11.901,42.914-0.032l235.886-235.837L338.767,103.54z
              M145.734,446.572c-7.253-7.262-10.749-16.465-12.05-25.948c-3.083,0.476-6.188,0.919-9.36,0.919
              c-16.202,0-31.419-6.333-42.881-17.795c-11.462-11.491-17.77-26.687-17.77-42.887c0-2.954,0.443-5.833,0.859-8.703
              c-9.803-1.335-18.864-5.629-25.972-12.737c-0.682-0.677-0.917-1.596-1.538-2.338L0,485.216l147.748-36.986
              C147.097,447.637,146.36,447.193,145.734,446.572z"
            />
          </g>
        </svg>
      );
    case 'delete':
      return (
        <svg
          height="128px"
          width="128px"
          enable-background="new 0 0 32 32"
          id="Editable-line"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="  M25,10H7v17c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V10z"
            fill="none"
            id="XMLID_194_"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            d="  M20,7h-8V5c0-1.105,0.895-2,2-2h4c1.105,0,2,0.895,2,2V7z"
            fill="none"
            id="XMLID_193_"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            d="  M28,10H4V8c0-0.552,0.448-1,1-1h22c0.552,0,1,0.448,1,1V10z"
            fill="none"
            id="XMLID_192_"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            fill="none"
            id="XMLID_191_"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="13"
            x2="19"
            y1="16"
            y2="22"
          />
          <line
            fill="none"
            id="XMLID_190_"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="13"
            x2="19"
            y1="22"
            y2="16"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default SvgSelector;