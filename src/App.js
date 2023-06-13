import "./App.scss";
import GalleryCarousel from "./components/gallery/gallery.component";
const images = [
  "https://cdn.esawebb.org/archives/images/screen/carinanebula3.jpg",
  "https://buffer.com/cdn-cgi/image/w=7000,fit=contain,q=90,f=auto/library/content/images/size/w600/2020/09/Frame-47.png",
  "https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
  "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
  "https://media.istockphoto.com/id/655648640/photo/happy-couple-on-the-beach-full-of-people.jpg?s=612x612&w=0&k=20&c=O7uvQpg0EtcHmXfhErJR5CO8GhHvK5BikxufFt_3XSw=",
];
function App() {
  return (
    <div className="App">
      <GalleryCarousel images={images} />
    </div>
  );
}

export default App;
