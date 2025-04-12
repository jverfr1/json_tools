After installing, made the following changes in the library to addapt to ServiceNow environment

 - node_modules > json_schema_library > dist > module > lib > validation >
   - File format.js
   -   search for the constat declaration "const matchTime" and adjust the Regex for the following one which is compatible with javascript. const matchTime = /^(?:([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d|60))(?:\.\d+)?(?:(z|[+-]([0-1]\d|2[0-3])(?::([0-5]\d))?))$/i;
   - File keyword.js
       in the pattern function, search for "new RexExp(schema.pattern,"u") >> Remove the second paramter (which makes it unicode valid) since it is not supported in ServiceNow now platform
     
