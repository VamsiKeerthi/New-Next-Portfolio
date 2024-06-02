import Contact from "./components/contact";
import ProfileInfo from "./components/profile";
import Skills from "./components/skills";
import Projects from "./components/myworks";

export const revalidate = 30;

export default async function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <ProfileInfo />
      <Skills />
      <Projects />
      <section
        id="contact"
        className=" grid place-items-center text-sm lg:text-base p-5 lg:p-0"
      >
        <Contact />
      </section>
    </div>
  );
}
