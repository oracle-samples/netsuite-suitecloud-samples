define([], function() {
    /**
     * @namespace http
     */
    var http = function() {};

    /**
     * Send a HTTP GET request and return a reponse from a server.
     *
     * @governance 10 units
     * @restriction Server SuiteScript only
     *
     * @param {Object} options
     * @param {string} options.url the HTTP URL being requested
     * @param {Object} options.headers (optional) The HTTP headers
     * @return {ClientResponse}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
     * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
     *
     * @since 2015.2
     */
    http.prototype.get = function(options) {};

    /**
     * @exports N/http
     * @namespace http
     */
    return new http();
});