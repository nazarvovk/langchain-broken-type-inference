import { tool } from '@langchain/core/tools';
import * as z from 'zod';

export const searchSchema = z.object({
  id: z.string(),
  queries: z.array(z.object({
    // omitted for brevity
  })),
})


const main = async () => {
  const schema = z.object({
    queries: z.array(searchSchema).describe('An array of search requests'),
  });

  return tool(
    async (props) => {
      props.queries satisfies object[]
      
      // this.logger.debug(`Tool executed (web_search): ${JSON.stringify(props)}`)
      // const result = await this.searchService.bulkSearch(props.queries);
      // return result.data.map((result: any) => result.organic);
    },
    {
      name: 'web_search',
      description: 'Search the web for multiple queries',
      schema,
    }
  );
}

main()