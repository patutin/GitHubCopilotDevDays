const PageContent = (props: any) => {
  return (
    <div className="bg-amber-50 h-screen p-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {props.children}
      </div>
    </div>
  );
};

export default PageContent;
