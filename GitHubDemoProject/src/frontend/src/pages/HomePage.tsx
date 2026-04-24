import Banner from "../components/Banner";
import PlaneList from "../components/PlaneList";
import PageContent from "../components/PageContent";

function HomePage() {
  const planes = [
    { id: 1, name: "Wright Flyer I", year: 1903 },
    { id: 2, name: "Wright Flyer II", year: 1904 },
    { id: 3, name: "Wright Flyer III", year: 1905 },
    { id: 4, name: "Wright Model A", year: 1907 },
    { id: 5, name: "Military Flyer", year: 1909 },
    { id: 6, name: "Transitional Model AB", year: 1909 },
    { id: 7, name: "Wright Model B", year: 1910 },
    { id: 8, name: "Wright Model R", year: 1910 },
    { id: 9, name: "Wright Model EX", year: 1911 },
    { id: 10, name: "Wright Model C", year: 1912 },
    { id: 11, name: "Wright Model D", year: 1912 },
    { id: 12, name: "Wright Model CH", year: 1913 },
    { id: 13, name: "Wright Model E", year: 1913 },
    { id: 14, name: "Wright Model F", year: 1913 },
    { id: 15, name: "Wright Model G", year: 1913 },
    { id: 16, name: "Wright Model H", year: 1914 },
    { id: 17, name: "Wright Model HS", year: 1914 },
    { id: 18, name: "Wright Model K", year: 1915 },
    { id: 19, name: "Wright Model L", year: 1916 },
    { id: 20, name: "Liberty Eagle", year: 1918 },
    { id: 21, name: "OW.1 Aerial Coupe", year: 1919 },
  ];

  return (
    <div className="bg-u-black min-h-screen">
      <Banner />
      <PageContent>
        <PlaneList planes={planes} />
      </PageContent>
    </div>
  );
}

export default HomePage;
