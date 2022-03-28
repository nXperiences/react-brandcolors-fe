import ContentLoader from "react-content-loader";

function BrandItemLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="-5" rx="3" ry="3" width="300" height="15" />
      <rect x="0" y="24" rx="3" ry="3" width="40" height="30" />
      <rect x="55" y="24" rx="3" ry="3" width="40" height="30" />
      <rect x="105" y="24" rx="3" ry="3" width="40" height="30" />
      <rect x="155" y="24" rx="3" ry="3" width="40" height="30" />
      <rect x="205" y="24" rx="3" ry="3" width="40" height="30" />
      <rect x="255" y="24" rx="3" ry="3" width="40" height="30" />
    </ContentLoader>
  );
}
export default BrandItemLoader;
