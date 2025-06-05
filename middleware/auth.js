// middleware/auth.js
module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === process.env.API_KEY) {
    return next();
  }

  console.warn(`Unauthorized access attempt: ${req.method} ${req.originalUrl}`);
  res.status(401).json({ error: 'Unauthorized: API key missing or invalid' });
};
