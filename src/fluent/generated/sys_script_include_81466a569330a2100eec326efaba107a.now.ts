import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '81466a569330a2100eec326efaba107a',
    table: 'sys_script_include',
    data: {
        access: 'public',
        active: true,
        api_name: 'x_92724_json_tools.JSONTools',
        client_callable: false,
        mobile_callable: false,
        name: 'JSONTools',
        sandbox_callable: false,
        script: "const jsonTools = require('x_92724_json_tools/x-92724-json-tools/1.0.0/src/server/json_tools.js');\nclass JSONTools {\n\tstatic json_schema_library = jsonTools.json_schema_library;\n\tstatic createSchema = jsonTools.createSchema;\n}",
        sys_name: 'JSONTools',
    },
})
