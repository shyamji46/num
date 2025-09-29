export default async function handler(req, res) {
  const number = req.query.number;
  if (!number) return res.status(400).json({ status: "error", message: "Number required" });

  const target = `https://private-osint.drsudo.workers.dev/?key=luffy&number=${number}`;

  try {
    const response = await fetch(target, { headers: { "User-Agent": "Mozilla/5.0" } });
    const data = await response.text();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ status: "error", message: err.toString() });
  }
}
