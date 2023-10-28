const Loading = ({ children }) => (
  <span className="block animate-pulse text-xl text-center">
    <div className="loader">Loading...</div>
    {children}
  </span>
);

export default Loading;
