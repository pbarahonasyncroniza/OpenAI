
import { Configuration, OpenAIApi } from 'openai';


const configuration = new Configuration ({
    organization:"org-r7WaJ1yECl7TvPlL2j2Evi8Z",
    apiKey:"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"
})

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    message : [
        {role: "user", content:"Hello World"},
    ]

})

console.log(completion.date.choices[0].message);
