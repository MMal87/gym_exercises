export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY  // Changed from REACT_APP
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY  // Changed from REACT_APP
  }
};

export const calculations = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'gym-calculations.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY  // Changed from REACT_APP
  }
};

export const fetchData = async (url, options) => {
  try {
      const response = await fetch(url, options);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return empty array as fallback
  }
};

