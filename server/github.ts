export const getrepos = async () => {
    const GITHUB_API_URL = 'https://api.github.com/users/YGNTECHSTARTUP/repos';
  
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, 
      },
    });
  
    if (!response.ok) {
      console.error('Failed to fetch repositories');
      return {
        props: {
          projects: [],
        },
      };
    }
  
    const repositories = await response.json();
    const projectData = repositories.map((repo: { name: string; description: string; html_url:string,homepage:string,language:string,topics:string[]}) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      home:repo.homepage,
      language:repo.language,
      topics:repo.topics,
    }));
    console.log(projectData)
    return {
      props: {
        projects: projectData.slice(0, 6),
      },
    };
  };