// algoliaConfig.js
import algoliasearch from "algoliasearch/lite";
import {env} from "process";

// Replace with your Algolia App ID and Search-Only API Key
const client = algoliasearch(env.ALGOLIA_APP_ID, env.ALGOLIA_API_KEY);
const index = client.initIndex("products");

console.log("using algolia...");
export { index };
