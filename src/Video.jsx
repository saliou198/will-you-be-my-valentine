function Video() {
  return (
    <div className="hero">
      <div className="halo" />
      <img
        src={`${import.meta.env.BASE_URL}giving-rose.gif`}
        alt="Giving a rose"
        className="hero-image"
      />
    </div>
  );
}

export default Video;
