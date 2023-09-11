function showProjectDetails(projectNumber) {
    const projectImage = document.getElementById('project-image');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectDetails = document.getElementById('project-details');
    
    if (projectNumber === 1) {
        projectImage.src = 'project1.jpg';
        projectTitle.textContent = 'Jujutsu Kaisen';
        projectDescription.textContent = 'Anime Discription.';
    } else if (projectNumber === 2) {
        projectImage.src = 'project2.jpg';
        projectTitle.textContent = 'Kimetsu no Yaiba';
        projectDescription.textContent = 'Anime discription.';
    }
    
    projectDetails.classList.remove('hidden');
}

function closeProjectDetails() {
    const projectDetails = document.getElementById('project-details');
    projectDetails.classList.add('hidden');
}
