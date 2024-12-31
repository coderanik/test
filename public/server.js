async function fetchRepositories() {
    try {
      const response = await fetch('/api/repositories'); // Calls the serverless function
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const repos = await response.json();
      const repoContainer = document.getElementById('repositories');
      repoContainer.innerHTML = ''; // Clear the loading message
  
      repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.className = 'repo';
        repoElement.innerHTML = `
          <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
          <p>Created At: ${new Date(repo.created_at).toLocaleString()}</p>
        `;
        repoContainer.appendChild(repoElement);
      });
    } catch (error) {
      const repoContainer = document.getElementById('repositories');
      repoContainer.innerHTML = `<p>Error fetching repositories: ${error.message}</p>`;
      console.error("Failed to fetch repositories:", error.message);
    }
  }
  
  fetchRepositories();
  