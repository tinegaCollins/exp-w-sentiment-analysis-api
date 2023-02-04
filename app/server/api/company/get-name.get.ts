import company from "~~/server/models/company";


export default defineEventHandler(async (event) => {
    const query = getQuery(event).query;
    const handle = await company.findById(query);
    console.log(handle);
    return {
        status: 200,
        body: company,
    };
});
