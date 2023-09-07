import BottomTile from './BottomTile';
import TopTile from './TopTile';
import tiles from './data';

const Tiles = () => {
  return (
    <>
      {tiles.top.map((tile) => (
        <TopTile
          key={tile.heading}
          {...tile}
        />
      ))}

      <div className="grid grid-col-1 lg:full-width-split-screen">
        {tiles.bottom.map((tile) => (
          <BottomTile
            key={tile.heading}
            {...tile}
          />
        ))}
      </div>
    </>
  );
};

export default Tiles;
