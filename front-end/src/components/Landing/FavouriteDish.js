import React from "react";

function FavouriteDish() {
  return (
    <section className="parallax">
      <div className="parallax-overlay">
        <div className="container mx-auto">
          <div className="text-3xl text-center pt-20 pb-10 text-white">
            Išsirink mėgstamiausią patiekalą
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-white text-xl text-center">
              Prisijunge galite išsaugoti Jums labiausiai patinkantį patiekalą
              vėlesniai peržiūrai. Taip sutaupysite laiko neieškant savo
              mėgstamiausių patiekalų.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FavouriteDish;
