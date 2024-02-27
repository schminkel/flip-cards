export function LayerTesting() {
  return (
      <>
        <div className="flex items-center justify-center w-full">

          {/* CARD (relative container) */}
          <div
              className="relative border w-[390px] h-[220px] rounded-lg">

            {/* LEFT */}
            <div
                className="group absolute top-0 left-0 w-1/4 h-full hover:bg-blue-50 rounded-lg cursor-pointer">
              <div
                  className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                </svg>
              </div>
            </div>

            {/* MIDDLE */}
            <div
                className="group absolute top-0 left-1/4 w-1/2 h-full hover:bg-yellow-50 rounded-lg cursor-pointer">
              <div
                  className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                </svg>
              </div>
            </div>

            {/* RIGHT */}
            <div
                className="group absolute top-0 right-0 w-1/4 h-full hover:bg-green-50 rounded-lg cursor-pointer">
              <div
                  className="hidden group-hover:flex group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* some space */}
        <div className="mb-10"/>
      </>
  );
}


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
     stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
</svg>
