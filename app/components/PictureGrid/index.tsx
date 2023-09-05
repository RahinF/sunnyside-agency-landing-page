import Picture from './Picture';
import pictures from './data';

const PictureGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {pictures.map((picture, index) => (
        <Picture
          key={index}
          {...picture}
        />
      ))}
    </div>
  );
};

export default PictureGrid;
