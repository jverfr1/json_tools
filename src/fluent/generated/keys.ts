import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    src_server_json_tools_js: {
                        table: 'sys_module'
                        id: 'a940aa3c4d73493cb58b6b45cbd3fb34'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'd86314a2a10d4273911a83ae0ed4d0fe'
                    }
                }
            }
        }
    }
}
