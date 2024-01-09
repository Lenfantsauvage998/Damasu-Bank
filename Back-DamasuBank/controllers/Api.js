import OpenAI from "openai";

/*--------------------------------------------------------------*/

const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

const chatGpt = async (req,res) => {

    try {
        const question = req.body
    const completion = await openai.chat.completions.create({
        messages: question.message,
        model: "gpt-3.5-turbo",
      });
    
      const result = completion.choices[0].message.content

      res.status(200).send([result])
        
    } catch (error) {
        console.error(error)
        res.status(400).send(error)
    }

}



// const response = await openai.createImage({
//     model: "dall-e-3",
//     prompt: "a white siamese cat",
//     n: 1,
//     size: "1024x1024",
//   });
//   image_url = response.data.data[0].url;






  const dalle3 = async (req,res) => {

    try {
        const question = req.body
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: String(question.imgToPrint) ,
            n: 1,
            size: "1024x1024",
          });
        let image_url = response.data;
    
      const result = image_url[0].url

      res.status(200).send([result])
        
    } catch (error) {
        console.error(error)
        res.status(400).send(error)
    }

}

/*--------------------------------------------------------------*/

export { chatGpt , dalle3 }