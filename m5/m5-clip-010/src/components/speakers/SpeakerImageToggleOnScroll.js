export default function SpeakerImageToggleOnScroll({
  imageUrl,
  alt,
  thumbNail,
}) {
  const inView = false;

  const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)";

  return (
    <img
      src={imageUrl}
      alt={alt}
      width={thumbNail ? 50 : 200}
      height={thumbNail ? 50 : 200}
      className={
        thumbNail
          ? "img-fluid rounded-start "
          : "img-fluid rounded-start speaker-image"
      }
      style={{ filter: `${grayScale}` }}
    />
  );
}
