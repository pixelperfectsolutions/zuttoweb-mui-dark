const fs = require('fs').promises;
const path = require('path');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const filePath = path.join(process.cwd(), 'public', 'waitlist-emails.txt');
    
    // Ensure the public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    try {
      await fs.access(publicDir);
    } catch (error) {
      await fs.mkdir(publicDir, { recursive: true });
    }

    // Append email to file
    await fs.appendFile(filePath, email, 'utf8');
    
    return res.status(200).json({ message: 'Email saved successfully' });
  } catch (error) {
    console.error('Error saving email:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}