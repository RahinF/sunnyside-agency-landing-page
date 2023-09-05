const Picture = ({ src, alt }: Picture) => {
  return (
    <picture data-testid="picture">
      <source
        srcSet={`desktop/${src}`}
        media="(min-width: 768px)"
        width={720}
        height={894}
      />
      <img
        src={`mobile/${src}`}
        alt={alt}
        width={376}
        height={376}
      />
    </picture>
  );
};

export default Picture;
