import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="11" y="13" rx="2" ry="2" width="232" height="264" />
    <rect x="10" y="304" rx="0" ry="0" width="229" height="23" />
    <rect x="12" y="346" rx="0" ry="0" width="146" height="40" />
    <rect x="0" y="412" rx="0" ry="0" width="206" height="141" />
  </ContentLoader>
);

export default Loader;
