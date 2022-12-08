const DEFAULT_CONTENT_TYPE = 'application/json';
type HttpCallMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export default {

    executeAPICall<T>(url: string, method: HttpCallMethods, contentType = DEFAULT_CONTENT_TYPE): Promise<T> {
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': contentType
            },
        })
            .then((response) => response.json());
    }
}