const headlines = [
    "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
    "Discover the Best Cakes in Mumbai at Cake & Co",
    "Cake & Co: Where Mumbai Celebrates Every Bite",
    "Mumbai's Hidden Gem for Desserts – Cake & Co",
    "Taste the Magic: Cake & Co's Rise to Sweet Fame",
  ];

  const getBusinessData= (req, res) => {
    const { name, location } = req.body;
  
  
    const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
    const reviews = Math.floor(Math.random() * 200) + 50;
    const headline = headlines[Math.floor(Math.random() * headlines.length)];
  
    res.json({rating: parseFloat(rating),reviews,headline: headline.replace("Cake & Co", name).replace("Mumbai", location),});
  };

  const regenerateHeadline= (req, res) => {
    const { name = 'Cake & Co', location = 'Mumbai' } = req.query;
  
    const headline = headlines[Math.floor(Math.random() * headlines.length)];
    const formattedHeadline = headline.replace("Cake & Co", name).replace("Mumbai", location);
  
    res.json({ headline: formattedHeadline });
  };

  export { getBusinessData, regenerateHeadline };