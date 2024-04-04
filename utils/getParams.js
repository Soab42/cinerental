export async function getParams(headers) {
  try {
    const headersList = headers();
    const params = headersList.get("x-params");
    const { lang, id } = JSON.parse(params);
    if (!params) {
      throw new Error("x-params header not found");
    }
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ lang, id });
      }, 1000)
    );
  } catch (error) {
    console.error("Error parsing x-params header:", error.message);
    return { lang: null, id: null }; // Return default values or handle the error accordingly
  }
}
