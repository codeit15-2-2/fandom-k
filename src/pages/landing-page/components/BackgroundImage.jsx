const Background = ({ imagePath }) => (
  <div
    className={`absolute inset-0 bg-[url('${imagePath}')] bg-cover bg-fixed bg-center`}
  />
);

export default Background;
