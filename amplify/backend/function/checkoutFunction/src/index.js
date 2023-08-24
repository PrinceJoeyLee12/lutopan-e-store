/* Amplify Params - DO NOT EDIT
	API_LUTOPANESTORE_CARTLINEITEMTABLE_ARN
	API_LUTOPANESTORE_CARTLINEITEMTABLE_NAME
	API_LUTOPANESTORE_CARTTABLE_ARN
	API_LUTOPANESTORE_CARTTABLE_NAME
	API_LUTOPANESTORE_CATEGORYTABLE_ARN
	API_LUTOPANESTORE_CATEGORYTABLE_NAME
	API_LUTOPANESTORE_COMPANYTABLE_ARN
	API_LUTOPANESTORE_COMPANYTABLE_NAME
	API_LUTOPANESTORE_GRAPHQLAPIENDPOINTOUTPUT
	API_LUTOPANESTORE_GRAPHQLAPIIDOUTPUT
	API_LUTOPANESTORE_GRAPHQLAPIKEYOUTPUT
	API_LUTOPANESTORE_ORDERTABLE_ARN
	API_LUTOPANESTORE_ORDERTABLE_NAME
	API_LUTOPANESTORE_PRODUCTTABLE_ARN
	API_LUTOPANESTORE_PRODUCTTABLE_NAME
	API_LUTOPANESTORE_STORETABLE_ARN
	API_LUTOPANESTORE_STORETABLE_NAME
	API_LUTOPANESTORE_USERTABLE_ARN
	API_LUTOPANESTORE_USERTABLE_NAME
	API_LUTOPANESTORE_VARIANTTABLE_ARN
	API_LUTOPANESTORE_VARIANTTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};