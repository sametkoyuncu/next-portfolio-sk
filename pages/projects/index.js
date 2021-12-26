import Layout from '../../components/Layout'
import ProjectCard from '../../components/ProjectCard'
import { getAllProjects } from '../../functions/getAllProjects'

function ProjectsPage({ projects }) {
  return (
    <Layout
      title={'sk. | Projelerim'}
      description={'Projelerim | Samet Koyuncu'}
    >
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-6">
        {/* Projects */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 place-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const projects = await getAllProjects()
  return {
    props: { projects },
  }
}

export default ProjectsPage
