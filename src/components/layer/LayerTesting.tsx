export function LayerTesting() {
  return (
      <>

        <div className="flex items-center justify-center w-full">
          <div
              className="relative bg-red-50 w-[390px] h-[220px]">
            <div
                className="absolute top-0 left-0 w-1/4 h-full bg-blue-50 hover:bg-blue-200">
            </div>
            <div
                className="absolute top-0 right-0 w-1/4 h-full bg-green-50 hover:bg-green-200">
            </div>
            <div
                className="absolute top-0 left-1/4 w-1/2 h-full bg-yellow-50 hover:bg-yellow-200">
            </div>
          </div>
        </div>

        {/* some space */}
        <div className="mb-10"/>
      </>
  );
}
