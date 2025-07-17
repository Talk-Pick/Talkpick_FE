const api = {
  getDailyTopic: async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/daily-topic`);
    return response.json();
  },
};

export default api;