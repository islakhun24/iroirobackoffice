/* eslint-disable camelcase */
/* eslint-disable import/no-anonymous-default-export */
import { LISENCE_PERMISSION } from '../constants/urls';
import { handleresponse } from '../helpers/handle-response';
import { posts } from '../helpers/api';

const report_list = (message) => {
    const body = { message };
    return posts(`${LISENCE_PERMISSION}`, body).then((response) => handleresponse(response));
};

export default {
    report_list
};
