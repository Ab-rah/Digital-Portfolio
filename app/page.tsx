import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">
          Hi, I'm [Your Name], a web developer passionate about building responsive and dynamic web apps.
        </p>
      </div>
    </>
  );
}
