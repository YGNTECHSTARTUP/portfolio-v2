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
    repositories.sort((a: { created_at: string }, b: { created_at: string }) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

   
    const projectData = repositories.map((repo: { name: string; description: string; html_url:string,homepage:string,language:string,topics:string[]}) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      home:repo.homepage,
      language:repo.language,
      topics:repo.topics,
    }));
    return {
      props: {
        projects: projectData.slice(0, 6),
      },
    };
  };