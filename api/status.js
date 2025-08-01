export default function handler(req, res) {
  const status = process.env.BOT_STATUS || 'online';
  res.status(200).json({ status });
}
