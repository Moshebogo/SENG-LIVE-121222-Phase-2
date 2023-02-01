const ProjectForm = () => {

function handleSubmit (e) {
  e.preventDefault()
    const newName = e.target.name.value
    const newAbout = e.target.about.value
    const newPhase = e.target.phase.value
    const newLink = e.target.link.value
    const newImage = e.target.image.value

    const form = document.querySelector('#form').reset()
        

    const newFormData = {
      name: newName,
      about: newAbout,
      phase: newPhase,
      link: newLink,
      image: newImage
    }

    fetch("http://localhost:4000/projects", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newFormData)

    })
}

  return (
    <section>
      <form id="form" onSubmit={handleSubmit}className="form">
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="about">About</label>
        <textarea id="about" name="about" />
        <label>Phase</label>
        <input id="phase"></input>
        <label>Link</label>
        <input id="link"></input>
        <label>Image</label>
        <input id="image"></input>
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
