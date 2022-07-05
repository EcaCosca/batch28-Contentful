import { createClient } from "contentful";

const useContentful = () => {
    // console.log(process)
    // console.log(process.env)
    // console.log(process.env.REACT_APP_CONTENFUL)

        const client = createClient({
            space:'orl8clq37c3c',
            accessToken: process.env.REACT_APP_CONTENFUL,
            host: 'preview.contentful.com'
        });

        const getJumps = async () => {
            try {
                const entries = await client.getEntries({
                    content_type: 'jump',
                    select: 'fields'
                })

                const sanitizedEntries = entries.items.map((item) => {
                    const exit = item.fields.exit

                    return {
                        ...item.fields,
                        exit
                    }
                })
                return sanitizedEntries
                // return entries
            } catch (error) {
                console.log('Error:' + error)
            }

        }
    return {getJumps}
};

export default useContentful