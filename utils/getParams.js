export async function getParams(headers) {
  try {
    const headersList = headers();
    const params = headersList.get("x-params");
    if (!params) {
      throw new Error("x-params header not found");
    }
    const { lang, id } = JSON.parse(params);
    return { lang, id };
  } catch (error) {
    console.error("Error parsing x-params header:", error.message);
    return { lang: null, id: null }; // Return default values or handle the error accordingly
  }
}
