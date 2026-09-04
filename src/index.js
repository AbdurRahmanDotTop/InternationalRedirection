export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Create the destination URL
    const destinationURL = new URL("https://web.techilyflyinternational.workers.dev/");
    
    // Preserve the pathname and search params from the original request
    destinationURL.pathname = url.pathname;
    destinationURL.search = url.search;

    // Return a 301 Permanent Redirect to the new URL
    return Response.redirect(destinationURL.toString(), 301);
  },
};
