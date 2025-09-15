import { ChatOpenAI } from '@langchain/openai';
import * as z from 'zod';

export const ResponseSchema = z.object({
  id: z.string(),
  data: z.object({
    // omitted for brevity
  }),
})


const main = async () => {
  const model = new ChatOpenAI({
    apiKey: 'asdfasdfasdf',
    model: 'gpt-5-nano',
  }).withStructuredOutput(ResponseSchema)

  
  const result = await model.invoke(
    `Transform a given sales report sheet into structured JSON.
    Format dates as ISO strings, date only.
    Omit zero-value entries.
    Disregard data on total stock and leftovers, we are only interested in sales numbers in a period.~
    `,
    {},
  )
  
  result.data satisfies object
}

main()