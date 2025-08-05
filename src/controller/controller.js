
import generateResponse from '../services/ai.gemini.js';

const fetchPromtfromUser = async (req, res) => {
   try {
    const { prompt } = req.body;
    if(!prompt || !prompt.trim()){
        return res.status(400).send("Prompt cannot be empty");
    } 
    let response = await generateResponse(prompt);
     return res.status(200).json({ response });
   } catch (error) {
      console.error("Error fetching prompt from user:", error);
      res.status(500).send("Internal Server Error");
   }

}

export default fetchPromtfromUser;