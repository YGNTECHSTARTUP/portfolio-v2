import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import * as dotenv from 'dotenv';
import { getrepos } from "@/server/github";
import { Container } from "@/components/ui/container";
import { Project } from "./constant";
dotenv.config({ path: '.env.local' });



// Define the type of project data for TypeScript


// Server-side data fetching



const Home = async () => {
  const projects: Project[] = await getrepos().then((data) => data.props.projects);
  return (
    <div className="min-h-screen bg-background">
    
    <main className="md:pl-16">
       
      <Hero />
      
      <Container className="py-20 space-y-20">
        {/* <section>
          <h2 className="text-3xl font-bold mb-8">Recent Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </section> */}

        <section>
          <h2 className="text-3xl font-bold mb-8">Latest Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              projects.length > 0 && projects.map((project, index) => (
                <ProjectCard topics={project.topics} key={index} description={project.description} url={project.url} name={project.name} home={project.home} language={project.language} license={project.license} />
              ))
            }
          </div>
        </section>
      </Container>
    </main>
  </div>
  );
};

export default Home;
