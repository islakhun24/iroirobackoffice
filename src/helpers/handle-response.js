/* eslint-disable import/prefer-default-export */
export const handleresponse = (response) => {
    if (response.status === 200) {
        return {
            code: 200,
            data: response.data
        };
    }
    return {
        code: response.status,
        data: null
    };
};
