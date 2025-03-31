const icons = {
  flask: (
    <>
      <path
        d="M6.61002 2H8.00002V8.81L3.47002 17.08C3.26523 17.6318 3.19691 18.2249 3.27089 18.8088C3.34488 19.3927 3.55896 19.95 3.8949 20.4333C4.23083 20.9166 4.67865 21.3115 5.20017 21.5843C5.7217 21.8571 6.30145 21.9997 6.89001 22H17.11C17.6986 21.9997 18.2783 21.8571 18.7999 21.5843C19.3214 21.3115 19.7692 20.9166 20.1051 20.4333C20.4411 19.95 20.6552 19.3927 20.7291 18.8088C20.8031 18.2249 20.7348 17.6318 20.53 17.08L16 8.81V2H17.42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.71 15H15.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.71 18.02H15.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.03003 2H15.97"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  location: (
    <>
      <path
        d="M19 20C20.25 20 24 17.2 24 13.3333C24 10.4 21.9167 8 19 8C16.0833 8 14 10.4 14 13.3333C14 17.2 17.75 20 19 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13.5C19.2761 13.5 19.5 13.2761 19.5 13C19.5 12.7239 19.2761 12.5 19 12.5C18.7239 12.5 18.5 12.7239 18.5 13C18.5 13.2761 18.7239 13.5 19 13.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2857 20C4.02857 20 3 18.5 3 11C3 3.5 5.05877 2 12.2645 2C18 2 19.5 3 20 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  users: (
    <>
      <path
        d="M18 17.9167C18 19.1912 15 20 12 20C8.5 20 6 19.1912 6 17.9167C6 16.0577 9 15 12 15C15 15 18 16.25 18 17.9167Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 17.3339C21.5449 17.0376 22 16.5469 22 15.9207C22 14.7107 20.261 13.7652 18 13.5474"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 11C19.3807 11 20.5 9.88071 20.5 8.5C20.5 7.11929 19.3807 6 18 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 17.3339C2.4551 17.0376 2 16.5469 2 15.9207C2 14.7107 3.73896 13.7652 6 13.5474"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 11C4.61929 11 3.5 9.88071 3.5 8.5C3.5 7.11929 4.61929 6 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  paper: (
    <>
      <path
        d="M20 12C20 18 19.1111 21 12 21C4.88889 21 4 18 4 12C4 6 5 3 12 3C19 3 20 6 20 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 4C9 4 9.60457 6.39543 8.5 7.5C7.39543 8.60457 5 8 5 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13L16 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  "info-romb": (
    <>
      <path
        d="M12 16L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3241 17.5753C12.5916 22.3078 11.5858 22.4852 6.34315 17.2425C1.1005 11.9999 1.27208 10.9999 6.34315 5.92883C11.4142 0.857761 12.2279 0.499893 17.6569 5.92883C23.0858 11.3578 22.8995 11.9999 17.3241 17.5753Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7C11.7239 7 11.5 7.22386 11.5 7.5C11.5 7.77614 11.7239 8 12 8Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  "info-circle": (
    <>
      <path
        d="M11 15V11M11 7H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  close: (
    <>
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  "chevron-down": (
    <>
      <path
        d="M11 1L6 6L1 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  calendar: (
    <>
      <path
        d="M16.5 9.8335C16.5 14.9261 14.8333 16.5002 9 16.5002C3.16667 16.5002 1.5 14.9261 1.5 9.41683C1.5 3.90757 3.16667 2.3335 9 2.3335C14.8333 2.3335 16.5 3.90757 16.5 9.8335Z"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 4L11.5 1.5"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 4L6.5 1.5"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="5.58337"
        y1="6.5835"
        x2="12.4167"
        y2="6.5835"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  call: (
    <>
      <path
        d="M11.9322 16.3593C6.49756 14.5282 3.58488 11.2031 1.7299 6.51555C1.26617 5.57805 1.26615 3.23429 4.04861 1.73428C4.74421 1.35928 5.43984 1.35928 6.36732 2.29679C7.29481 3.2343 6.36732 2.29679 7.29481 3.23429C8.36151 4.3125 8.248 5.25 8.0625 5.71875C7.87701 6.28125 7.01656 6.7968 7.29481 7.92181C7.57305 9.04681 8.96428 10.5468 10.0773 10.7343C11.1902 10.9218 11.8175 10.2188 12.2813 9.9375C12.745 9.65625 13.5119 9.5185 14.2509 10.2656C14.625 10.6437 14.7147 10.7343 15.6422 11.6718C16.5697 12.6093 16.6745 13.3702 16.2914 14.0156C15.0938 16.4504 13.0788 16.7457 11.9322 16.3593Z"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  message: (
    <>
      <path
        d="M9 1.33366C14.8333 1.33366 16.5 2.0744 16.5 8.00033C16.5 13.9263 14.8333 14.667 9 14.667C3.16667 14.667 1.5 13.8337 1.5 8.00033C1.5 2.16699 3.16667 1.33366 9 1.33366Z"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6.3335C6.5 8.8335 7.75 9.66683 9 9.66683C10.25 9.66683 11.5 8.8335 14 6.3335"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  "pin-map": (
    <>
      <path
        d="M8 10.833C9.38071 10.833 10.5 9.71372 10.5 8.33301C10.5 6.9523 9.38071 5.83301 8 5.83301C6.61929 5.83301 5.5 6.9523 5.5 8.33301C5.5 9.71372 6.61929 10.833 8 10.833Z"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00004 17.4998C9.66671 17.4998 14.6667 13.9813 14.6667 8.70354C14.6667 3.42576 10.5 1.6665 8.00004 1.6665C5.50004 1.6665 1.33337 3.42576 1.33337 8.70354C1.33337 13.9813 6.33337 17.4998 8.00004 17.4998Z"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  heart: (
    <>
      <path
        transform="translate(3, 3)"
        d="M15.7663 2.2377C15.3753 1.84531 14.9111 1.53404 14.4002 1.32168C13.8893 1.10931 13.3417 1 12.7887 1C12.2357 1 11.6881 1.10931 11.1772 1.32168C10.6663 1.53404 10.2021 1.84531 9.81116 2.2377L8.9998 3.05166L8.18843 2.2377C7.39874 1.44548 6.32768 1.00041 5.21089 1.00041C4.09409 1.00041 3.02303 1.44548 2.23334 2.2377C1.44365 3.02993 1 4.10441 1 5.22479C1 6.34516 1.44365 7.41965 2.23334 8.21187L3.0447 9.02583L8.9998 15L14.9549 9.02583L15.7663 8.21187C16.1574 7.81967 16.4677 7.354 16.6794 6.84146C16.891 6.32893 17 5.77958 17 5.22479C17 4.67 16.891 4.12064 16.6794 3.60811C16.4677 3.09558 16.1574 2.6299 15.7663 2.2377Z"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  plus: (
    <>
      <path
        id="stroke"
        d="M1 7H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="stroke_2"
        d="M7 13L7 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  warning: (
    <>
      <path
        transform="translate(5, 5)"
        d="M7 7.3335L7 4.66683"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        transform="translate(5, 5)"
        d="M12.7802 9.82631C13.1724 10.4929 12.6917 11.3333 11.9183 11.3333L2.08179 11.3333C1.30837 11.3333 0.827719 10.4929 1.21986 9.82631L6.13811 1.46529C6.52476 0.807983 7.47532 0.807982 7.86198 1.46529L12.7802 9.82631Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        transform="translate(5, 5)"
        d="M7.00008 9.66667C7.18418 9.66667 7.33341 9.51743 7.33341 9.33333C7.33341 9.14924 7.18418 9 7.00008 9C6.81599 9 6.66675 9.14924 6.66675 9.33333C6.66675 9.51743 6.81599 9.66667 7.00008 9.66667Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  download: (
    <>
      <path
        transform="translate(7, 3)"
        d="M17 10C17 16 16.1111 19 9 19C1.88889 19 1 16 1 10C1 4 2 1 9 1C16 1 17 4 17 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        transform="translate(7, 3)"
        d="M6 2C6 2 6.60457 4.39543 5.5 5.5C4.39543 6.60457 2 6 2 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        transform="translate(7, 3)"
        d="M9 8L9 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        transform="translate(7, 3)"
        d="M6 12L9 15L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  mail: (
    <>
      <path
        d="M11.6 16.6C10.8 16.9 9.9 17 9 17C4.6 17 1 13.4 1 9C1 4.6 4.6 1 9 1C13.4 1 17 4.6 17 9C17 9.3 17 9.5 17 9.8M13.2 6.3C12.1 9.5 11.4 11.1 12.5 12.2C13.7 13.4 16.2 13.2 16.9 9.9M10.0539 5.33156C11.7871 6.05394 12.4859 8.33383 11.6148 10.4238C10.7437 12.5139 8.63255 13.6225 6.89937 12.9002C5.16619 12.1778 4.46734 9.89789 5.33844 7.80788C6.20954 5.71787 8.32073 4.60918 10.0539 5.33156Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  flask1: (
    <>
      <path
        transform="translate(4, 3)"
        d="M11.18 0.995117H4.81"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        transform="translate(4, 3)"
        d="M1.59998 12.5952H14.39"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        transform="translate(4, 3)"
        d="M6.22998 0.995117V3.70512C6.22998 5.18512 5.47997 6.53511 4.27997 7.39511C2.65997 8.55511 1.59998 10.4551 1.59998 12.6051C1.59998 16.1351 4.45998 19.0051 7.99998 19.0051C11.54 19.0051 14.4 16.1351 14.4 12.6051C14.4 10.4551 13.34 8.55511 11.72 7.39511C10.52 6.53511 9.76998 5.18512 9.76998 3.70512V0.995117"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  injector: (
    <>
      <path
        d="M15.29 8.90002L17.65 5.27002"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.55 6.50979L15.74 4.02979"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.84999 18.8096L6.79999 21.9696"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4 6.36963L19.18 11.4196"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.02 10.1899L13 11.4699"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.17999 13.0396L11.15 14.3195"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8876 7.33057L17.71 10.4622L12.8355 17.9683C11.9695 19.3018 10.1905 19.6727 8.86537 18.8122C7.53189 17.9462 7.16098 16.1672 8.0215 14.8421L12.896 7.33601L12.8876 7.33057Z"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  bottle: (
    <>
      <path
        d="M16.29 8.68506H9.71003C8.12497 8.68506 6.84003 9.97 6.84003 11.5551V18.1351C6.84003 19.7201 8.12497 21.0051 9.71003 21.0051H16.29C17.8751 21.0051 19.16 19.7201 19.16 18.1351V11.5551C19.16 9.97 17.8751 8.68506 16.29 8.68506Z"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.22015 4.99512H16.7701"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.61 14.835H15.38"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9999 12.4551V17.2251"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  waterDrop: (
    <>
      <path
        d="M19.22 14.7749C19.22 18.2049 16.44 20.9949 13 20.9949C9.56003 20.9949 6.78003 18.2149 6.78003 14.7749C6.78003 11.3349 13 5.00488 13 5.00488C13 5.00488 19.22 11.3449 19.22 14.7749Z"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8601 14.9448C15.5501 16.4348 14.2301 17.5648 12.6501 17.5648C12.2001 17.5648 11.7701 17.4748 11.3801 17.3048"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  microscope: (
    <>
      <path
        d="M14.91 11C15.89 11.02 16.78 11.43 17.42 12.07C18.08 12.74 18.49 13.65 18.49 14.66C18.49 16.68 16.85 18.32 14.82 18.32H8.94"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 22H7.5"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.51 6.55012C13.55 6.22012 12.51 6.73012 12.18 7.69012L10.36 12.9801C10.03 13.9401 10.54 14.9801 11.5 15.3101C12.46 15.6401 13.5 15.1301 13.83 14.1701L15.65 8.88012C15.98 7.92012 15.47 6.88012 14.51 6.55012Z"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.51 6.55L15.39 4"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.39 18.3198L16.65 21.9998"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  pipette: (
    <>
      <path
        d="M17.23 4H8.77002"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.89 4V19.11C15.89 20.71 14.6 22 13 22C11.4 22 10.11 20.71 10.11 19.11V4"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.11 15.4702H15.89"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  capsule: (
    <>
      <g clipPath="url(#clip0_353_6330)">
        <path
          d="M20.4224 8.28556C20.6962 9.57128 20.4819 10.9879 19.7081 12.1784L17.3391 15.8094L8.66052 10.1903L11.0296 6.54747C12.5891 4.15461 15.7796 3.47604 18.1843 5.02366C19.3748 5.79747 20.1486 6.99985 20.4224 8.28556Z"
          stroke="#91A3B0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.3392 15.8097L14.9701 19.4525C13.4106 21.8454 10.2201 22.5239 7.82725 20.9644C6.63678 20.1787 5.86297 19.0001 5.58916 17.7025C5.31535 16.4049 5.54154 15.012 6.31535 13.8097L8.67249 10.1787L17.3392 15.7978V15.8097Z"
          stroke="#91A3B0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_353_6330">
          <rect
            width="17.4405"
            height="20"
            fill="white"
            transform="translate(4.27966 3)"
          />
        </clipPath>
      </defs>
    </>
  ),

  healthcare: (
    <>
      <path
        d="M21.995 12.9901V13.0101C21.995 15.0001 20.385 16.6101 18.395 16.6101H7.605C5.615 16.6101 3.995 15.0001 3.995 13.0001C3.995 11.0101 5.605 9.39014 7.605 9.39014H18.405C20.395 9.39014 22.005 11.0001 22.005 12.9901H21.995Z"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5949 7.6V9.39H9.3949V7.6C9.3949 5.61 11.0049 4 12.9949 4C14.9849 4 16.5949 5.61 16.5949 7.6Z"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.39489 16.6001H16.5949V18.3901C16.5949 20.3801 14.9849 22.0001 12.9849 22.0001C10.9949 22.0001 9.38489 20.3901 9.38489 18.4001V16.6001H9.39489Z"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.795 13H14.195"
        stroke="#91A3B0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  arrowDown: (
    <>
      <path
        d="M17 10L12 15L7 10"
        stroke="#515253"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  threeDot: (
    <>
      <circle cx="6" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="18" cy="12" r="2" fill="currentColor" />
    </>
  ),

  search: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-4.35-4.35M16 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"
    />
  ),

  filter: (
    <>
      <path
        d="M14 7L21 7"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7L6 7"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17L3 17"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 17L18 17"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 20C14 20 13 20 13 17C13 14 14 14 15 14C16.1046 14 17 14 17 17C17 20 16.1046 20 15 20Z"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10C8 10 7 10 7 7C7 4 8 4 9 4C10.1046 4 11 4 11 7C11 10 10.1046 10 9 10Z"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  sort: (
    <>
      <path
        d="M3 9.68293L6.5 6M6.5 6L10 9.68293M6.5 6L6.5 18"
        stroke="#515253"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 14.3171L17.5 18M17.5 18L14 14.3171M17.5 18L17.5 6"
        stroke="#515253"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  favourite: (
    <path
      d="M15 9.16666C15 12.9167 15 17.5 14.2308 17.5C13.4615 17.5 10.7692 15 10 15C9.23076 15 6.53846 17.5 5.76923 17.5C5 17.5 5 12.9167 5 9.16666C5 2.5 5.38461 2.5 10 2.5C14.6154 2.5 15 2.5 15 9.16666Z"
      fill="#4167AF"
      stroke="#4167AF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),

  roundPlus: (
    <>
      <circle
        cx="9.99997"
        cy="10"
        r="9"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99997 10L14 10"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99997 14L9.99997 6"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  copy: (
    <>
      <path
        d="M6.66675 3.36468C6.7089 3.10081 6.77182 2.86934 6.85853 2.66665C7.3126 1.60534 8.33341 1.33331 10.6139 1.33331C14.0001 1.33331 14.6667 2.66665 14.6667 5.39605C14.6667 7.33331 14.5181 8.80031 13.3334 9.17374C13.1334 9.2368 12.9038 9.28776 12.6404 9.33331"
        stroke="#91A3B0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00016 14.6666C9.3335 14.6666 10.6668 13.6666 10.6668 9.99998C10.6668 6.33331 9.3335 5.33331 6.00016 5.33331C2.66683 5.33331 1.3335 6.11109 1.3335 9.99998C1.3335 13.8889 2.66683 14.6666 6.00016 14.6666Z"
        stroke="#91A3B0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66667 6C4.66667 6 5.06971 7.59695 4.33333 8.33333C3.59695 9.06971 2 8.66667 2 8.66667"
        stroke="#91A3B0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  shield: (
    <>
      <path
        d="M15.8335 12.9167C14.8617 15.8333 11.2518 17.5 10.0022 17.5C8.75264 17.5 5.1428 15.8333 4.17091 12.9167C3.61555 11.25 3.33784 9.16667 3.33787 7.5C3.33787 6.59554 3.25936 5.534 3.74992 4.62226C3.99505 4.16667 7.92117 2.5 10.0022 2.5C12.0833 2.5 15.8335 4.14121 16.1213 4.62226C16.6666 5.534 16.6666 6.59554 16.6666 7.5C16.6666 9.58333 16.3889 11.25 15.8335 12.9167Z"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.66665L9.64286 11.6666L12.5 8.33331"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),

  time: (
    <>
      <path
        d="M11.6667 2.55581C11.1532 2.51755 10.5985 2.5 10 2.5C4.16667 2.5 2.5 4.16667 2.5 10C2.5 15.8333 4.16667 17.5 10 17.5C15.8333 17.5 17.5 15.8333 17.5 10.4412C17.5 9.67094 17.4749 8.97014 17.42 8.33333"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8334 5.83333C16.7539 5.83333 17.5001 5.08714 17.5001 4.16667C17.5001 3.24619 16.7539 2.5 15.8334 2.5C14.9129 2.5 14.1667 3.24619 14.1667 4.16667C14.1667 5.08714 14.9129 5.83333 15.8334 5.83333Z"
        stroke="#515253"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.83325 12.5C7.33325 10.3571 7.86249 9.16226 8.90143 9.44444C9.66848 9.65278 9.73365 10.6556 10.606 10.8333C11.7748 11.0714 12.2083 9.28571 13.3333 7.5" />
    </>
  ),
};

export default function Icon({
  name,
  className,
  size = 24,
  viewBox = "0 0 24 24",
  color,
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color || "currentColor"}
    >
      {icons[name]}
    </svg>
  );
}
