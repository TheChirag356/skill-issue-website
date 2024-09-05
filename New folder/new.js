const fetchData = async () => {
  const url = "https://ctftime.org/api/v1/teams/271383/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data["rating"]["2024"]["country_place"]);
    console.log(data["rating"]["2024"]["rating_place"]);
  } catch (error) {
    console.error(error.message);
  }
};

fetchData();
