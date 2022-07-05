import { createClient } from "contentful";

const useContentful = () => {
    // how to access secret information taht is stored locally in my computer and I specify that I don't want to share it outside of it
    // console.log(process)
    // console.log(process.env)
    // console.log(process.env.REACT_APP_REACT_APP_CONTENFUL)

    // In this variable we can find a contenful library method called createClient used to give us authentication to acces our api 
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
                    const name = item.fields.name
                    const description = item.fields.description.content[0].content[0].value
                    const exit = item.fields.exit

                    return {
                        // ...item.fields,
                        name,
                        description,
                        exit
                    }
                })
                return sanitizedEntries
                // return entries
            } catch (error) {
                console.log('Contentful Error :' + error)
            }

        }
    return {getJumps}
};

export default useContentful