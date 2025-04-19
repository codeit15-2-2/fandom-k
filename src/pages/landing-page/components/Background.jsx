const Background = ({ assetPath }) => (
  <div
    className={`absolute inset-0 bg-[url('${assetPath}')] bg-cover bg-fixed bg-center`}
  />
);

export default Background;
