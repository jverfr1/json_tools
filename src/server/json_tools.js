//https://github.com/sagold/json-schema-library
import { Draft04, Draft06, Draft07, Draft2019, Draft, JsonError } from "json-schema-library";
//https://github.com/aspecto-io/genson-js Used to create schemas from jsons
import { createSchema } from 'genson-js';
export const json_schema_library = { Draft04, Draft06, Draft07, Draft2019, Draft, JsonError };

export { createSchema } 